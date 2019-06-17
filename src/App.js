import React, { useState } from "react";
import "./App.scss";

import PlayVideo from "./PlayVideo";

function App() {
  const [state, onchange] = useState({
    file: ""
  });
  const handleImageChange = e => {
    onchange({ file: URL.createObjectURL(e.target.files[0]) });
  };
  return (
    <div className="App">
      {state.file ? (
        <PlayVideo video={state.file} />
      ) : (
        <input className='file' type="file" label="Title" onChange={e => handleImageChange(e)} />
      )}
    </div>
  );
}

export default App;
