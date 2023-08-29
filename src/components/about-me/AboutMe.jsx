import React from "react";
import "./AboutMe.css";
import { useRouteMatch, Link, Route } from "react-router-dom";
import MyStory from "./MyStory";
import Hobbies from "./Hobbies";
import Contact from "./Contact";

function AboutMe() {
  const { path, url } = useRouteMatch();
  return (
    <div className="about-me">
      <ul className="links">
        <li>
          <Link to={`${url}/my-history`}>Mi historia</Link>
        </li>

        <li>
          <Link to={`${url}/hobbies`}>Hobbies</Link>
        </li>

        <li>
          <Link to={`${url}/contact`}>Mi información de contacto</Link>
        </li>
      </ul>
      <Route path={`${path}/my-history`}>
        <MyStory />
      </Route>
      <Route path={`${path}/hobbies`}>
        <Hobbies />
      </Route>
      <Route path={`${path}/contact`}>
        <Contact />
      </Route>
    </div>
  );
}

export default AboutMe;
