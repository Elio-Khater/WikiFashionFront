import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import Api from "../Services/ApiClient";
import { ListItemSecondaryAction, Slide } from "@material-ui/core";

import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";

import { useHistory, useParams, useLocation } from "react-router-dom";
import CategoryServices from "../Services/CategoryServices";

const useStyles = makeStyles((theme) => ({
  rootAppBar: {
    flexGrow: 1,
    // height: "100%",
  },
  offset: theme.mixins.toolbar,

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: "100%",
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: "12px",
  },
  toolRoot: {
    padding: 0,
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
    marginTop: "1.9%",
    letterSpacing: "0",
    // fontFamily: "SFPRO",
  },
  search: {
    position: "relative",
    backgroundColor: "#F0F0F0",
    "&:hover": {
      //backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    //marginRight: theme.spacing(2),
    marginLeft: 0,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      //marginLeft: theme.spacing(3),
      //width: "auto",
    },
    borderRadius: "10px 10px",
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#A3A3A3",
  },
  TuneIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#A3A3A3",
  },
  inputRoot: { flexGrow: 1, width: "100%" },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: "1.1rem",
    fontWeight: "450",
  },
  bgtab: {
    backgroundColor: "#EEEEEF",
    borderRadius: "10px 10px",
    margin: "1px 4.5% 0px 4.5%",
    minHeight: "15px",
  },
  tab: {
    borderRadius: "10px 10px",
    textTransform: "unset",
    minHeight: "15px",
    fontSize: "0.9rem",
  },
  menu: {
    width: "100%",
    maxWidth: "unset",
  },

  row: {},

  pic: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  dividerColor: {
    backgroundColor: "#f7f7f7",
    height: "1.5px",
    margin: "2% 0 2% 0",
  },
}));

