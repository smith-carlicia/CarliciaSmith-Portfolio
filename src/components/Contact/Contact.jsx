import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const contactInfo = (props) => {
    return(
        <Container>
             <a href ={"mailto:" + props.email}target="__blank">
                <FontAwesomeIcon className="fontIcon" icon={faEnvelope} />
            </a>
        </Container>
    )
}

export default contactInfo;