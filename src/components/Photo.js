import React from 'react';

const Photo = (props, key) => {
;

    return(
  

            <li>            
                <img src= {`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_q.jpg`} key={`${key}`}/>
            </li>

    
 
    );

}

export default Photo;