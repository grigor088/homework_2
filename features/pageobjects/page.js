
class Page {
    async open (path) {
        return browser.url(`https://www.cypress.io/${path}`)
    }

    async getElementText(el){
        return el.getText()
    }
}

module.exports = Page
