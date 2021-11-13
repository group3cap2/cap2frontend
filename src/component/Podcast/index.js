import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./style.css";
// import Modal from "react-modal"


const Podcast = () => {
    const [podcast, setPodcast] = useState([]);
    const [sound] = useState( typeof Audio !== "undefined" && new Audio(Sound));
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
      navigate(`/Pod/${id}` )
  }

  const addFav = (id) => {
      console.log(id);
  }

  return (
    
    <div className="allPodcast">
        {podcast.map((pod,i) => {
            return (
          <div className="Pod">
              <div key = {i} onClick={() => {
            inside(pod.trackId);
          }}>

            <img
              className="PodImg"
              src={pod.artworkUrl100}
              alt="podcasts"/>

         <h4 id="name"> {pod.trackName} </h4>
         <h3 id="art"> {pod.artistName} </h3>
         </div>
         <div>
             <button className="btn"
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
