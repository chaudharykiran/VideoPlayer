import React, { useState } from "react";

import "./App.scss";
import PlayVideo from "./PlayVideo";

function App() {
  const [fileUrl, setFileUrl] = useState("");

  const handleChange = e => {
    setFileUrl(URL.createObjectURL(e.target.files[0]))
  };

  return (
    <div className="App">
      {fileUrl ? (
        <PlayVideo video={fileUrl} />
      ) : (
        <input className='file' type="file" label="Video" onChange={handleChange} />
      )}
    </div>
  );
}

export default App;
