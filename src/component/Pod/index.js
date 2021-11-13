import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import "./style.css";
import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function pod() {
  const id = useParams().trackId;
  const [pod, setPod] = useState();
  // let navigate = useNavigate();

  const getPodcast = async () => {
    const response = await axios.get("http://localhost:5000/media/podcast");
    setPod(response.data.find((elem) => elem.trackId == id));
  };

  useEffect(() => {
    getPodcast;
  }, []);

  let subtitle;
  const [modal, setModal] = React.useState(false);

  function openModal() {
    setModal(true);
  }

  useEffect(() => {
    console.log("hi");
  }, [modal]);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div className="Pod">
        {pod.map((elem) => (
          <div className="singleAudio">
            <img
              className="singleImg"
              src={elem.artworkUrl100}
              alt={`card ${elem.collectionName}`}
            />
        
      <div className="headerModal">
        <FaWindowClose id="closeIcon" onClick={closeModal} />
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          {elem.collectionName}
        </h2>
        <img id="gifM" src="https://i.pinimg.com/originals/5c/4a/1c/5c4a1cef8a1ebd3584fac99c817b173c.gif" />
        </div>

        <img
              className="modalImg"
              src={elem.artworkUrl100}
              alt={`card ${elem.collectionName}`}
            />

            <ReactPlayer
                    url={elem.previewUrl}
                    width="400px"
                    height="50px"
                    playing={false}
                    controls={true}
                    className="aduioController"
            />
</div>
    
        ))};
        </div>
  )}


export default Pod;
