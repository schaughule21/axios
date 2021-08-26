module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/production/" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "https://api.chucknorris.io/jokes",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
      "/cat": {
        target: "http://shibe.online/api/shibes",
        // ws: true,
        // changeOrigin: true,
        pathRewrite: {
          "^/cat": "",
        },
      },
    },
  },
  productionSourceMap: false,
};
