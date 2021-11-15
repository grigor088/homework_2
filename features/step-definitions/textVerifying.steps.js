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

Given(/^I should navigate to (.*) page$/, async (page) => {
    await pages[page].open();
});

Then(/^Text of (.*) of (.*) should be (.*)$/, async (elem, page, text)=>{
    let currentPage = await pages[page]
    //const actualText = await currentPage.getElementText(currentPage[elem])
    const actualElem = currentPage[elem]
    expect(actualElem).toHaveTextContaining(text)
})
