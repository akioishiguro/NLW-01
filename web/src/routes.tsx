import React from 'react'; 

import { Route, BrowserRouter } from 'react-router-dom';

// pages
import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes: React.FC = () => { 
  return(
    <BrowserRouter> 
      <Route path="/" exact component={Home}/>
      <Route path="/create-point" component={CreatePoint}/>
    </BrowserRouter>
    
  );
}

export default Routes;