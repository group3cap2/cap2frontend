import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';




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
                <li> <Link to ="/Podcast">Music</Link></li>
                <li> <Link to ="/Users">User</Link></li>
                <li> <Link to ="/Fav">You Love</Link></li>
                <li> <Link to ="/Search">Search</Link></li>



            </ul>
        </div>
    )

}

export default Nav;