import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [result, setResult] = useState([]);
  const getSearched = async (e) => {
    if (e.key === "Enter") {
      let myTerm = e.target.value;
      const response = await axios.get(
        `http://localhost:5000/favorite/search/${myTerm}`
      );
      setResult(response.data.results);
    }
  };

  return (
    <>
      <input
        onKeyDown={getSearched}
        autoFocus
        id="search"
        placeholder="search for something..."
        type="text"
        className="search"
      />
      <button onClick={getSearched} placeholder="Search">
        Search
      </button>
      {result.map((item) => (
        <img src={item.artworkUrl30} />
      ))}
    </>
  );
};

export default Search;
