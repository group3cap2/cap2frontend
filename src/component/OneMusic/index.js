import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

function OneMusic() {
    const id = useParams().trackId;
    const [toggle, setToggle] = useState(true);
  const [oneMusic, setOneMusic] = useState("");

  const getOneMusic = async () => {
    const response = await axios.get("http://localhost:5000/media/Music");
    // eslint-disable-next-line
    setOneMusic(response.data.results.find((element) => element.trackId == id));
  };

  const addFav = (id) => {
    // eslint-disable-next-line
      if (id === oneMusic.trackId) {
        if (toggle === true) {
          axios
            .post("http://localhost:5000/favorite/music", null, {
              params: { id },
            })
            .then((response) => response.status)
            .catch((err) => console.warn(err));
          setToggle(false);
        } else {
          axios
            .delete("http://localhost:5000/favorite", null, { params: { id } })
            .then((response) => response.status)
            .catch((err) => console.warn(err));
          setToggle(true);
        }
      }
  
  };
  useEffect(() => {
    getOneMusic();
    // eslint-disable-next-line
  }, []);
  console.log(OneMusic);
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
               <button className="btn"
                onClick={() => {
                  addFav(oneMusic.trackId);
                }}>
        {toggle ? "Add to Favorites" : "Remove from Favorites"}
              </button>{" "} 
              </div> 
        </div>
        
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
}
export default OneMusic;
