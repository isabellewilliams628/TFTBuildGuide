import { Container, Col, Row, } from "react-bootstrap";
import React from 'react'
import NavBar from './NavBar.js'
import './Builds.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Guild} from "./BuildComps/Guild.js";
import {Mystic} from "./BuildComps/Mystic.js"
import {Shimmer} from "./BuildComps/Shimmer.js"
import {Daeja} from "./BuildComps/Daeja.js"
import {Jinx} from "./BuildComps/Jinx.js"



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  <Carousel responsive={responsive}>
    <div>Mystic</div>
    <div>Guild</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 4</div>
    <div>Item 5</div>
  </Carousel>;
   function Builds() {
    return (
<div>
      <NavBar />
      <section className="idk" id="idk">
        <Container>
          <Row>
            <Col>
              <div className="Builds-bx">
                <h2 className="head">
                  Top TFT Comps & Builds
                </h2>
                <p className="sub">
                  Builds to help you Climb!
                </p>
<div className="Parent">
<Carousel responsive={responsive} infinite={true} className="Builds-slider">


<div className="Builds">
    </div>
  
  <div className="Builds">
  < Guild />
    </div>

<div></div>

  <div className="Builds">
   < Mystic />
     </div>

<div></div>

   <div className="Builds">
    < Shimmer />               
       </div>

<div></div>

    <div className="Builds">
      < Daeja />          
        </div>

<div></div>
      
      <div className="Builds">
        < Jinx />
      </div>

    
                </Carousel>
                </div>
                </div>
            </Col>
          </Row>
        </Container>
        </section>
        </div>
       

    );
   };
 export default Builds;


   

