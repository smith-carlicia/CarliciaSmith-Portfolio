import React from 'react'
// import Nav from '../../components/Nav/Nav';
import Card from '../../components/Card/Card';
import Portfolio from '../Portfolio/portfolio'
import About from '../About/About';

function Home() {
    return(
       <div>
            {/* <Nav /> */}
            <About />
            <Card />
            <Portfolio />
       </div>
    )
}

export default Home;