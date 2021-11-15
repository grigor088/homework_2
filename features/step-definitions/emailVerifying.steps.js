const { Given, When, Then } = require('@wdio/cucumber-framework');

const FeaturesPage = require('../pageobjects/features.page');
const DashboardPage = require('../pageobjects/dashboard.page');
const PricingPage = require('../pageobjects/pricing.page')
const Page = require('../pageobjects/page')

const pages = {
    features:  new FeaturesPage(),
    dashboard : new DashboardPage(),
    pricing : new PricingPage(),
    page : new Page()
}

Given(/^I should scroll into email search view$/, async ()=>{
    await pages["page"].open('')
    await pages["page"].inputEmail.scrollIntoView({block:"start"})
    await browser.pause(3000)
})

Then(/^I input invalid "(.*)"$/, async (mail)=>{
    await pages['page'].inputEmail.setValue(mail)
    await $('//*[@id="subscribe-form"]/button').click()
    await $('//*[@id="subscribe-form"]/button').click({x:150})
    await browser.pause(1000)
})

When(/^I will check (.*) which depends on error message when i click in subscribe button with invalid email$/, async(text)=>{
    const errorMessageElement = await pages["page"].errorMessage
    await expect(errorMessageElement).toHaveTextContaining(text)
})

Given (/^I should input valid (.*)$/, async (email)=>{
    await pages['page'].inputEmail.setValue(email)
    await $('//*[@id="subscribe-form"]/button').click()
})

Then (/^I should check subscribing (.*)$/, async (text)=>{
    const subscribeMessageElement = await pages["page"].subscribeMessage
    await expect(subscribeMessageElement).toHaveTextContaining(text)
    await browser.refresh()
})