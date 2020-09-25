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
import { useHistory, useParams, Redirect } from "react-router-dom";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import AgenciesServices from "./../Services/AgenciesServices";

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
        color: "#878686",
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
        fontWeight: "650",
        fontSize: "0.9rem",
        letterSpacing: 0,
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
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: "1rem",
      },
    },
    MuiChip: {
      label: {
        paddingLeft: "10px",
      },
      root: {
        fontWeight: "650",
        letterSpacing: 0,
      },
    },
    MuiListItem: {
      root: {
        paddingTop: "10px",
        paddingBottom: "10px",
      },
      secondaryAction: {
        paddingLeft: "23px",
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: "500",
        fontSize: "1.15rem",
        letterSpacing: 0,
      },
    },
    MuiIconButton: {
      sizeSmall: {
        fontSize: "0.955rem",
      },
      root: {
        color: "#878686",
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
    fontSize: "0.4rem",
    marginLeft: "17px",
    marginRight: "5px",
    color: "#D6D6D6",
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
    marginLeft: "7%",
    width: "100%",
    flexGrow: 1,
    zIndex: 0,
    textAlign: "center",
    color: "black",
    fontWeight: "600",
    marginTop: "1.2%",
    letterSpacing: "0",
    // fontFamily: "SFPRO",
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
  const handleDone = () => {
    history.push("/femalemodels/" + id + "/" + name, {
      eyes: eyesColor,
      agency: agency,
    });
  };
  const handleClick = (id) => {
    setAnchorEl(id);
    setAgency(id);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.target.innerText);
    setEyesColor(event.target.innerText);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.target.innerHTML);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [value, setValue] = React.useState("");

  const history = useHistory();
  let { id, name } = useParams();
  const [anchorEl, setAnchorEl] = React.useState(0);
  const [anchorEl1, setAnchorEl1] = React.useState("");
  const [anchorEl2, setAnchorEl2] = React.useState("All");
  const [agencies, setAgencies] = React.useState([]);
  const [eyesColor, setEyesColor] = React.useState("");
  const [agency, setAgency] = React.useState("");

  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      const result = await AgenciesServices.getAgencies();
      setAgencies(result.data);
    }
    fetchData();
  }, []);

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
              size="large"
              style={{ color: "#1F89FF", marginTop: "4%" }}
            >
              <ArrowBackIosRoundedIcon style={{ fontSize: "1.6rem" }} />
            </IconButton>
          </div>
          <Typography variant="h6" className={classes.title}>
            Filters
          </Typography>
          <Button
            onClick={handleDone}
            style={{
              color: "#1F89FF",
              paddingRight: "16px",
              paddingLeft: "9px",
              fontSize: "1.1rem",
              fontWeight: "700",
              marginRight: "10px",
            }}
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
              <ListItem
                button
                style={{ marginleft: "25px" }}
                onClick={() => nextPath("/Country")}
              >
                <ListItemText primary="Current location" />
                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    className={classes.icon}
                    edge="end"
                    aria-label="comments"
                  >
                    (NYC, United States)
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
                  letterSpacing: 0,
                  marginLeft: "12px",
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
                    anchorEl === 0 ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl === 0
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
                  }
                  label="All"
                  onClick={() => handleClick(0)}
                />
                {agencies.map((agency) => (
                  <Chip
                    icon={
                      anchorEl === agency.id ? (
                        <DoneRoundedIcon className={classes.juste} />
                      ) : (
                        <FiberManualRecordIcon className={classes.point} />
                      )
                    }
                    style={
                      anchorEl === agency.id
                        ? { backgroundColor: "#007AFF", color: "white" }
                        : {
                            backgroundColor: "#F8F8F8",
                            color: "black",
                            border: "1px solid #E9E9E9",
                          }
                    }
                    label={agency.name}
                    id={agency.id}
                    onClick={() => handleClick(agency.id)}
                  />
                ))}
              </ListItem>
              <Divider
                className={classes.dividerColor}
                style={{ marginBottom: "5px" }}
              />
              <span
                style={{
                  letterSpacing: 0,

                  marginLeft: "12px",
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
                    anchorEl1 === "" ? (
                      <DoneRoundedIcon className={classes.juste} />
                    ) : (
                      <FiberManualRecordIcon className={classes.point} />
                    )
                  }
                  style={
                    anchorEl1 === ""
                      ? { backgroundColor: "#007AFF", color: "white" }
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
                  letterSpacing: 0,

                  marginLeft: "12px",
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
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
                      : {
                          backgroundColor: "#F8F8F8",
                          color: "black",
                          border: "1px solid #E9E9E9",
                        }
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
