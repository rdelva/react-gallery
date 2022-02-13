import React from 'react';

const Photo = (props) => {
console.log(props);

    return(
        <li>            
            <img src= {`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_q.jpg  key=${props.index}`}/>
        </li>
    );

}

export default Photo;