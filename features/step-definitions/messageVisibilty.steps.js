const {Given, Then} = require("@wdio/cucumber-framework");
const Page = require('../pageobjects/page')
const page = new Page()

Given(/^I click in (.*) element$/, async (elem)=>{
    await page.open('')
    const actualElem = await page[elem]
    await actualElem.click()

})

Then(/^I will check visibility of (.*) which contain message (.*)$/, async (elem, msg)=>{
    const actualElem = await page[elem]
    expect(actualElem).toHaveTextContaining(msg)
    await browser.pause(1500)
})