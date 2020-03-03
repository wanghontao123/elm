const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use('/api', createProxyMiddleware({
        target: 'https://elm.cangdu.org',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }))
}