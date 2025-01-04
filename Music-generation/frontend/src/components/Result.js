import React from "react";

function Result({ fileUrl }) {
  return (
    <div>
      <h2>Generated Music</h2>
      <p>
        Your music has been generated! Click the link below to download it.
      </p>
      <a href={fileUrl} download="generated_music.mid">
        Download Music
      </a>
    </div>
  );
}

export default Result;
