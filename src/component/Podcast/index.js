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
      const response = await axios.get("http://localhost:5000/media/podcast");

    // console.log(response.data.results);
    setPodcast(response.data.results);
  };

  const inside = ( id ) => {
      console.log(id);
      navigate(`/Pod/${id}`)
  }

  const addFav = (id) => {
      console.log(id);
  }

  return (
    <div className="allPodcast">
        {podcast.map((pod) => {
            return (
          <div className="Pod">
              <div onClick={() => {
            inside(pod.trackId);
          }}>
            {/* <div className="singlePodcast"> */}
            <img
              className="PodImg"
              src={pod.artworkUrl100}
              alt="podcasts"/>

         <h6> {pod.trackName} </h6>
         </div>
         <div>
             <button
                onClick={() => {
                  addFav(pod.trackId);
                }}> Add to Favorite </button>{" "}
         </div>
         </div>
            );
            })}
        </div>
        );
        }
export default Podcast;
