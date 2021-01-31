import React from 'react'
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

import { Container, Row, Col } from "shards-react";

function About () {

    return(
        <>
            <h1>About Me</h1>
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
            <Col sm="6">
            <Row>
                <h1>Technical Skills</h1>
            </Row>
            <Row>
                <Col sm="1"></Col>
                <Col sm="2">
                    <a>
                        <IconHtml5  />
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

            </Col>
        </>
    )
}

export default About;