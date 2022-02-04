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
