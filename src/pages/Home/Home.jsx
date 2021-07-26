import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import graph from '../../utils/Img/port-logo.jpeg'
// import { Grid, Button } from '@material-ui/core';
import './Home.css';

class Home extends Component {
    render() {
        return(
        <>
        <Container
            className="home" 
            fluid>
                <Row className="justify-content-md-center">
                    {/* <Col xs md lg={2} /> */}
                     {/* <Col xs md lg={6} className="photo />  */}

                    <Col xs md lg={12}>
                       <h3
                            className="carlicia">
                                C  a  r  l  i  c  i  a   S  m  i  t  h
                        </h3>
                           <p 
                            className="seRoles">
                                Software Engineer | Full Stack Web Developer
                            </p>
                        <Button 
                            className="resume" 
                            variant="outline-dark"
                            justify="center"
                            alignItems="center"
                            size="large"
                            href="https://drive.google.com/file/d/1_qATeK_qcJb_ZE6JdkaH0vzPz-RqnLzc/view?usp=sharing" 
                            target="_blank">
                                Resume
                        </Button>
                    </Col>
                    {/* <Col xs md lg={2} /> */}

                        
                    {/* <Col lg={4}>
                        <Button 
                            className="resume" 
                            variant="outline-dark"
                            justify="center"
                            alignItems="center"
                            size="large"
                            href="https://drive.google.com/file/d/1_qATeK_qcJb_ZE6JdkaH0vzPz-RqnLzc/view?usp=sharing" 
                            target="_blank">
                                Resume
                        </Button>
                    </Col> */}
                </Row>


                {/* <Row>
                    <Col lg={8}></Col>
                    <Col lg={4}>
                        <Button 
                            className="resume" 
                            variant="outline-dark"
                            justify="center"
                            alignItems="center"
                            size="large"
                            href="https://drive.google.com/file/d/1_qATeK_qcJb_ZE6JdkaH0vzPz-RqnLzc/view?usp=sharing" 
                            target="_blank">
                                Resume
                        </Button>
                    </Col>
                // </Row> */}
        </Container>
        </>
        // <Grid id="/">
        // <Grid container>
        //     <Grid xs={1}></Grid>
        //         <Grid item direction="row" xs={10}>
        //             <h1 className="header">C a r l i c i a   S m i t h</h1>
        //             <h3 className="roles">Software Engineer | Full Stack Web Developer</h3>
        //         </Grid>
        //     <Grid xs={1}></Grid>
        // <Grid container>
        //     <Grid xs={8}></Grid>
        //     <Grid xs={4}>
        //       <Button 
        //                 className="resume" 
        //                 variant="outline-info"
        //                 justify="center"
        //                 alignItems="center"
        //                 size="large"
        //                 href="https://drive.google.com/file/d/1_qATeK_qcJb_ZE6JdkaH0vzPz-RqnLzc/view?usp=sharing" 
        //                 target="_blank">
        //                 Resume
        //             </Button>
        //     </Grid>
        // </Grid>
        // </Grid>
        // </Grid>
    )
    }
}

export default Home;