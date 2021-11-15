import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
// import Card from "./../Card";
import axios from "axios";
import "./style.css";
// import Modal from "react-modal"

const Podcast = () => {
  const [podcast, setPodcast] = useState([]);
  const [isFav, setIsFav] = useState();
  const [favorite, setFavorite] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPodcast();
    getFavorite();
    fav();
  }, []);

  const getPodcast = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/media/podcast");
    setPodcast(response.data.results);
  };

  const inside = (id) => {
    navigate(`/OnePodcast/${id}`);
  };

  const fav = () => {
    favorite.map((item, i) => {
      podcast.map((ele, i) => {
        if (item.trackId === ele.trackId) {
          setIsFav(true);
        } else {
          setIsFav(false);
        }
      });
    });
  };

  const getFavorite = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/favorite");
    setFavorite(response.data);
  };

  const addFav = (id) => {
    favorite.map((item) => {
      if (id === item.trackId) {
        axios
          .post("https://cap2backend.herokuapp.com/favorite/podcast", null, {
            params: { id },
          })
          .then((response) => response.status)
          .catch((err) => console.warn(err));
        setIsFav(true);
      } else {
        axios
          .delete(`https://cap2backend.herokuapp.com/favorite/${id}`)
          .then((response) => response.status)
          .catch((err) => console.warn(err));
        setIsFav(false);
      }
    });
  };

  return (
    <div className="allPodcast">
      {podcast.map((item, i) => {
        return (
          <div key={i} className="pod">
            <img
              src={item.artworkUrl100}
              alt="movie"
              onClick={() => {
                inside(item.trackId);
              }}
            />
            <h4> {item.trackName} </h4>
            <h3> {item.artistName} </h3>
            {
              // <div>
              //   {
              //     <button
              //       onClick={() => {
              //         addFav(item.trackId);
              //       }}
              //     >
              //       {isFav ? "Remove from Favorites" : "Add to Favorites"}
              //     </button>
              //   }
              // </div>
            }
          </div>
        );
      })}
    </div>
  );
};
export default Podcast;
