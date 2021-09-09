import React from 'react';
import './Port.css';
import {Grid,
        Card,
        CardContent} from '@material-ui/core';


const theCard = (props) => {
    return(
        <Grid className="container">
            <Card className="card" >
                <CardContent>
                    <img className="image" src={props.img} />
                    <div className="overlay">
                        <div className="overlayContent">
                            <h5 className="cardTitle">{props.title}</h5>
                            <p className="description">{props.desc}</p> 
                            <h6 className="technologies">{props.tech}</h6> 
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default theCard;