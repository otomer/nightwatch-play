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
      },
    },
  },
};
