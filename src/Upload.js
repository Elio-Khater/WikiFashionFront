import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { DropzoneArea } from "material-ui-dropzone";
import Api from "./Services/ApiClient";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import UserServices from "./Services/UserServices";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const Upload = (props) => {
  const classes = useStyles();
  let { id } = useParams();
  const handleChange = (files) => {
    props.addImages(files);
  };
  const DeleteImage = async (id, image) => {
    let result = await UserServices.DeleteImage(id, image);
    if (result.status === 200) {
      let images = props.user.image;
      images = images.filter((mg) => mg !== image);
      props.deleteUserImage(images);
    }
  };
  return (
    <div>
      <div>
        <Typography variant="subtitle1">
          The user has been successfully created, now add images.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DropzoneArea filesLimit={50} onChange={handleChange} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {props.user.image &&
            props.user.image.map((img) => (
              <GridListTile key={img}>
                <img src={Api.defaults.baseURL + "/" + img} />
                <GridListTileBar
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
                    <IconButton onClick={() => DeleteImage(id, img)}>
                      <ClearIcon className={classes.title} />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
    </div>
  );
};

export default Upload;
