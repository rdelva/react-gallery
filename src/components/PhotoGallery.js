import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
import {withRouter } from 'react-router-dom';
 

const PhotoGallery = (props) =>{
    const photoList = props.data;

    let images;

    if(photoList.length > 0 ){
        images = photoList.map((photo, index) => 
            <Photo server={photo.server} secret={photo.secret} id={photo.id} key={index}  alt={props.altTag}/>           
        );
    } else {
        images = <NotFound />
    }




    return(
        <div className="photo-container">
            <h1>{props.title} Photos</h1> 
            <ul>
                {images}
                
            </ul>
        </div>
    );
}

//export default PhotoGallery;
export default withRouter(PhotoGallery);