const themeList = createMuiTheme({
  overrides: {
    MuiListItem: {
      root: {
        paddingTop: "4px",
        paddingBottom: "4px",
      },
    },

    MuiListItemText: {
      root: {
        marginLeft: "4%",
      },
    },
    MuiTypography: {
      body1: {
        fontSize: "0.9rem",
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

const themeMenu = createMuiTheme({
  transitions: { create: () => "none" },

  overrides: {
    MuiListItemSecondaryAction: {
      root: {
        right: "1.4%",
      },
    },
    MuiPopover: {
      paper: {
        position: "unset",
        minHeight: "0",
      },
    },

    MuiFormControlLabel: {
      root: {
        marginRight: "13px",
      },
    },

    MuiListItemText: {
      root: {
        marginLeft: "3.5%",
      },
    },
    MuiPaper: {
      root: {
        width: "100%",
        maxWidth: "unset!important",
        left: "0!important",
        top: 0,
      },
      elevation4: {
        boxShadow: "unset",
      },
      rounded: {
        borderRadius: "15px",
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: "600",
        letterSpacing: "0",
        fontSize: "1.1rem",
      },
    },
    MuiMenuItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        minHeight: "50px",
      },
    },
    MuiListItemAvatar: {
      root: {
        minWidth: "46px",
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

const FemaleModels = (props) => {
  const history = useHistory();
  const location = useLocation();
  let { id, name, state } = useParams();
  const [search, setSearch] = useState("");
  const [filterArray, setFilterArray] = useState([]);
  const [SearchedModels, setSearchedModels] = useState([]);
  const [FemaleModels, setFemaleModels] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const [inSearch, setInSearch] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      document.getElementsByTagName("html")[0].style.backgroundColor = "white";
      document.getElementsByTagName("body")[0].style.backgroundColor = "white";
      document.getElementById("root").style.backgroundColor = "white";

      const result = await CategoryServices.getUsersByCategory(
        id,
        filterArray,
        value,
        location.state
      );
      setFemaleModels(result.data);
      setSearchedModels(result.data);
    }
    if (search === "") {
      fetchData();
    }
    return () => {
      document.getElementsByTagName("html")[0].style.backgroundColor =
        "#f4f4f4";
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "#f4f4f4";
      document.getElementById("root").style.backgroundColor = "#f4f4f4";
    };
  }, [filterArray, value, search]);

  const classes = useStyles();
  const handleClick = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
      document.getElementById("filter-menu").style.height = "0px";
      document.getElementById("fmodelDiv").style.opacity = "0";
      document.getElementById("fmodelDiv").style.zIndex = "-1";
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
      document.getElementById("fmodelDiv").style.opacity = "0.5";
      document.getElementById("fmodelDiv").style.zIndex = "900";
      document.getElementById("filter-menu").style.height = "350px";

      setAnchorEl(event.currentTarget);
    }
  };
  const handleClickSearch = (open, clear) => {
    setInSearch(open);
    if (open) {
      document.getElementById("filter-menu").style.display = "none";
    } else {
      document.getElementById("filter-menu").style.display = "block";
    }
    if (clear) {
      setSearch("");
    }
  };
  const nextPath = (path) => {
    history.push(path);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
    let searchArray = SearchedModels.filter(
      (x) =>
        x.firstname.toLowerCase().includes(event.target.value.toLowerCase()) ||
        x.lastname.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFemaleModels(searchArray);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeCheckBox = (event) => {
    if (event.target.checked) {
      setFilterArray([...filterArray, event.target.name]);
    } else {
      let filtersLeft = filterArray.filter((x) => x !== event.target.name);
      setFilterArray(filtersLeft);
    }
  };

  let letters = [];
  return (
    <div className={classes.rootAppBar} style={{ borderBottom: 0 }}>
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
            {name}
          </Typography>
          <Button
            onClick={() => nextPath("/filters/" + id + "/" + name)}
            style={{
              color: "#1F89FF",
              paddingRight: "16px",
              paddingLeft: "9px",
              fontSize: "1.1rem",
              fontWeight: "600",
              marginRight: "10px",
              letterSpacing: 0,
            }}
          >
            Filters
          </Button>
        </Toolbar>
        <Toolbar style={{ marginTop: "3%" }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search"
              onFocus={() => handleClickSearch(true, false)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={search}
              inputProps={{ "aria-label": "search" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-controls="filter-menu"
                    onClick={handleClick}
                    aria-label="account of current user"
                    aria-haspopup="true"
                  >
                    <TuneRoundedIcon
                      style={Boolean(anchorEl) ? { color: "#007AFF" } : {}}
                    />
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.offset} />
      <div style={{ minHeight: "40px" }} />

      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
        style={{ paddingTop: 0 }}
      >
        <Paper
          style={{
            boxShadow: "unset",
            paddingBottom: "2%",
            marginTop: "3.5%",
          }}
          square
        >
          <Tabs
            className={classes.bgtab}
            value={value}
            indicatorColor="unset"
            textColor="primary"
            variant="fullWidth"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab
              className={classes.tab}
              style={{
                paddingRight: "9px",
                paddingLeft: "9px",
                paddingTop: "2px",
              }}
              label="All"
              value={0}
            />

            <Divider
              orientation="vertical"
              style={
                value === 0 || value === 1
                  ? { display: "none" }
                  : { height: "1.5vh", transform: "translateY(1vh)" }
              }
            />

            <Tab
              className={classes.tab}
              style={{
                paddingRight: "9px",
                paddingLeft: "9px",
                paddingTop: "2px",
              }}
              label="Top"
              value={1}
            />

            <Divider
              orientation="vertical"
              style={
                value === 2 || value === 1
                  ? { display: "none" }
                  : { height: "1.5vh", transform: "translateY(1vh)" }
              }
            />
            <Tab
              className={classes.tab}
              style={{
                paddingRight: "9px",
                paddingLeft: "9px",
                paddingTop: "2px",
              }}
              label="New Face"
              value={2}
            />
          </Tabs>
        </Paper>

        <MuiThemeProvider theme={themeList}>
          <p
            style={{
              marginLeft: "4%",
              color: "#A3A3A3",
              textTransform: "uppercase",
              fontSize: "9px",
              fontWeight: "600",
              fontFamily: [
                "-apple-system",
                "BlinkMacSystemFont",
                "Roboto",
                "Ubuntu",
                "sans-serif",
              ].join(","),
            }}
          >
            {FemaleModels.length} models
          </p>
          {FemaleModels.map((FemaleModel, index) => {
            let letter = FemaleModel.firstname.charAt(0).toUpperCase();
            if (letters.includes(letter)) {
              letter = "";
            } else {
              letters.push(letter);
            }
            return (
              <div className={classes.row} key={FemaleModel.id}>
                <ListItem
                  button
                  onClick={() => nextPath("/Model/" + FemaleModel.id)}
                >
                  <div
                    style={{
                      width: "8%",
                      color: "grey",
                      fontFamily: [
                        "-apple-system",
                        "BlinkMacSystemFont",
                        "Roboto",
                        "Ubuntu",
                        "sans-serif",
                      ].join(","),
                    }}
                  >
                    {letter}
                  </div>
                  <ListItemAvatar>
                    <Avatar
                      className={classes.pic}
                      src={Api.defaults.baseURL + "/" + FemaleModel.image[0]}
                    />
                  </ListItemAvatar>
                  <ListItemText style={{ marginLeft: 0 }}>
                    <span
                      style={{
                        letterSpacing: "0",
                        fontWeight: "500",
                        textTransform: "capitalize",
                      }}
                    >
                      {FemaleModel.firstname + " "}
                    </span>
                    <b>{FemaleModel.lastname}</b>
                  </ListItemText>
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
            );
          })}
        </MuiThemeProvider>
      </List>

      <div id="fmodelDiv"></div>

      {inSearch === true && (
        <div>
          <div
            onClick={() => handleClickSearch(false, false)}
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "absolute",
              top: "0",
              width: "100%",
              height: "1000px",
              zIndex: 9998,
            }}
          ></div>
          <div
            style={{
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              width: "100%",
              zIndex: 9999,
            }}
          >
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar style={{ paddingTop: "16px" }}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>

                  <InputBase
                    autoFocus
                    placeholder="Search"
                    onChange={handleSearch}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    value={search}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <Button
                  onClick={() => handleClickSearch(false, true)}
                  style={{
                    color: "#1F89FF",
                    //paddingRight: "16px",
                    paddingLeft: "16px",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    marginRight: "10px",
                    letterSpacing: 0,
                  }}
                >
                  Cancel
                </Button>
              </Toolbar>
            </AppBar>
          </div>
        </div>
      )}

      <MuiThemeProvider theme={themeMenu}>
        <Menu
          id="filter-menu"
          anchorEl={anchorEl}
          keepMounted
          open={true}
          //onClose={handleClose}
          elevation={0}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          TransitionComponent={Slide}
          //transitionDuration={900}
          // style={{ zIndex: "900" }}
        >
          <MenuItem>
            <ListItemText
              style={
                filterArray.includes("MostInstagramFollowers")
                  ? { color: "#007AFF" }
                  : {}
              }
              primary="Most instagram followers"
            />

            <ListItemSecondaryAction>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <RadioButtonUncheckedIcon
                        style={{ color: "#A3A3A3", opacity: "0.5" }}
                      />
                    }
                    checkedIcon={
                      <CheckCircleRoundedIcon style={{ color: "#007AFF" }} />
                    }
                    onChange={handleChangeCheckBox}
                    name="MostInstagramFollowers"
                  />
                }
              />
            </ListItemSecondaryAction>
          </MenuItem>

          <MenuItem>
            <ListItemText
              style={
                filterArray.includes("RunawayModel") ? { color: "#007AFF" } : {}
              }
              primary="Runaway model"
            />

            <ListItemSecondaryAction>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <RadioButtonUncheckedIcon
                        style={{ color: "#A3A3A3", opacity: "0.5" }}
                      />
                    }
                    checkedIcon={
                      <CheckCircleRoundedIcon style={{ color: "#007AFF" }} />
                    }
                    onChange={handleChangeCheckBox}
                    name="RunawayModel"
                  />
                }
              />
            </ListItemSecondaryAction>
          </MenuItem>

          <MenuItem>
            <ListItemText
              style={
                filterArray.includes("PhotoshootModel")
                  ? { color: "#007AFF" }
                  : {}
              }
              primary="Photoshoot model"
            />

            <ListItemSecondaryAction>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <RadioButtonUncheckedIcon
                        style={{ color: "#A3A3A3", opacity: "0.5" }}
                      />
                    }
                    checkedIcon={
                      <CheckCircleRoundedIcon style={{ color: "#007AFF" }} />
                    }
                    name="PhotoshootModel"
                    onChange={handleChangeCheckBox}
                  />
                }
              />
            </ListItemSecondaryAction>
          </MenuItem>
          <MenuItem>
            <ListItemText
              style={
                filterArray.includes("NewestJob") ? { color: "#007AFF" } : {}
              }
              primary="Newest job"
            />

            <ListItemSecondaryAction>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={
                      <RadioButtonUncheckedIcon
                        style={{ color: "#A3A3A3", opacity: "0.5" }}
                      />
                    }
                    checkedIcon={
                      <CheckCircleRoundedIcon style={{ color: "#007AFF" }} />
                    }
                    name="NewestJob"
                    onChange={handleChangeCheckBox}
                  />
                }
              />
            </ListItemSecondaryAction>
          </MenuItem>
        </Menu>
      </MuiThemeProvider>
    </div>
  );
};

export default FemaleModels;
