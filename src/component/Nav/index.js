import React  from "react";
import {NavLink, Link} from 'react-router-dom'
import { useNavigate } from 'react-router';
import "./style.css";
import { useLocation } from "react-router-dom";



const Nav = () => { 
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");


   /* const navigate = useNavigate()
    const goBack = () => {
        navigate.goBack()

    } */




    return (
        <div className="nav">
            <ul className="ulNav">
                <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to ='/'>All</Link> </li>
                <li className={splitLocation[1] === "Music" ? "active" : ""}>
                    <Link to ='/Music'>Music</Link></li>
                <li className={splitLocation[1] === "Ebook" ? "active" : ""}>
                    <Link to ="/Ebook">Ebook</Link></li>
                <li className={splitLocation[1] === "Podcast" ? "active" : ""}>
                    <Link to ="/Podcast">Podcast</Link></li>
                <li className={splitLocation[1] === "Movie" ? "active" : ""}>
                    <Link to ="/Movie">Movies</Link></li>
                <li className={splitLocation[1] === "Fav" ? "active" : ""}>
                    <Link to ="/Fav">You Love</Link></li>
                <li> <div className="search">
                <input type="text" placeholder = "Search Podcast or Music "/>
            </div></li> 
            </ul>
        </div>
    )

}

export default Nav;