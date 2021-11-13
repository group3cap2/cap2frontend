import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Music from "./component/Music";
import Home from "./component/Home";
import Podcast from "./component/Podcast";
import Movie from "./component/Movie";
import Ebook from "./component/Ebook";
import Fav from "./component/Fav";
import Card from "./component/Card";
import Dec from "./component/Dec";
import Search from "./component/Search"
import "./App.css";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Podcast" element={<Podcast />} />
        <Route exact path="/Ebook" element={<Ebook />} />
        <Route exact path="/Music" element={<Music />} />
        <Route exact path="/Movie" element={<Movie />} />
        <Route exact path="/Card/:trackId" element={<Card />} />
        <Route exact path="/dec/:trackId" element={<Dec />} />
        <Route exact path="/Fav" element={<Fav />} />
        <Route exact path="/Search" element={<Search />} />
        {/*<Route  exact path="/Login" element={<Login/>} /> */}
      </Routes>
    </>
  );
};
export default App;
