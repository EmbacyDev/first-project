const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/variables.scss";
        @import "@/assets/styles/mixins.scss";
        @import "@/assets/styles/styles.scss";
        `
      }
    }
  }
});
