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



const App = () => {

  return(
    <BrowserRouter> 
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path="/" render ={() => <Photos /> } />
          <Route path="/cats" render={()=> <Photos />} />
          <Route path="/shoes" render={()=> <Photos />} />
          <Route path="/flowers" render={()=> <Photos />} />          
          <Route component={<NotFound/>} />
        </Switch>
       
   </BrowserRouter>


  );

}


export default App;
