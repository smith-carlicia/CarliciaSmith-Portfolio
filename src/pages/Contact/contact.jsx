import React, { Component } from "react";
import '../../pages/Contact/contact.css';
import ContactInfo from '../../components/Contact/Contact';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {  DiGithubBadge } from "react-icons/di";
import {  FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



class Contact extends Component {

    render() {
        return(
        <>
            <Container
                fluid
                id="Contact"
                >
                    <Row>
                        <Col md={5}></Col>
                        <Col md={4}>
                            <h2 
                                className="contactInfo">
                                    Contact
                            </h2>
                        </Col>
                        <Col md={2}></Col>
                    </Row>

                    <Row>
                        <Col md={1} />
                        <Col md={1}>
                            <Card 
                                className="contactcrd">
                                <a>
                                    <MdEmail 
                                        className="fontIcon" 
                                        href="smith.carlicia@gmail.com" />
                                </a>
                                <h4 
                                    className="emhead">
                                        Email
                                </h4>
                                <h6 
                                    className="em">
                                        smith.carlicia@gmail.com
                                </h6>
                            </Card>
                        </Col>

                        <Col md={2} />
                        <Col md={1}>
                            <Card 
                                className="contactcrd">
                                <a 
                                    href="https://www.linkedin.com/in/carlicia-smith-613194b4/" 
                                    target="__blank" >
                                    <FaLinkedin 
                                        className="fontIcon"  
                                    />
                                </a>
                                <h4 
                                    className="ctchead">
                                        LinkedIn
                                </h4>
                                <h6 
                                    className="linked">
                                        linkedin.com/in/carlicia-smith-613194b4
                                </h6>
                            </Card>
                        </Col>

                        <Col md={2} />
                        <Col md={2}>
                            <Card 
                                className="contactcrd">
                                <a 
                                    href="https://github.com/smith-carlicia" 
                                    target="__blank">
                                        <DiGithubBadge 
                                            className="fontIcon"
                                            href="https://github.com/smith-carlicia" 
                                            target="__blank" 
                                            // icon={faGithub}
                                        />
                                </a>
                                <h4 
                                    className="gthead">
                                        GitHub
                                </h4>
                                <h6 
                                    className="gt">
                                        github.com/smith-carlicia
                                </h6>  
                            </Card>
                        </Col>
                        <Col md={1} />
                    </Row>

            </Container>
        </>

      
    )
    }
}


  // <Grid id="Contact">
        //     <Grid 
        //         container
        //         direction="row"
        //         justify="center"
        //         alignItems="center">
        //             <h2 className="contactInfo">Contact</h2>
        //     <Grid 
        //         container
        //         direction="row"
        //         justify="center"
        //     >
        //         <Grid item>
        //             <Card className="contactcrd">
        //                 <a>
        //                     <ContactInfo className="fontIcon" href="smith.carlicia@gmail.com" />
        //                 </a>
        //                 <h4 className="emhead">Email</h4>
        //                 <h6 className="em">smith.carlicia@gmail.com</h6>
        //             </Card>
        //         </Grid>
        //         <Grid item>
        //             <Card className="contactcrd">
        //                 <a href="https://www.linkedin.com/in/carlicia-smith-613194b4/" target="__blank" >
        //                     <FontAwesomeIcon className="fontIcon"  icon={faLinkedin}  />
        //                 </a>
        //                 <h4 className="ctchead">LinkedIn</h4>
        //                 <h6 className="linked">linkedin.com/in/carlicia-smith-613194b4</h6>
        //             </Card>
        //         </Grid>
        //         <Grid item>
        //             <Card className="contactcrd">
        //                 <a href="https://github.com/smith-carlicia" target="__blank">
        //                     <FontAwesomeIcon className="fontIcon" icon={faGithub}/>
        //                 </a>
        //                 <h4 className="gthead">GitHub</h4>
        //                 <h6 className="gt">github.com/smith-carlicia</h6>  
        //             </Card>
        //         </Grid>
        //     </Grid>
        //     </Grid>
        // </Grid>
export default Contact;