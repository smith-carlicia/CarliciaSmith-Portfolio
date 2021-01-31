import React from 'react';
import '../../pages/Contact/contact.css';
import {Container, Row} from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-solid-svg-icons'


function Contact() {

    return(
        <Container className="container">
            <Row>
                <h1 className="contactInfo">Contact</h1>
            </Row>
            <Row>
                <FontAwesomeIcon icon={faEnvelope} target="__blank" onclick = "parent.location='mailto:smith.carlicia@gmail.com'"/>
                <FontAwesomeIcon icon={faGithub}  target="__blank" href="https://github.com/smith-carlicia"/>    
                <FontAwesomeIcon icon={faLinkedin} target="__blank" href="https://www.linkedin.com/in/carlicia-smith-613194b4/"/>
    
            </Row>


        </Container>
    )
}

export default Contact;