import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./style.css";

const Home = () => {
  const [allMedia, setMedia] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllmedia();
  }, []);
  const getAllmedia = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/media/AudioBook");

    // console.log(response.data.results);
    setMedia(response.data.results);
  };

  const inside = (id) => {
    console.log(id);
    navigate(`/allmedia/${id}`);
  };

  // const addFav = (id) => {
  //    console.log(id);
  // }

  return (
    <div className="allMedia">
      {allMedia.map((all) => {
        return (
          <div className="all">
            <div
              onClick={() => {
                inside(all.trackId);
              }}
            >
              {/* <div className="singlePodcast"> */}
              <img className="PodImg" src={all.artworkUrl100} alt="all" />
              <h4> {all.collectionName} </h4>
              <h3> {all.artistName} </h3>
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

export default Home;
