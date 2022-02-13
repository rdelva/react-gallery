import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const Photos = (props) => {
    
    const results = props.data;

    let photos;

    if(results.length > 0) {
        photos = results.map(  (result, index) => 
            <Photo 
                server={result.server} 
                id={result.id}
                secret={result.secret}
                key={index}
                            
            />
        );
       
    } else {
        gifs = <NotFound />
    }
 console.log(photos);
    return(
       <div className="photo-container">
           <ul>
                { photos }
            </ul>
       </div> 


    );

}

export default Photos;