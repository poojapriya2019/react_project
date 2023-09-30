// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Define the endpoint you want to proxy (you can choose any name)
    createProxyMiddleware({
      target: 'http://suggestqueries.google.com', // Specify the target API URL
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove the '/api' prefix from the URL
      },
    })
  );
};
