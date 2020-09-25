import React from "react";
import "./App.css";
import FemaleModels from "./Categories/FemaleModels";
import Filters from "./Categories/Filters";
import Admin from "./UserForm";
import Stepper from "./AddUser";
import EditUser from "./EditUser";
import Upload from "./Upload";
import AddAgencies from "./AddAgencies";
import Country from "./Categories/Country";
import Model from "./Profile/FemaleModels/Model/Model";
import Socials from "./Profile/FemaleModels/Model/Socials";
import Stats from "./Profile/FemaleModels/Model/Stats";
import Agencies from "./Profile/FemaleModels/Model/Agencies";
import LinkInsta from "./Profile/FemaleModels/Model/LinkInsta";
import Home from "./Home/Home";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUser from "./AddUser";
const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        width: "100%",
        maxWidth: "unset!important",
        left: "0!important",
      },
      elevation4: {
        boxShadow: "unset",
      },
      rounded: {
        borderRadius: "15px",
      },
    },
    MuiToolbar: {
      regular: {
        minHeight: "unset",
      },
    },
    MuiFormControlLabel: {
      root: {
        marginRight: "14px",
      },
    },
    MuiList: {
      padding: {
        paddingBottom: 0,
      },
    },

    MuiListItemText: {
      multiline: {
        marginTop: "4px",
        marginBottom: "4px",
      },
      root: {
        marginTop: "-1px",
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: "550",
        fontSize: "1.05rem",
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: "400",
        lineHeight: "1.2",
        color: "#2E2E2E",
      },
      colorTextSecondary: {
        color: "#2E2E2E",
      },
      root: {
        margin: "5px 0 0 0",
      },
      h6: {
        fontSize: "1.1rem",
      },
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: "1rem",
      },
      root: {
        fontSize: "1.4rem",
      },
    },

    MuiIconButton: {
      sizeSmall: {
        fontSize: "0.9rem",
        opacity: "0.7",
        color: "#878686",
      },
      root: {
        paddingLeft: "10px!important",
        fontSize: "1.4rem",
        color: "#A3A3A3",
      },
    },
    MuiButton: {
      root: {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: 0,
        textTransform: "unset",
        borderRadius: "unset",
      },
      text: {
        padding: "15px 0px",
        marginTop: "1.9%",
        marginRight: "1%",
        letterSpacing: "1px",
      },
      containedPrimary: {
        backgroundColor: "#007AFF",
      },
    },

    MuiListItem: {
      root: {
        paddingTop: "1px",
        paddingBottom: "1px",
      },
      gutters: {
        padding: "0 8px",
        paddingLeft: "8px",
        paddingRight: 0,
      },
    },
    MuiTab: {
      root: {
        padding: "unset",
        fontSize: "0.775rem",
      },
      textColorPrimary: {
        color: "black",
        fontWeight: "500",
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
    h6: {
      fontSize: "1.1rem",
    },
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
          <Route path="/admin/edituser">
            <EditUser />
          </Route>
          <Route path="/admin/AddUser/:id?">
            <AddUser />
          </Route>
          <Route path="/admin/upload">
            <Upload />
          </Route>
          <Route path="/admin/addagencies">
            <AddAgencies />
          </Route>
          <Route path="/filters/:id/:name">
            <Filters />
          </Route>

          <Route path="/Country">
            <Country />
          </Route>

          <Route path="/Model/:id">
            <Model />
          </Route>

          <Route path="/socials/:id">
            <Socials />
          </Route>

          <Route path="/agencies/:id">
            <Agencies />
          </Route>

          <Route path="/stats/:id">
            <Stats />
          </Route>
          <Route path="/linkinsta/:id">
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
