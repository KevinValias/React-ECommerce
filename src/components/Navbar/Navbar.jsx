import React from 'react';
import { AppBar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import  ToolBar  from '@material-ui/core/ToolBar';

import {Link, useLocation} from 'react-router-dom';


import logo from "../../assets/diamond_app_icon.png";
import useStyles from "./styles";


const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

   
    return (
        <>
            <AppBar postion="fixed" className={classes.appBar} color="inherit">
                <ToolBar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Luvi" height="25px" className={classes.image} />
                        Luvi
                  </Typography>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                    
                        Home
                  </Typography>
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                    
                        Products
                  </Typography>
                    <Typography variant="h6" className={classes.title} color="inherit">
                    
                        About
                  </Typography>
                    <Typography variant="h6" className={classes.title} color="inherit">
                    
                        Contact Us
                  </Typography>
                  <div className={classes.grow} />
                {location.pathname === '/' && (
                  <div className={classes.button}>
                      <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                          <Badge badgeContent={totalItems} color="secondary">
                              <ShoppingCart />
                          </Badge>
                      </IconButton>
                  </div> )}
                </ToolBar>
            </AppBar>
        </>
    )
}

export default Navbar;