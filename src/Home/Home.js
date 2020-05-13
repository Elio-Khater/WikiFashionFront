import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import CategoryServices from "../Services/CategoryServices";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: "2%",
  },

  row: {
    paddingTop: "5%",
    paddingBottom: "5%",
  },

  dividerColor: {
    backgroundColor: "#F8F8F8",
  },

  rootAppBar: {
    flexGrow: 1,
    backgroundColor: "#F8F8F8",
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
}));

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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Wiki.Fashion
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <NotificationsIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            ></Menu>
          </div>
        </Toolbar>
      </AppBar>

      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        {categories.map((category) => (
          <div key={category.id}>
            <ListItem
              button
              className={classes.row}
              onClick={() =>
                nextPath("/FemaleModels/" + category.id + "/" + category.name)
              }
            >
              <ListItemText>
                <span style={{ fontWeight: "400" }}>{category.name}</span>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton size="small" edge="end" aria-label="comments">
                  {category.quantity}
                  <ArrowForwardIosIcon
                    fontSize="small"
                    style={{ paddingLeft: "0.2em" }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider className={classes.dividerColor} />
          </div>
        ))}
      </List>
    </div>
  );
};

export default Home;
