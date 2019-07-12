function switchWindow(browser, index) {
    browser
      // Switch to the devtools tray window
      .window_handles(function (result) {
        var handle = result.value[index]
        browser.switchWindow(handle) //'BlockHub DevTools')
      })
  }
  
  function toggleHeaderOverride(browser) {
    browser
      .useCss()
      .waitForElementPresent('#override-headers-value')
  
      .click('#toggle-advanced-button')
      .triggerClick('#override-headers-value')
      .click('#advanced-button')
  }
  
  function toggleRecording(browser) {
    browser
      .useCss()
      .waitForElementPresent('#api-recording')
  
      // Enable recording
      .click('#api-recording')
  }
  
  function togglePlayback(browser) {
    browser
      .useCss()
      .waitForElementPresent('#api-recording')
  
      // Enable recording
      .click('#api-playback')
  }
  
  function setMobile(browser) {
    browser
      .useCss()
      .waitForElementPresent('#resolution-value')
  
      .setValue('#resolution-value', 'mobile')
      .click('#resolution-button')
  }
  
  function setDesktop(browser) {
    browser
      .useCss()
      .waitForElementPresent('#resolution-value')
  
      .setValue('#resolution-value', 'desktop')
      .click('#resolution-button')
  }
  
  function loginIntra(browser) {
    browser
      .url('https://backend.com')
      .elements('[name="login_btn"]', results => { // This isnt always working
        if (results.value) {
          browser.click('[name="login_btn"]')
        }
      })
  
      .useXpath()
      .waitForElementPresent('//a[contains(text(),"Logout")]')
  
      // Go to staging intra to auth
      .click('//a[@href="/index.phtml?module=Menu&action=RedirectAuth&t=2092"]')
  
      // Navigate around to record API calls
      .useCss()
      .waitForElementPresent('a[href="/premium-golf/booking/search"]')
  }
  
  module.exports = {
    loginIntra: loginIntra,
    setDesktop: setDesktop,
    setMobile: setMobile,
    toggleRecording: toggleRecording,
    togglePlayback: togglePlayback,
    toggleHeaderOverride: toggleHeaderOverride,
    switchWindow: switchWindow
  }
  