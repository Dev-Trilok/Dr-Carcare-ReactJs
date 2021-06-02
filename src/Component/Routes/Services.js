import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import services from "../Services/serviceList";
import ServicesCard from "../Services/ServicesCard";

const useStyles = makeStyles((theme) => ({
  headerText: {
    textAlign: "center",
  },
  grid:{
    margin:5,
    width:'98vw'
  }
}));

export default function Services() {
  const classes = useStyles();
  return (
    <div style={{backgroundColor:'#929190',paddingTop:1}}>
      <h1 className={classes.headerText}>Services we provide</h1>
      <Grid
        container
        spacing={5}
        className={classes.grid}
        // css={{ maxWidth: 300 }} boxShadow={3} margin={1}
      >
        {services.map((obj) => (
          <Grid item xs={12} sm={12} md={3} key={obj.id}>
            <ServicesCard
              id={obj.id}
              name={obj.name}
              imageUrl={obj.imageUrl}
              charges={obj.charges}
              description={obj.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
