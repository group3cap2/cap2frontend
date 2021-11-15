import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

function OneMusic() {
  const id = useParams().trackId;
  const [oneMusic, setOneMusic] = useState("");
  const [isFav, setIsFav] = useState(false);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    getOneMusic();
    getFavorite();
    fav();
  },     // eslint-disable-next-line
  []);

  const getOneMusic = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/media/Music");
    // eslint-disable-next-line
    setOneMusic(response.data.results.find((element) => element.trackId == id));
  };

  const fav = () => {
    favorite.forEach((item) => {
      if (item.trackId === oneMusic.trackId) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    });
  };

  const getFavorite = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/favorite");
    setFavorite(response.data);

    favorite.forEach((item) => {
      if (item.trackId === oneMusic.trackId) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    });
  };

  const addFav = (id) => {
    // eslint-disable-next-line
    if (id === oneMusic.trackId) {
      if (isFav === false) {
        axios
          .post("https://cap2backend.herokuapp.com/favorite/Music", null, {
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

  return (
    <>
      {oneMusic ? (
        <div className="1Pod">
          <p className="Podcast"> {oneMusic.trackName}</p>
          <img src={oneMusic.artworkUrl100} alt="mmm" />
          <h2> {oneMusic.artistName}</h2>
          <audio controls className="audio">
            <source src={oneMusic.previewUrl} type="audio/mp3" />
          </audio>

          <div>
            <button
              className="btn"
              onClick={() => {
                addFav(oneMusic.trackId);
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
export default OneMusic;
