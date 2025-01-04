import React, { useState } from "react";
import MusicForm from "./components/MusicForm";
import Result from "./components/Result";

function App() {
  const [fileUrl, setFileUrl] = useState(null);

  return (
    <div className="container">
      <h1>AI Music Generator</h1>
      <MusicForm setFileUrl={setFileUrl} />
      {fileUrl && <Result fileUrl={fileUrl} />}
    </div>
  );
}

export default App;
