import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  rootAppBar: {
    flexGrow: 1,
    backgroundColor: "#F8F8F8",
  },
  toolRoot: {
    padding: 0,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
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
    top: "12%",
    width: "100%",
    flexGrow: 1,
    zIndex: 0,
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

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
    borderRadius: "17px 17px",
    margin: "0 5%",
    minHeight: "15px",
  },
  tab: {
    borderRadius: "17px 17px",
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
  dividerColor: {
    backgroundColor: "#F8F8F8",
  },
}));

const LinkInsta = () => {
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

  return (
    <div className={classes.bggrey} style={{ borderBottom: 0, height: "100%" }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolRoot}>
          <div style={{ position: "absolute", zIndex: 99999 }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => nextPath("/Model")}
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
            <ListItem className={classes.title}>
              <ListItemText primary="Edit Profile" />
            </ListItem>
          </Typography>
        </Toolbar>
      </AppBar>

      <img
        style={{
          width: "100%",
          height: "auto",
          marginTop: "10%",
          opacity: 0.2,
        }}
        src="https://d1e4pidl3fu268.cloudfront.net/8c98cbc4-cca0-44d1-b79f-9d33058c03e5/ScreenShot20180628at94136am.crop_475x356_0,37.preview.png"
      />
      <div style={{ textAlign: "center", margin: "10%" }}>
        <p style={{ color: "grey" }}>
          In order to edit this profile you have to be the owner of this
          instagram account
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "0 0 10% 0",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          style={{
            fontSize: "1rem",
            borderRadius: "17px 17px",
            width: "80%",
            height: "auto",
          }}
        >
          <IconButton
            size="small"
            aria-label="comments"
            className={classes.icon}
            style={{ marginRight: "1%" }}
          >
            <InstagramIcon fontSize="small" style={{ color: "white" }} />
          </IconButton>
          Link this instagram account
        </Button>
      </div>
    </div>
  );
};

export default LinkInsta;
