import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            Dr Carcare 
          </Typography>
          <div className={classes.sectionDesktop}>
            <Button color="inherit" component={Link} to="/">
              Home 
            </Button>
            <Button color="inherit" component={Link} to="/services">
              Services
            </Button>
            <Button color="inherit" component={Link} to="/aboutUs">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/contactUs">
              Contact Us
            </Button>
            <Button className="btn-link" color="inherit" component={Link} to="/signIn">
              Login
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={handleClick} />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem component={Link} to="/" onClick={handleClose}>
                  Home
                </MenuItem>

                <MenuItem component={Link} to="/services" onClick={handleClose}>
                  Services
                </MenuItem>
                <MenuItem component={Link} to="/aboutUs" onClick={handleClose}>
                  About Us
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/contactUs"
                  onClick={handleClose}
                >
                  Contact Us
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/signIn">
                  Login
                </MenuItem>
              </Menu>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
