import React, {Component} from 'react';
import axios from 'axios';
import apiKey from './config.js';
import{    
    Route,
    Switch, 
    withRouter
} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoGallery from './components/PhotoGallery';
import Error from './components/Error';

class App extends Component{

    constructor(){
        super();
        
        this.state = {
            gifs:[],
            loading:true,
            history:'',
            query:'tulip'
        }
    }

    /* 
    * Handle Click for the Navaigation
    *    
    */
    handleClick = (e) =>{
        const query = e.target.id       
        this.performSearch(query); 

    }


    componentDidMount(){
       this.performSearch();    
            
          
    }
    
    /**** 
    * tracks to see if the address bar is the same  as the display
    */
    componentDidUpdate(prevProps) {

        // console.log(prevProps.location.pathname); //whats displayed
        // console.log(this.props.location.pathname); //address in the adress bar

        if (this.props.location.pathname !== prevProps.location.pathname) {         
          const prevQuery =  this.props.location.pathname.split("/");
          const addressBarState = prevQuery[2];
          this.performSearch(addressBarState);          
        } 

               
    }// end of componentDidUpdate
   


  
    /* 
        Using Axios to pull the images and then sending it to PhotoGallery
     */
    performSearch = (query = 'tulips') => {

        //sets up loading window before it pulls data
        this.setState({loading:true});

        //fetches data
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then( response => {
                
                this.setState({
                  gifs: response.data.photos.photo,
                  loading: false,
                  query: query,
                  history:`/search/${query}`
                
                });

        })
        .catch(
           error => {
             console.log('Error fetch and parsing data', error);
           });
      }
    

    render () {      
       
        return(
            <div className="container">
                
                    <SearchForm onSearch={this.performSearch} />
                    <Nav navItem={this.handleClick} />
 
                    <Switch>
                        <Route exact path="/" render={() =>                                                
                            (this.state.loading)
                            ? <p>Loading ...</p>
                            : <PhotoGallery data={this.state.gifs}  title={this.state.query} altTag={this.state.query}/>                            
                         }/>
                         
                        <Route  path="/search/:query" render={ ()=> 
                            (this.state.loading)
                            ? <p>Loading ...</p>
                            : <PhotoGallery  data={this.state.gifs} title={this.state.query} altTag={this.state.query}  onLoad={this.handleAddress} /> }/>       
                        <Route component={Error} />
                    </Switch>    
               
              

            </div>

        );
    }

}

export default withRouter(App);
