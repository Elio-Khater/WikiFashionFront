import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import UserForm from "./UserForm";
import Upload from "./Upload";
import AddAgencies from "./AddAgencies";
import UserServices from "./Services/UserServices";
import AgenciesServices from "./Services/AgenciesServices";
import { useParams, useHistory } from "react-router-dom";
let idUserCreated = 0;

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    padding: "20px",
  },
}));

const steps = ["Add User", "Upload Images", "Add Agencies"];

function getStepContent(
  step,
  user,
  handleChange,
  handleImageChange,
  handleAgenciesChange,
  selectedAgencies,
  id,
  deleteImageFromUser
) {
  switch (step) {
    case 0:
      return <UserForm userId={id} user={user} handleChange={handleChange} />;
    case 1:
      return (
        <Upload
          user={user}
          deleteUserImage={deleteImageFromUser}
          addImages={handleImageChange}
        />
      );
    case 2:
      return (
        <AddAgencies
          addAgenciesToUser={handleAgenciesChange}
          selectedAgencies={selectedAgencies}
          userId={id}
        />
      );

    default:
      throw new Error("Unknown step");
  }
}

export default function AddUser() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [user, setUser] = React.useState({ countryid: 1, categoryid: 1 });
  const [images, setImages] = React.useState([]);
  const [selectedAgencies, setSelectedAgencies] = React.useState([]);
  let { id } = useParams();
  let history = useHistory();
  useEffect(() => {
    async function fetchData() {
      console.log(id);
      if (id) {
        const result = await UserServices.getUserById(id);
        console.log(result.data);
        setUser(result.data);
        const agencresult = await UserServices.GetAgenciesById(id);
        let selected = agencresult.data.map((x) => x.id);
        setSelectedAgencies(selected);
      }
    }
    fetchData();
  }, []);

  const handleAgenciesChange = (agencies) => {
    setSelectedAgencies(agencies);
  };
  const handleImageChange = (files) => {
    setImages(files);
  };

  const deleteImageFromUser = (images) => {
    setUser({ ...user, image: images });
  };

  const handleChange = (model) => {
    setUser({ ...user, [model.name]: model.value });
  };
  const handleNext = async () => {
    if (id === undefined) {
      if (activeStep === 0) {
        let response = await UserServices.AddUser(user);
        if (response.status === 200) {
          idUserCreated = response.data;
          setActiveStep(activeStep + 1);
        }
      } else if (activeStep === 1) {
        let imageResponse = await UserServices.AddUserImages(
          idUserCreated,
          images
        );
        if (imageResponse.status === 200) {
          setActiveStep(activeStep + 1);
        }
      } else {
        let agencyResponse = await UserServices.addAgenciesToUser(
          idUserCreated,
          selectedAgencies
        );
        if (agencyResponse.status === 200) {
          setActiveStep(activeStep + 1);
        }
      }
    } else {
      if (activeStep === 0) {
        let response = await UserServices.editUser(id, user);
        if (response.status === 200) {
          idUserCreated = response.data;
          setActiveStep(activeStep + 1);
        }
      } else if (activeStep === 1) {
        let imageResponse = await UserServices.AddUserImages(id, images);
        if (imageResponse.status === 200) {
          setActiveStep(activeStep + 1);
        }
      } else {
        let agencyResponse = await UserServices.editAgenciesToUser(
          id,
          selectedAgencies
        );
        if (agencyResponse.status === 200) {
          setActiveStep(activeStep + 1);
        }
      }
    }
  };

  const handleBack = () => {
    if (id === null) {
      setActiveStep(0);
    } else {
      history.push("/admin/editUser");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Add User
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  User Successfully Added
                </Typography>
                <Typography variant="subtitle1">
                  The user has been successfully created.
                </Typography>
                <Button
                  onClick={handleBack}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  {id == null ? "Add New User" : "View Users"}
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(
                  activeStep,
                  user,
                  handleChange,
                  handleImageChange,
                  handleAgenciesChange,
                  selectedAgencies,
                  id,
                  deleteImageFromUser
                )}
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Add Agencies"
                      : activeStep === steps.length - 2
                      ? "Upload Images"
                      : "Add User"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
