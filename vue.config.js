module.exports = {
    //配置路径别名
    publicPath: "/",
    configureWebpack: {
      resolve: {
        alias: {
          assets: "@/assets",
          components: "@/components",
          network: "@network",
          utils: "@/utils",
          views: "@/views",
        },
      },
    },
  }