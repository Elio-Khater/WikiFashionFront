import React from "react";
import "./App.css";
import FemaleModels from "./Categories/FemaleModels";
import Model from "./Profile/FemaleModels/Model/Model";
import Socials from "./Profile/FemaleModels/Model/Socials";
import Stats from "./Profile/FemaleModels/Model/Stats";
import Agencies from "./Profile/FemaleModels/Model/Agencies";
import LinkInsta from "./Profile/FemaleModels/Model/LinkInsta";
import Home from "./Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/FemaleModels/:id/:name">
          <FemaleModels />
        </Route>

        <Route path="/Model/:id">
          <Model />
        </Route>

        <Route path="/socials">
          <Socials />
        </Route>

        <Route path="/agencies">
          <Agencies />
        </Route>

        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="/linkinsta">
          <LinkInsta />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
