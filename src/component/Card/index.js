import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

function Card({ item }) {
  const id = useParams().trackId;
  // const [pod, setPod] = useState("");
  // let navigate = useNavigate();

  // const getPodcast = async () => {
  //   const response = await axios.get("http://localhost:5000/media/podcast");

  //   setPod(response.data.results.find((elem) => elem.trackId == id));
  // };

  // useEffect(() => {
  //   getPodcast();
  // }, []);

  return (
    <div className="Pod">
      <img className="PodImg" src={item.artworkUrl100} alt="podcasts" />

      <h4 id="name"> {item.trackName} </h4>
      <h3 id="art"> {item.artistName} </h3>

      <button
        className="btn"
        onClick={() => {
          // addFav(pod.trackId);
        }}
      >
        {" "}
        Add to Favorite{" "}
      </button>

    </div>
  );
}

export default Card;
