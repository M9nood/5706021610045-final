// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'app should work': function (browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 10000)
      .click('#app .button is-info is-small')
      .setValue('#app .input', '3')
      .click('#app .button is-info is-small')
      
  }
}
