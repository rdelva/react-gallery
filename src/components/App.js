import React from 'react';
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



const App = () => (
  <BrowserRouter> 
    <SearchForm />
    <Nav />
    <Switch>
    <Route exact path="/" />
      <Route path="/cats" component={Photos} />
      <Route path="/shoes" component={Photos} />
      <Route path="/flowers" component={Photos} />          
      <Route component={<NotFound/>} />
    </Switch>
 
</BrowserRouter>
);
   




export default App;
