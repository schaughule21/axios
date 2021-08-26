module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/production/'
      : '/',
      devServer: {
        proxy: {
          '/api': {
            target: 'https://api.chucknorris.io/jokes',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
              } 
          }
        }
      },
      productionSourceMap:false
  }