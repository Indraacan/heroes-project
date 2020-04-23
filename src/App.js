import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './component/Index'
import Heroes from './component/Heroes'
import Navbar from './component/Navbar'

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/hero" component={Heroes} />
    </Switch>
  </Router>
  );
}

export default App;
