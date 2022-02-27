import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//import Components
import SearchForm from './SearchForm';
import Nav from './Nav';
import Photos from './Photos';
import NotFound from './NotFound';
import SearchItem from './SearchItem';
// import ShowTheLocation from './ShowTheLocation';
// import withRouter from './withRouter';


export default class App extends Component {
  constructor(){
    super();

    this.state = {
        gifs:[],
       
    };
  
    
  }




  componentDidMount(){
    this.performSearch();
  }

  handleClick( {match}){

    console.log("Hewo");
    console.log({match});
   

    // Create a new component that is "connected" (to borrow redux
    // terminology) to the router.
    // const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
    // console.log(ShowTheLocationWithRouter);

  }

  performSearch = (query = 'tulips') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( response => {
            
            this.setState({
              gifs: response.data.photos.photo,
              loading: false
            });
    })
    .catch(
       error => {
         console.log('Error fetch and parsing data', error);
       });
  }

  render(){
    return (  
      <div className="container">
      <BrowserRouter> 
     
      <SearchForm onSearch={this.performSearch} />
      <Nav navItem={this.handleClick} /> 
      

        <Switch>
            {  
            (this.state.loading)
              ? <p>Loading...</p>
              : <Route  exact path="/" render={ ()=> <Photos data={this.state.gifs} title= {this.query} /> }/>          
          }
       
          <Route path="/:query" render={ () => <Photos /> } />        
          <Route component={NotFound} />
        </Switch> 
      </BrowserRouter>
      </div>
    );
  }
}
   


//export default App;
