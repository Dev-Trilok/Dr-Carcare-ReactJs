import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Box, FormControlLabel, Switch, TextField } from "@material-ui/core";
import { DoneAll, PhoneAndroid, VerifiedUser } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import FirebaseApp from "../../Firebase";

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <PhoneAndroid />,
    2: <VerifiedUser />,
    3: <DoneAll />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: "auto",
  },
}));

function getSteps() {
  return ["Login Using Phone Number", "Enter Name", "Finish"];
}

export default function Login() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const history = useHistory();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  useEffect(() => {
    if (FirebaseApp.auth().currentUser != null) {
      history.replace("/");
    }
    return () => {};
  }, []);

  const [name, setName] = useState("");
  const [isStaff, setIsStaff] = useState(false);
  const handleSaveName = () => {
    let user = FirebaseApp.auth().currentUser;
    user.updateProfile({ displayName: name }).then(() => {
      FirebaseApp.firestore()
        .doc("pusers/" + user.uid)
        .set({ name: name })
        .then(() => {
          handleNext();
        });
    });
  };

  const handleAuthSuccess = () => {
    let uid = FirebaseApp.auth().currentUser.uid;
    FirebaseApp.firestore()
      .doc("pusers/" + uid)
      .get()
      .then((res) => {
        if (res.exists) {
          setName(res.data().name);
          
        }
      });
    handleNext();
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <StyledFirebaseAuth
              uiConfig={{
                callbacks: {
                  signInSuccessWithAuthResult(authResult, redirectUrl) {
                    handleAuthSuccess();
                    return false;
                  },
                },
      
                signInFlow: "popup",
                signInOptions: [
                  {
                    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
                    recaptchaParameters: {
                      type: "image",
                      size: "invisible",
                      badge: "bottomleft",
                    },
                    defaultCountry: "IN",
                  },

              
                ],
              }}
              firebaseAuth={FirebaseApp.auth()}
            />
          </>
        );
      case 1:
        return (
          <Box
            flexDirection="column"
            style={{
              padding: 30,
              width: "400px",
              border: "1px solid black",
              minHeight: "200px",
            }}
            display="flex"
            justifyContent="center"
            variant="outlined"
          >
            <TextField
              inputProps={{ style: { fontSize: 20 } }}
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={handleSaveName}
              color="primary"
              style={{
                width: "100px",
                marginRight: "0px",
                marginLeft: "auto",
                marginTop: "20px",
              }}
            >
              Next
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box flexDirection={"column"}>
            <Typography>Sign In Successful</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                history.replace("/");
              }}
            >
              Return Home
            </Button>
          </Box>
        );
        default: return <> </>
    }
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button className={classes.button}>Redirect To Home</Button>
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <Box display="flex" justifyContent="center">
              {getStepContent(activeStep)}
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}
