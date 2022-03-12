import React from 'react';
import NotFound from './NotFound';
import Photo from './Photo';
import {withRouter } from 'react-router-dom';
 

const PhotoGallery = (props, {match}) =>{
    const photoList = props.data;
    //console.log(props.match);

    // if(props.match.url){
    //     props.queryNameDisplay(props.match.params.query);
    // }
   
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
            <h2>{props.title} Photos</h2> 
            <ul>
                {images}
                
            </ul>
        </div>
    );
}


export default withRouter(PhotoGallery);
