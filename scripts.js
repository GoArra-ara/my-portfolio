import React from "react";
import Thumbnail from "./Thumbnail";
import LikeButton from "./LikeButton";

function Video({ video }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
      <Thumbnail video={video} />

      {/* Link for the video */}
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#333" }}
      >
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>

      <LikeButton video={video} />
    </div>
  );
}

export default Video;
