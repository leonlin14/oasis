const config = require('config');
const { RouterService } = require('engined-http');

module.exports = class extends RouterService() {

	async setupRoutes() {
		const router = this.createRouter()

		router.get('/*', async (ctx, next) => {
			var regEx = /^\/api\/+[a-zA-Z0-9]/;

			if (!regEx.test(ctx.url))
				await ctx.render('index',{
					titleName: config.get('service').name || 'No Title'
				})
		})

		return router;
	}
};
