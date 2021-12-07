const FeaturesPage = require("../features/pageobjects/features.page");
const DashboardPage = require("../features/pageobjects/dashboard.page");
const PricingPage = require("../features/pageobjects/pricing.page");
const Page = require("../features/pageobjects/page");

module.exports = {
    features: new FeaturesPage(),
    dashboard: new DashboardPage(),
    pricing: new PricingPage(),
    page: new Page()
}