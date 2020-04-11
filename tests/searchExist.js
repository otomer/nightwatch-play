/**
 * Simple Test Example
 */
module.exports = {
  "Coronavirus search exist test"(browser) {
    const searchSelector = ".search-form-control";

    browser
      .url("https://coronavirus-epidemic.com/")
      .waitForElementVisible(searchSelector)
      // .perform(() => {
      //   debugger;
      // })
      .assert.attributeEquals(
        searchSelector,
        "placeholder",
        "Search a Country..."
      );
  },
};
