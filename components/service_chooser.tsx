import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ServiceChooser({
    setResidentialQuote,
    setCommercialQuote
}) {

  return (
    <Container className="text-center mt-5" >
    <h2>Choose your service to get started today!</h2>
    <Row className="justify-content-center">
      <Col md={4}>
        <a className="service" onClick={() => setResidentialQuote(true)}>
          <h3>Residential Cleaning</h3>
          <p>We provide comprehensive residential cleaning services to keep your home spotless.</p>
        </a>
      </Col>
      <Col md={4}>
        <a className="service" onClick={() => setCommercialQuote(true)}>
        <h3>Commercial Cleaning</h3>
            <p>Our expert team ensures a clean and sanitized work environment for your business.</p>
        </a>
      </Col>
    </Row>
  </Container>
  );
}

export default ServiceChooser;