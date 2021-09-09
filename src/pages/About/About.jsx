import React, { Component } from "react";
import './About.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {    BiCaretDownCircle  } from "react-icons/bi";
import {    DiHtml5, 
            DiCss3,
            DiSass, 
            DiJsBadge, 
            DiJqueryLogo, 
            DiNodejs, 
            DiMysql, 
            DiMongodb, 
            DiReact, 
            DiBootstrap, 
            DiGithubBadge, 
            DiHeroku,
            DiIntellij,
            DiJava} from "react-icons/di";


class About extends Component {

    render() {
        return(
        <>
            <Container
                fluid  
                id="About">

                {/* headshot */}
                <Row >
                    <Col 
                        md={6} 
                        className="body">
                            <h1 className="about">About Me</h1>
                                <p 
                                    className="para">
                                        My name is Carlicia but people call me Carly for short. I'm a Full Stack Web Developer with experience using HTML, 
                                        CSS, R, Bootstrap, JavaScript, jQuery, Node.js, Express.js, mySql, MongoDb, and React.js. As a former sales and marketing 
                                        intern, I will leverage my conceptually conscious brand management and marketing 
                                        research skills to go above and beyond in effectively collaborating to create the 
                                        perfect user friendly web application. A quick learner, I'm well organized and 
                                        calm under pressure looking to offer my skills to an innovative team.

                                        In my spare time, I love to go to parks with my daughter and travel. 
                                </p>  
                    </Col>
                {/* About Me information */}
                    <Col 
                        md={6} 
                        className="info">
                            <Container 
                                className="workplaceStrengths"
                                fluid>
                            <header>
                                <h1 
                                    className="workPower">
                                    Workplace Strengths
                                </h1>
                            </header>
                                <dl 
                                    className="powers">
                                        <dt 
                                            className="power">
                                                Motivated self-starter
                                        </dt>
                                        <dt 
                                            className="power">
                                                Analytical problem solver
                                        </dt>
                                        <dt 
                                            className="power">
                                                Attention to detail
                                        </dt>
                                </dl>


                        {/* <h1 className="about">About Me</h1>
                        <p 
                            className="para">
                            My name is Carlicia but people call me Carly for short. I'm a Full Stack Web Developer with experience using HTML, 
                            CSS, R, Bootstrap, JavaScript, jQuery, Node.js, Express.js, mySql, MongoDb, and React.js. As a former sales and marketing 
                            intern, I will leverage my conceptually conscious brand management and marketing 
                            research skills to go above and beyond in effectively collaborating to create the 
                            perfect user friendly web application. A quick learner, I'm well organized and 
                            calm under pressure looking to offer my skills to an innovative team.

                            In my spare time, I love to go to parks with my daughter and travel. 
                        </p> */}
                        </Container>
                    </Col>
                </Row>

                {/* <Row 
                    className="workcard">
                        <Col md={3}></Col>
                        <Col md={9}>
                            <header>
                                <h2 
                                    className="workPower">
                                    Workplace Strengths
                                </h2>
                                <BiCaretDownCircle 
                                    className="caret"/>
                            </header>
                        </Col>
                </Row>
                <Row>
                    <Col md={4}></Col>
                    <Col md={6}>
                     <dl 
                        className="powers">
                            <dt 
                                className="power">
                                    Motivated self-starter
                            </dt>
                            <dt 
                                className="power">
                                    Analytical problem solver
                            </dt>
                            <dt 
                                className="power">
                                    Attention to detail
                            </dt>
                     </dl>
                    </Col>
                    <Col md={2}></Col>
                </Row> */}
        

                <Row className="techcard">
                    <header>
                        <h2 
                            className="tech">
                                Languages and Technologies
                        </h2>
                    </header>
                </Row>

                <Row>
                    <header>
                        <p></p>
                    </header>
                </Row>

                <Row>
                    <Col md={1}></Col>
                    <Col>
                        <DiHtml5 className="icon" />
                    </Col>
                    <Col>
                        <DiCss3 className="icon" />
                    </Col>
                    <Col>
                    <DiSass className="icon" />
                    </Col>
                    <Col>
                        <DiJsBadge className="icon" />
                    </Col>
                    <Col md={7}></Col>
                </Row>

                <Row>
                    <Col>
                        <h4 className="htmlName">HTML</h4>
                    </Col>
                    <Col>
                        <h4 className="cssName">CSS</h4>
                    </Col>
                      <Col>
                        <h4 className="sassName">SASS</h4>
                    </Col>
                    <Col>
                        <h4 className="jsName">JavaScript</h4>
                    </Col>
                    <Col md={4}></Col>
                </Row>


                <Row>
                    <Col md={1}></Col>
                    <Col>
                        <DiJqueryLogo className="icon"  />
                    </Col>
                    <Col>
                        <DiNodejs className="icon"/>
                    </Col>
                    <Col>
                        <DiJava className="icon"/>
                    </Col>
                    <Col>
                        <DiMysql className="icon"/>
                    </Col>
                    <Col md={7}></Col>
                </Row>

                <Row>
                    <Col md={1}></Col>
                    <Col>
                        <h4 className="jqueryName">jQuery</h4>
                    </Col>
                    <Col>
                        <h4 className="nodeName">Node.js</h4>
                    </Col>
                     <Col>
                        <h4 className="javaName">Java</h4>
                    </Col>
                    <Col>
                        <h4 className="sqlName">mySQL</h4>
                    </Col>
                    <Col md={7}></Col>
                </Row>

                <Row>
                    <Col md={1}></Col>
                     <Col>
                        <DiMongodb className="icon"/>
                    </Col>
                    <Col>
                        <DiReact className="icon"/>
                    </Col>
                    <Col>
                        <DiBootstrap className="icon" />
                    </Col>
                    <Col>
                        <DiGithubBadge className="icon" />
                    </Col>
                    <Col md={7}></Col>
                </Row>

                <Row>
                    <Col md={1}></Col>
                     <Col>
                        <h4 className="mongoName">MongoDB</h4>
                    </Col>
                    <Col>
                        <h4 className="reactName">React.js</h4>
                    </Col>
                    <Col>
                        <h4 className="bootstrapName">Bootstrap</h4>
                    </Col>
                    <Col>
                        <h4 className="githubName">GitHub</h4>
                    </Col>
                    <Col md={7}></Col>
                </Row>

                <Row>
                    <Col md={4}></Col>
                     <Col>
                        <DiHeroku className="icon"/>
                    </Col>
                    <Col>
                        <DiIntellij className="icon" />
                    </Col>
                    <Col md={3}></Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col>
                        <h4 className="herokuName">Heroku</h4>
                    </Col>
                    <Col>
                        <h4 className="intelliName"> Intelli J</h4>
                    </Col>
                </Row>
            </Container>
        </>  
    )
    }
};

export default About;