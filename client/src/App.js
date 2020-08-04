import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Home from "./Home/Home";
import Base from "./Template/Base";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/:pageId" component={Base} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
