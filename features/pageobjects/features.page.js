const SupportPage = require("./supportPage");

class FeaturesPage extends SupportPage {
    constructor() {
        super();
        this.path = 'features'
    }

    async open() {
        return super.open(this.path);
    }
}

module.exports = FeaturesPage
