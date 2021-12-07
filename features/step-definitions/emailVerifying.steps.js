const { Given, When, Then } = require('@wdio/cucumber-framework');
const SupportPage = require("../pageobjects/supportPage");
const supportPage = new SupportPage()

const pages = require("../../support/constants")

Given(/^I should navigate to (.*) page$/, async (page) => {
    //await pages[page].open('');
    await browser.url('https://cypress.io/')
});

Then(/^I should scroll into (.*) view$/, async (elem)=>{
    const element = supportPage[elem] //not working
    await element.scrollIntoView({block:"nearest"})
})

Then(/^I input invalid email "(.*)"$/, async (mail)=>{
    await supportPage.inputEmail.setValue(mail)
})
Then(/^I will click on (.*) element$/, async (elem)=>{
    await supportPage[elem].click()
    await supportPage[elem].click({x:140})
})

When(/^I will check (.*) which depends on error message when i click in subscribe button with invalid email$/, async(text)=>{
    const errorMessageElement = supportPage.errorMessage
    expect(errorMessageElement).toHaveTextContaining(text)
})

Given (/^I should input valid email (.*)$/, async (email)=>{
    await supportPage.inputEmail.setValue(email)
})

Then (/^I should check subscribing (.*)$/, async (text)=>{
    const subscribeMessageElement = supportPage.subscribeMessage
    expect(subscribeMessageElement).toHaveTextContaining(text)
})

Then(/^I should reload page for input new email$/, async ()=>{
    await browser.refresh()
})