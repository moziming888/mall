module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        import: "~assets/stylus/variable.styl"
      }
    }
  }
};
