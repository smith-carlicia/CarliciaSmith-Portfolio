import React from 'react';
import Card from '../../components/Card/Card';
import { Col, Row } from "shards-react";


function Portfolio() {

    return(
        <>
            <Row>
                <Col sm="3"></Col>
                        <Card
                            title="Iss Tracker" 
                            img='../../utils/Img/ISStracker-homepage-screenshot.png'
                            desc="Check out the current and five day forecast of the International Space Station passby times." 
                            deployed="https://ewells89.github.io/group-22-project1/"
                            repo="https://github.com/smith-carlicia/group-22-project1.git"/>
                        <Card 
                            title="Cyber Santa"
                            desc="Cyber Santa is an application any user can create, edit, delete and post their own personal or donations Christmas lists."  
                            deployed="https://project-2-cyber-santa.herokuapp.com"
                            repo="https://github.com/Adellis95/Project-2.git"/>
                        <Card 
                            title="Team Profile Generator" 
                            desc="This codebase is built via ES6 and node.js to create an office team generator completely from the users local terminal. When the user run node a prompt will generate asking if the user want to create a new employee card or generate the current team roster."
                            deployed="https://github.com/smith-carlicia/team-profile-generator.git"
                            repo="https://github.com/smith-carlicia/team-profile-generator.git"/>
                    <Col sm="3"></Col>
            </Row>
            <Row>
                    <Card 
                    title="Note Taker"
                    desc="This Note Taker codebase is designed to allow users to post, save and delete notes at the click(or tap) of their fingertips." 
                    deployed="https://enigmatic-atoll-90656.herokuapp.com/"
                    repo="https://github.com/smith-carlicia/note-taker.git"/>
                 <Card 
                    title="Fitness Tracker"
                    desc="This codebase is a workout tracker that creates, updates and tracks the user's daily workouts. The users data from their workouts is stored and managed in MongoDB." 
                    deployed="https://blooming-forest-17711.herokuapp.com/"
                    repo="https://github.com/smith-carlicia/fitness-tracker.git"/>
                <Card 
                    title="ReadMe Generator"
                    desc="Readme.md Generator is constructed to generate a Sample Readme.md from node.js terminal command line. This codebase expedites and simplifies the ReadMe.md building process for users via prompting questions regarding their web application via the command line terminal and generate a new ReadMe.md file with their full codebase information."
                    deployed="https://github.com/smith-carlicia/readme-generator.git"
                    repo="https://github.com/smith-carlicia/readme-generator.git"/>  
           </Row>
        </>
    )
}

export default Portfolio;