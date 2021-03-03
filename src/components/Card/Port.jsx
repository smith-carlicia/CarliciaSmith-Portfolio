import React from 'react';
import './Port.css';
import {Grid,
        Card,
        CardContent,
        Button} from '@material-ui/core';


const theCard = (props) => {
    return(
        <Grid container>
            <Card className="card" style={{ maxWidth: "425px" }}>
                <img className="image" src={props.img} />
                <CardContent>
                    <h5 className="cardTitle">{props.title}</h5>
                    <Button className="link" target="_blank" href={props.deployed}>Deployed</Button>
                    <Button className="link" target="_blank" href={props.repo}>Repo</Button>
                        
                    <p className="desciption">{props.desc}</p>     
                </CardContent>
            </Card>
        </Grid>
    )
}

export default theCard;