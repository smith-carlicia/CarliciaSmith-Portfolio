import React, { Component } from "react";
import Card from '../../components/Card/Port.jsx';
import Button from '../../components/Button/Button.jsx';
import './Portfolio.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import burger from '../../utils/Img/eat-da-burger-screenshot-1.png'
import employee from '../../utils/Img/employee-directory.png'
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
                                        img={employee}
                                        title="Employee Directory"
                                        desc="This codebase is a employee directory created to search, sort and filter employees information generated from a random user API."
                                        tech="HTML | CSS | JavaScript | Node.js | React.js"
                                    />
                                        <Button
                                            deployed="https://serene-tor-72255.herokuapp.com/"
                                            repo="https://github.com/smith-carlicia/employee-directory.git"/>
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
                                        img={burger}
                                        title="Eat Da Burger!"
                                        desc="This codebase is architectured to as a burger logger to take in the users input of their desired burger and to log it into the provided database in the backend of the application. On the client side, this application lets users input the names of burgers they'd like to eat. When a user submits the name of their desired burger, the application will display the burger on the left side of the page waiting to be devoured. The burgers will be in a waiting area on the let side of the application waiting to be devoured with a Devour It! button. When the Devour It! button is pressed, the consumed burger will appear on the right side of the screen. The burger logger is primarily constructed via Handlebars, Express, Node and MySQL. Node and MySQL queries routes the data from the user input into the application while Handlebars generates the client side, specifically views of the application. The burger logger is deployed via Heroku to host as server and database for this application."
                                        tech="JavaScript | Node.js | Handlebars.js | MySQL"
                                    />
                                    <Button
                                        deployed="https://floating-meadow-92330.herokuapp.com/burgers"
                                        repo="https://github.com/smith-carlicia/burger.git" />
                                </Col>
                                <Col md={2}/>
                            </Row>                                
        </Container>
    </>

   
    )
   }
}

export default Portfolio;