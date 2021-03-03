import React from 'react';
import '../../pages/Contact/contact.css';
import ContactInfo from '../../components/Contact/Contact';
import { Grid, Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact() {

    return(

        <Grid>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center">
                    <h2 className="contactInfo">Contact</h2>
            <Grid 
                container
                direction="row"
                justify="center"
            >
                <Grid item>
                    <Card className="contactcrd">
                        <a>
                            <ContactInfo className="fontIcon" href="smith.carlicia@gmail.com" />
                        </a>
                        <h4 className="emhead">Email</h4>
                        <h6 className="em">smith.carlicia@gmail.com</h6>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className="contactcrd">
                        <a href="https://www.linkedin.com/in/carlicia-smith-613194b4/" target="__blank" >
                            <FontAwesomeIcon className="fontIcon"  icon={faLinkedin}  />
                        </a>
                        <h4 className="ctchead">LinkedIn</h4>
                        <h6 className="linked">linkedin.com/in/carlicia-smith-613194b4</h6>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className="contactcrd">
                        <a href="https://github.com/smith-carlicia" target="__blank">
                            <FontAwesomeIcon className="fontIcon" icon={faGithub}/>
                        </a>
                        <h4 className="gthead">GitHub</h4>
                        <h6 className="gt">github.com/smith-carlicia</h6>  
                    </Card>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        // <Container className="container">

        //     {/* header */}
        //     <Row>
        //     <Col sm="5"></Col>
        //     <Col sm="3">
        //         <h2 className="contactInfo">Contact</h2>
        //     </Col>
        //     <Col sm="4"></Col>
        //     </Row>

        //     {/* contact content */}
        //     <Row>
        //         <Col sm="3"></Col>
        //         <Col sm="2">
        //         <a>
        //         <ContactInfo href="smith.carlicia@gmail.com" />
        //         </a>
        //         </Col>
        //         <Col sm="2">
        //         <a href="https://www.linkedin.com/in/carlicia-smith-613194b4/" target="__blank" >
        //             <FontAwesomeIcon className="fontIcon"  icon={faLinkedin}  />
        //         </a>
        //         </Col>
        //         <Col sm="2">
        //         <a href="https://github.com/smith-carlicia" target="__blank">
        //             <FontAwesomeIcon className="fontIcon" icon={faGithub}/>    
        //         </a>
        //         </Col>
        //         <Col sm="3"></Col>
        //     </Row>


        // </Container>
    )
}

export default Contact;