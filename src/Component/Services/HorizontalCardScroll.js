import { Grid } from "@material-ui/core";
import React from "react";
import ServicesCard from "./ServicesCard";
import services from "../Services/serviceList";
import './HorizontalCardScroll.css';

export default function HorizontalCardScroll() {
  return (
    <div>
      <div className="row">
        <h2>Services</h2>

        <div className="row__posters">
          {services.map((obj) => (
            <div key={obj.id} className="row__poster row__posterLarge">

              <ServicesCard
                id={obj.id}
                
                name={obj.name}
                imageUrl={obj.imageUrl}
                charges={obj.charges}
                description={obj.description}
              /></div>
          ))}
        </div>
      </div>
    </div>
  );
}
