/*
 * In this test
 * we want to ensure that:
 * - File area appears
 * - Our image uploads
 * - Resize crop area
 * - Output image successfully generating
 */
const path = require("path");

// Constants
const APP_URL = "http://localhost:3000/";
const TITLE_TO_BE = "Image Cropper";
const TEST_IMAGE_NAME = "pug.jpeg";
const DOWNLOADED_IMAGE_PATH = path.resolve(__dirname, "downloads", "image.png");

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 600;
const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 500;

// CSS selectors
const selectors = {
  uploadInput: "input[type='file']",
  canvasContainer: "#canvas-holder",
  exportButton: "button",
};

module.exports = {
  "Website <title> is correct (just to be sure)": (browser) => {
    browser
      .url(APP_URL)
      .waitForElementPresent("body", 1000)
      .assert.title(TITLE_TO_BE);
  },

  "File uploads and then canvas container appears": (browser) => {
    browser
      .waitForElementPresent(selectors.uploadInput, 1000)
      .setValue(selectors.uploadInput, path.resolve(__dirname, TEST_IMAGE_NAME))
      .pause(1500)
      .waitForElementPresent(selectors.canvasContainer)
      .assert.elementPresent("canvas");
  },

  "Image is resizing": (browser) => {
    browser
      .moveToElement(
        selectors.canvasContainer,
        CANVAS_WIDTH / 2,
        CANVAS_HEIGHT / 2
      )
      .doubleClick()
      .moveTo(null, IMAGE_WIDTH / 2, -IMAGE_HEIGHT / 2)
      .mouseButtonDown(0)
      .moveTo(null, -100, 100)
      .pause(500)
      .mouseButtonUp()
      .pause(500);
  },

  "Click on export works fine": (browser) => {
    browser
      .click(selectors.exportButton)
      .pause(500)
      .checkFileExists(DOWNLOADED_IMAGE_PATH);
  },

  after: (browser) => {
    browser.end();
  },
};
