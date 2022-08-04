import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import welcome from "../Assets/welcome.gif";
import Typewriter from "typewriter-effect";
import Particle from '../components/Particle';
import Reveal from 'react-reveal/Reveal';

export default function Home() {
  return (
    <div className='home-div' style={{display:"flex"}}>

        
      <Container fluid className="home-section" id="home">
      <Particle />
        <Container className="home-content">
          <Row>
            
            <Col md={7} className="home-header">
            <Reveal effect="fadeInUp">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              
              <h1 className="heading-name">
                I'M
                <strong className="main-name" style={{color:"#BB998C", textDecoration: "overline"}}> VINAYAK FATKARE</strong>
              </h1>

              <div style={{ paddingLeft:50 ,paddingTop: 20, textAlign: "left" }}>
              
               <h2 style={{color:"#BB998C",fontStyle:"italic",fontWeight: "400",textDecoration: "underline"}}>
               
              <Typewriter
      options={{
        strings: [
          "An Illustration Artist.",
          "A Graphic Designer.",
          "A Professional Paint-Mixer.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </h2>

              </div>
              </Reveal>
            </Col>
            
            <Col md={5} style={{ paddingBottom: 20 }}>
            <Reveal effect="fadeInRight">
              <img
                src={welcome}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" , paddingTop:"30px" }}
              />
              </Reveal>
            </Col>
          </Row>

        <Row>
          <Col style={{marginTop:"10%"}}>
          
          </Col>
        </Row>

        </Container>
      </Container>
      
        </div>

  )
}
