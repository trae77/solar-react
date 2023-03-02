import React from "react";
// import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
// import Withauth from "../utils/auth";
import "./style.css";
// import SaveButton from '../components/SaveButton'
// import BackButton from '../components/BackButton'
//import ResultsContainer from "../components/ResultsContainer";
// import { Redirect } from "react-router";

function Good(props) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1>Your Results:</h1>
        </Col>
      </Row>
      <h2>Your Solar Score is {SearchResults.results}</h2>
      <Row>
        <Col size="md-10 md-offset-1"></Col>
      </Row>{" "}
      <h4>
        {" "}
        This is a great solar score! you could potentially save money by
        investigating installing a solar system at your property.
      </h4>
      <h4> Check out the following solar resources:</h4>
      <Row>
        <Row></Row>
        <Row></Row>
        <ul>
          <li>https://www.seia.org/state-solar-policy/colorado-solar</li>
          <li>
            https://www.cleanenergyauthority.com/solar-rebates-and-incentives/colorado
          </li>
          <li>
            https://www.solaramerica.com/list/?&mkwid=sbJcG2K8u&crid=492530465700&mp_kw=%2Bsolar%20%2Bco&mp_mt=b&pdv=c&utm_source=google&utm_medium=cpc&utm_campaign=SAM-GS-Colorado-Gen-BMM&campid=SAM-GS-Colorado-Gen-BMM&utm_term=%2Bsolar%20%2Bco&utm_adgroup=Solar+Companies&utm_match=b&utm_site=&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzzJbTlie5thv7zGm_BwTFJv_HJQmC_mW5w_aW1gBZ5B9EhX9HrUbsaAn0LEALw_wcB
          </li>
        </ul>

        {/* <SaveButton to='/profile'>Save My Score</SaveButton> */}
      </Row>
      <Row>
        {/* <BackButton to='/about'>Back to SolarCalc</BackButton> */}
        <Row>
          <Col size="md-2"></Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Good;
