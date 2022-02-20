import React from 'react';
import {Route, NavLink } from 'react-router-dom';



const Nav  = () => {
    return(

       <div className="main-nav"> 
            <ul>
                <li><NavLink to="/cats" >Cats</NavLink></li>
                <li><NavLink to="/shoes" >Dogs</NavLink></li>
                <li><NavLink to="/flowers" >Birds</NavLink></li>
            </ul>

        </div>
    
    );
   

}

export default Nav;