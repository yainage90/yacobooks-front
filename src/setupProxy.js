const { createProxyMiddleware } = require("http-proxy-middleware");

require("dotenv").config();

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
    })
  );
};
