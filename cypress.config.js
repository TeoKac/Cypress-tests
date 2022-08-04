const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    email: 'teo.kac@dlabs.si',
    password: 'Teo.kac1950',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
