import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "./style.css";

function OneBook() {
  const id = useParams().trackId;

  const [oneBook, setOneBook] = useState("");

  const getOnebook = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/media/Ebook");
    // eslint-disable-next-line
    setOneBook(response.data.results.find((element) => element.trackId == id));
  };

  useEffect(() => {
    getOnebook();
    // eslint-disable-next-line
  }, []);
  console.log(oneBook);
  return (
    <>
      {oneBook ? (
        <div className="1Pod">
          <p className="Podcast"> {oneBook.trackName}</p>
          <img src={oneBook.artworkUrl100} alt="mmm" />
          <h2> {oneBook.trackCensoredName}</h2>
          <h2> {oneBook.artistName}</h2>
          <h2> PRICE : {oneBook.price}$ </h2>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
}
export default OneBook;
