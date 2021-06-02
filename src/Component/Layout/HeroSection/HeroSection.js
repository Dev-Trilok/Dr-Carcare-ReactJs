import React from "react";
import "./HeroSection.css";
import MainImg from "../../../Assets/Images/homescreen.jpg";
import { Button, makeStyles } from "@material-ui/core";
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
          <OutlinedCard />

          
        </div>
      </div>
     
    </React.Fragment>
  );
}
