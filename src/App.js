import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Register from './component/register/index';
import Login from './component/login/index';

function App() {
  return (
      <Container>
        <Router>
          <Route path={'/'} exact component={Register}/>
          <Route path={'/login'} component={Login}/>
        </Router>
      </Container>
  )
}

export default App;
