const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    env: {
      EMAIL: 'carlos.alford@hotmail.com',
      PASSWORD: 'tt3dD£hh98',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
