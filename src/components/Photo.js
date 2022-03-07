import React from 'react';

const Photo = (props, key) => {
    console.log(props);
    return(
       
            <li>            
                <img src= {`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_q.jpg`} key={`${key}`} alt=""/>
            </li>

       
    );
}

export default Photo;