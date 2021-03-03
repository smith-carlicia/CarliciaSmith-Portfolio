import React from 'react'
import './About.css'
import { Grid } from '@material-ui/core';
import {    DiHtml5, 
            DiCss3, 
            DiJsBadge, 
            DiJqueryLogo, 
            DiNodejs, 
            DiMysql, 
            DiMongodb, 
            DiReact, 
            DiBootstrap, 
            DiGithubBadge, 
            DiHeroku} from "react-icons/di";


function About () {

    return(
        <Grid className="body">
            <Grid container 
                direction="row"   
                justify="center"
                alignItems="center"
            >
            </Grid>
            <Grid container 
                direction="row"   
                justify="center"
                alignItems="center"
            >
                <Grid md={4}>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHlSIGXxvUVSg/profile-displayphoto-shrink_200_200/0/1579299268559?e=1619654400&v=beta&t=QfLyxsoxZC6iwt2ZXJYBgR9ufo-yEJv85nF_J4yr51U" 
                    className="img"
                    alt="carly-pro"
                    width="250"
                    height="236" />
                </Grid>
                <Grid md={6} className="paraCard">
                    <h2 className="about">About Me</h2>
                            <p className="para">
                                My name is Carlicia but people call me Carly for short. I'm a Full Stack Web Developer with experience using HTML, 
                                CSS, R, Bootstrap, JavaScript, jQuery, Node.js, Express.js, mySql, MongoDb, and React.js. As a former sales and marketing 
                                intern, I will leverage my conceptually conscious brand management and marketing 
                                research skills to go above and beyond in effectively collaborating to create the 
                                perfect user friendly web application. A quick learner, I'm well organized and 
                                calm under pressure looking to offer my skills to an innovative team.

                                In my spare time, I love to go to parks with my daughter and travel. 
                            </p>
                </Grid>
                <Grid md={2}></Grid>
            </Grid>
            <Grid container 
                direction="column"   
                justify="center"
                alignItems="center"
            >
                <Grid className="workcard">
                    <header>
                        <h2 className="workPower">Workplace Strengths</h2>
                    </header>
                    <dl className="powers">
                        <dt className="power">Motivated self-starter</dt>
                        <dt className="power">Analytical problem solver</dt>
                        <dt className="power">Attention to detail</dt>
                    </dl>
                </Grid>
            </Grid>
            <Grid container 
                direction="row"   
                justify="center"
                alignItems="center"
            >
                <header>
                    <h2 className="tech">Technical Skills</h2>
                </header>
            </Grid>
            <Grid 
                container 
                className="firstrow"
                direction="row"   
                justify="space-evenly"
                alignItems="center"
            >
                <Grid 
                    item
                    className="icon"
                >
                    <DiHtml5 />
                </Grid>
                <Grid 
                    item
                    className="icon"
                >
                    <DiCss3 />
                </Grid>
                <Grid 
                    item
                    className="icon"
                >
                    <DiJsBadge />
                </Grid>
                <Grid 
                    item
                    className="icon"
                >
                    <DiJqueryLogo />
                </Grid>
            </Grid>
             <Grid 
                container 
                direction="row"
                alignItems="center"
            >
                <Grid item>
                    <h4 className="htmlName">HTML</h4>
                </Grid>
                <Grid item>
                    <h4 className="cssName">CSS</h4>
                </Grid>
                <Grid item>
                    <h4 className="jsName">JavaScript</h4>
                </Grid>
                <Grid item>
                    <h4 className="jqueryName">jQuery</h4>
                </Grid>
            </Grid>
            <Grid 
                container 
                direction="row"   
                justify="space-evenly"
                alignItems="center"
            >
                 <Grid 
                    item
                    className="icon"
                >
                    <DiNodejs />
                </Grid>
                <Grid 
                    item
                    className="icon"
                >
                    <DiMysql/>
                </Grid>
                <Grid 
                    item
                    className="icon"
                >
                    <DiMongodb />
                </Grid>
                <Grid 
                    item
                    className="icon"
                >
                    <DiReact />
                </Grid>
            </Grid>
             <Grid 
                container 
                direction="row"
                alignItems="center"
            >
                <Grid item>
                    <h4 className="nodeName">Node.js</h4>
                </Grid>
                <Grid item>
                    <h4 className="sqlName">mySQL</h4>
                </Grid>
                <Grid item>
                    <h4 className="mongoName">MongoDB</h4>
                </Grid>
                <Grid item>
                    <h4 className="reactName">React.js</h4>
                </Grid>
            </Grid>
            <Grid 
                container 
                direction="row"   
                justify="space-evenly"
                alignItems="center"
            >
                 <Grid 
                    item
                    className="icon"
                >
                    <DiBootstrap />
                </Grid>
                <Grid 
                    item
                    className="icon"
                >
                    <DiGithubBadge />
                </Grid>
                <Grid 
                    item
                    className="icon"
                >
                    <DiHeroku />
                </Grid>
            </Grid>
              <Grid 
                container 
                direction="row"
                alignItems="center"
            >
                <Grid item>
                    <h4 className="bootstrapName">Bootstrap</h4>
                </Grid>
                <Grid item>
                    <h4 className="githubName">GitHub</h4>
                </Grid>
                <Grid item>
                    <h4 className="herokuName">Heroku</h4>
                </Grid>
            </Grid>
            <Grid 
                container 
                className="resume"
                direction="column"   
                justify="center"
                alignItems="center"
            >
                <Grid md={8}></Grid>
                <Grid md={3}>                    
                    <h6
                        className="resumeHeader"
                    >
                        Download Resume Here:
                    </h6>
                </Grid>
                {/* <Grid item md={1}>
                    <a href="https://drive.google.com/file/d/1_qATeK_qcJb_ZE6JdkaH0vzPz-RqnLzc/view?usp=sharing" 
                        className="resume" 
                        target="_blank">
                            <FontAwesomeIcon className="resumeIcon" icon={faFile}  />
                    </a>
                </Grid> */}
            </Grid>
        </Grid>    
    )
};

export default About;