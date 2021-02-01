import React from 'react';
import './Card.css';
import {
    Card,
    CardTitle,
    CardImg,
    CardBody,
    CardLink,
    Container
} from "shards-react";

const theCard = (props) => {
    return(
        <Container>
            <Card className="card" style={{ maxWidth: "300px" }}>
                <CardImg className="image" src={props.img} />
                <CardBody>
                    <CardTitle className="cardTitle">{props.title}</CardTitle>
                    <CardLink className="link" target="_blank" href={props.deployed}>Deployed</CardLink>
                        <CardLink className="link" target="_blank" href={props.repo}>Repo</CardLink>
                        
                        <p>{props.desc}</p>     
                </CardBody>
            </Card>
        </Container>
    )
}

export default theCard;