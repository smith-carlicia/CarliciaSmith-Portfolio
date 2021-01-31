import React from 'react';
import { Nav, NavItem } from "shards-react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import {Link, Router} from "react-router-dom";
// import Home from '../../pages/Home/Home'
// import About from '../../pages/About/About'
import '../Nav/Nav.css';

const Navigation=()=>{
    
    // const location = useLocation();

    return(
            <Nav>
                <NavItem>
                    <Link to="/">
                        Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/About">About Me</Link>
                </NavItem>
                <NavItem>
                    {/* <Link to="../../pages/Portfolio.jsx">Portfolio</Link> */}
                </NavItem>
                <NavItem>
                    {/* <Link href="../../pages/Contact.jsx">
                        Contact Me
                    </Link> */}
                </NavItem>
            </Nav>
    )
}
export default Navigation;