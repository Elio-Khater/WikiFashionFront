import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { ListItemSecondaryAction, Grow } from "@material-ui/core";

import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";

import { useHistory, useParams } from "react-router-dom";
import CategoryServices from "../Services/CategoryServices";

const BlueRadio = withStyles({
  root: {
    color: "#A3A3A3",
    opacity: "0.5",
    "&$checked": {
      color: "#007AFF",
      opacity: "1",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  rootAppBar: {
    flexGrow: 1,
    height: "100%",
  },
  offset: theme.mixins.toolbar,

  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    height: "100%",
    padding: 0,
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  toolRoot: {
    padding: 0,
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
    borderRadius: theme.shape.borderRadius,
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
  },
  bgtab: {
    backgroundColor: "#EEEEEF",
    borderRadius: "10px 10px",
    margin: "0 4.5%",
    minHeight: "15px",
  },
  tab: {
    borderRadius: "10px 10px",
    textTransform: "unset",
    minHeight: "15px",
  },
  menu: {
    width: "100%",
    maxWidth: "unset",
  },

  row: {},

  pic: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  dividerColor: {
    backgroundColor: "#F8F8F8",
  },
}));

const themeList = createMuiTheme({
  overrides: {
    MuiRadio: {
      root: {
        color: "#A3A3A#",
      },
    },
    MuiIconButton: {
      root: {
        color: "#A3A3A3",
      },
    },
    MuiListItem: {
      root: {
        paddingTop: "4px",
        paddingBottom: "4px",
      },
      gutters: {
        paddingLeft: "23px",
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        right: "-23px",
      },
    },

    MuiListItemText: {
      root: {
        marginLeft: "4%",
      },
    },
    MuiTypography: {
      body1: {
        fontSize: "1rem",
        lineHeight: "3.5",
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

const themeMenu = createMuiTheme({
  overrides: {
    MuiListItemSecondaryAction: {
      root: {
        right: "1.4%",
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
      rounded: {
        borderRadius: "10px",
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: "400",
      },
    },
    MuiMenuItem: {
      root: {
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: "-8px",
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

const Country = () => {
  const history = useHistory();
  let { id, name } = useParams();

  const [search, setSearch] = useState("");
  const [filterArray, setFilterArray] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.checked) {
      setFilterArray([filterArray, event.target.name]);
    } else {
      let filtersLeft = filterArray.filter((x) => x !== event.target.name);
      setFilterArray(filtersLeft);
    }
  };

  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const nextPath = (path) => {
    history.push(path);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // let response;
    // if (filterArray.length > 0) {
    //   //call api all

    // } else {
    //   //call api with filterArray

    // }
    // setFemaleModels(response);
  };

  const handleChangeCheckBox = (event) => {
    if (event.target.checked) {
      setFilterArray([...filterArray, event.target.name]);
    } else {
      let filtersLeft = filterArray.filter((x) => x !== event.target.name);
      setFilterArray(filtersLeft);
    }
  };

  return (
    <div className={classes.rootAppBar} style={{ borderBottom: 0 }}>
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
            Current location
          </Typography>
        </Toolbar>
        <Toolbar style={{ marginTop: "0.5%" }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder="Search"
              //onChange={handleSearch}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={search}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>

        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          <MuiThemeProvider theme={themeList}>
            <div className={classes.row}>
              <ListItem button>
                <ListItemAvatar style={{ padding: "10px 0" }}>
                  <Avatar
                    className={classes.pic}
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/International_Flag_of_Planet_Earth.svg/1280px-International_Flag_of_Planet_Earth.svg.png"
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  style={
                    filterArray.includes("AllCountries")
                      ? { color: "#007AFF", margin: 0 }
                      : { color: "black", margin: 0 }
                  }
                >
                  All Countries
                </ListItemText>
                <ListItemSecondaryAction>
                  <FormControlLabel
                    control={
                      <RadioGroup
                        aria-label="gportfolio"
                        name="AllCountries"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="AllCountries"
                          control={<BlueRadio />}
                        />
                      </RadioGroup>
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider className={classes.dividerColor} />
              <ListItem button>
                <ListItemAvatar style={{ padding: "10px 0" }}>
                  <Avatar
                    className={classes.pic}
                    src={
                      "https://cdn.webshopapp.com/shops/94414/files/51865160/flag-of-argentina.jpg"
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  style={
                    filterArray.includes("Argentine")
                      ? { color: "#007AFF", margin: 0 }
                      : { color: "black", margin: 0 }
                  }
                >
                  Argentine
                </ListItemText>
                <ListItemSecondaryAction>
                  <FormControlLabel
                    control={
                      <RadioGroup
                        aria-label="gportfolio"
                        name="Argentine"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="Argentine"
                          control={<BlueRadio />}
                        />
                      </RadioGroup>
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider className={classes.dividerColor} />
              <ListItem button>
                <ListItemAvatar style={{ padding: "10px 0" }}>
                  <Avatar
                    className={classes.pic}
                    src={
                      "https://cdn.webshopapp.com/shops/94414/files/52123490/flag-of-brazil.jpg"
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  style={
                    filterArray.includes("Brazil")
                      ? { color: "#007AFF", margin: 0 }
                      : { color: "black", margin: 0 }
                  }
                >
                  Brazil
                </ListItemText>
                <ListItemSecondaryAction>
                  <FormControlLabel
                    control={
                      <RadioGroup
                        aria-label="gportfolio"
                        name="Brazil"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="Brazil"
                          control={<BlueRadio />}
                        />
                      </RadioGroup>
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemAvatar style={{ padding: "10px 0" }}>
                  <Avatar
                    className={classes.pic}
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/1200px-Flag_of_Belgium.svg.png"
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  style={
                    filterArray.includes("Belgium")
                      ? { color: "#007AFF", margin: 0 }
                      : { color: "black", margin: 0 }
                  }
                >
                  Belgium
                </ListItemText>
                <ListItemSecondaryAction>
                  <FormControlLabel
                    control={
                      <RadioGroup
                        aria-label="gportfolio"
                        name="Belgium"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="Belgium"
                          control={<BlueRadio />}
                        />
                      </RadioGroup>
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemAvatar style={{ padding: "10px 0" }}>
                  <Avatar
                    className={classes.pic}
                    src={
                      "https://cdn.webshopapp.com/shops/94414/files/52378772/flag-of-croatia.jpg"
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  style={
                    filterArray.includes("Croatia")
                      ? { color: "#007AFF", margin: 0 }
                      : { color: "black", margin: 0 }
                  }
                >
                  Croatia
                </ListItemText>
                <ListItemSecondaryAction>
                  <FormControlLabel
                    control={
                      <RadioGroup
                        aria-label="gportfolio"
                        name="Croatia"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="Croatia"
                          control={<BlueRadio />}
                        />
                      </RadioGroup>
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem button>
                <ListItemAvatar style={{ padding: "10px 0" }}>
                  <Avatar
                    className={classes.pic}
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1200px-Flag_of_Denmark.svg.png"
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  style={
                    filterArray.includes("Denmark")
                      ? { color: "#007AFF", margin: 0 }
                      : { color: "black", margin: 0 }
                  }
                >
                  Denmark
                </ListItemText>
                <ListItemSecondaryAction>
                  <FormControlLabel
                    control={
                      <RadioGroup
                        aria-label="gportfolio"
                        name="Denmark"
                        value={value}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="Denmark"
                          control={<BlueRadio />}
                        />
                      </RadioGroup>
                    }
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </div>
          </MuiThemeProvider>
        </List>
      </AppBar>
      <div className={classes.offset} />
      <div className={classes.offset} />
    </div>
  );
};

export default Country;
