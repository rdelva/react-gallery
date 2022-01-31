import React, { Component} from 'react';
import Form from './Form';
import SearchList from './SearchList';
import axios from 'axios';

class App extends Component {

  
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
