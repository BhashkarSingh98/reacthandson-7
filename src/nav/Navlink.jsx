import React from "react";
import { NavLink } from "react-router-dom";


function Navlink(){
    return(
        <>
        <div className="nav">

       
        <ul>
            <li>
                <NavLink to="/">HOME</NavLink>

             </li>
           
            <li>
                <NavLink to="/students">STUDENTS</NavLink>
            </li>
            <li>
                <NavLink to="/contect">CONTECT US</NavLink>
            </li>
        </ul>

        </div>
        </>
    )
}
export default Navlink;