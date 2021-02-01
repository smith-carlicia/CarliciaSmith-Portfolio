import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import DevIcon from "devicon-react-svg";
import IconHtml5 from 'react-devicon/html5/plain-wordmark'
// import IconCss3 from 'react-devicon/css3/plain-wordmark'
// import IconJavascript from 'react-devicon/javascript/plain'
// import IconJquery from 'react-devicon/jquery/plain-wordmark'
// import IconNodejs from 'react-devicon/nodejs/plain-wordmark'
// import IconExpress from 'react-devicon/express/original'
// import IconMysql from 'react-devicon/mysql/plain-wordmark'
// import IconSequelize from 'react-devicon/sequelize/plain'
// import IconMongodb from 'react-devicon/mongodb/plain-wordmark'
// import IconReact from 'react-devicon/react/original-wordmark'
// import IconBootstrap from 'react-devicon/bootstrap/plain-wordmark'
// import IconHeroku from 'react-devicon/heroku/plain-wordmark'

import { Container, Row, Col, } from "shards-react";

function About () {

    return(
        <Container className="about">
            <Row>
            <Col lg="4"></Col>
            <Col lg="4">
            <h2>About Me</h2>
            </Col>
            <Col lg="4"></Col>
            </Row>
            <Row>
            <Col sm="3"></Col>
            <Col sm="6">
                <p>
                    My name is Carlicia but people call me Carly for short. I'm currently a Web 
                    Development student at Georgia Tech Coding Bootcamp. I have experience with HTML, 
                    CSS, R, Bootstrap, JavaScript, jQuery and AJAX. As a former sales and marketing 
                    intern, I will leverage my conceptually conscious brand management and marketing 
                    research skills to go above and beyond in effectively collaborating to create the 
                    perfect user friendly web application. A quick learner, I'm well organized and 
                    calm under pressure looking to offer my skills to an innovative team.
                </p>
            </Col>
            <Row>
                <Col sm="6"></Col>
                <Col sm="3">
                <a onClick="../../utils/Img/Carlicia Smith Resume (4).pdf" target="_blank">
                    <FontAwesomeIcon icon={faFile}  />
                </a>
                </Col>
                <Col sm="3"></Col>
            </Row>
            <Col sm="3"></Col>
            </Row>
            <Row>
            <Col sm="4"></Col>
            <Col sm="4">
                <h2>Technical Skills</h2>
            </Col>
            <Col sm="4"></Col>
            </Row>
            <Row>
                <Col sm="1"></Col>
                <Col sm="2">
                    <a className="devicon"> 
                    <IconHtml5 logoStyle="original" style={{ "blue" : "blue" }}/>
                    </a>
                </Col>
                {/* <Col  sm="2">
                    <IconCss3 width={100} height={100} />
                </Col> */}
                {/* <Col sm="2">
                    <IconJavascript width={100} height={100} />
                </Col>
                <Col sm="2">
                    <IconJquery width={100} height={100} />
                </Col>
                <Col sm="1"></Col> */}

            </Row>
        </Container>
    )
}

export default About;