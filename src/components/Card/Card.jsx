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
                <CardImg src={props.img} />
                <CardBody>
                    <CardTitle className="cardTitle">{props.title}</CardTitle>
                        <p>{props.desc}</p>
                        <CardLink target="_blank" href={props.deployed}>Deployed</CardLink>
                        <CardLink target="_blank" href={props.repo}>Repo</CardLink>
                </CardBody>
            </Card>
        </Container>
    )
}

export default theCard;