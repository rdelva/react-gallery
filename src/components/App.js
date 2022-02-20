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



export default class App extends Component {
  constructor(){
    super();
    this.state = {
        gifs:[]
    };
  }

  componentDidMount(){
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( response => {
            
            this.setState({
              gifs:response.data.photos.photo,
              loading:false
            });
    })
    .catch(
       error => {
         console.log('Error fetch and parsing data', error);
       });
  }

  render(){
    
    return (
      <BrowserRouter> 
      <SearchForm onSearch={this.performSearch} />
      <Nav />
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <Photos data={this.state.gifs} />          
        }

        <Switch>
          <Route exact path="/" />
          <Route path="/cats" component={Photos} />
          <Route path="/shoes" component={Photos} />
          <Route path="/flowers" component={Photos} />          
          <Route component={NotFound} />
        </Switch> 
      </BrowserRouter>
    );
  }
}
   


//export default App;
