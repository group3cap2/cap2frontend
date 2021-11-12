
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./style.css";
import Modal from "react-modal"


const Podcast = () => {
    const [podcast, setPodcast] = useState([]);

    const navigate = useNavigate();

  useEffect(() => {
    getPodcast();
  }, []);

  const getPodcast = async () => {
    const res = await axios.get("http://localhost:5000/media&Podcast");

    // console.log(data.data[0].data);

    setPodcast(res.data);
  };
  return (
    <div className="mediaWrapper">
      <h1>Podcast</h1> 
      <div className="Podcast">
        {podcast.map((item, i) => (
          <div className="Pod" key={i} onClick={() => {
            navigate("/Podcast/open", { state: item });
          }}>
            <img
              key={`img-${i}`}
              className="PodImg"
              src={item.artworkUrl100}
              alt={`Img-${i}`}
            />
            <p className="podName" key={`trackN-${i}`}>
              <b>{item.trackName}</b>
            </p>
            <p className="artistName" key={`artN-${i}`}>
              {item.artistName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Podcast;
