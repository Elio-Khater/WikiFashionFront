import React, { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
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
    MuiTypography: {
      body1: {
        fontWeight: "400",
        lineHeight: "unset",
        letterSpacing: 0,
        fontSize: "1.05rem",
      },
    },
    MuiListItem: {
      root: {
        paddingTop: "5px",
        paddingBottom: "5px",
      },
    },
    MuiIconButton: {
      root: {
        color: "#A3A3A3",
      },
      sizeSmall: {
        fontSize: "1.05rem",
        padding: "6px",
      },
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: "1rem",
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
    //backgroundColor: "#F8F8F8",
  },
  toolRoot: {
    padding: 0,
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    marginTop: "1%",
  },
  appBar: {
    backgroundColor: theme.palette.background.paper,
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
    paddingTop: "0px",
    paddingBottom: "5px",
  },

  pic: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  bggrey: {
    //backgroundColor: "#f8f8f8",
    height: "100%",
  },
  dividerColor: {
    backgroundColor: "#f7f7f7",
  },
  offset: theme.mixins.toolbar,
}));

const Socials = () => {
  let { id } = useParams();
  const [socials, setSocials] = useState([]);

  const history = useHistory();
  const classes = useStyles();
  useEffect(() => {
    async function fetchData() {
      const result = await UserServices.getUserById(id);
      setSocials(result.data);
    }
    fetchData();
  }, []);
  const redirect = (urlinsta) => {
    if (urlinsta !== null) {
      window.location.href = urlinsta;
    }
  };
  const redirect1 = (urlfacebook) => {
    if (urlfacebook !== null) {
      window.location.href = urlfacebook;
    }
  };
  const redirect2 = (urltiktok) => {
    if (urltiktok !== null) {
      window.location.href = urltiktok;
    }
  };
  const redirect3 = (urltwitter) => {
    if (urltwitter !== null) {
      window.location.href = urltwitter;
    }
  };
  const redirect4 = (urlyoutube) => {
    if (urlyoutube !== null) {
      window.location.href = urlyoutube;
    }
  };
  return (
    <div className={classes.bggrey}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolRoot}>
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
          <Typography variant="h6" className={classes.title}>
            Socials
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />

      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        <MuiThemeProvider theme={theme}>
          <div className={classes.row}>
            <ListItem button onClick={() => redirect(socials.urlinsta)}>
              <ListItemText style={{ padding: "5px 0" }} primary="Instagram" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  <ArrowForwardIosRoundedIcon
                    fontSize="small"
                    style={{ paddingLeft: "0.8em" }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem button onClick={() => redirect1(socials.urlfacebook)}>
              <ListItemText style={{ padding: "5px 0" }} primary="Facebook" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  <ArrowForwardIosRoundedIcon
                    fontSize="small"
                    style={{ paddingLeft: "0.8em" }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem button onClick={() => redirect2(socials.urltiktok)}>
              <ListItemText style={{ padding: "5px 0" }} primary="TikTok" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  <ArrowForwardIosRoundedIcon
                    fontSize="small"
                    style={{ paddingLeft: "0.8em" }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem button onClick={() => redirect3(socials.urltwitter)}>
              <ListItemText style={{ padding: "5px 0" }} primary="Twitter" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  <ArrowForwardIosRoundedIcon
                    fontSize="small"
                    style={{ paddingLeft: "0.8em" }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>

            <Divider className={classes.dividerColor} />
          </div>
          <div className={classes.row}>
            <ListItem button onClick={() => redirect4(socials.urlyoutube)}>
              <ListItemText style={{ padding: "5px 0" }} primary="Youtube" />

              <ListItemSecondaryAction>
                <IconButton
                  size="small"
                  edge="end"
                  aria-label="comments"
                  className={classes.icon}
                >
                  <ArrowForwardIosRoundedIcon
                    fontSize="small"
                    style={{ paddingLeft: "0.8em" }}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </div>
        </MuiThemeProvider>
      </List>
    </div>
  );
};

export default Socials;
