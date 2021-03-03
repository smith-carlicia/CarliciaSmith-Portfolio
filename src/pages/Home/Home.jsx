import React from 'react'
import { Grid, Button } from '@material-ui/core';
import './Home.css';

function Home() {
    return(
        <Grid>
        <Grid container>
            <Grid xs={1}></Grid>
                <Grid item direction="row" xs={10}>
                    <h1 className="header">C a r l i c i a   S m i t h</h1>
                    <h3 className="roles">Software Engineer | Full Stack Web Developer</h3>
                </Grid>
            <Grid xs={1}></Grid>
        <Grid container>
            <Grid xs={8}></Grid>
            <Grid xs={4}>
              <Button 
                        className="resume" 
                        variant="contained" 
                        color="secondary"
                        justify="center"
                        alignItems="center"
                        size="large"
                        href="https://drive.google.com/file/d/1_qATeK_qcJb_ZE6JdkaH0vzPz-RqnLzc/view?usp=sharing" 
                        target="_blank">
                        Resume
                    </Button>
            </Grid>
        </Grid>
        </Grid>
        </Grid>
    //    <div>
    //        <Row>
    //        {/* <header> */}
    //            <Col sm="7">
    //            <h1>Carlicia Smith</h1>
    //            </Col>
    //            <Col sm="5">
    //            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHlSIGXxvUVSg/profile-displayphoto-shrink_200_200/0/1579299268559?e=1613606400&v=beta&t=I6v52097UlqmkskL2M4jEXnyRV84TsbKgI3Kd3iFkXw" 
    //             class="rounded-circle"
    //             alt="carly-pro"
    //             width="250"
    //             height="236"
    //            />
               
    //        </Col>
    //        {/* <Col sm="1"></Col> */}
    //        {/* </header> */}
    //        </Row>
    //    </div>
    )
}

export default Home;