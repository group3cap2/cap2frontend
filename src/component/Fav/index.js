import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
// import "./style.css";

const Fav = () => {
  const [favorite, setFavorite] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = async () => {
    const response = await axios.get("http://localhost:5000/favorite");
    // console.log(response.data);
    setFavorite(response.data);
  };

  return (
    <div className="allPodcast">
      {favorite.map((item) => {
        return (
          <div className="Pod">
            <div
            //   onClick={() => {
            //     inside(pod.trackId);
            //   }}
            >
              {/* <div className="singlePodcast"> */}
              <img className="PodImg" src={item.artworkUrl100} alt="podcasts" />

              <h6> {item.trackName} </h6>
            </div>
            <div>
              <button
                // onClick={() => {
                //   addFav(pod.trackId);
                // }}
              >
                {" "}
                Add to Favorite{" "}
              </button>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Fav;
