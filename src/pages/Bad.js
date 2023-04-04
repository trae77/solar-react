import React from "react";
// import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
// import API from "../utils/API";
import "./style.css"
// import SaveButton from '../components/SaveButton'
// import BackButton from '../components/BackButton'

function Bad(props) {


  return (
<Container fluid>
    <Row>
      <Col size="md-12">
        
          <h1>
            Your Results:
          </h1>

        
      </Col>
    </Row>
    <h2>Your Solar Score is {SearchResults.results}</h2>
    <Row>
      <Col size="md-10 md-offset-1">
      </Col>
    </Row>   <h4> You could possibly benefit from instlaling your own solar power system, however you will need a larger system to meet your powere requirements.
    We recommend that you contact a solar company in your area, or check out the following solar resources: </h4>
        <h4> </h4>
        
        <Row></Row>
        <Row></Row>
        <ul>
          <li>
          https://www.seia.org/state-solar-policy/colorado-solar
          </li>
          <li>
          https://www.cleanenergyauthority.com/solar-rebates-and-incentives/colorado
          </li>
          <li>
          https://www.solaramerica.com/list/?&mkwid=sbJcG2K8u&crid=492530465700&mp_kw=%2Bsolar%20%2Bco&mp_mt=b&pdv=c&utm_source=google&utm_medium=cpc&utm_campaign=SAM-GS-Colorado-Gen-BMM&campid=SAM-GS-Colorado-Gen-BMM&utm_term=%2Bsolar%20%2Bco&utm_adgroup=Solar+Companies&utm_match=b&utm_site=&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzzJbTlie5thv7zGm_BwTFJv_HJQmC_mW5w_aW1gBZ5B9EhX9HrUbsaAn0LEALw_wcB
          </li>
        </ul>
        
        {/* <SaveButton to='/profile'>Save My Score</SaveButton> */}
  
        <Row>
          <Row>
      
          {/* <BackButton to='/about'>Back to SolarCalc</BackButton> */}
          </Row>
        </Row>
            
        <Row>
        <Col size="md-2">
      
          </Col>
        </Row>
    </Container>
    );
  }


export default Bad;

