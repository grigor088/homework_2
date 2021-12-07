const SupportPage = require("./supportPage");

class DashboardPage extends SupportPage {
    constructor() {
        super();
        this.path = 'dashboard'
    }

    async open() {
        return super.open(this.path);
    }
}

module.exports = DashboardPage
