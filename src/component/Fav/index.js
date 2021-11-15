import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "./../Card";
import axios from "axios";
// import "./style.css";

const Fav = () => {
  const [favorite, setFavorite] = useState([]);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);


  useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = async () => {
    const response = await axios.get("https://cap2backend.herokuapp.com/favorite");
    // console.log(response.data);
    setFavorite(response.data);
  };

  const addFav = (id) => {
    // eslint-disable-next-line
    console.log(id, favorite.trackId)
    if (id === favorite.trackId) {
      if (toggle === true) {
        axios
          .post("https://cap2backend.herokuapp.com/favorite/podcast", null, {
            params: { id },
          })
          .then((response) => response.status)
          .catch((err) => console.warn(err));
        setToggle(false);
      } else {
        axios
          .delete(`https://cap2backend.herokuapp.com/favorite/${id}`)
          .then((response) => response.status)
          .catch((err) => console.warn(err));
        setToggle(true);
      }
    }
  };

  return (
    <div className="allbook">
      {favorite.map((item, i) => {
        return (
          <div
            // key={i}
            // onClick={() => {
            //   inside(item.trackId);
            // }}
          >
            <Card item={item} addFav={()=> addFav()}/>
          </div>
          
        );
      })}
    </div>
  );
};

export default Fav;