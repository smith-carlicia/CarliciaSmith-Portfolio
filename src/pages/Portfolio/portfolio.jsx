import React, { Component } from "react";
import Card from '../../components/Card/Port.jsx';
import Button from '../../components/Button/Button';
import './Portfolio.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
            DiMaterializecss, 
            DiGithubBadge, 
            DiHeroku} from "react-icons/di";
import iss from '../../utils/Img/ISStracker-homepage-screenshot.png'
import santa from '../../utils/Img/cyber-santa-homepage.png';
import profile from '../../utils/Img/Team-profile-generator-screenshot.png';
import read from '../../utils/Img/Readme-generator-screenshot.png';
import fitness from '../../utils/Img/ft-homepage.png';
import note from '../../utils/Img/note-taker-screenshot.png';



class Portfolio extends Component {

   render() {
        return(
    <>
        <Container
            id="Portfolio"
            fluid 
            className="body" >
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                    <h1 className="about">Portfolio</h1>
                    </Col>
                    <Col md={6}></Col>
                </Row>

                            <Row>
                                <Col md={2}/>
                                {/* ISS Tracker project */}
                                {/* <Col md={4}>
                                    <Card
                                        img={iss}
                                    />
                                    <h5 className="title"> ISS Tracker</h5>
                                    <p className="desc">
                                        Check out the current and five day forecast of the International Space Station passby times. 
                                    </p>
                                    <p className="lang">HTML | CSS | Bootstrap | JavaScript | jQuery</p>
                                    <Button
                                        deployed="https://smith-carlicia.github.io/iss-tracker/"
                                        repo="https://github.com/smith-carlicia/group-22-project1.git" />
                                   
                                </Col> */}
                                <Col md={4}>
                                    <Card
                                        img={iss}
                                        title="ISS Tracker"
                                        tech="HTML | CSS | Bootstrap | JavaScript | jQuery"
                                        desc="Check out the current and five day forecast of the International Space Station passby times. 
"
                                    />
                                    <Button
                                        deployed="https://smith-carlicia.github.io/iss-tracker/"
                                        repo="https://github.com/smith-carlicia/group-22-project1.git" />
                                   
                                </Col>

                                {/* Cyber Santa project */}
                                <Col md={4}>
                                    <Card
                                        img={santa}
                                        title="Cyber Santa"
                                        tech="Handlebars.js | CSS | Materialize | JavaScript | Node.js | Express.js | MySQL"
                                        desc="Cyber Santa is an application any user can create, edit, delete and post their own personal or donations Christmas lists." 
                                    />
                                    <Button
                                        deployed="https://project-2-cyber-santa.herokuapp.com"
                                        repo="https://github.com/Adellis95/Project-2.git" />
                                   
                                </Col>
                                {/* <Col md={4}>
                                        <Card 
                                            img={santa}
                                        />
                                        <h5 className="title">Cyber Santa</h5>
                                        <p className="desc">
                                            Cyber Santa is an application any user can create, edit, delete and post their own personal or donations Christmas lists.
                                        </p>
                                        <p className="lang">Handlebars.js | CSS | Materialize | JavaScript | Node.js | Express.js | MySQL</p>
                                        <Button
                                            deployed="https://project-2-cyber-santa.herokuapp.com"
                                            repo="https://github.com/Adellis95/Project-2.git" />
                                </Col> */}
                                <Col md={2}/>
                            </Row>
                            <Row>
                                <Col md={2}/>
                                <Col md={4}>
                                    <Card
                                        img={profile}
                                        title="Team Profile Generator"
                                        tech="HTML | CSS | JavaScript | Node.js"
                                        desc="This codebase is built via ES6 and node.js to create an office team generator completely from the users local terminal." 
                                    />
                                    <Button
                                        deployed="https://github.com/smith-carlicia/team-profile-generator.git"
                                        repo="https://github.com/smith-carlicia/team-profile-generator.git"/>
                                </Col>
                                {/* <Col md={6}>
                                    <Card 
                                        img={profile}
                                    />
                                      <h5 className="title">Team Profile Generator</h5>
                                        <p className="desc">
                                            This codebase is built via ES6 and node.js to create an office team generator completely from the users local terminal.
                                        </p>
                                        <p className="lang">HTML | CSS | JavaScript | Node.js</p>
                                            <Button
                                                deployed="https://github.com/smith-carlicia/team-profile-generator.git"
                                                repo="https://github.com/smith-carlicia/team-profile-generator.git"/>
                                </Col> */}
                                 <Col md={4}>
                                    <Card
                                        img={note}
                                        title="Note Taker"
                                        tech="HTML | CSS | JavaScript | Node.js | Express.js"
                                        desc="This Note Taker codebase is designed to allow users to post, save and delete notes at the click(or tap) of their fingertips." 
                                    />
                                    <Button
                                        deployed="https://enigmatic-atoll-90656.herokuapp.com/"
                                        repo="https://github.com/smith-carlicia/note-taker.git"/>
                                </Col>
                                {/* <Col md={6}>
                                        <Card 
                                            img={note}
         
                                        />  
                                        <h5 className="title">Note Taker</h5>
                                        <p className="desc">
                                            This Note Taker codebase is designed to allow users to post, save and delete notes at the click(or tap) of their fingertips.
                                        </p>
                                        <p className="lang">HTML | CSS | JavaScript | Node.js | Express.js</p>
                                        <Button
                                            deployed="https://enigmatic-atoll-90656.herokuapp.com/"
                                            repo="https://github.com/smith-carlicia/note-taker.git"/>
                                </Col> */}
                            </Row>
                            <Row>
                                <Col md={2}/>
                                  <Col md={4}>
                                    <Card
                                        img={fitness}
                                        title="Fitness Tracker"
                                        tech="HTML | CSS | Bootstrap | JavaScript | Node.js | Express.js | MongoDB"
                                        desc="This codebase is a workout tracker that creates, updates and tracks the user's daily workouts." 
                                    />
                                    <Button
                                        deployed="https://blooming-forest-17711.herokuapp.com/"
                                        repo="https://github.com/smith-carlicia/fitness-tracker.git"/>
                                </Col>
                                {/* <Col md={6}>
                                    <Card 
                                        className="port"
                                        img={fitness}
                                    />
                                    <h5 className="title">Fitness Tracker</h5>
                                        <p className="desc">
                                            This codebase is a workout tracker that creates, updates and tracks the user's daily workouts. 
                                        </p>
                                    <p className="lang">HTML | CSS | Bootstrap | JavaScript | Node.js | Express.js | MongoDB</p>
                                    <Button
                                        deployed="https://blooming-forest-17711.herokuapp.com/"
                                        repo="https://github.com/smith-carlicia/fitness-tracker.git"/>
                                </Col> */}
                                  <Col md={4}>
                                    <Card
                                        img={read}
                                        title="ReadMe Generator"
                                        tech="JavaScript | Node.js"
                                        desc="Readme.md Generator is constructed to generate a Sample Readme.md from node.js terminal command line." 
                                    />
                                    <Button
                                        deployed="https://github.com/smith-carlicia/readme-generator.git"
                                        repo="https://github.com/smith-carlicia/readme-generator.git" />
                                </Col>
                                {/* <Col md={6}>
                                    <Card 
                                        className="port"
                                        img={read}
                                    />
                                    <h5 className="title">ReadMe Generator</h5> 
                                        <p className="desc">
                                            Readme.md Generator is constructed to generate a Sample Readme.md from node.js terminal command line.
                                        </p>
                                    <p className="lang">JavaScript | Node.js</p>  
                                    <Button
                                        deployed="https://github.com/smith-carlicia/readme-generator.git"
                                        repo="https://github.com/smith-carlicia/readme-generator.git" />
                                </Col> */}
                                <Col md={2}/>
                            </Row>
                            <Row className="rowPad"/>
                                
        </Container>
    </>

   
    )
   }
}

export default Portfolio;