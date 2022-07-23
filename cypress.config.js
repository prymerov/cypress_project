const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
chromeWebSecurity: true,
viewportWidth: 1600,
viewportHeight: 900,
env: 
{
url: "https://www.youtube.com",
urlSariful: "https://codenboxautomationlab.com/practice/"
}
    }
})
