import React, { useState } from "react";
import axios from "axios";

function MusicForm({ setFileUrl }) {
  const [length, setLength] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/generate-music", {
        length: parseInt(length),
      });

      if (response.data.status === "success") {
        setFileUrl(`http://127.0.0.1:5000/download/music.mid`);
      } else {
        alert("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Error generating music:", error);
      alert("An error occurred while generating the music.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Generate Music</h2>
      <label htmlFor="length">Length (in steps):</label>
      <input
        type="number"
        id="length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        required
      />
      <button type="submit">Generate</button>
    </form>
  );
}

export default MusicForm;
