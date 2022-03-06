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

class App extends Component{
    render () {
        return(
            <div className="container">
                <BrowserRouter>
                    <SearchForm />
                    <Nav />
                </BrowserRouter>
              

            </div>


        );
    }

}

export default App;