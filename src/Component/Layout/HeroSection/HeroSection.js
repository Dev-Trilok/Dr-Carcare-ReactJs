import React from "react";
import "./HeroSection.css";
import MainImg from "../../../Assets/Images/Services1.png";

export default function HeroSection() {
  return (
    <div className="hero-container">
     
        <img src={MainImg} className="MainImg1" alt="logo" />
        <h1>Professional Car Repair & Services In Your Area!</h1>
        <p>What are you waiting for? </p>
  
      </div>
   
  );
}
