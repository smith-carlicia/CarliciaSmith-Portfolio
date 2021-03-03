import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contactInfo = (props) => {
    return(
        <Grid>
             <a href ={"mailto:" + props.email}target="__blank">
                <FontAwesomeIcon className="fontIcon" icon={faEnvelope} />
            </a>
        </Grid>
    )
}

export default contactInfo;