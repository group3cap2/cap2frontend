import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';




const Nav = () => { 
    const navigate = useNavigate()
    const goBack = () => {
        navigate.goBack()

    } 

    return (
        <div className="nav">
            <ul>
                <li> <Link to ="/Music">Music</Link></li>
            </ul>
        </div>
    )

}

export default Nav;