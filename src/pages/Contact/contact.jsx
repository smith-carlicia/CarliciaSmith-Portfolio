import React from 'react';
import '../../pages/Contact/contact.css';
import ContactInfo from '../../components/Contact/Contact';
import {Container, Row, Col} from "shards-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact() {

    return(
        <Container className="container">
            <Row>
            <Col sm="5"></Col>
            <Col sm="3">
                <h2 className="contactInfo">Contact</h2>
            </Col>
            <Col sm="4"></Col>
            </Row>
            <Row>
                <Col sm="3"></Col>
                <Col sm="2">
                <a>
                <ContactInfo href="smith.carlicia@gmail.com" />
                </a>
                </Col>
                <Col sm="2">
                <a href="https://www.linkedin.com/in/carlicia-smith-613194b4/" target="__blank" >
                    <FontAwesomeIcon className="fontIcon"  icon={faLinkedin}  />
                </a>
                </Col>
                <Col sm="2">
                <a href="https://github.com/smith-carlicia" target="__blank">
                    <FontAwesomeIcon className="fontIcon" icon={faGithub}/>    
                </a>
                </Col>
                <Col sm="3"></Col>
            </Row>


        </Container>
    )
}

export default Contact;