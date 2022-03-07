import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
 
const PhotoGallery = (props) =>{
    const photoList = props.data;
    let images;

    if(photoList.length > 0 ){
        images = photoList.map((photo, index) => 
            <Photo server={photo.server} secret={photo.secret} id={photo.id} key={index}  />           
        );
    } else {
        images = <NotFound />
    }
    
  

    return(
        <div className="photo-container">
            <ul>
                {images}
                
            </ul>
        </div>
    );
}

export default PhotoGallery;