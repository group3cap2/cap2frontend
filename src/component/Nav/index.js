import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import "./style.css";



const Nav = () => { 
    const navigate = useNavigate()
    const goBack = () => {
        navigate.goBack()

    } 

    return (
        <div className="nav">
            <ul>
                <li> <Link to ="/All">All</Link></li>
                <li> <Link to ="/Music">Music</Link></li>
                <li> <Link to ="/Podcast">Podcast</Link></li>
                <li> <Link to ="/Movie">Movie</Link></li>
                <li> <Link to ="/MusicVideo">Music Video</Link></li>
                <li> <Link to ="/Audiobook">Audio Book</Link></li>
                <li> <Link to ="/Software">software</Link></li>
                <li> <Link to ="/Ebook">ebook</Link></li>
                <li> <Link to ="/Fav">You Love</Link></li>
                <li> <Link to ="/User">User</Link></li>




            </ul>
        </div>
    )

}

export default Nav;