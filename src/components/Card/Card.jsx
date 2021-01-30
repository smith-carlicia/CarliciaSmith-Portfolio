import React from 'react';
import './Card.css';
import {
    Card,
    CardTitle,
    CardImg,
    CardBody,
    CardLink
} from "shards-react";

const theCard = (props) => {
    return(
        <>
            <Card style={{ maxWidth: "300px" }}>
                <CardImg src={props.img} />
                <CardBody>
                    <CardTitle className="cardTitle">{props.title}</CardTitle>
                        <p>{props.desc}</p>
                        <CardLink href={props.deployed}>Deployed</CardLink>
                        <CardLink href={props.repo}>Repo</CardLink>
                </CardBody>
            </Card>
        </>
    )
}

export default theCard;