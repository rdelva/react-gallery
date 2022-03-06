import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
 
const PhotoGallery = (props) =>{
    const photoList = props.data;
    let images;

    if(photoList.length > 0 ){
        images = photoList.map((photo, index) => 
            <Photo server={photoList.server} secret={photoList.secret} id={photoList.id} key={index}  />           
        );
    } else {
        images = <NotFound />
    }
    
  

    return(
        <div className="photo-container">
            <ul>
                {
                    {images}
                }
                
            </ul>
        </div>
    );
}

export default PhotoGallery;