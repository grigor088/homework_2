const Page = require('../pageobjects/page')

class SupportPage extends Page {
    get pageHeader() {
        return $('[data-cy="tag-line"]')
    }

    get subscribeForm() {
        return $('//*[@id="subscribe-form"]/button')
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

    get cypressButton() {
        return $('.with-bash-effects')
    }

    get cypressElement() {
        return $('.ClipboardMsg')
    }
}

module.exports = SupportPage
