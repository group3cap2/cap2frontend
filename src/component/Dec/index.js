import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";


const Dec = () => {
  const id = useParams().trackId;

  const [dataA, setDataa] = useState("");

  const getData = async () => {
    const response = await axios.get(`http://localhost:5000/media`);
    setDataa(response.data.find((ele) => ele.trackId == id));
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(getData);

  return (
    <>
      { dataA ? (
        <div className="oneitemHome">
          <div className="blackBackgroundM"> h</div>
          <p className="movieP"> {dataA.trackName}</p>
          <img src={dataA.artworkUrl100} alt="" />
          <audio controls className="audio">
            <source src={dataA.previewUrl} type="audio/mp4" />
          </audio>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
    </>
  );
};



/* import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";




function Dec() {
  const id = useParams().trackId;
  const [all, setAll] = useState("");

  const getData = async () => {
    const all = await axios.get(`http://localhost:5000/media`);
    setAll(all.data.find((element) => element.trackId == id));


    useEffect(() => {
      getData();
    }, []);
    console.log(all);
    return (
        <div>
            
            /* {all ? (
        <div className="1Pod">
          <p className="Podcast"> { all.trackName}</p>
          <img src={all.artworkUrl100} alt="mmm" />
          <audio controls className="audio">
            <source src={all.previewUrl} type="audio/mp4" />
          </audio>
          <h6> {all.artistName}</h6>
        </div>
      ) : (
        <h1>loading ...</h1>
      )}
        </div>
    )
}}
*/


export default Dec;
