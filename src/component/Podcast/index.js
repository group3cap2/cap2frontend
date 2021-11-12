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
      "http://itunes.apple.com/search?term=s&country=sa&media=podcast&limit=15"
    );
    console.log(response.data.results);
    setPodcast(response.data.results);
    console.log(response.data.results);
  };
}
export default Podcast;