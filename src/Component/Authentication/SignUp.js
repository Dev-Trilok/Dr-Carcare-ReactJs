import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import OutlinedCard from "../Layout/HeroSection/OutlinedCard";
import { Box, CardContent, IconButton, InputAdornment, TextField } from "@material-ui/core";

import cars from "../../Assets/CarData/carModels.json";
import { Autocomplete } from "@material-ui/lab";
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
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
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
    marginTop: 20,
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Enter Email Address & Password",
    "Enter Name & Mobile No... ",
    "Optional",
  ];
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setBrand] = useState("");
  const [models, setModels] = useState([]);
  const [selectedModel, setModel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [carRunning, setCarRunning] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const emailPass = () => {
    return (
      <CardContent>
        <Typography variant="h5" component="h2"></Typography>
        <form autoComplete="off">
          <TextField
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ marginLeft: "10px", width: 250 }}
            label="Email"
            error={email.length !== 0 && !validateEmail(email)}
            type="email"
            required
          />
          <TextField
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ marginLeft: "10px", marginTop: 20, width: 250 }}
            error={password.length !== 0 && password.length < 6}
            label="Password"
            type="password"
            required
          />
          <TextField
            id="cpassword"
            value={cpassword}
            onChange={(e) => {
              setCpassword(e.target.value);
            }}
            error={password !== cpassword}
            style={{ marginLeft: "10px", marginTop: 20, width: 250 }}
            label="Confirm Password "
            type="password"
          />
        </form>
        <Box display="flex" justifyContent="center">
          <Button
            disabled={
              !(
                validateEmail(email) &&
                password.length > 5 &&
                password === cpassword
              )
            }
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            Next
          </Button>
        </Box>
      </CardContent>
    );
  };
  const nameMob = () => {
    return (
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{ marginLeft: "10px", width: 250 }}
            label="Name"
            required
          />

          <TextField
            id="mobileNo"
            value={mobNo}
            onChange={(e) => {
              setMobNo(e.target.value);
            }}
            style={{ marginLeft: "10px", marginTop: "20px", width: 250 }}
            label="Mobile No"
            type="number" 
            
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>,
            }}
            error={mobNo.length !== 0 && mobNo.length > 10}
          />
          
        </form>
        <Box display="flex" justifyContent="center">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            disabled={
              !(
                validateEmail(email) &&
                password.length > 5 &&
                password === cpassword
              )
            }
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            Next
          </Button>
        </Box>
      </CardContent>
    );
  };
  const carsInfo = () => {
    return (
      <CardContent>
        <form noValidate autoComplete="off">
          <Autocomplete
            id="car-brand"
            options={brands}
            value={selectedBrand}
            style={{ width: 250 }}
            onChange={(e, value) => {
              setBrand(value);
              setModel("");
            }}
            renderInput={(params) => (
              <TextField {...params} label="Car Brand :" variant="outlined" />
            )}
          />
          <Autocomplete
            id="car-model"
            options={models}
            value={selectedModel}
            onChange={(e, value) => setModel(value)}
            style={{ width: 250, marginTop: 10 }}
            renderInput={(params) => (
              <TextField {...params} label="Car Model :" variant="outlined" />
            )}
          />
          <TextField
            id="carRunning"
            style={{ marginLeft: "10px", marginTop: "20px", width: 250 }}
            label="Car Running"
            InputProps={{
              endAdornment: <InputAdornment position="end">KM</InputAdornment>,
            }}
            type="number"
          />
        </form>
        <Box display="flex" justifyContent="center">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>
          <Button
            disabled={
              !(
                validateEmail(email) &&
                password.length > 5 &&
                password === cpassword
              )
            }
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
          >
            Next
          </Button>
        </Box>
      </CardContent>
    );
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    let brands = cars.cars.map((value) => {
      return value.brand;
    });
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    brands = brands.filter(onlyUnique);
    setBrands(brands);
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      let models = cars.cars.filter((value) => {
        return value.brand.toLowerCase().includes(selectedBrand.toLowerCase());
      });
      models = models.map((value) => {
        return value.model;
      });
      console.log(models);
      setModels(models);
    }
  }, [selectedBrand]);

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
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <OutlinedCard width={300} height={300}>
              {activeStep === 0 && emailPass()}
              {activeStep === 1 && nameMob()}
              {activeStep === 2 && carsInfo()}
            </OutlinedCard>
            {/* */}
          </div>
        )}
      </div>
    </div>
  );
}
