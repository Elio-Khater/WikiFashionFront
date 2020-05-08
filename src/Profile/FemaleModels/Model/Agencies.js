import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { ListItemSecondaryAction } from "@material-ui/core";
import { useHistory } from "react-router-dom";

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
    marginTop: "3%",
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    position: "absolute",
    top: "20%",
    width: "100%",
    flexGrow: 1,
    zIndex: 0,
    textAlign: "center",
    color: theme.palette.text.primary,
  },
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
  },

  pic: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  bggrey: {
    backgroundColor: "#f8f8f8",
    height: "100%",
  },
}));

const Agencies = () => {
  const AgenciesData = [
    { id: 1, name: "Viva Paris", isMotheragency: 1 },
    { id: 2, name: "IMG NYC", isMotheragency: 0 },
    { id: 3, name: "IMG Milan", isMotheragency: 0 },
    { id: 4, name: "IMG Israel", isMotheragency: 0 },
    { id: 5, name: "Women Berlin", isMotheragency: 0 },
  ];
  const handleClose = () => {
    setAnchorEl(null);
  };
  const nextPath = (path) => {
    history.push(path);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState("");
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [agencies] = useState(AgenciesData);
  return (
    <div className={classes.bggrey}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolRoot}>
            <div style={{ position: "absolute", zIndex: 99999 }}>
              <IconButton
                onClick={() => nextPath("/Model")}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{ color: "#007AFF" }}
              >
                <ArrowBackIosIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              ></Menu>
            </div>
            <Typography variant="h6" className={classes.title}>
              Agencies
            </Typography>
          </Toolbar>
        </AppBar>

        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          {agencies.map((agency) => (
            <div className={classes.row}>
              <ListItem button>
                <ListItemText primary={agency.name} />

                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    edge="end"
                    aria-label="comments"
                    className={classes.icon}
                  >
                    {agency.isMotheragency === 1 && "Mother Agency"}

                    <ArrowForwardIosIcon
                      fontSize="small"
                      style={{ paddingLeft: "0.2em" }}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider className={classes.dividerColor} />
            </div>
          ))}
        </List>
      </MuiThemeProvider>
    </div>
  );
};

export default Agencies;
