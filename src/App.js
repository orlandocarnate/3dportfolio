import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Architecture from "./pages/Architecture";
import Tradeshows from "./pages/Tradeshows";
import Threejs from "./pages/Threejs";
import VRTours from "./pages/VirtualTours";
import Products from "./pages/Products";
import Sculpting from './pages/Sculpting';

function App() {
  return (
    <HashRouter basename="/">
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Threejs" component={Threejs} />
          <Route path="/VRTours" component={VRTours} />
          <Route path="/Architecture" component={Architecture} />
          <Route path="/Tradeshows" component={Tradeshows} />
          <Route path="/Products" component={Products} />
          <Route path="/Sculpting" component={Sculpting} />
        </Switch>
      </div>
    </HashRouter>

  );
}

export default App;

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});
