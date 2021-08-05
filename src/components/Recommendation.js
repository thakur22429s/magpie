import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Genres from "./Genres";
import Keywords from "./Keywords";
import Misc from "./Misc";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://thakur22429s.github.io/magpie/">
        Magpie
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#21130d",
    marginTop: theme.spacing(3),
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  stepper: {
    backgroundColor: "#21130d",
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

const steps = ["Genres", "Keywords and People", "Ratings and Reviews"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Genres />;
    case 1:
      return <Keywords />;
    case 2:
      return <Misc />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Recommendation() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="secondary"
        >
          Get Your Movie Recommendation
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
                Thank you.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1
                    ? "Get Recommendation"
                    : "Next"}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
        <Copyright />
      </Paper>
    </React.Fragment>
  );
}
