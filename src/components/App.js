import React, { Component} from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';
import Photo from './Photo';
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

  enableSearch = (query = 'cats') =>{
 
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response);
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
    console.log(this.state.gifs);
    return (
      
      <div>
        <SearchForm onSearch={this.enableSearch}/>
        <Nav />  
        <div className="main-content">
          {
            (this.state.loading) 
              ? <p>Loading ...</p>
              : <Photo data = {this.state.gifs}/>
          }
        </div>



       </div> 
      
    );
  }

  }


export default App;
