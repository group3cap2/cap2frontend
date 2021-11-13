import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "./../Card";
import axios from "axios";
import "./style.css";
// import Modal from "react-modal"

const Podcast = () => {
  const [podcast, setPodcast] = useState([]);
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPodcast();
  }, []);

  const getPodcast = async () => {
    const response = await axios.get("http://localhost:5000/media/podcast");

    // console.log(response.data.results);
    setPodcast(response.data.results);
  };

  const inside = (id) => {
    console.log(id);
    navigate(`/dec/${id}`);
  };

  const addFav = (id) => {
    podcast.map((item) => {
      if (id === item.trackId) {
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
            .delete("http://localhost:5000/favorite", null, { params: { id } })
            .then((response) => response.status)
            .catch((err) => console.warn(err));
          setToggle(true);
        }
      }
    });
  };

  return (
    <div className="allPodcast">
      {podcast.map((item, i) => {
        return (
          <div
            key={i}
            // onClick={() => {
            //   inside(item.trackId);
            // }}
          >
            <Card
              item={item}
              addFav={() => addFav(item.trackId)}
              toggle={toggle}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Podcast;
