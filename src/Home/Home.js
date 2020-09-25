import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import CategoryServices from "../Services/CategoryServices";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    //marginTop: "2%",
    height: "100%",
  },
  offset: { minHeight: "60px" },
  row: {
    // paddingTop: "2.5%",
    //paddingBottom: "2.5%",
    height: "51px",
  },

  dividerColor: {
    backgroundColor: "#f7f7f7",
    height: "1.5px",
    margin: "2% 0 2% 0",
  },

  rootAppBar: {
    flexGrow: 1,
    height: "100%",
    backgroundColor: "#F4F4F4",
  },
  appBar: {
    backgroundColor: "#f4f4f4",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: "11%",
    width: "100%",
    flexGrow: 1,
    zIndex: 0,
    textAlign: "center",
    color: "black",
    fontWeight: "500",
    marginTop: "1.8%",
  },
  toolRoot: {
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    //marginBottom: "6px",
    boxShadow: "0px 2px 7px -2px rgba(71,69,71,0.3)",
  },
}));

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fill: "#A3A3A3",
      },
    },
    MuiTypography: {
      h6: {
        fontSize: "1.1rem",
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

const Home = () => {
  //initial states
  const history = useHistory();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await CategoryServices.getCategories();
      setCategories(result.data);
    }
    fetchData();
  }, []);

  const [anchorEl] = React.useState(null);

  const classes = useStyles();

  const nextPath = (path) => {
    history.push(path);
  };
  return (
    <div className={classes.rootAppBar}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolRoot}>
          <MuiThemeProvider theme={theme}>
            <Typography variant="h6" className={classes.title}>
              Wiki.fashion
            </Typography>

            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{
                  padding: "15px 15px 10px 0",
                  color: "#a3a3a3",
                }}
              >
                <NotificationsIcon />
              </IconButton>
            </div>
          </MuiThemeProvider>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
        //style={{ boxShadow: "0 -5px #F7F7F7" }}
      >
        {categories.map((category, index) => (
          <span key={category.id}>
            <ListItem
              button
              className={classes.row}
              onClick={() =>
                nextPath("/FemaleModels/" + category.id + "/" + category.name)
              }
            >
              <ListItemText>
                <span
                  style={{
                    fontWeight: "500",
                    marginLeft: "4%",
                    letterSpacing: "0",
                  }}
                >
                  {category.name}
                </span>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  style={{
                    marginRight: 0,
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                >
                  {category.quantity}
                  <ArrowForwardIosRoundedIcon
                    fontSize="small"
                    style={{ paddingLeft: "0.2em" }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </span>
        ))}
      </List>
    </div>
  );
};

export default Home;
