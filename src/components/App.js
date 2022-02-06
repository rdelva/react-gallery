import React, { Component} from 'react';
import Form from './Form';
import SearchList from './SearchList';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={
      gifs:[]
    }
  }


  componentDidMount(){
    this.enableSearch();
  }

  enableSearch = () =>{

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
        <Form />
        <SearchList />
  
       </div> 
      
    );
  }

  }


export default App;
