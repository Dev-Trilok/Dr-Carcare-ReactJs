import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fffc",
    boxShadow: "0px 0px 21px 0px rgba(0,0,0,0.5)",
    "&:hover": {
      background: "#fff",
    },
  },
  media: {
    minHeight: 130,
    width:100,
    marginLeft:90
  },
});

export default function ServicesCard({
  id,
  name,
  imageUrl,
  charges,
  description,
}) {
  const classes = useStyles();
  const location = useLocation();
  let ButtonTag ;
  let chargesTag;
  if (location.pathname === "/services") 
  {
    ButtonTag = <CardActions>
      <Button size="small" color="primary">
        More Info
      </Button>
    </CardActions>
    chargesTag = <Typography variant="body2" color="textSecondary" component="p">
    {charges}
  </Typography>
  }
  else{
    ButtonTag=null;
    chargesTag=null;
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imageUrl} title={name} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
         {chargesTag}
        </CardContent>
      </CardActionArea>
        {ButtonTag}
      
    </Card>
  );
}
