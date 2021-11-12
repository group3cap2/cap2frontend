import React from "react";
import axios from "axios";

import { Route, Routes } from "react-router-dom"
import Nav from "./component/Nav";
import Music from "./component/Music";
import Home from './component/Home';
import Podcast from './component/Podcast';
import Ebook from './component/Ebook';
import Login from './component/Login';
import Search from './component/Search';
import Fav from './component/Fav';
import "./App.css";





import "./App.css";

const App = () => {

  return (
    <>
      <Nav />
      <Routes>

      <Route  exact path="/" element={<Home/>} />
      <Route  exact path="/Podcast" element={<Podcast/>} />
      <Route  exact path="/Ebook" element={<Ebook/>} />
      <Route  exact path="/Music" element={<Music/>} /> 
      <Route  exact path="/Login" element={<Login/>} />
      <Route  exact path="/Search" element={<Search/>} />
      <Route  exact path="/Fav" element={<Fav/>} /> 

      </Routes>
      </>
  );
}
export default App;
