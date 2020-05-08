import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import InstagramIcon from "@material-ui/icons/Instagram";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
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
  },
  dividerColor: {
    backgroundColor: "#F8F8F8",
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
}));

const Model = () => {
  const ModelData = {
    id: 1,
    firstname: "Anastasia",
    lastname: "Brister",
    country: "Paris",
    image: "https://i.picsum.photos/id/342/200/300.jpg",
    instagram: "5k",
    stats: "Height 5'10.5''/179 cm",
    agencies: "IMG Paris (MA)",
    occupation: "Model(since 2008) | Actress",
    birth: "17/02/2001 (18), Toronto, Canada",
    language: "English French Swedish",
    Bio:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum",
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

  let { id } = useParams();
  const [value, setValue] = React.useState("");
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const [model, setModel] = useState({});
  useEffect(() => {
    async function fetchData() {
      const result = await UserServices.getUserById(id);
      console.log(result.data);
      setModel(result.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className={classes.rootAppBar} style={{ borderBottom: 0 }}>
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => history.goBack()}
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
                  <ListItemText
                    primary={model.firstname + " " + model.lastname}
                    secondary={"lives in" + " " + model.country}
                  />
                </ListItem>
              </Typography>

              <Button
                onClick={() => nextPath("/linkinsta")}
                style={{ color: "#007AFF" }}
              >
                Edit
              </Button>
            </Toolbar>
          </AppBar>

          <List
            component="nav"
            className={classes.root}
            aria-label="mailbox folders"
          >
            <div className={classes.row}>
              <ListItem>
                <ListItemText primary="Portfolio" />

                <ListItemSecondaryAction>
                  <IconButton
                    size="small"
                    edge="end"
                    aria-label="comments"
                    aria-controls="simple-menu"
                    onClick={handleClick}
                  >
                    <KeyboardArrowDownIcon
                      fontSize="small"
                      style={{ paddingLeft: "0.2em" }}
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
          >
            <MenuItem>
              <ListItemText primary="Most instagram followers" />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="gportfolio"
                      name="portfolios"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="fportfolios"
                        control={<Radio />}
                      />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>

            <MenuItem>
              <ListItemText primary="Runaway model" />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="polaroid"
                      name="polaroids"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="polaroids" control={<Radio />} />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>
            <MenuItem>
              <ListItemText primary="Photoshoot model" />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="video"
                      name="videos"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="videos" control={<Radio />} />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>
            <MenuItem>
              <ListItemText primary="Newest job" />

              <ListItemSecondaryAction>
                <FormControlLabel
                  control={
                    <RadioGroup
                      aria-label="cover"
                      name="covers"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="covers" control={<Radio />} />
                    </RadioGroup>
                  }
                />
              </ListItemSecondaryAction>
            </MenuItem>
          </Menu>
          <div style={{ backgroundColor: "#F8F8F8" }}>
            <List
              component="nav"
              className={classes.root}
              aria-label="mailbox folders"
            >
              <div className={classes.row}>
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={model.image}
                />
                <ListItem button onClick={() => nextPath("/socials")}>
                  <ListItemText primary="Socials" />

                  <ListItemSecondaryAction>
                    <IconButton
                      className={classes.icon}
                      size="small"
                      edge="end"
                      aria-label="comments"
                      onClick={() => nextPath("/socials")}
                    >
                      {model.instagram}
                      <InstagramIcon style={{ paddingLeft: "0.2em" }} />
                      <ArrowForwardIosIcon
                        fontSize="small"
                        style={{ paddingLeft: "0.2em" }}
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button onClick={() => nextPath("/stats")}>
                  <ListItemText primary="Stats" />
                  <ListItemSecondaryAction>
                    <IconButton
                      size="small"
                      className={classes.icon}
                      edge="end"
                      aria-label="comments"
                      onClick={() => nextPath("/stats")}
                    >
                      {model.stats}
                      <ArrowForwardIosIcon
                        fontSize="small"
                        style={{ paddingLeft: "0.2em" }}
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button onClick={() => nextPath("/agencies")}>
                  <ListItemText primary="Agencies" />
                  <ListItemSecondaryAction>
                    <IconButton
                      onClick={() => nextPath("/agencies")}
                      size="small"
                      className={classes.icon}
                      edge="end"
                      aria-label="comments"
                    >
                      {model.agencies}
                      <ArrowForwardIosIcon
                        fontSize="small"
                        style={{ paddingLeft: "0.2em" }}
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>

              <div className={classes.row}>
                <ListItem button>
                  <ListItemText
                    primary="Occupation"
                    secondary={model.occupation}
                  />
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button>
                  <ListItemText
                    primary="Place and date of birth"
                    secondary={model.birth}
                  />
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button>
                  <ListItemText
                    primary="Spoken languages"
                    secondary={model.language}
                  />
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
              <div className={classes.row}>
                <ListItem button>
                  <ListItemText primary="Bio" secondary={model.Bio} />
                </ListItem>
                <Divider className={classes.dividerColor} />
              </div>
            </List>
          </div>
        </MuiThemeProvider>
      </div>
    </div>
  );
};

export default Model;
