const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/index.scss";
        `
      }
    }
  }
});
