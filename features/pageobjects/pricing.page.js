const SupportPage = require("./supportPage");

class PricingPage extends SupportPage {
    constructor() {
        super();
        this.path = 'pricing'
    }

    async open() {
        return super.open(this.path);
    }

}

module.exports = PricingPage
