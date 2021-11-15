const Page = require('./page');

module.exports = class FeaturesPage extends Page {

    async open() {
        return super.open('features');
    }

    get pageHeader() {
        return $('[data-cy="tag-line"]')
    }


}


