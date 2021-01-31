import React from 'react';
import '../../pages/Contact/contact.css';
import {Container, Row} from "shards-react";
import { Link } from "react-router-dom";


function Contact() {

    return(
        <Container className="container">
            <Row>
                <h1 className="contactInfo">Contact</h1>
            </Row>
            <Row>
                <Link to="https://github.com/smith-carlicia">

                </Link>
            </Row>


        </Container>
    )
}

export default Contact;