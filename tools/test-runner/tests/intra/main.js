const { switchWindow, togglePlayback, toggleRecording, loginIntra, setDesktop, setMobile } = require('../../helpers')

function teeTimeSearchFlow(browser) {
  browser
    // Go to local intra
    .url('http://localhost:8081/')
    .useXpath()
    .triggerClick('a[href="/premium-golf/tee_time/search"]')
    //.waitForElementPresent('//[@id="autosuggest__input"]')
    .pause(2 * 1000)
    .useCss()
    .setValue("[data-vv-name='golfCourse'] input", 'ea')
    //.execute('document.querySelector("[data-vv-name=\'golfCourse\'] input").value="ea"')
    //.setValue('//[@id="autosuggest__input"]', 'ea')
    .waitForElementPresent('#autosuggest__results_item-0')
    .click('#autosuggest__results_item-0')
    .useXpath()
    .waitForElementPresent('//*[contains(text(),"検索")]')
    .click('//*[contains(text(),"検索")]')
  //.waitForElementPresent('//*[contains(text(),"条件に一致する空き枠はありませんでした。")]')
}

function teeTimeCreateFlow(browser) {
  browser
    // Go to local intra
    .url('http://localhost:8081/')
    .useXpath()
    .triggerClick('a[href="/premium-golf/tee_time/create"]')
    .pause(2 * 1000)
    .useCss()
    .setValue("[data-vv-name='golfCourse'] input", 'ea')
    .waitForElementPresent('#autosuggest__results_item-0')
    .click('#autosuggest__results_item-0')
    .useXpath()
    .waitForElementPresent('//*[contains(text(),"枠追加")]')

    .useCss()
    .setValue("[data-vv-name='playDateRange'] input", '2019-03-22')
    .setValue("[data-vv-name='teeTimeInterval']", '5分間隔')
    .setValue("[data-vv-name='firstStartTime']", '09時00分')
    .setValue("[data-vv-name='lastStartTime']", '10時00分')
    .setValue("[data-vv-name='course']", 'エーデルワイスコースOUT')

    //.pause(9999 * 1000)
    .useXpath()
    //.click('//*[contains(text(),"枠追加")]')
}

function golfCourseSearchFlow(browser) {
  browser
    // Go to local intra
    .url('http://localhost:8081/')
    .useCss()
    .waitForElementPresent('a[href="/premium-golf/golf_course/search"]')
    .triggerClick('a[href="/premium-golf/golf_course/search"]')
    .pause(2 * 1000)
    .setValue("#courseName input", 'ea')
    .click('.golf-course-information [type="submit"]')
    .pause(1 * 1000)
    .click('.golf-course-information a')
    .useXpath()
    .waitForElementPresent('//button[contains(text(),"郵便番号検索")]')
    .click('//button[contains(text(),"郵便番号検索")]')
    .pause(1 * 1000)
    .useCss()
    .execute("document.querySelector(\"[data-vv-name='golfCourse.postalCode']\").value='1120004'")
    //.pause(9999 * 1000)
    //.setValue("[data-vv-name='companyPostalCode']", '1120004') // doesnt work not sure why
    .useXpath()
    .click('//button[contains(text(),"郵便番号検索")]')
    .pause(1 * 1000)
    .useCss()
    .execute("document.querySelector(\"[data-vv-name='golfCourse.postalCode']\").value='invalid'")
    .useXpath()
    .click('//button[contains(text(),"郵便番号検索")]')
    .pause(1 * 1000)

    .useCss()
    .waitForElementPresent('a[href="/premium-golf/golf_course/search"]')
    .triggerClick('a[href="/premium-golf/golf_course/search"]')
    .pause(2 * 1000)
    .setValue("#courseName input", 'this shouldnt yield results')
    .click('.golf-course-information [type="submit"]')
    .pause(1 * 1000)
}

function mainFlow(browser) {
  browser
    // Go to local intra
    .url('http://localhost:8081/')
    // Navigate around to record API calls
    .useCss()
    .waitForElementPresent('a[href="/premium-golf/booking/search"]')
    .triggerClick('a[href="/premium-golf/booking/search"]')
    //.pause(2 * 1000)

    .waitForElementPresent('a[href="/premium-golf/business_calendar"]')
    .triggerClick('a[href="/premium-golf/business_calendar"]')
    //.pause(2 * 1000)

    .waitForElementPresent('a[href="/premium-golf/usage_statement"]')
    .triggerClick('a[href="/premium-golf/usage_statement"]')
  //.pause(2 * 1000)

}

function teeTimeSearchFlow(browser) {

}

function teeTimeCreateFlow(browser) {

}

function teeTimeEditFlow(browser) {

}

function planCreateFlow(browser) {

}

function planSearchFlow(browser) {

}

function campaignCreateFlow(browser) {

}

function campaignSearchFlow(browser) {

}

function benefitCreateFlow(browser) {

}

function benefitSearchFlow(browser) {

}

function userSearchFlow(browser) {

}

function businessCalendarFlow(browser) {

}

function usageStatementFlow(browser) {

}


