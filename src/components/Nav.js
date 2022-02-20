import React from 'react';
import {Route, NavLink } from 'react-router-dom';



const Nav  = () => {
    return(

       <div className="main-nav"> 
            <ul>
                <li><NavLink to="/cats" activeClassName="active">Cats</NavLink></li>
                <li><NavLink to="/shoes" activeClassName="active">Dogs</NavLink></li>
                <li><NavLink to="/flowers" activeClassName="active">Birds</NavLink></li>
            </ul>

        </div>
    
    );
   

}

export default Nav;