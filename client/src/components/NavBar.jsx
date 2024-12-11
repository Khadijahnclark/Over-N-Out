import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Community">Community</NavLink>
                </li>
                <li>
                    <NavLink to="/NewsFeed">Game News</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;