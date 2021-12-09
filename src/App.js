import { useState } from "react";
import DropZone from "./components/DropZone";
import Editor from "./components/Editor";

import "./App.css";

const views = {
  editor: "editor",
  upload: "upload",
};

function App() {
  const [view, setView] = useState(views.upload);
  const [image, setImage] = useState(null);

  // receive file
  // create image element
  // open editor tab
  const handleUpload = (file) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.src = url;
    img.onload = () => setImage(img);
    setView("editor");
  };

  return (
    <div className="App">
      {view === views.upload ? (
        <DropZone onUpload={handleUpload} />
      ) : (
        <Editor image={image} />
      )}
    </div>
  );
}

export default App;
