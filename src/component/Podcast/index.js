import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Card from "./../Card";
import "./style.css";
// import Modal from "react-modal"

const Podcast = () => {
  const [podcast, setPodcast] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPodcast();
  }, []);

  const getPodcast = async () => {
    const response = await axios.get("http://localhost:5000/media/podcast");

    // console.log(response.data.results);
    setPodcast(response.data.results);
  };

  const inside = (id) => {
    console.log(id);
    navigate(`/dec/${id}`);
  };

  const addFav = (id) => {
    console.log(id);
  };

  return (
    <div className="allPodcast">
      {podcast.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              inside(item.trackId);
            }}
          >
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
};
export default Podcast;
