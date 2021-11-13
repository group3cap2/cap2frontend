import React from "react";
// import { useParams } from "react-router-dom";
import "./style.css";

function Card({ item, addFav, toggle }) {
  // const id = useParams().trackId;

  return (
    <div className="Pod">
      <img className="PodImg" src={item.artworkUrl100} alt="podcasts" />

      <h4 id="name"> {item.trackName} </h4>
      <h3 id="art"> {item.artistName} </h3>

      {/* <button
        className="btn"
        onClick={() => {
          addFav(item.trackId);
        }, toggle}
      >
        {toggle ? "Add to Favorites" : "Remove from Favorites"}
      </button> */}
    </div>
  );
}

export default Card;
