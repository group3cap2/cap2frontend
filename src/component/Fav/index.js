import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Card from "./../Card";
import axios from "axios";
// import "./style.css";

const Fav = () => {
  const [favorite, setFavorite] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = async () => {
    const response = await axios.get("http://localhost:5000/favorite");
    // console.log(response.data);
    setFavorite(response.data);
  };

  const inside = (id) => {
    console.log(id);
    navigate(`/dec/${id}`);
  };

  return (
    <div className="allbook">
      {favorite.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              inside(item.trackId);
            }}
          >
            <Card item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Fav;
