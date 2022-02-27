import React from 'react';
import { NavLink } from 'react-router-dom';



const Nav  = (props) => {
    return(

       <div className="main-nav"> 
            <ul>
                <li><NavLink to="/cats" onClick={props.navItem}>Cats</NavLink></li>
                <li><NavLink to="/dogs" onClick={props.navItem}>Dogs</NavLink></li>
                <li><NavLink to="/birds"  onClick={props.navItem}>Birds</NavLink></li>
            </ul>
        
        </div>
        
    );
   
     
}

export default Nav;