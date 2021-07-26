import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
 // import { Toolbar } from '@material-ui/core';
import { Link, HashRouter, Route } from "react-router-dom";
// import { Link } from 'react-scroll';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Portfolio from '../../pages/Portfolio/portfolio';
import Contact from '../../pages/Contact/contact';
import './Nav.css';
  
class Navigation extends Component{

    render() {
         // const location = useLocation();

    return(
        <HashRouter>
           <>
                 <Navbar 
            className="navbar" 
            // bg="light" 
            // variant="light"
            >
                <Nav 
                    className="mr-auto">
                        <Link 
                            className="link" 
                            to="/" >
                                <h6>
                                    Home
                                </h6>
                        </Link>
                        <Link 
                            className="link" 
                            to="About">
                                <h6>
                                    About
                                </h6>
                        </Link>
                        <Link 
                            className="link" 
                            to="Portfolio">
                                <h6>
                                    Portfolio
                                </h6>
                        </Link>
                        <Link
                            className="link" 
                            to="Contact">
                                <h6>
                                    Contact
                                </h6>
                        </Link>
                </Nav>
        </Navbar>
           </>
           <>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
           </>
    </HashRouter>          
    )
    }
   
    
   
}
export default Navigation;