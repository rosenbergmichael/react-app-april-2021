import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/destinations' component={Destinations} />
          <Route path='/about' component={About} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>  
    </>
  );
}

export default App;
