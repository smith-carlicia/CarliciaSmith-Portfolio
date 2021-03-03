import React from 'react'
import './Footer.css'
import { Grid } from '@material-ui/core';

function Footer() {

    return(
        <Grid>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center">
                        <footer className="container">
                            <p className="copy"> Made by Carlicia Smith</p>
                        </footer>
            </Grid>
        </Grid>
    )
}

export default Footer;