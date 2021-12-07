const {Given, Then} = require("@wdio/cucumber-framework");
const SupportPage = require("../pageobjects/supportPage");
const supportPage = new SupportPage()
const pages = require('../../support/constants')

Given(/^I click in (.*) element$/, async (elem)=>{

    await pages['page'].open('')
    const actualElem = supportPage[elem]
    await actualElem.click()
})

Then(/^I will check visibility of (.*) which contain message (.*)$/, async (element, msg)=>{
    const actualElem =  supportPage[element]
    expect(actualElem).toHaveTextContaining(msg)
})