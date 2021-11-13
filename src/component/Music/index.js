import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Music = () => {
  const [allMusic, setAllMusic] = useState([]);

  useEffect(() => {
    getAllMusic();
  }, []);

  const getAllMusic = async () => {
    const response = await axios.get("http://localhost:5000/media/Music");

    // console.log(response.data.results);
    setAllMusic(response.data.results);
  };

  // const inside = (id) => {
  //   console.log(id);
  //   navigate(`/OneBook/${id}`);
  // };

  // const addFav = (id) => {
  //   console.log(id);
  // }

  return (
    <div className="allbook">
      {allMusic.map((book) => {
        return (
          <div className="all">
            <div
              // onClick={() => {
              //   inside(book.trackId);
              // }}
            >
              {/* <div className="singlePodcast"> */}
              <img className="PodImg" src={book.artworkUrl100} alt="all" />
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
