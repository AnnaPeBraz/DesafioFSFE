import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from "react";
import Home from './components/home';

function App() {
  return (
    <Router>
      <div>
        <p> olar </p>
      </div>

      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    
  )
}

export default App;
