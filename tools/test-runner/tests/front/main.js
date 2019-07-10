const { switchWindow, toggleRecording, toggleHeaderOverride } = require('../../helpers')

const login = {
    normal: {
        username: 'abc1234567@gmail.com',
        password: '123456'
    },
    superuser: {
        username: 'testuserjcb@ra.com',
        password: '000000',
        dob: '1904/10/01'
    },
    special: {
        username: 'guoying_4',
        password: ''
    }
}


function loginFlow(browser) {
    browser
        .setTestName('loginFlow')
        .url('http://localhost:8080/')
        .waitForElementPresent('#menu-member-login')
        .click('#menu-member-login')
        .waitForElementPresent('#loginInner')
        .execute("document.querySelector(\"#loginInner[type='text']\").value=''")
        .setValue("#loginInner[type=\"text\"]", login.normal.username)
        .setValue("[type=\"password\"]", login.normal.password)
        .triggerClick('.loginButton')

}

function myPageFlow(browser) {

}

function reservationEditFlow(browser) {

}

function soloBookingFlow(browser) {
    browser
        .setTestName('soloBookingFlow')
        .url('http://localhost:8080/')
        .waitForElementPresent('#solo-search')
        .click('#solo-search')
        .waitForElementPresent('.datepicker')
        .pause(2 * 1000)
        .click('.datepicker')
        .waitForElementPresent('.ui-datepicker-next')
        .click('.ui-datepicker-next')
        .pause(0.1 * 1000)
        .click('[data-handler="selectDay"]')
        .pause(0.1 * 1000)
        .click('#btn-search-01')
        .waitForElementPresent('.btn-reserve')
        .triggerClick('.btn-reserve')
}

function eventBookingFlow(browser) {
    browser
        .setTestName('eventBookingFlow')
        .url('http://localhost:8080/')
        .waitForElementPresent('#event-competition')
        .click('#event-competition')
        .waitForElementPresent('.datepicker')
        .pause(2 * 1000)
        .click('.datepicker')
        .waitForElementPresent('.ui-datepicker-next')
        .click('.ui-datepicker-next')
        .pause(0.1 * 1000)
        .click('[data-handler="selectDay"]')
        .pause(0.1 * 1000)
        .click('#btn-search-01')
        .waitForElementPresent('.btn-reserve')
        .triggerClick('.btn-reserve')
}

function eventBookingMultipleFlow(browser) {
    browser
        .setTestName('eventBookingMultipleFlow')
        .url('http://localhost:8080/')
        .waitForElementPresent('#event-competition')
        .triggerClick('#event-competition')
        .waitForElementPresent('.datepicker')
        .pause(2 * 1000)
        .click('.datepicker')
        .waitForElementPresent('.ui-datepicker-next')
        .click('.ui-datepicker-next')
        .pause(0.1 * 1000)
        .click('[data-handler="selectDay"]')
        .pause(0.1 * 1000)
        .click('#btn-search')
        .waitForElementPresent('.result-check')
        .triggerClick('.result-check')
        .pause(0.1 * 1000)
        .waitForElementPresent('#btn-reserve-all-02')
        .triggerClick('#btn-reserve-all-02')
}

function regularBookingFlow(browser) {
    browser
        .setTestName('regularBookingFlow')
        .url('http://localhost:8080/')
        .waitForElementPresent('.datepicker')
        .pause(2 * 1000)
        .click('.datepicker')
        .waitForElementPresent('.ui-datepicker-next')
        .click('.ui-datepicker-next')
        .pause(0.1 * 1000)
        .click('[data-handler="selectDay"]')
        .pause(0.1 * 1000)
        .click('#btn-search-01')
        .waitForElementPresent('.btn-reserve')
        .triggerClick('.btn-reserve')
}

function errorFlow(browser) {

}

function memberApplicationFlow(browser) {return;
    browser
        .url('http://localhost:8080/')
        .waitForElementPresent('#btn-apply')
        .click('#btn-apply')
        .waitForElementPresent('#membership-application-02')
        .execute('scrollTo(0, 500)')
        .moveToElement('#membership-application-02', 2, 2)
        .click('#membership-application-02')
        .waitForElementPresent('#loginInner')
        .execute("document.querySelector(\"#loginInner[type='text']\").value=''")
        .setValue("#loginInner[type=\"text\"]", 'abc1234567@gmail.com')
        .setValue("[type=\"password\"]", '123456')
        .click('.loginButton')
}

function eventCompetitionQuickReportFlow(browser) {

}

function eventCompetitionReportListFlow(browser) {

}

function eventCompetitionReportDetailsFlow(browser) {

}

function championBoardFlow(browser) {

}

function memberMigrationFlow(browser) {

}


module.exports = {
    'Setup': function (browser) {
        switchWindow(browser, 0)
        toggleHeaderOverride(browser)
        toggleRecording(browser)
        switchWindow(browser, 1)
    },

    'Login Scenario': function (browser) {
        loginFlow(browser)
    },


    'Other Scenarios': function (browser) {
        championBoardFlow(browser)
        memberMigrationFlow(browser)
    },
}
