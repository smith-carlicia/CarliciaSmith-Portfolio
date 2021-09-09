import React, { Component } from "react";
import Card from '../../components/Card/Port.jsx';
import Button from '../../components/Button/Button.jsx';
import './Portfolio.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                    <Col md={12}>
                    <h1 className="portHeader">Portfolio</h1>
                    </Col>
                </Row>

                            <Row>
                                <Col md={2}/>
                                {/* ISS Tracker project */}
                                <Col md={4}>
                                    <Card
                                        img={iss}
                                        title="ISS Tracker"
                                        desc="Check out the current and five day forecast of the International Space Station passby times."
                                        tech="HTML | CSS | Bootstrap | JavaScript | jQuery"
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
                                            desc="Cyber Santa is an application any user can create, edit, delete and post their own personal or donations Christmas lists."
                                            tech="Handlebars.js | CSS | Materialize | JavaScript | Node.js | Express.js | MySQL"
                                        />
                                        <Button
                                            deployed="https://project-2-cyber-santa.herokuapp.com"
                                            repo="https://github.com/Adellis95/Project-2.git" />
                                </Col>
                                <Col md={2}/>
                            </Row>
                            <Row />

                            <Row>
                                <Col md={2}/>
                                <Col md={4}>
                                    <Card 
                                        img={profile}
                                        title="Team Profile Generator"
                                        desc="This codebase is built via ES6 and node.js to create an office team generator completely from the users local terminal."
                                        tech="HTML | CSS | JavaScript | Node.js<"
                                    />
                                        <Button
                                            deployed="https://github.com/smith-carlicia/team-profile-generator.git"
                                            repo="https://github.com/smith-carlicia/team-profile-generator.git"/>
                                </Col>
                                <Col md={4}>
                                        <Card 
                                            img={note}
                                            title="Note Taker"
                                            desc="This Note Taker codebase is designed to allow users to post, save and delete notes at the click(or tap) of their fingertips."
                                            tech="HTML | CSS | JavaScript | Node.js | Express.js"
                                        />  
                                        <Button
                                            deployed="https://enigmatic-atoll-90656.herokuapp.com/"
                                            repo="https://github.com/smith-carlicia/note-taker.git"/>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={2}/>
                                <Col md={4}>
                                    <Card 
                                        img={fitness}
                                        title="Fitness Tracker"
                                        desc="This codebase is a workout tracker that creates, updates and tracks the user's daily workouts. "
                                        tech="HTML | CSS | Bootstrap | JavaScript | Node.js | Express.js | MongoDB"
                                    />
                                    <Button
                                        deployed="https://blooming-forest-17711.herokuapp.com/"
                                        repo="https://github.com/smith-carlicia/fitness-tracker.git"/>
                                </Col>
                                <Col md={4}>
                                    <Card 
                                        img={read}
                                        title="ReadMe Generator"
                                        desc="Readme.md Generator is constructed to generate a Sample Readme.md from node.js terminal command line."
                                        tech="JavaScript | Node.js"
                                    />
                                    <Button
                                        deployed="https://github.com/smith-carlicia/readme-generator.git"
                                        repo="https://github.com/smith-carlicia/readme-generator.git" />
                                </Col>
                                <Col md={2}/>
                            </Row>                                
        </Container>
    </>

   
    )
   }
}

export default Portfolio;