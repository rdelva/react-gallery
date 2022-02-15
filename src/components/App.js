import React, { Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import SearchForm from './SearchForm';
import Nav from './Nav';
import Photos from './Photos';
import axios from 'axios';
import apiKey from '../config';



class App extends Component {
  constructor(){
    super();
    this.state={
      gifs:[],
      loading: true
    }
  }


  componentDidMount(){
    this.enableSearch();
  }

  enableSearch = (query = 'sunrise') =>{
 
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        gifs: response.data.photos.photo,
        loading: false
      });
  
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });


  }

  render(){
    return (
      <BrowserRouter>
        <div className="container">          
            <Route path ="/" component={SearchForm} />
            <Route path = "/" component={Nav} />
            <div className="main-content">
              {
                (this.state.loading) 
                  ? <p>Loading ...</p>
                  : <Route path ="/" render={ () => <Photos data = {this.state.gifs}/>} />                
              }
            </div>
        
        </div> 
      </BrowserRouter>
    );
  }

  }


export default App;
