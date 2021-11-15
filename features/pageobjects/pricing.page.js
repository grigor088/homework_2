const Page = require('./page');

module.exports = class PricingPage extends Page{

    async open(path) {
        return super.open('pricing');
    }

    get pageHeader(){
        return   $('[data-cy="tag-line"]')
    }

}