module.exports = {
  'Main Scenario (Recording)': function (browser) {
    switchWindow(browser, 0)
    toggleRecording(browser)

    switchWindow(browser, 1)
    loginIntra(browser)
    mainFlow(browser)

    switchWindow(browser, 0)
    toggleRecording(browser)
  },

  'Main Scenario (Playback)': function (browser) {
    switchWindow(browser, 0)
    togglePlayback(browser)

    switchWindow(browser, 1)
    loginIntra(browser)
    mainFlow(browser)

    switchWindow(browser, 0)
    togglePlayback(browser)
  },

  'Main Scenario (Mobile)': function (browser) {
    switchWindow(browser, 0)
    setMobile(browser)

    switchWindow(browser, 1)
    loginIntra(browser)
    mainFlow(browser)

    switchWindow(browser, 0)
    setDesktop(browser)
  },

  'Golf Course Search Scenario': function (browser) {
    switchWindow(browser, 0)
    toggleRecording(browser)

    switchWindow(browser, 1)
    loginIntra(browser)
    //return
    golfCourseSearchFlow(browser)
  },

  'TeeTime Search Scenario': function (browser) {
    switchWindow(browser, 1)
    loginIntra(browser)
    teeTimeSearchFlow(browser)
  },

  'TeeTime Create Scenario': function (browser) {
    switchWindow(browser, 1)
    loginIntra(browser)
    teeTimeCreateFlow(browser)
  },

  'TeeTime Edit Scenario': function (browser) { // /premium-golf/tee_time/edit
    switchWindow(browser, 1)
    loginIntra(browser)
    teeTimeEditFlow(browser)
  },

  'Plan Create Scenario': function (browser) { // /premium-golf/plan
    switchWindow(browser, 1)
    loginIntra(browser)
    planCreateFlow(browser)
  },

  'Plan Search Scenario': function (browser) { // /premium-golf/plan/search
    switchWindow(browser, 1)
    loginIntra(browser)
    planSearchFlow(browser)
  },

  'Campaign Create Scenario': function (browser) { // /premium-golf/campaign/create
    switchWindow(browser, 1)
    loginIntra(browser)
    campaignCreateFlow(browser)
  },

  'Campaign Search Scenario': function (browser) { // /premium-golf/campaign/search
    switchWindow(browser, 1)
    loginIntra(browser)
    campaignSearchFlow(browser)
  },

  'Benefit Create Scenario': function (browser) { // /premium-golf/benefit/create
    switchWindow(browser, 1)
    loginIntra(browser)
    benefitCreateFlow(browser)
  },

  'Benefit Search Scenario': function (browser) { // /premium-golf/benefit/search
    switchWindow(browser, 1)
    loginIntra(browser)
    benefitSearchFlow(browser)
  },

  'User Search Scenario': function (browser) { // /premium-golf/user/search
    switchWindow(browser, 1)
    loginIntra(browser)
    userSearchFlow(browser)
  },

  'Business Calendar Scenario': function (browser) { // /premium-golf/business_calendar
    switchWindow(browser, 1)
    loginIntra(browser)
    businessCalendarFlow(browser)
  },
  
  'Usage Statement Scenario': function (browser) { // /premium-golf/usage_statement
    switchWindow(browser, 1)
    loginIntra(browser)
    usageStatementFlow(browser)
  },
}

module.exports = {}













// Old testing stuff


    // Switch to devtools and enable recording
    // .pause(3 * 1000)
    // .window_handles(function (result) {
    //   var handle = result.value[1]
    //   browser.switchWindow(handle)
    // })
    // .waitForElementPresent('#api-recording')
    // .click('#api-recording')
    //.waitForElementPresent('#btn-apply')
    // Clear cookies
    //.execute('document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });')
    //.url('https://backend.com')
    // .waitForElementPresent('[name="login_btn"]')
    // .click('[name="login_btn"]')
    // .useXpath()
    // .waitForElementPresent('//a[contains(text(),"Logout")]')
    // .useCss()
		// .url('http://localhost:8080/')
    // .waitForElementPresent('#btn-apply')
    // .click('#btn-apply')
    // .waitForElementPresent('#membership-application-02')
    // .execute('scrollTo(0, 500)')
    // .moveToElement('#membership-application-02', 2, 2)
    // .click('#membership-application-02')
    // .waitForElementPresent('#loginInner')





    // .window_handles(function(result){
    //   var handle=result.value[2];
    //   browser.switchWindow(handle);
    // })
    //.pause(1100)
    // .useXpath()
    // .setValue("//*[@id='user[btn-details-01]']",'rakesh')
    // .click('#menu-member-login')

    // .useXpath()
    // .click('//*[@id="app"]/div/div[2]/section/div/div/div/section[2]/div[1]/div[1]')
    // .click('(//a[@id="membership-application-02"])[1]')
    // .click('(//a[@href="/member/application"])[1]')


	// browser
	// 	.url()
  //   .window_handles(function(result){
  //     var handle=result.value[2];
  //     browser.switchWindow(handle);
  //   })
  //   //.waitForElementPresent('.btn.btn-primary.btn-large.f4.btn-block',5000)
  //  // 
  //   .useXpath()
  //   .setValue("//*[@id='user[login]']",'rakesh')
  //   .useCss()
  //   .click('.btn.btn-primary.btn-large.f4.btn-block')