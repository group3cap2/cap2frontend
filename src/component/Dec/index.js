import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";
import { useEffect } from "react";

function Dec() {
  const id = useParams().trackId;
  const [toggle, setToggle] = useState(true);
  const [pod, setPod] = useState("");

  const getPod = async () => {
    const response = await axios.get("http://localhost:5000/media/podcast");
    // eslint-disable-next-line
    setPod(response.data.results.find((element) => element.trackId == id));
  };

  const addFav = (id) => {
    // eslint-disable-next-line
    console.log(id, pod.trackId)
    if (id === pod.trackId) {
      if (toggle === true) {
        axios
          .post("http://localhost:5000/favorite/podcast", null, {
            params: { id },
          })
          .then((response) => response.status)
          .catch((err) => console.warn(err));
        setToggle(false);
      } else {
        axios
          .delete(`http://localhost:5000/favorite/${id}`)
          .then((response) => response.status)
          .catch((err) => console.warn(err));
        setToggle(true);
      }
    }
  };

  useEffect(() => {
    getPod();
    // eslint-disable-next-line
  }, []);
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
              onClick={() => {
                addFav(pod.trackId);
              }}
            >
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
export default Dec;
