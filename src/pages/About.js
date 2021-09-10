import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJiRWYDUySOnFitr0CmxNMNuN5ALQGEvl2g&usqp=CAU">
        <h1>SolarCalc</h1>
        <h2>Thinking of choosing Solar?</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To the SolarCalc!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Solar power is fast becoming the most economical power source available and with government incentives and environmental concerns more and more people are choosing solar power for their home and businesses.  How can you tell if it is a good choice for your home?
            </p>
            <p>
            We have created a solar calculator to help you easily determine if its a good match for your home location and id you can benefit based on your current utility bill.  
            </p>
            <p>
              Click on the search link to get started?    
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
