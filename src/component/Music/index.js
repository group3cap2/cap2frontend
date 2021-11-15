import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./style.css";

const Music = () => {
  const [allMusic, setAllMusic] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllMusic();
  }, []);

  const getAllMusic = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/media/Music");

    // console.log(response.data.results);
    setAllMusic(response.data.results);
  };

  const inside = (id) => {
    console.log(id);
    navigate(`/OneMusic/${id}`);
  };

  return (
    <div className="allbook">
      {allMusic.map((book, i) => {
        return (
          <div key={i} className="all">
            <div>
              {/* <div className="singlePodcast"> */}
              <img
                className="PodImg"
                src={book.artworkUrl100}
                alt="all"
                onClick={() => {
                  inside(book.trackId);
                }}
              />
              <h4> {book.trackName} </h4>
              <h3> {book.artistName} </h3>
            </div>
            {/* <div>
             <button
                onClick={() => {
                  addFav(all.trackId);
                }}> Add to Favorite </button>{" "}
              </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Music;
