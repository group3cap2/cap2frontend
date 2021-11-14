import React, { useState } from "react";
import axios from "axios";
import Card from "../Card";
import "./style.css";

const Search = () => {
  const [result, setResult] = useState([]);

  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:5000/search/${myTerm}`
      );
      setResult(response.data.results);
    }
  };

  console.log(result);

  return (
    <>
      <div className="search">
        <input
          onKeyDown={getSearched}
          autoFocus
          id="search"
          placeholder="Search Book or Podcast"
          type="text"
          className="search"
        />
        {/*<button onClick={ getSearched } placeholder="Search">
          Search
  </button>*/}
      </div>
      <div className="searchCon">
        {result.map((item) => (
          <Card item={item} />
          // <img src={item.artworkUrl30} />
        ))}
      </div>
    </>
  );
};

export default Search;
