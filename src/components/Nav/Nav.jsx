import React from 'react';
import { Nav, NavItem, NavLink} from "shards-react";
import { Link } from "react-router-dom";
import './Nav.css';

const Navigation=()=>{
    
    // const location = useLocation();

    return(
            <Nav>
                <NavItem>
                    <NavLink>
                        <Link to="/">
                            Home
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="About">
                            About Me
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="Portfolio">
                            Portfolio
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="Contact">
                            Contact Me
                        </Link>
                    </NavLink>
                </NavItem>
            </Nav>
    )
}
export default Navigation;