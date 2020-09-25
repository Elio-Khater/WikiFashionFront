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
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { ListItemSecondaryAction } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import UserServices from "../../../Services/UserServices";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: "1.05rem",
        letterSpacing: 0,
      },
    },
    MuiIconButton: {
      sizeSmall: {
        fontSize: "1rem",
      },
      root: {
        color: "#A3A3A3",
        fontWeight: "300",
      },
    },
    MuiListItem: {
      root: {
        paddingTop: "2px",
        paddingBottom: "2px",
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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
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
  statspace: {
    padding: "8px 0",
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
    paddingTop: "0px",
    paddingBottom: "0px",
  },

  pic: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  bggrey: {
    //backgroundColor: "#f8f8f8",
    height: "100%",
  },

  dividerColor: {
    backgroundColor: "#F8F8F8",
  },
  offset: theme.mixins.toolbar,
}));

const Stats = () => {
  const history = useHistory();
  const classes = useStyles();
  let { id } = useParams();
  const [stat, setStat] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await UserServices.getUserById(id);
      console.log(result.data);
      setStat(result.data);
    }
    fetchData();
  }, []);

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
            Stats
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
          <div className={classes.row}>
            <ListItem>
              <ListItemText primary="Height" className={classes.statspace} />

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
                  {stat.heightcm + "cm"}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem>
              <ListItemText primary="Chest" className={classes.statspace} />

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
              <ListItemText primary="Waist" className={classes.statspace} />

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
              <ListItemText primary="Hips" className={classes.statspace} />

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
              <ListItemText primary="hair" className={classes.statspace} />

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
              <ListItemText primary="Eyes" className={classes.statspace} />

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
              <ListItemText primary="Shoes" className={classes.statspace} />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  {stat.shoeus}
                  <FiberManualRecordIcon
                    style={{ padding: "0 3em", fontSize: "0.5rem" }}
                  />
                  {stat.shoeeu}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        </MuiThemeProvider>
      </List>
    </div>
  );
};

export default Stats;
