import React from "react";
import "./App.css";
import FemaleModels from "./Categories/FemaleModels";
import Model from "./Profile/FemaleModels/Model/Model";
import Socials from "./Profile/FemaleModels/Model/Socials";
import Stats from "./Profile/FemaleModels/Model/Stats";
import Agencies from "./Profile/FemaleModels/Model/Agencies";
import LinkInsta from "./Profile/FemaleModels/Model/LinkInsta";
import Home from "./Home/Home";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        width: "100%",
        maxWidth: "unset!important",
        left: "0!important",
      },
    },
    MuiFormControlLabel: {
      root: {
        marginRight: "unset",
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: "700",
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: "600",
      },
    },
    MuiButton: {
      root: {
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: 0,
        textTransform: "unset",
      },
    },
    MuiTab: {
      root: {
        padding: "unset",
      },
      textColorPrimary: {
        color: "black",
        fontWeight: "400",
      },
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto",
      "Ubuntu",
      "sans-serif",
    ].join(","),
  },
});
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
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

          <Route path="/agencies/:id">
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
    </MuiThemeProvider>
  );
};

export default App;
