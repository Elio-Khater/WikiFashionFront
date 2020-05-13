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
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { ListItemSecondaryAction } from "@material-ui/core";
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

  dividerColor: {
    backgroundColor: "#F8F8F8",
  },
}));

const Stats = () => {
  const StatData = {
    id: 1,
    chestcm: "85cm",
    chestinch: "33''",
    hair: "blonde",
    waistinch: "24'",
    waistcm: "62cm",
    heightinch: "5'10.5''",
    heightcm: "179cm",
    hipsinch: "36''",
    hipscm: "93cm",
    eyes: "blue",
    shoeam: "6",
    shoeeu: "40",
  };
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
  const [stat] = useState(StatData);

  return (
    <div className={classes.bggrey}>
      <div className={classes.rootAppBar} style={{ borderBottom: 0 }}>
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
              Stats
            </Typography>
          </Toolbar>
        </AppBar>

        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          <div className={classes.row}>
            <ListItem>
              <ListItemText primary="height" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  {stat.heightinch}
                  <FiberManualRecordIcon
                    style={{ padding: "0 3em", fontSize: "0.5rem" }}
                  />
                  {stat.heightcm}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem>
              <ListItemText primary="Chest" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  {stat.chestinch}
                  <FiberManualRecordIcon
                    style={{ padding: "0 3em", fontSize: "0.5rem" }}
                  />
                  {stat.chestcm}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem>
              <ListItemText primary="Waist" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  {stat.waistinch}
                  <FiberManualRecordIcon
                    style={{ padding: "0 3em", fontSize: "0.5rem" }}
                  />
                  {stat.waistcm}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem>
              <ListItemText primary="Hips" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  {stat.hipsinch}
                  <FiberManualRecordIcon
                    style={{ padding: "0 3em", fontSize: "0.5rem" }}
                  />
                  {stat.hipscm}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem>
              <ListItemText primary="hair" />

              <ListItemSecondaryAction>
                <IconButton size="small" edge="end" aria-label="comments">
                  {stat.hair}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem>
              <ListItemText primary="Eyes" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  {stat.eyes}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem>
              <ListItemText primary="Shoes" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  {stat.shoeam}
                  <FiberManualRecordIcon
                    style={{ padding: "0 3em", fontSize: "0.5rem" }}
                  />
                  {stat.shoeeu}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </div>
        </List>
      </div>
    </div>
  );
};

export default Stats;
