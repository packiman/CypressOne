const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // retries: {
    //   runMode: 0,
    //   openMode: 3,
    // }
  },
});