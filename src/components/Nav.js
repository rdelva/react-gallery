import React from 'react';
import {Route, NavLink } from 'react-router-dom';



const Nav  = () => {
    return(

       <div className="main-nav"> 
            <ul>
                <li><NavLink to="/cats">Cats</NavLink></li>
                <li><NavLink to="/shoes">Shoes</NavLink></li>
                <li><NavLink to="/flowers">Flowers</NavLink></li>
            </ul>

           
                <Route path="/cats"  />
                <Route path="/shoes"  />
                <Route path="/flowers" />
           
         

        </div>
    



    );
   

}

export default Nav;