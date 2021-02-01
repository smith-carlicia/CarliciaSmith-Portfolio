import React from 'react'
import {Row, Col} from "shards-react";
import './Home.css';

function Home() {
    return(
       <div>
           <Row>
           {/* <header> */}
               <Col sm="7">
               <h1>Carlicia Smith</h1>
               </Col>
               <Col sm="5">
               <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHlSIGXxvUVSg/profile-displayphoto-shrink_200_200/0/1579299268559?e=1613606400&v=beta&t=I6v52097UlqmkskL2M4jEXnyRV84TsbKgI3Kd3iFkXw" 
                class="rounded-circle"
                alt="carly-pro"
                width="250"
                height="236"
               />
               
           </Col>
           {/* <Col sm="1"></Col> */}
           {/* </header> */}
           </Row>
       </div>
    )
}

export default Home;