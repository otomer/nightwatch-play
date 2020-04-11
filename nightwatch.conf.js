module.exports = {
  page_objects_path: ["page-objects"],
  src_folders: ["tests"],

  webdriver: {
    port: 9515,
    server_path: "node_modules/.bin/chromedriver",
    start_process: true,
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["--headless"],
        },
      },
      screenshots: {
        enabled: true,
        on_error: true,
        on_failure: true,
        path: "tests_output/screenshots",
      },
    },
  },
};
