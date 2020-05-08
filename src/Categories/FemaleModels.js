import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import { fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import TuneIcon from "@material-ui/icons/Tune";
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
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import { ListItemSecondaryAction } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import CategoryServices from "../Services/CategoryServices";

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
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
    backgroundColor: "#F0F0F0",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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

  row: {},

  pic: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

const FemaleModels = () => {
  const history = useHistory();
  let { id, name } = useParams();

  const ModelsData = [
    {
      id: 1,
      firstname: "Anastasia",
      lastname: "Brister",
      image: "https://i.picsum.photos/id/469/200/300.jpg",
    },
    {
      id: 2,
      firstname: "Sophie",
      lastname: "Asveld",
      image: "https://i.picsum.photos/id/329/200/300.jpg",
    },
    {
      id: 3,
      firstname: "Emily",
      lastname: "Ratajkowski",
      image: "https://i.picsum.photos/id/342/200/300.jpg",
    },
    {
      id: 4,
      firstname: "Anastasia",
      lastname: "Brister",
      image: "https://i.picsum.photos/id/469/200/300.jpg",
    },
    {
      id: 5,
      firstname: "Sophie",
      lastname: "Asveld",
      image: "https://i.picsum.photos/id/329/200/300.jpg",
    },
    {
      id: 6,
      firstname: "Emily",
      lastname: "Ratajkowski",
      image: "https://i.picsum.photos/id/342/200/300.jpg",
    },
    {
      id: 7,
      firstname: "Anastasia",
      lastname: "Brister",
      image: "https://i.picsum.photos/id/469/200/300.jpg",
    },
    {
      id: 8,
      firstname: "Sophie",
      lastname: "Asveld",
      image: "https://i.picsum.photos/id/329/200/300.jpg",
    },
    {
      id: 9,
      firstname: "Emily",
      lastname: "Ratajkowski",
      image: "https://i.picsum.photos/id/342/200/300.jpg",
    },
  ];

  const [search, setSearch] = useState("");
  const [filterArray, setFilterArray] = useState([]);
  const [FemaleModels, setFemaleModels] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    async function fetchData() {
      const result = await CategoryServices.getUsersByCategory(id);
      setFemaleModels(result.data);
    }
    fetchData();
  }, []);

  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const nextPath = (path) => {
    history.push(path);
  };
  const handleClose = () => {
    setAnchorEl(null);
    let response;
    if (filterArray.length === 0) {
      //call api all
      response = [
        {
          id: 1,
          firstname: "Anastasia",
          lastname: "Brister",
          image: "https://i.picsum.photos/id/469/200/300.jpg",
        },
        {
          id: 2,
          firstname: "Sophie",
          lastname: "Asveld",
          image: "https://i.picsum.photos/id/329/200/300.jpg",
        },
        {
          id: 3,
          firstname: "Emily",
          lastname: "Ratajkowski",
          image: "https://i.picsum.photos/id/342/200/300.jpg",
        },
      ];
    } else {
      //call api with filterArray
      response = [
        {
          id: 1,
          firstname: "Anastasia",
          lastname: "Brister",
          image: "https://i.picsum.photos/id/469/200/300.jpg",
        },
      ];
    }
    setFemaleModels(response);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setFemaleModels(ModelsData);
    let searchArray = ModelsData.filter((x) =>
      x.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFemaleModels(searchArray);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    let response;
    switch (newValue) {
      case 0:
        //call api that gives all models
        response = [
          {
            id: 1,
            firstname: "Anastasia",
            lastname: "Brister",
            image: "https://i.picsum.photos/id/469/200/300.jpg",
          },
          {
            id: 2,
            name: "Sophie",
            firstname: "Asveld",
            image: "https://i.picsum.photos/id/329/200/300.jpg",
          },
          {
            id: 3,
            name: "Emily",
            firstname: "Ratajkowski",
            image: "https://i.picsum.photos/id/342/200/300.jpg",
          },
        ];
        break;
      case 1:
        //call api that gives top models
        response = [
          {
            id: 1,
            firstname: "Lisa",
            lastname: "Patricia",
            image: "https://i.picsum.photos/id/969/200/300.jpg",
          },
          {
            id: 2,
            firstname: "Nour",
            lastname: "Ahley",
            image: "https://i.picsum.photos/id/129/200/300.jpg",
          },
          {
            id: 3,
            firstname: "Hanna",
            lastname: "Montanna",
            image: "https://i.picsum.photos/id/312/200/300.jpg",
          },
        ];
        break;
      case 2:
        //call api that gives new models
        response = [
          {
            id: 1,
            firstname: "Anastasia",
            lastname: "Brister",
            image: "https://i.picsum.photos/id/469/200/300.jpg",
          },
          {
            id: 2,
            firstname: "Hanna",
            lastname: "Montanna",
            image: "https://i.picsum.photos/id/312/200/300.jpg",
          },
        ];
        break;
    }

    setFemaleModels(response);
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
                  onClick={() => nextPath("/")}
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
                {name}
              </Typography>
              <Button style={{ color: "#007AFF" }}>Filters</Button>
            </Toolbar>
            <Toolbar>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                <InputBase
                  placeholder="Search…"
                  onChange={handleSearch}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  value={search}
                  inputProps={{ "aria-label": "search" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-controls="simple-menu"
                        onClick={handleClick}
                        aria-label="account of current user"
                        aria-haspopup="true"
                      >
                        <TuneIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
            </Toolbar>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
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
                      <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon color="primary" />}
                        onChange={handleChangeCheckBox}
                        name="MostInstagramFollowers"
                      />
                    }
                  />
                </ListItemSecondaryAction>
              </MenuItem>

              <MenuItem>
                <ListItemText primary="Runaway model" />

                <ListItemSecondaryAction>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon color="primary" />}
                        name="RunawayModel"
                        onChange={handleChangeCheckBox}
                      />
                    }
                  />
                </ListItemSecondaryAction>
              </MenuItem>
              <MenuItem>
                <ListItemText primary="Photoshoot model" />

                <ListItemSecondaryAction>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon color="primary" />}
                        name="PhotoshootModel"
                        onChange={handleChangeCheckBox}
                      />
                    }
                  />
                </ListItemSecondaryAction>
              </MenuItem>
              <MenuItem>
                <ListItemText primary="Newest job" />

                <ListItemSecondaryAction>
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<RadioButtonUncheckedIcon />}
                        checkedIcon={<CheckCircleIcon color="primary" />}
                        name="NewestJob"
                        onChange={handleChangeCheckBox}
                      />
                    }
                  />
                </ListItemSecondaryAction>
              </MenuItem>
            </Menu>
            <Paper style={{ boxShadow: "unset" }} square>
              <Tabs
                className={classes.bgtab}
                value={value}
                indicatorColor="unset"
                textColor="primary"
                variant="fullWidth"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab className={classes.tab} label="All" />
                <Tab className={classes.tab} label="Top" />
                <Tab className={classes.tab} label="New Face" />
              </Tabs>
            </Paper>
          </AppBar>
        </MuiThemeProvider>
      </div>

      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        <p
          style={{
            marginLeft: "4%",
            color: "grey",
            textTransform: "uppercase",
            fontSize: "12px",
          }}
        >
          {FemaleModels.length} models
        </p>
        {FemaleModels.map((FemaleModel) => {
          let letter = FemaleModel.firstname.charAt(0);
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
                <div style={{ width: "8%", color: "grey" }}>{letter}</div>
                <ListItemAvatar>
                  <Avatar className={classes.pic} src={FemaleModel.image} />
                </ListItemAvatar>
                <ListItemText
                  style={{ marginLeft: "2%" }}
                  primary={FemaleModel.firstname + " " + FemaleModel.lastname}
                />
              </ListItem>
              <Divider light />
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default FemaleModels;
