import React, { useState, useEffect, useRef } from "react";
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
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { ListItemSecondaryAction } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import UserServices from "../../../Services/UserServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const useStyles = makeStyles((theme) => ({
  rootAppBar: {
    flexGrow: 1,
  },
  toolRoot: {
    padding: 0,
  },
  dropdown: {
    transition: theme.transitions.create(["transform"], {
      duration: 500,
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
    marginTop: 0,
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
    color: "#F5F3F5",
    //pacity: "0.5",
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
        letterSpacing: 0,
      },
      body2: {
        fontSize: "0.64rem",
        fontWeight: "300",
        color: "#A3A3A3 !important",
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
        color: "#D2D2D2",
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
        marginTop: "2px",
        marginBottom: "1.5px",
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
        fontWeight: "400",
        lineHeight: "1.1",
        letterSpacing: 0,
        fontSize: "0.95rem",
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
  transitions: { create: () => "none" },
  overrides: {
    MuiTypography: {
      body1: {
        fontWeight: "450",
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        right: 0,
      },
    },
    MuiPaper: {
      root: {
        width: "100%",
        maxWidth: "unset!important",
        left: "0!important",
      },
      elevation4: {
        boxShadow: "unset",
      },
      rounded: {
        borderRadius: "15px",
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: 0,
        paddingBottom: "2px",
        paddingTop: "2px",
      },
    },
    MuiPopover: {
      paper: {
        // top: "78px!important",
        position: "unset",
        minHeight: "0",
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
  let firstClientX;
  let firstClientY;
  let clientX;

  const nextPath = (path) => {
    history.push(path);
  };
  const handleClick = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
      document.getElementById("portfolio-menu").style.height = "0px";
      document.getElementById("modelDiv").style.opacity = 0;
      document.getElementById("modelDiv").style.zIndex = "-1";
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
      document.getElementById("modelDiv").style.opacity = "0.5";
      document.getElementById("modelDiv").style.zIndex = "900";
      document.getElementById("portfolio-menu").style.height = "350px";

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

  let { id } = useParams();
  const [filterArray, setFilterArray] = useState(["portfolio"]);
  const [value, setValue] = React.useState("portfolio");
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [model, setModel] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    async function fetchData() {
      document.getElementsByTagName("html")[0].style.backgroundColor = "white";
      document.getElementsByTagName("body")[0].style.backgroundColor = "white";
      document.getElementById("root").style.backgroundColor = "white";

      const result = await UserServices.getUserById(id);
      setModel(result.data);
    }
    fetchData();
    return () => {
      document.getElementsByTagName("html")[0].style.backgroundColor =
        "#f4f4f4";
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "#f4f4f4";
      document.getElementById("root").style.backgroundColor = "#f4f4f4";
    };
  }, []);

  // const touchStart = useCallback(
  //   (e) => {
  //     // Update coordinates
  //     setCoords({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  //   },
  //   [setCoords]
  // );

  // const preventTouch = useCallback(
  //   (e) => {
  //     // Update coordinates
  //     const minValue = 5; // threshold

  //     let clientX = e.touches[0].clientX - coords.x;
  //     let clientY = e.touches[0].clientY - coords.y;

  //     // Vertical scrolling does not work when you start swiping horizontally.
  //     if (Math.abs(clientX) > minValue) {
  //       e.preventDefault();
  //       e.returnValue = false;
  //       return false;
  //     }
  //   },
  //   [setCoords]
  // );

  function touchStart(e) {
    firstClientX = e.touches[0].clientX;
    firstClientY = e.touches[0].clientY;
  }

  function preventTouch(e) {
    const minValue = 2; // threshold

    clientX = e.touches[0].clientX - firstClientX;

    // Vertical scrolling does not work when you start swiping horizontally.
    if (Math.abs(clientX) > minValue) {
      e.preventDefault();
      e.returnValue = false;
      return false;
    }
  }

  // Add event listener using our hook
  useEventListener("touchstart", touchStart, true);
  useEventListener("touchmove", preventTouch, false);

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
                <ArrowBackIosRoundedIcon style={{ fontSize: "1.6rem" }} />
              </IconButton>
            </div>
            <Typography variant="h6" className={classes.title}>
              <ListItem className={classes.title}>
                <MuiThemeProvider theme={theme}>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        //className={classes.secondary}
                        //color="textSecondary"
                        display="block"
                      >
                        {model.firstname + " " + model.lastname}
                        {model.islogged && (
                          <VerifiedUserRoundedIcon
                            style={{
                              fontSize: "unset",
                              width: "0.8em",
                              height: "0.8em",
                            }}
                          />
                        )}
                      </Typography>
                    }
                    secondary={"Now in" + " " + model.country}
                  />
                </MuiThemeProvider>
              </ListItem>
            </Typography>

            <Button
              onClick={() => nextPath("/linkinsta/" + model.id)}
              style={{
                color: "#1F89FF",
                paddingRight: "0px",
                paddingLeft: "9px",
                fontSize: "1.1rem",
                fontWeight: "600",
                marginRight: "10px",
                letterSpacing: 0,
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
              <ListItemText primary="Portfolio" style={{ marginLeft: "3%" }} />

              <ListItemSecondaryAction>
                <IconButton
                  size="medium"
                  edge="end"
                  aria-label="comments"
                  aria-controls="portfolio-menu"
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
        <MuiThemeProvider theme={theme1}>
          <Menu
            id="portfolio-menu"
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
            //TransitionComponent={Slide}
            //transitionDuration={900}
          >
            <MenuItem>
              <ListItemText
                className={classes.portfolio}
                style={
                  filterArray.includes("portfolio") ? { color: "#007AFF" } : {}
                }
                primary="Portfolio"
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
          </Menu>
        </MuiThemeProvider>
        <div style={{ backgroundColor: "#F8F8F8" }}>
          <List
            component="nav"
            className={classes.root}
            aria-label="mailbox folders"
            style={{ zIndex: 899 }}
          >
            <MuiThemeProvider theme={themeList}>
              <div className={classes.row}>
                <div id="scroll-x">
                  <Slider
                    beforeChange={(current, next) => setActiveSlide(next)}
                    dots={false}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                  >
                    {model.image &&
                      model.image.map((image) => (
                        <div>
                          <img
                            id="scroll-y"
                            src={Api.defaults.baseURL + "/" + image}
                            style={{
                              width: "100%",
                              height: "500px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ))}
                  </Slider>
                  <div
                    style={{
                      width: "17%",
                      background: "black",
                      opacity: "0.12",
                      position: "absolute",
                      top: "2%",
                      right: "4%",
                      textAlign: "center",
                      zIndex: 900,
                      borderRadius: "10px",
                      padding: "2px 0px",
                    }}
                  >
                    <span
                      style={{
                        color: "white",
                        fontWeight: "600",
                        letterSpacing: 0,
                        fontSize: "0.8rem",
                        fontFamily: [
                          "-apple-system",
                          "BlinkMacSystemFont",
                          "Roboto",
                          "Ubuntu",
                          "sans-serif",
                        ].join(","),
                      }}
                    >
                      {activeSlide + 1} of {model.image && model.image.length}
                    </span>
                  </div>
                </div>

                <ListItem
                  style={{ paddingLeft: "16px", paddingTop: "5px" }}
                  button
                  onClick={() => nextPath("/socials/" + model.id)}
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
                <Divider style={{ height: "8px", background: "#F7F7F7" }} />
              </div>
            </MuiThemeProvider>
            <MuiThemeProvider theme={themeListBot}>
              <div className={classes.row}>
                <ListItem button style={{ paddingLeft: "16px" }}>
                  <ListItemText
                    style={{ paddingTop: "3px", letterSpacing: 0 }}
                    primary="Occupation"
                    secondary={
                      <Typography
                        variant="body2"
                        className={classes.secondary}
                        color="textSecondary"
                        display="block"
                      >
                        Model{" "}
                        <span style={{ color: "#a3a3a3" }}>(since 2008)</span>
                      </Typography>
                    }
                  ></ListItemText>
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button style={{ paddingLeft: "16px" }}>
                  <ListItemText
                    primary="Place and date of birth"
                    secondary={model.birthdate + " " + model.birthplace}
                  />
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button style={{ paddingLeft: "16px" }}>
                  <ListItemText
                    primary="Spoken languages"
                    secondary={
                      <Typography
                        variant="body2"
                        className={classes.secondary}
                        color="textSecondary"
                        display="block"
                      >
                        English <img src="/Countries/en.png" width="20px" />
                      </Typography>
                    }
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

        <div id="modelDiv"></div>
      </div>
    </div>
  );
};

// Hook
function useEventListener(eventName, handler, passive, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      if (passive) {
        element.addEventListener(eventName, eventListener);
      } else {
        element.addEventListener(eventName, eventListener, { passive: false });
      }
      // Remove event listener on cleanup
      return () => {
        if (passive) {
          element.removeEventListener(eventName, eventListener);
        } else {
          element.removeEventListener(eventName, eventListener, {
            passive: false,
          });
        }
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}
export default Model;
