import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Home from "./Home/Home";
import ClubFiveSix from "./Pages/Food/ClubFiveSix";
import TheBlitzLounge from "./Pages/Food/TheBlitzLounge";
import TBoltCafe from "./Pages/Food/TBoltCafe";
import TheGrill from "./Pages/Food/TheGrill";
import Hensman from "./Pages/Food/Hensman";
import Base from "./Template/Base";

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ClubFiveSix" component={ClubFiveSix} />
          <Route exact path="/TheBlitzLounge" component={TheBlitzLounge} />
          <Route exact path="/TBoltCafe" component={TBoltCafe} />
          <Route exact path="/TheGrill" component={TheGrill} />
          <Route exact path="/Hensman" component={Hensman} />
          <Route exact path="/:pageId" component={Base} />
          <Route component={Home} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
