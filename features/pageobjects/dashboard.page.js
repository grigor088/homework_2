const Page = require('./page');

module.exports =  class  DashboardPage extends Page{

    async open(path) {
        return super.open('dashboard');
    }

    get pageHeader(){
        return   $('[data-cy="tag-line"]')
    }

}