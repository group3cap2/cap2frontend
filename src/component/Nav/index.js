import React , {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import "./style.css";



const Nav = () => { 

    
    

   /* const navigate = useNavigate()
    const goBack = () => {
        navigate.goBack()

    } */




    return (
        <div className="nav">

            <ul className="ulNav">
                <li> <Link to ="/">All</Link></li>
                <li> <Link to ="/Music">Music</Link></li>
                <li> <Link to ="/Ebook">Ebook</Link></li>
                <li> <Link to ="/Podcast">Podcast</Link></li>
                <li> <Link to ="/Movie">Movies</Link></li>
                <li> <Link to ="/Fav">You Love</Link></li>
                { /*     <li> <Link to ="/Login">Login</Link></li> */}
                 <li> <div className="search">
           <input type="text" placeholder = "Search Podcast or Music "/>
           { /* <button  placeholder="Search">Search</button> */}

            </div></li> 
            </ul>
        </div>
    )

}

export default Nav;