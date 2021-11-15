import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

function OnePodcast() {
  const id = useParams().trackId;
  const [pod, setPod] = useState("");
  const [isFav, setIsFav] = useState();
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    getPod();
    getFavorite();
  }, []);

  const getPod = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/media/podcast");
    // eslint-disable-next-line
    setPod(response.data.results.find((element) => element.trackId == id));
  };

  const fav = () => {
    favorite.map((item) => {
      if (item.trackId === pod.trackId) {
        console.log(item.trackId);
        console.log(pod.trackId);
        setIsFav(true);
      } else {
        console.log(item.trackId);
        console.log(pod.trackId);
        setIsFav(false);
      }
    });
  };

  const getFavorite = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/favorite");
    setFavorite(response.data);
    response.data.find((element) => element.trackId == id);
  };

  const addFav = (id) => {
    // eslint-disable-next-line
    console.log(id, pod.trackId);
    if (id === pod.trackId) {
      if (isFav === false) {
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
    }
  };

  console.log(pod);
  return (
    <>
      {pod ? (
        <div className="1Pod">
          <p className="Podcast"> {pod.trackName}</p>
          <img src={pod.artworkUrl100} alt="mmm" />
          <h2> {pod.artistName}</h2>
          <audio controls className="audio">
            <source src={pod.previewUrl} type="audio/mp3" />
          </audio>
          <div>
            <button
              className="btn"
              onClick={() => {
                addFav(pod.trackId);
              }}
            >
              {isFav ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
}
export default OnePodcast;
