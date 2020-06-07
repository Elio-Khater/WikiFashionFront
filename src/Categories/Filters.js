import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { ListItemSecondaryAction } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      h6: {
        fontSize: "1rem",
        lineHeight: "2",
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
      sizeSmall: {
        fontSize: "0.9rem",
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

const themeText = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontWeight: "550",
        fontSize: "0.9rem",
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: "12px",
      },
      root: {
        paddingTop: "0px",
        paddingBottom: "8px",
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
const themeList = createMuiTheme({
  overrides: {
    MuiChip: {
      label: {
        paddingLeft: "10px",
      },
    },
    MuiListItem: {
      root: {
        paddingTop: "10px",
        paddingBottom: "10px",
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: "350",
        fontSize: "1.15rem",
      },
    },
    MuiIconButton: {
      sizeSmall: {
        fontSize: "0.9rem",
      },
      root: {
        color: "#A3A3A3",
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
  chip: {
    paddingTop: 0,
    overflow: "scroll",
    "& > *": {
      margin: theme.spacing(0.8),
    },
  },
  toolRoot: {
    padding: 0,
  },
  dividerColor: {
    backgroundColor: "#F8F8F8",
  },

  juste: {
    fontSize: "1.3rem",
    marginLeft: "6px",
    marginRight: "-4px",
    color: "white",
  },
  point: {
    fontSize: "0.3rem",
    marginLeft: "17px",
    marginRight: "5px",
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
    marginLeft: "19.61px",
    top: "20%",
    width: "100%",
    flexGrow: 1,
    zIndex: 0,
    textAlign: "center",
    color: "black",
    fontWeight: "400",
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

const Filters = () => {
  const nextPath = (path) => {
    history.push(path);
  };
  const handleClick = (event) => {
    setAnchorEl(event.target.innerHTML);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.target.innerHTML);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.target.innerHTML);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState("");
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState("All");
  const [anchorEl1, setAnchorEl1] = React.useState("All");
  const [anchorEl2, setAnchorEl2] = React.useState("All");
  const classes = useStyles();

  const [agencies, setAgencies] = useState([]);

  return (
    <div className={classes.bggrey}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolRoot}>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => history.goBack()}
              style={{ color: "#007AFF" }}
            >
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </div>
          <Typography variant="h6" className={classes.title}>
            Filters
          </Typography>
          <Button
            onClick={() => nextPath("/filters")}
            style={{ color: "#007AFF", paddingRight: "16px" }}
          >
            Done
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        <div className={classes.row}>
          <div>
            <MuiThemeProvider theme={themeText}>
              <ListItem>
                <ListItemText primary="Select the options you want to filter" />
              </ListItem>
            </MuiThemeProvider>
          </div>

          <Divider className={classes.dividerColor} />
          <div>
            <MuiThemeProvider theme={themeList}>
              <ListItem button onClick={() => nextPath("/Country")}>
                <ListItemText primary="Current location" />
                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    className={classes.icon}
                    edge="end"
                    aria-label="comments"
                  >
                    (NYC,UnitedStates)
                    <ArrowForwardIosRoundedIcon
                      fontSize="small"
                      style={{ paddingLeft: "0.2em" }}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider
                className={classes.dividerColor}
                style={{ marginBottom: "5px" }}
              />

              <span
                style={{
                  marginLeft: "14px",
                  color: "#A3A3A3",
                  fontSize: "12px",
                  fontWeight: "700",
                  fontFamily: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Roboto",
                    "Ubuntu",
                    "sans-serif",
                  ].join(","),
                }}
              >
                Agencies
              </span>

              <ListItem className={classes.chip}>
                <Chip
                  icon={
                    anchorEl === "All" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl === "All"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="All"
                  onClick={handleClick}
                />
                <Chip
                  icon={
                    anchorEl === "Women" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl === "Women"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="Women"
                  onClick={handleClick}
                />
                <Chip
                  icon={
                    anchorEl === "NewMadisson" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl === "NewMadisson"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="NewMadisson"
                  onClick={handleClick}
                />
                <Chip
                  icon={
                    anchorEl === "NextMilan" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl === "NextMilan"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="NextMilan"
                  onClick={handleClick}
                />
                <Chip
                  icon={
                    anchorEl === "NextParis" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl === "NextParis"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="NextParis"
                  onClick={handleClick}
                />
              </ListItem>
              <Divider
                className={classes.dividerColor}
                style={{ marginBottom: "5px" }}
              />
              <span
                style={{
                  marginLeft: "14px",
                  color: "#A3A3A3",
                  fontSize: "12px",
                  fontWeight: "700",
                  fontFamily: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Roboto",
                    "Ubuntu",
                    "sans-serif",
                  ].join(","),
                }}
              >
                Eyes colour
              </span>

              <ListItem className={classes.chip}>
                <Chip
                  icon={
                    anchorEl1 === "All" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl1 === "All"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="All"
                  onClick={handleClick1}
                />
                <Chip
                  icon={
                    anchorEl1 === "Black" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl1 === "Black"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="Black"
                  onClick={handleClick1}
                />
                <Chip
                  icon={
                    anchorEl1 === "Brown" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl1 === "Brown"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="Brown"
                  onClick={handleClick1}
                />
                <Chip
                  icon={
                    anchorEl1 === "Green" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl1 === "Green"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="Green"
                  onClick={handleClick1}
                />
                <Chip
                  icon={
                    anchorEl1 === "Blue" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl1 === "Blue"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="Blue"
                  onClick={handleClick1}
                />
              </ListItem>
              <Divider
                className={classes.dividerColor}
                style={{ marginBottom: "5px" }}
              />
              <span
                style={{
                  marginLeft: "14px",
                  color: "#A3A3A3",
                  fontSize: "12px",
                  fontWeight: "700",
                  fontFamily: [
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Roboto",
                    "Ubuntu",
                    "sans-serif",
                  ].join(","),
                }}
              >
                Skin colour
              </span>

              <ListItem className={classes.chip}>
                <Chip
                  icon={
                    anchorEl2 === "All" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl2 === "All"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="All"
                  onClick={handleClick2}
                />
                <Chip
                  icon={
                    anchorEl2 === "White" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl2 === "White"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="White"
                  onClick={handleClick2}
                />
                <Chip
                  icon={
                    anchorEl2 === "Dark" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl2 === "Dark"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="Dark"
                  onClick={handleClick2}
                />
                <Chip
                  icon={
                    anchorEl2 === "Yellow" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl2 === "Yellow"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="Yellow"
                  onClick={handleClick2}
                />
                <Chip
                  icon={
                    anchorEl2 === "Caucasian" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl2 === "Caucasian"
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : { backgroundColor: "#F8F8F8", color: "black" }
                  }
                  label="Caucasian"
                  onClick={handleClick2}
                />
              </ListItem>

              <Divider className={classes.dividerColor} />
              <ListItem button>
                <ListItemText primary="Weight" />
                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    className={classes.icon}
                    edge="end"
                    aria-label="comments"
                  >
                    (from 50kg to 55kg)
                    <ArrowForwardIosRoundedIcon
                      fontSize="small"
                      style={{ paddingLeft: "0.2em" }}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider className={classes.dividerColor} />
              <ListItem button>
                <ListItemText primary="Height" />
                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    className={classes.icon}
                    edge="end"
                    aria-label="comments"
                  >
                    (from 170cm to 178cm)
                    <ArrowForwardIosRoundedIcon
                      fontSize="small"
                      style={{ paddingLeft: "0.2em" }}
                    />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </MuiThemeProvider>
          </div>
        </div>
      </List>
    </div>
  );
};

export default Filters;
