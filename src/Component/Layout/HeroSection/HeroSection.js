import React from "react";
import "./HeroSection.css";
import MainImg from "../../../Assets/Images/homescreen.jpg";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import OutlinedCard from "./OutlinedCard";
import { CenterFocusStrong } from "@material-ui/icons";

export default function HeroSection() {
  return (
    <React.Fragment>
      <div className="hero-container">
        {/* <img src={MainImg} className="MainImg1" alt="logo" /> */}
        <div className="appointment-card">
          <div className="appointment-card-header">
            <h3 className="tagline">
              Professional Car Repair &amp; Services In Your Area!
            </h3>
            <p>What are you waiting for? </p>
          </div>
          <OutlinedCard>
            <CardContent display='flex' justifyContent='center' flexDirection='column'>
              
                <Typography variant="h5" component="h2">
                  Get Quick Help
                </Typography>
               
                  <TextField
                    id="standard-basic"
                    style={{marginLeft:10}}
                    label="Name"
                  />
                  <TextField
                    id="standard-basic1"
                    style={{marginLeft:10}}
                    label="Mobile No"
                  />
                
                  
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"

                >
                  Submit
                </Button>
                </CardActions>
            </CardContent>
          </OutlinedCard>
        </div>
      </div>
    </React.Fragment>
  );
}
