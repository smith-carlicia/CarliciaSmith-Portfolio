import React from 'react';
import '../../pages/Contact/contact.css';
import {Container, Row} from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'





function Contact() {

    return(
        <Container className="container">
            <Row>
                <h1 className="contactInfo">Contact</h1>
            </Row>
            <Row>
                <FontAwesomeIcon icon={faEnvelope} target="__blank" onclick = "parent.location='mailto:smith.carlicia@gmail.com'"/>
                {/* <FontAwesomeIcon icon={faGithub} />     */}
    
            </Row>


        </Container>
    )
}

export default Contact;