import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../components/Particle';
import img1 from "../Assets/work-img/img1.jpg";
import img2 from "../Assets/work-img/img2.jpg";
import img3 from "../Assets/work-img/img3.jpg";
import img4 from "../Assets/work-img/img4.jpg";
import img5 from "../Assets/work-img/img5.jpg";
import img6 from "../Assets/work-img/img6.jpg";
import YouTube from 'react-youtube';
import Reveal from 'react-reveal/Reveal';
const Opts = {
  height: '280',
  width: '500',

}

const opts = {
  height: '100',
  width: '200',

}

function size(w){
  console.log(w);
  if (w <= 767) {
    return true
  } else {
    return false
  }
  
}

export default function Work() {
  return (
    
   <div className="work-div" style={{display:"flex"}}>
       <Particle />
       <Container style={{ paddingTop:"100px"}}>
    <Row>
      <Col>
      <h2>Gallery</h2>
      </Col>
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col style={{ justifyContent: "center",   margin: "15px"}}>
    <Reveal effect="fadeInLeft"><img className="work-img" src={img1}  /></Reveal>
      </Col>

      <Col style={{ justifyContent: "center",margin: "15px" }}>
      <Reveal effect="fadeInRight"> <img className="work-img" src={img2}  /></Reveal>
      </Col>

      <Col style={{ justifyContent: "center", margin: "15px" }}>
      <Reveal effect="fadeInLeft"><img className="work-img" src={img3}  /></Reveal>
      </Col>

      <Col style={{ justifyContent: "center", margin: "15px" }}>
      <Reveal effect="fadeInRight"> <img className="work-img" src={img4}  /></Reveal>
      </Col>

      <Col style={{ justifyContent: "center", margin: "15px" }}>
      <Reveal effect="fadeInLeft"><img className="work-img" src={img5}  /></Reveal> 
      </Col>
      
      <Col style={{ justifyContent: "center", margin: "15px" }}>
      <Reveal effect="fadeInRight">  <img className="work-img" src={img6}  /></Reveal>
      </Col>
      
    </Row>

    <Row>
      <Col>
      <h2>Youtube</h2>
      </Col>
      </Row>

      <Row>

      <Col style={{marginTop:"20px"}}>
      <Reveal effect="fadeInLeft"><YouTube className='youtube' videoId='RxzlMHRpxP0'  opts={size(window.innerWidth) ? opts: Opts} /></Reveal> 
      </Col>

      <Col  style={{marginTop:"20px"}}>
      <Reveal effect="fadeInRight">  <YouTube className='youtube' videoId='uLYUTX64dck'  opts={size(window.innerWidth) ? opts: Opts} /></Reveal> 
      </Col>
    
      <Col  style={{marginTop:"20px"}}>
      <Reveal effect="fadeInLeft"> <YouTube className='youtube' videoId='wSWcKytGe_s'  opts={size(window.innerWidth) ? opts: Opts} /></Reveal> 
      </Col>

      <Col  style={{marginTop:"20px"}}>
      <Reveal effect="fadeInRight">  <YouTube className='youtube' videoId='0aa9cabC-po'  opts={size(window.innerWidth) ? opts: Opts} /></Reveal> 
      </Col>

    </Row>
    </Container>
   </div>
  )
}

