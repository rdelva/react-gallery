import React, {Component} from 'react';
import axios from 'axios';
import apiKey from './config.js';
import{
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoGallery from './components/PhotoGallery';
import NotFound from './components/NotFound';

class App extends Component{

    constructor(){
        super();
        
        this.state = {
            gifs:[],
            loading:true
        }
    }


    handleClick = (e) =>{
        const query = e.target.id       
        this.performSearch(query); 
      
    
    }

    componentDidMount(){
       this.performSearch();
    }

    

    performSearch = (query = 'tulips') => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then( response => {
                
                this.setState({
                  gifs: response.data.photos.photo,
                  loading: false,
                  query: query
                
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
                <BrowserRouter>
                    <SearchForm onSearch={this.performSearch} />
                    <Nav navItem={this.handleClick} />
 
                    <Switch>
                        <Route exact path="/" render={() =>                                                
                            (this.state.loading)
                            ? <p>Loading ...</p>
                            : <PhotoGallery data={this.state.gifs}  title={this.state.query} altTag={this.state.query}/>                            
                         }/>
                        <Route exact path="/search/:query" render={ ()=> <PhotoGallery  data={this.state.gifs} title={this.state.query} altTag={this.state.query}/> }/>       
                        <Route component={NotFound} />
                    </Switch>    
                </BrowserRouter>
              

            </div>


        );
    }

}

export default App;
