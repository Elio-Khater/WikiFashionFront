import React from "react";
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
import UserEditForm from "./UserEditForm";
import AddAgencies from "./AddAgencies";
import UserServices from "./Services/UserServices";
import AgenciesServices from "./Services/AgenciesServices";
import { useHistory, useParams } from "react-router-dom";
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

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UserEditForm />;

    default:
      throw new Error("Unknown step");
  }
}
const steps = ["Edit User"];

export default function EditUser() {
  const classes = useStyles();
  const history = useHistory();

  const [activeStep, setActiveStep] = React.useState(0);
  const nextPath = (path) => {
    history.push(path);
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Edit User
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
                  User Successfully Deleted
                </Typography>
                <Typography variant="subtitle1">
                  The user has been successfully deleted.
                </Typography>
                <Button
                  //onClick={handleBack}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Delete User
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => nextPath("/admin/adduser")}
                    className={classes.button}
                  >
                    Add User
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
