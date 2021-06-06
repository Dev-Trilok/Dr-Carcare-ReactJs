import React from "react";
import HeroSection from "../Layout/HeroSection/HeroSection";
import HorizontalCardScroll from "../Services/HorizontalCardScroll";
import StepperComp from "../StepperComp";
import Services from "./Services";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      {/* <Services/> */}
      <HorizontalCardScroll />
      {/* <StepperComp/> */}
    </React.Fragment>
  );
}
