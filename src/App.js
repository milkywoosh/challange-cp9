import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './Landing/Landing.js';
import Signup from './Signup/Signup.js';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/Signup">
              <Signup />
              </Route>
            </Switch>
        </Router>
    );
  }
}

export default App;