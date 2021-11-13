import React, { useState, useEffect } from "react";
import axios from "axios";
// import ReactPlayer from "react-player";
// import Modal from "react-modal";
import "./style.css";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Pod() {
  const id = useParams().trackId;
  const [pod, setPod] = useState("");
  // let navigate = useNavigate();

  const getPodcast = async () => {
    const response = await axios.get("http://localhost:5000/media/podcast");
  
    setPod(response.data.results.find((elem) => elem.trackId == id));
  };

  useEffect(() => {
    getPodcast();
  }, []);

  
  return (
    <div className="Pod">
       {pod ? (
        <div className="1Pod">
          <div className="blackBackgroundM">h</div>
          <p className="Podcast"> {pod.trackName}</p>
          <img src={pod.artworkUrl100} alt="mmm" />
          <audio controls className="audio">
          <source src={pod.previewUrl} type="audio/mp4" />
        </audio>
          <h6> {pod.artistName}</h6>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    
        </div>
  )}


export default Pod;
