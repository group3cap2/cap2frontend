import React from "react";
import axios from "axios";
import {Route ,Routes } from "react-router-dom"
import Nav from "./component/Nav";
import All from "./component/All";
import Audiobook from "./component/Audiobook";
import Movie from "./component/Movie";
import Music from "./component/Music";
import MusicVideo from "./component/MusicVideo";
import Podcast from "./component/Podcast";
import ShortFilm from "./component/ShortFilm";
import Software from "./component/Software";
import TvShow from "./component/TvShow";
import Ebook from "./component/Ebook";





import "./App.css";

const App = () => {

  return (
    <>
      <Nav />
      <Routes>
      <Route exact path="/All" element={<All/>} />
      <Route exact path="/Audiobook" element={<Audiobook/>} />
      <Route exact path="/Movie" element={<Movie/>} />
      <Route exact path="/Music" element={<Music/>} />
      <Route exact path="/MusicVideo" element={<MusicVideo/>} />
      <Route exact path="/Podcast" element={<Podcast/>} />
      <Route exact path="/ShortFilm" element={<ShortFilm/>} />
      <Route exact path="/Software" element={<Software/>} />
      <Route exact path="/TvShow" element={<TvShow/>} />
      <Route exact path="/Ebook" element={<Ebook/>} />

      </Routes>
      </>
  );
}
export default App;
