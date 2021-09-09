import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container'

function Footer() {

    return(
        <>
            <Container 
                fluid
                className="footer">
                    <footer className="container">
                        <p className="copy"> Made by Carlicia Smith</p>
                    </footer>
            </Container>
        </>
    )
}

export default Footer;