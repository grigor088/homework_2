const { Given, When, Then } = require('@wdio/cucumber-framework');

const pages = require("../../support/constants")

Given(/^I should navigate to (.*) page$/, async (page) => {
    await pages[page].open();
});

Then(/^Text of (.*) of (.*) should be (.*)$/, async (elem, page, text)=>{
    let currentPage = pages[page]
    const actualElem = await currentPage[elem]
    expect(actualElem).toHaveTextContaining(text)
})
