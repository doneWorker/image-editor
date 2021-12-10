const path = require("path");

module.exports = {
  src_folders: ["tests"],
  output_folder: "reports",
  custom_commands_path: "./tests/commands",

  webdriver: {
    start_process: true,
    server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver",
    port: 4444,
    host: "localhost",
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          prefs: {
            download: {
              default_directory: path.resolve(__dirname, "tests/downloads"),
            },
          },
        },
      },
    },
  },
};
