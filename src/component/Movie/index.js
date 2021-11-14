import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Movie = () => {
  const [allMovie, setAllMovie] = useState([]);

  useEffect(() => {
    getAllMovie();
  }, []);

  const getAllMovie = async () => {
    const response = await axios.get("http://localhost:5000/media/Movie");

    // console.log(response.data.results);
    setAllMovie(response.data.results);
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
      {allMovie.map((book) => {
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

export default Movie;
