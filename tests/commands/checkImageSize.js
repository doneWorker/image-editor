const sizeOf = require("image-size");

function checkImageSize() {}

checkImageSize.prototype.command = function (path, width, height) {
  const dim = sizeOf(path);

  if (dim.width === width && dim.height === height) {
    console.log("Image size(dimensions) are good");
  } else {
    throw new Error("Image size(dimensions) do not match");
  }
};

module.exports = checkImageSize;
