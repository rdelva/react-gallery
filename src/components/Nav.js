import React from 'react';
import {
    NavLink,
    withRouter }
from 'react-router-dom';


const Nav = (props) => {
    //    console.log(props); 
    //   //adding searches to the history
    //   let path = props.location.pathname;
    // console.log(path);
      
    
    return (
        /*
         * When you click on the link it sends an event which contains the id name to be sent into the query. through the navItem props       
         */
        <div className="main-nav">
            <ul>
                <li><NavLink to="/search/cats" onClick={props.navItem} id="cats">Cats</NavLink></li>
                <li><NavLink to="/search/dogs" onClick={props.navItem} id="dogs">Dogs</NavLink></li>
                <li><NavLink to="/search/birds" onClick={props.navItem} id="birds">Birds</NavLink></li>
            </ul>
        </div>

    );

}

//export default Nav;
export default withRouter(Nav);