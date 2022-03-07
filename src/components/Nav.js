import React from 'react';
import {
    NavLink,
    withRouter }
from 'react-router-dom';


const Nav = (props) => {
    
    return (

        <div className="main-nav">
            <ul>
                <li><NavLink to="/search/cats" onClick={props.navItem} id="cats">Cats</NavLink></li>
                <li><NavLink to="/search/dogs">Dogs</NavLink></li>
                <li><NavLink to="/search/birds">Birds</NavLink></li>
            </ul>
        </div>

    );

}

//export default Nav;
export default withRouter(Nav);