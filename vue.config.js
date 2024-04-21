// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
    proxy: {
      "^/api" :{
        target: 'https://www.boredapi.com',
        // changeOrigin: true,
        // pathRewrite: {'^/api' : ''}
        // target: 'http://localhost:8000'
      },
    }
  }
}
