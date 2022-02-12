import React, { Component} from 'react';
import SearchForm from './SearchForm';
import SearchList from './SearchList';
//import GifList from './Components/GifList';
import axios from 'axios';

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

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=3d92e860f2bbda59f5984f034285876f&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        gifs: response.data.data,
        loading: false
      });
  
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });


  }

  render(){

    return (
      
      <div>
        <SearchForm onSearch={this.enableSearch}/>
        <SearchList />  
        <div className="main-content">
     
        </div>



       </div> 
      
    );
  }

  }


export default App;
