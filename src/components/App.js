import React from "react";
import Header from "./Header";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Dashboard from "./Dashboard";
import AboutMe from "./about-me/AboutMe";
import Reviews from "./Reviews";
import "./App.css";
import AboutUs from "./about-us/AboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
