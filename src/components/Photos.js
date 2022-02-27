import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const Photos = (props) => {
    const results = props.data;

    let gifs;
    
   

    if(results.length > 0){
        gifs = results.map((result, index) => 
        <Photo server={result.server} secret={result.secret} id={result.id} key={index}  />   
    
        );
    } else {
        gifs = <NotFound />
    }
    

    return(
     
        <div className="photo-container"> 
           <ul>
                {gifs}
            </ul>
        </div>   
      

    );



    
}// end of Photos 

export default Photos;