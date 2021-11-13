import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

function Dec() {
  const id = useParams().trackId;

  const [pod, setPod] = useState("");

  const getPod = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/media/podcast");
    // eslint-disable-next-line
    setPod(response.data.results.find((element) => element.trackId == id));
  };

  useEffect(() => {
    getPod();
    // eslint-disable-next-line
  }, []);
  console.log(pod);
  return (
    <>
      {pod ? (
        <div className="1Pod">
          <p className="Podcast"> {pod.trackName}</p>
          <img src={pod.artworkUrl100} alt="mmm" />
          <h2> {pod.artistName}</h2>
          <audio controls className="audio">
            <source src={pod.previewUrl} type="audio/mp4" />
          </audio>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
}
export default Dec;
