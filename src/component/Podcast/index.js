
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Modal from "react-modal"


const Podcast = () => {
    const [podcast, setPodcast] = useState([]);
  useEffect(() => {
    getPodcast();
  }, []);

  const getPodcast = async () => {
    const response = await axios.get(
      "http://localhost:5000/media/podcast"
    );
    setPodcast(response.data.results);
    console.log(response.data.results);
  };
  return(<>  
  {podcast.map((item)=><img src={item.artworkUrl30}/>)}</>)
}
export default Podcast;
