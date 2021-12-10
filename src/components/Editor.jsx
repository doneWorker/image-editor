import { useEffect, useState } from "react";
import { fabric } from "fabric";

import styles from "./Editor.module.scss";

const CANVAS_WIDTH = 1000;
const CANVAS_HEIGHT = 600;
const CANVAS_BG = "white";

/**
 * Editor Component
 * Responsibilities:
 *   - receive IMG element as argument
 *   - handle crop / image resize
 *   - export result
 */
const Editor = ({ image }) => {
  const [canvas, setCanvas] = useState(null); // fabric.js instance
  const [clipPath, setClipPath] = useState(null); // fabric.clipPath
  const [cropHelper, setCropHelper] = useState(null); // `visible` to user crop helper
  const [imageElement, setImageElement] = useState(null); // image tag

  const exportPNG = () => {
    const boundaries = cropHelper.getBoundingRect();
    const dataURL = canvas.toDataURL({
      width: boundaries.width,
      height: boundaries.height,
      left: boundaries.left,
      top: boundaries.top,
      format: "png",
    });
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDblClick = () => {
    const activeObj = canvas.getActiveObject();
    if (!activeObj) return;

    const newActive =
      activeObj.id === "crop-helper" ? imageElement : cropHelper;
    canvas.discardActiveObject();
    canvas.setActiveObject(newActive);

    canvas.requestRenderAll();
  };

  // Effects

  // Bootstrap fabric and set all React component's states
  useEffect(() => {
    const _canvas = new fabric.Canvas("canvas", {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      backgroundColor: CANVAS_BG,
    });

    const _clipPath = new fabric.Rect();
    const _cropHelper = new fabric.Rect({
      id: "crop-helper",
      fill: "rgba(0,0,0,0)",
      selectable: false,
    });

    _canvas.add(_cropHelper);
    setCanvas(_canvas);
    setClipPath(_clipPath);
    setCropHelper(_cropHelper);

    _canvas.clipPath = _clipPath;
    _canvas.controlsAboveOverlay = true;

    // scale element preserving aspect ratio
    _canvas.on("object:scaling", (e) => {
      if (e.target.id === "img") {
        e.target.scaleY = e.target.scaleX;
      }
    });

    // track movements of crop helper to set proper clip path
    const watchForMoving = (e) => {
      const boundaries = e.target.getBoundingRect();

      if (e.target.id === "crop-helper") {
        _clipPath.set({
          width: boundaries.width,
          height: boundaries.height,
          left: boundaries.left,
          top: boundaries.top,
        });
      }
    };

    _canvas.on("object:moving", watchForMoving);
    _canvas.on("object:scaling", watchForMoving);
  }, []);

  // Watch for `image` prop updates, when passed, add it to canvas and center
  useEffect(() => {
    if (image === null || canvas === null) return;

    const _img = new fabric.Image(image, {
      id: "img",
      lockSkewingY: true,
      lockRotation: true,
    });
    const _imgSize = { width: _img.width, height: _img.height };

    clipPath.set(_imgSize);
    cropHelper.set(_imgSize);

    canvas.add(_img);
    canvas.centerObject(_img);
    canvas.centerObject(clipPath);
    canvas.centerObject(cropHelper);
    setImageElement(_img);
  }, [image, canvas, clipPath, cropHelper]);

  return (
    <>
      <div
        id="canvas-holder"
        className={styles.canvasHolder}
        onDoubleClick={handleDblClick}
      >
        <canvas id="canvas"></canvas>
      </div>
      <button onClick={exportPNG} className={styles.exportBtn}>
        export as png
      </button>
    </>
  );
};

export default Editor;
