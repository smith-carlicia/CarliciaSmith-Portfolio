import React from 'react';
import Card from '../../components/Card/Card';
import { Row, Col } from "shards-react";

function Portfolio() {

    return(
        <>
           <Row>
               <Col sm="3"></Col>
               <Card 
                    title="Iss Tracker" 
                    img='/utils/Img/ISStracker-homepage-screenshot.png'
                    desc="Check out the current and five day forecast of the International Space Station passby times." />
                    {/* deployed="https://ewells89.github.io/group-22-project1/"
                    repo="https://github.com/smith-carlicia/group-22-project1.git" */}
                <Card 
                    title="Cyber Santa"
                    desc="Cyber Santa is an application any user can create, edit, delete and post their own personal or donations Christmas lists."  />
                <Card 
                    title="Team Profile Generator" 
                    desc="This codebase is built via ES6 and node.js to create an office team generator completely from the users local terminal. When the user run node a prompt will generate asking if the user want to create a new employee card or generate the current team roster."/>
                <Col sm="3"></Col>
           </Row>
           <Row>
               <Col sm="3"></Col>
                <Card 
                    title="Note Taker"
                    desc="This Note Taker codebase is designed to allow users to post, save and delete notes at the click(or tap) of their fingertips." />
                 <Card 
                    title="Fitness Tracker"
                    desc="This codebase is a workout tracker that creates, updates and tracks the user's daily workouts. The users data from their workouts is stored and managed in MongoDB." />
                <Card 
                    title="ReadMe Generator"
                    desc="Readme.md Generator is constructed to generate a Sample Readme.md from node.js terminal command line. This codebase expedites and simplifies the ReadMe.md building process for users via prompting questions regarding their web application via the command line terminal and generate a new ReadMe.md file with their full codebase information."/>
                <Col sm="3"></Col>    
           </Row>
        </>
    )
}

export default Portfolio;