import Dropzone from "react-dropzone";

import styles from "./DropZone.module.scss";

/**
 * DropZone Component
 * Responsibilities:
 *   - pass to onUpload prop uploaded file
 */
const DropZone = ({ onUpload }) => {
  return (
    <Dropzone
      onDrop={(files) => onUpload(files[0])}
      accept="image/*"
      minSize={1024}
      maxSize={3072000}
      maxFiles={1}
    >
      {({ getRootProps, getInputProps }) => {
        return (
          <div className={styles.dropZone} {...getRootProps()}>
            <input type="file" {...getInputProps()} />
            <div className={styles.dropIcon}>📁</div>
            <h2>Please drop your image here </h2>
          </div>
        );
      }}
    </Dropzone>
  );
};

export default DropZone;
