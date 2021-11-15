import React, { useState, useEffect } from "react";
import Card from "./../Card";
import axios from "axios";
// import "./style.css";

const Fav = () => {
  const [favorite, setFavorite] = useState([]);
  const [isFav, setIsFav] = useState(true);

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
    favorite.map((item, i) => {
      if (id === item.trackId) {
        console.log(id, item.trackId);
        axios
          .delete(`https://cap2backend.herokuapp.com/favorite/${id}`)
          .then((response) => response.status)
          .catch((err) => console.warn(err));
          setIsFav(false);
          favorite.splice(i, 1);
      }
    });
  };

  return (
    <div className="allbook">
      {favorite.map((item, i) => {
        return (
          <div
            key={i}
            // onClick={() => {
            //   inside(item.trackId);
            // }}
          >
            <Card item={item} addFav={() => addFav()} />
            <div>
              <button
                className="btn"
                onClick={() => {
                  addFav(item.trackId);
                }}
              >
                {isFav ? "Remove from Favorites" : "Add to Favorites"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Fav;
