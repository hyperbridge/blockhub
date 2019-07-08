const { switchWindow, toggleRecording, loginIntra } = require('../../helpers')

function mainFlow(browser) {
  browser
    // Go to local intra
    .url('http://localhost:7000/test/ab')

    .waitForElementPresent('a[href="/reservation/step1"]')
    .triggerClick('a[href="/reservation/step1"]')

    .waitForElementPresent('a[href="/reservation/step2"]')
    .triggerClick('a[href="/reservation/step2"]')

    .waitForElementPresent('a[href="/reservation/step3"]')
    .triggerClick('a[href="/reservation/step3"]')

    .waitForElementPresent('a[href="/searchresult"]')
    .triggerClick('a[href="/searchresult"]')
}


module.exports = {
  'Main Scenario': function (browser) {
    switchWindow(browser, 1)
    mainFlow(browser)
  },
}

module.exports = {}
