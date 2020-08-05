import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Home from "./Home/Home";
import Admin from "./Admin/Admin";
import Base from "./Template/Base";

function App() {
  return (
    <div className="App">
      <Router>
        {window.location.pathname !== "/admin" && <Navigation />}
        <Switch>
          <Route exact path="/:pageId" component={Base} />
          <Route exact path="/admin" component={Admin} />
          <Route component={Home} />
        </Switch>
        {window.location.pathname !== "/admin" && <Footer />}
      </Router>
    </div>
  );
}

export default App;
