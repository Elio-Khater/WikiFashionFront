import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import InstagramIcon from "@material-ui/icons/Instagram";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { withStyles } from "@material-ui/core/styles";
import Api from "../../../Services/ApiClient";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import {
  ListItemSecondaryAction,
  Grow,
  Slide,
  Collapse,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import UserServices from "../../../Services/UserServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const useStyles = makeStyles((theme) => ({
  rootAppBar: {
    flexGrow: 1,
  },
  toolRoot: {
    padding: 0,
  },
  dropdown: {
    transition: theme.transitions.create(["transform"], {
      duration: 900,
    }),
  },
  dropdownOpen: {
    transform: "rotate(180deg)",
  },
  dropdownClosed: {
    transform: "rotate(0)",
  },
  dividerColor: {
    backgroundColor: "#f7f7f7",
    height: "1.5px",
    margin: "2% 0 2% 0",
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  offset: {
    minHeight: "52px",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: "2%",
    flexGrow: 1,
    textAlign: "center",
    color: theme.palette.text.primary,
    fontSize: "1.15rem",
    fontWeight: "700",
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
  portfolio: {
    marginLeft: "5%",
  },
}));

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

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontWeight: "700",
        lineHeight: "1.2",
      },
      body2: {
        fontSize: "0.68rem",
        fontWeight: "400",
        color: "#A3A3A3",
        letterSpacing: 0,
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
    MuiIconButton: {
      root: {
        color: "#A3A3A3",
      },
      sizeSmall: {
        fontSize: "1rem",
      },
    },
    MuiSvgIcon: {
      root: {
        fontSize: "1.2rem",
      },
    },
    MuiTypography: {
      body1: {
        fontWeight: "550",
        letterSpacing: 0,
      },
    },
    MuiListItem: {
      root: {
        paddingTop: "1px",
        paddingBottom: "1px",
      },
    },
    MuiListItemText: {
      root: {
        marginTop: 0,
        marginBottom: 0,
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
const themeListBot = createMuiTheme({
  overrides: {
    MuiListItem: {
      root: {
        paddingBottom: 0,
        paddingTop: 0,
      },
    },
    MuiListItemText: {
      multiline: {
        marginTop: "3px",
        marginBottom: "3px",
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: "black",
      },
      body1: {
        fontWeight: "700",
        fontSize: "0.875rem",
        letterSpacing: "0",
      },
      body2: {
        lineHeight: "1",
        letterSpacing: 0,
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
const theme1 = createMuiTheme({
  overrides: {
    MuiListItemSecondaryAction: {
      root: {
        right: 0,
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: 0,
        paddingBottom: "2px",
        paddingTop: "2px",
      },
    },
    MuiMenu: {
      paper: {
        top: "78px!important",
      },
    },
    MuiSvgIcon: {
      root: {
        width: "0.8em",
        height: "0.8em",
      },
    },

    MuiFormControlLabel: {
      root: {
        marginRight: "10px",
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

const Model = () => {
  const ModelData = {
    id: 1,
    firstname: "Anastasia",
    lastname: "Brister",
    country: "Paris",
    image: "https://i.picsum.photos/id/342/200/300.jpg",
    social: "5k",
    heightinch: "5'10.5''",
    heightcm: "180",
    motheragency: "IMG Paris (MA)",
    occupation: "Model(since 2008) | Actress",
    birth: "17/02/2001 (18), Toronto, Canada",
    language: "English French Swedish",
    bio:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum",
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const nextPath = (path) => {
    history.push(path);
  };
  const handleClick = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
      setAnchorEl(event.currentTarget);
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.checked) {
      setFilterArray([filterArray, event.target.name]);
    } else {
      let filtersLeft = filterArray.filter((x) => x !== event.target.name);
      setFilterArray(filtersLeft);
    }
  };
  var items = [
    {
      image: "https://i.picsum.photos/id/342/200/300.jpg",
    },
    {
      image: "https://i.picsum.photos/id/343/200/300.jpg",
    },
  ];

  let { id } = useParams();
  const [filterArray, setFilterArray] = useState([]);
  const [value, setValue] = React.useState("");
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [model, setModel] = useState({});
  useEffect(() => {
    async function fetchData() {
      console.log("fet");
      const result = await UserServices.getUserById(id);
      console.log(result.data);
      setModel(result.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className={classes.rootAppBar} style={{ borderBottom: 0 }}>
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
                <ArrowBackIosRoundedIcon style={{ fontSize: "1.8rem" }} />
              </IconButton>
            </div>
            <Typography variant="h6" className={classes.title}>
              <ListItem className={classes.title}>
                <MuiThemeProvider theme={theme}>
                  <ListItemText
                    primary={model.firstname + " " + model.lastname}
                    secondary={"Now in" + " " + model.country}
                  />
                </MuiThemeProvider>
              </ListItem>
            </Typography>

            <Button
              onClick={() => nextPath("/linkinsta")}
              style={{
                color: "#1F89FF",
                paddingRight: "16px",
                paddingLeft: "9px",
                fontSize: "1.1rem",
                fontWeight: "700",
                marginRight: "10px",
              }}
            >
              <span>Edit </span>
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />

        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
          style={{ zIndex: 950 }}
        >
          <div
            style={{
              paddingTop: "1%",
              paddingBottom: "1%",
              borderTop: "1px solid #F8F8F8",
            }}
          >
            <ListItem>
              <ListItemText primary="Portofolio" style={{ marginLeft: "3%" }} />

              <ListItemSecondaryAction>
                <IconButton
                  size="medium"
                  edge="end"
                  aria-label="comments"
                  aria-controls="simple-menu"
                  onClick={handleClick}
                  style={{ marginLeft: "-35%" }}
                >
                  <KeyboardArrowDownIcon
                    className={[
                      classes.dropdown,
                      Boolean(anchorEl)
                        ? classes.dropdownOpen
                        : classes.dropdownClosed,
                    ].join(" ")}
                    fontSize="medium"
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        </List>

        <Menu
          onClose={handleClose}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
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
          transitionDuration={900}
          style={{ top: "-15px", zIndex: 900 }}
        >
          <MuiThemeProvider theme={theme1}>
            <MenuItem>
              <ListItemText
                className={classes.portfolio}
                style={
                  filterArray.includes("portfolio") ? { color: "#007AFF" } : {}
                }
                primary="Portofolio"
              />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="gportfolio"
                      name="portfolio"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="portfolio"
                        control={<BlueRadio />}
                      />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>

            <MenuItem>
              <ListItemText
                className={classes.portfolio}
                style={
                  filterArray.includes("polaroid") ? { color: "#007AFF" } : {}
                }
                primary="Polaroid"
              />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="polaroid"
                      name="polaroid"
                      value={value}
                      onChange={handleChange}
                      color="primary"
                    >
                      <FormControlLabel
                        value="polaroid"
                        control={<BlueRadio />}
                      />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>
            <MenuItem>
              <ListItemText
                className={classes.portfolio}
                style={
                  filterArray.includes("videos") ? { color: "#007AFF" } : {}
                }
                primary="Videos"
              />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="video"
                      name="videos"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="videos"
                        control={<BlueRadio />}
                      />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>
            <MenuItem>
              <ListItemText
                className={classes.portfolio}
                style={
                  filterArray.includes("covers") ? { color: "#007AFF" } : {}
                }
                primary="Covers"
              />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="cover"
                      name="covers"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="covers"
                        control={<BlueRadio />}
                      />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>
            <MenuItem>
              <ListItemText
                className={classes.portfolio}
                style={
                  filterArray.includes("campaigns") ? { color: "#007AFF" } : {}
                }
                primary="Campaigns"
              />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="campaigns"
                      name="campaigns"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="campaigns"
                        control={<BlueRadio />}
                      />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>
            <MenuItem>
              <ListItemText
                className={classes.portfolio}
                style={
                  filterArray.includes("shows") ? { color: "#007AFF" } : {}
                }
                primary="Shows"
              />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="shows"
                      name="shows"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="shows" control={<BlueRadio />} />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>
          </MuiThemeProvider>
        </Menu>
        <div style={{ backgroundColor: "#F8F8F8" }}>
          <List
            component="nav"
            className={classes.root}
            aria-label="mailbox folders"
            style={{ zIndex: 899 }}
          >
            <MuiThemeProvider theme={themeList}>
              <div className={classes.row}>
                <Slider {...settings}>
                  {model.image &&
                    model.image.map((image) => (
                      <div>
                        <img
                          src={Api.defaults.baseURL + "/" + image}
                          style={{ width: "100%", height: "500px" }}
                        />
                      </div>
                    ))}
                </Slider>

                <ListItem
                  style={{ paddingLeft: "16px", paddingTop: "5px" }}
                  button
                  onClick={() => nextPath("/socials")}
                >
                  <ListItemText primary="Socials" />

                  <ListItemSecondaryAction style={{ paddingTop: "5px" }}>
                    <IconButton
                      className={classes.icon}
                      size="small"
                      edge="end"
                      aria-label="comments"
                      onClick={() => nextPath("/socials")}
                    >
                      {model.socialCount}
                      <InstagramIcon style={{ paddingLeft: "0.2em" }} />
                      <ArrowForwardIosRoundedIcon
                        fontSize="small"
                        style={{ paddingLeft: "0.2em" }}
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem
                  style={{ paddingLeft: "16px" }}
                  button
                  onClick={() => nextPath("/stats/" + model.id)}
                >
                  <ListItemText primary="Stats" />
                  <ListItemSecondaryAction>
                    <IconButton
                      size="small"
                      className={classes.icon}
                      edge="end"
                      aria-label="comments"
                      onClick={() => nextPath("/stats/" + model.id)}
                    >
                      height{" "}
                      {" " + model.heightinch + "/" + model.heightcm + "cm"}
                      <ArrowForwardIosRoundedIcon
                        fontSize="small"
                        style={{ paddingLeft: "0.2em" }}
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem
                  button
                  style={{ paddingLeft: "16px", paddingBottom: "8px" }}
                  onClick={() => nextPath("/agencies/" + model.id)}
                >
                  <ListItemText primary="Agencies" />
                  <ListItemSecondaryAction style={{ paddingBottom: "8px" }}>
                    <IconButton
                      onClick={() => nextPath("/agencies/" + model.id)}
                      size="small"
                      className={classes.icon}
                      edge="end"
                      aria-label="comments"
                    >
                      {model.motheragency + "(MA)"}
                      <ArrowForwardIosRoundedIcon
                        fontSize="small"
                        style={{ paddingLeft: "0.2em" }}
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider style={{ height: "4px", color: "#A3A3A3" }} />
              </div>
            </MuiThemeProvider>
            <MuiThemeProvider theme={themeListBot}>
              <div className={classes.row}>
                <ListItem button style={{ paddingLeft: "16px" }}>
                  <ListItemText
                    style={{ paddingTop: "3px", letterSpacing: 0 }}
                    primary="Occupation"
                    secondary="Model (since 2008)"
                  />
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button style={{ paddingLeft: "16px" }}>
                  <ListItemText
                    primary="Place and date of birth"
                    secondary={model.birth}
                  />
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button style={{ paddingLeft: "16px" }}>
                  <ListItemText
                    primary="Spoken languages"
                    secondary={model.language}
                  />
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button>
                  <ListItemText primary="Bio" secondary={model.bio} />
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
            </MuiThemeProvider>
          </List>
        </div>
        {Boolean(anchorEl) && (
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              height: "1000px",
              position: "absolute",
              top: "20%",
              width: "100%",
              zIndex: 900,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Model;
