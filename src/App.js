import React, {useState, useEffect} from "react";
import axios from "axios";
import {Route ,Routes } from "react-router-dom"
import Nav from "./component/Nav";
import All from "./component/All";
import Audiobook from "./component/Audiobook";
import Movie from "./component/Movie";
import Music from "./component/Music";
import MusicVideo from "./component/MusicVideo";
import Podcast from "./component/Podcast";
import Software from "./component/User";
import Ebook from "./component/Ebook";
import Fav from "./component/Fav";
import User from "./component/User";
import "./App.css";


const App = () => {

  return (
    <>
    <div className="App">

    </div>

      <Nav />
      <Routes>
      <Route exact path="/All" element={<All/>} />
      <Route exact path="/Audiobook" element={<Audiobook/>} />
      <Route exact path="/Movie" element={<Movie/>} />
      <Route exact path="/Music" element={<Music/>} />
      <Route exact path="/MusicVideo" element={<MusicVideo/>} />
      <Route exact path="/Podcast" element={<Podcast/>} />
      <Route exact path="/Software" element={<Software/>} />
      <Route exact path="/User" element={<User/>} />
      <Route exact path="/Ebook" element={<Ebook/>} />
      <Route exact path="/Fav" element={<Fav/>} />

      </Routes>
      </>
  );
}

export default App;
