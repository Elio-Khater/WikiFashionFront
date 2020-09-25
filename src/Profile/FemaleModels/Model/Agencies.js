import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { ListItemSecondaryAction } from "@material-ui/core";
import { useHistory, useParams, Link } from "react-router-dom";
import UserServices from "../../../Services/UserServices";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h6: {
        fontSize: "1.1rem",
      },
      body1: {
        fontSize: "1.05rem",
      },
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: "1rem",
      },
    },
    MuiIconButton: {
      root: {
        color: "#A3A3A3",
      },
    },
    MuiList: {
      padding: {
        paddingBottom: 0,
        paddingTop: 0,
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

const useStyles = makeStyles((theme) => ({
  rootAppBar: {
    flexGrow: 1,
    backgroundColor: "#F8F8F8",
  },
  toolRoot: {
    padding: 0,
  },
  dividerColor: {
    backgroundColor: "#F8F8F8",
  },

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: "1%",
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    width: "100%",
    flexGrow: 1,
    zIndex: 0,
    textAlign: "center",
    color: "black",
    fontWeight: "600",
    position: "absolute",
    letterSpacing: "0",
    top: "15%",
  },
  offset: theme.mixins.toolbar,
  search: {
    position: "relative",

    //marginRight: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      //marginLeft: theme.spacing(3),
      //width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  },
  TuneIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  },
  inputRoot: { flexGrow: 1, width: "100%" },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  bgtab: {
    backgroundColor: "#F0F0F0",

    margin: "0 5%",
    minHeight: "15px",
  },
  tab: {
    textTransform: "unset",
    minHeight: "15px",
  },
  menu: {
    width: "100%",
    maxWidth: "unset",
  },
  icon: {
    borderRadius: 0,
  },
  row: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: "4px",
    paddingBottom: "4px",
  },

  pic: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  bggrey: {
    //backgroundColor: "#f8f8f8",
    height: "100%",
  },
}));

const Agencies = () => {
  let { id } = useParams();

  const history = useHistory();
  const classes = useStyles();

  const [agencies, setAgencies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await UserServices.GetAgenciesById(id);
      setAgencies(result.data);
    }
    fetchData();
  }, []);

  const redirect = (link) => {
    window.location.href = link;
  };
  return (
    <div className={classes.bggrey}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolRoot}>
          <div>
            <IconButton
              onClick={() => history.goBack()}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              style={{ color: "#007AFF" }}
            >
              <ArrowBackIosRoundedIcon
                style={{ fontSize: "1.6rem", zIndex: "2000" }}
              />
            </IconButton>
          </div>
          <Typography variant="h6" className={classes.title}>
            Agencies
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        <MuiThemeProvider theme={theme}>
          {agencies.map((agency, index) => (
            <div className={classes.row}>
              <ListItem button onClick={() => redirect(agency.link)}>
                <ListItemText primary={agency.name} />

                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    edge="end"
                    aria-label="comments"
                    className={classes.icon}
                  >
                    {agency.isMotheragency === 1 && "Mother Agency"}

                    <ArrowForwardIosRoundedIcon
                      fontSize="small"
                      style={{ paddingLeft: "0.2em" }}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              {index !== agencies.length - 1 && (
                <Divider className={classes.dividerColor} />
              )}
            </div>
          ))}
        </MuiThemeProvider>
      </List>
    </div>
  );
};

export default Agencies;
