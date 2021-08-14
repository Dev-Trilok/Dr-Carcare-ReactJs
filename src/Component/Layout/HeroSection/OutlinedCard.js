import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    backgroundColor: "#fffc",
    boxShadow: "0px 0px 21px 0px rgba(0,0,0,0.5)",
    "&:hover": {
      background: "#fff",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const [shadow, setshadow] = useState(5);
  let toggleRaised = () => setshadow(15);
  let toggleRaised2 = () => setshadow(5);

  return (
    <Box
      display='flex'
      justifyContent="center"
    >
      <Card
      style={{width:props.width, height:props.height}}
      onMouseOver={toggleRaised}
      onMouseOut={toggleRaised2}
      variant="outlined">
      {props.children}
        
      </Card>
    </Box>
  );
}
