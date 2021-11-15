module.exports = class Page {

    async open (path) {
        return browser.url(`https://www.cypress.io/${path}`)
    }

    async getElementText(el){
        return el.getText()
    }

    get cypressButton(){
        return $('.with-bash-effects')
    }

    get cypressElement(){
        return $('.ClipboardMsg')
    }

    get inputEmail() {
        return $('#input-footer-email')
    }

    get errorMessage() {
        return $('.styled__Error-sc-10l91w3-8')
    }

    get subscribeMessage() {
        return $('.Subscribe__Label-sc-1hdnlrs-1')
    }

}
