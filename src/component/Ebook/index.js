import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./style2.css";


const Ebook = () => {
    const [allbook, setAllbook] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    getAllbooks();
  }, []);
  const getAllbooks = async () => {
      const response = await axios.get("http://localhost:5000/media/Ebook");

    // console.log(response.data.results);
    setAllbook(response.data.results);
  };

  const inside = ( id ) => {
      console.log(id);
      navigate(`/OneBook/${id}`)
  }

  // const addFav = (id) => {
   //   console.log(id);
 // }

  return (
    <div className="allbook">
        {allbook.map((book) => {
            return (
          <div className="all">
              <div onClick={() => {
            inside(book.trackId);
          }}>
            {/* <div className="singlePodcast"> */}
            <img
              className="PodImg"
              src={book.artworkUrl100}
              alt="all"/>
              <h4> {book.trackName} </h4>
              <h3> {book.artistName} </h3>
         </div>
         { /* <div>
             <button
                onClick={() => {
                  addFav(all.trackId);
                }}> Add to Favorite </button>{" "}
              </div> */}
         </div>
            );
            })}
        </div> 
  )}

export default Ebook;
