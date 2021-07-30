import React from 'react';
import './Port.css';
import {Grid,
        Card,
        CardContent} from '@material-ui/core';


const theCard = (props) => {
    return(
        <Grid container>
            <Card className="card" style={{ maxWidth: "350px" }}>
                <div className="inner">
                    <div className="front">
                        <img className="image" src={props.img} />
                        <>
                        <h5 className="cardTitle">{props.title}</h5>
                        </>
                    </div>
                    <div className="back">
                        <CardContent>
                            <p className="desciption">{props.desc}</p> 
                            <h6 className="technologies">{props.tech}</h6>    
                        </CardContent>
                    </div>
                </div>
            </Card>
        </Grid>
    )
}

export default theCard;