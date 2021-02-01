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
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link className="link" to="About">
                            About Me
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link className="link" to="Portfolio">
                            Portfolio
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link className="link" to="Contact">
                            Contact
                        </Link>
                    </NavLink>
                </NavItem>
            </Nav>
    )
}
export default Navigation;