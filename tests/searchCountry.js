/**
 * Page Object based Test Example
 * https://nightwatchjs.org/guide/working-with-page-objects/
 */
module.exports = {
  "@tags": ["country"],
  "Coronavirus search country test"(browser) {
    const countryName = "Israel";
    const countryCode = "IL";

    const homepage = browser.page.coronavirusHomepage();

    homepage
      .navigate()
      .searchCountry("@searchSelector", countryName, () =>
        browser.keys(browser.Keys.ENTER)
      );

    homepage.assert
      .urlContains(`?country=${countryCode}`)
      .assert.containsText("@titleSelector", countryName)
      .assert.containsText("@countryIndicatorSelector", countryName)
      .saveScreenshot("tests_output/searchCountry.png");

    browser.end();
  },
};
