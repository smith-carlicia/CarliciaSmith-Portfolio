import React from 'react';
import { Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";
import './Nav.css';

const Navigation=()=>{
    
    // const location = useLocation();

    return(
            <Toolbar direction="row" className="navi">
                <h3 className="carly">Carlicia</h3>
                <Link className="link" to="/">
                    <h5>Home</h5>
                </Link>
                <Link className="link" to="About">
                    <h5>About</h5>
                </Link>
                <Link className="link" to="Portfolio">
                    <h5>Portfolio</h5>
                </Link>
                <Link className="link" to="Contact">
                    <h5>Contact</h5>
                </Link>
            </Toolbar> 
    )
}
export default Navigation;