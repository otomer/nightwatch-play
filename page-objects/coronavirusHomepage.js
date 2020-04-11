module.exports = {
  commands: [
    {
      searchCountry(selector, value, fulfillSearch) {
        const page = this.waitForElementVisible(selector)
          .pause(2500)
          .setValue(selector, value);

        fulfillSearch();
        return page;
      },
    },
  ],
  elements: {
    countryIndicatorSelector: "#countryIndicator",
    searchSelector: ".search-form-control",
    titleSelector: "#topTitle",
  },
  url: "https://coronavirus-epidemic.com/",
};
