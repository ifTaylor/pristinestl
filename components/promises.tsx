import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HexagonTextBox from './canvas_shapes/hexagon_textbox';

function Promises({}) {
    const delightfulQuality = "Our team is dedicated to delivering spotless results that exceed your expectations." +
        "Your home or office will shine with cleanliness and freshness after our visit.";
    const trustedProfessionals = "Our highly-trained and trustworthy professionals are not just cleaners. They're your partners" +
        "in maintaining a clean and healthy environment.";
    const personalizedService = "We understand that every space is unique, and your needs are too. That's why we tailor our" +
        "cleaning services to match your specific requirements, ensuring a personalized experience every time.";
    const customerSatisfaction = "We're not satisfied until you are. Our commitment to your happiness drives us to go the extra mile" +
        "to ensure your space is immaculate and inviting.";
    const buildingRelationships = "Beyond cleaning, we believe in building lasting relationships with our clients. You're not just" +
        "a customer; you're part of the Pristine family.";
    

  return (
    <Container className="container-padding">
      <Row className="flex-center">
        <Col lg={4} sm={1} xs={6}>
          <HexagonTextBox
            title="Delightful Quality"
            text={delightfulQuality}
            size={[60, 180]}
          />
        </Col>
        <Col lg={4} sm={1} xs={6}>
          <HexagonTextBox
            title="Trusted Professionals"
            text={trustedProfessionals}
            size={[60, 180]}
          />
        </Col>
      </Row>
      <Row className="flex-center mt-2">
        <Col lg={4} sm={1} xs={6}>
          <HexagonTextBox
            title="Personalized Service"
            text={personalizedService}
            size={[60, 180]}
          />
        </Col>
      </Row>
      <Row className="flex-center mt-2">
        <Col lg={4} sm={1} xs={6}>
          <HexagonTextBox
            title="Customer Satisfaction"
            text={customerSatisfaction}
            size={[60, 180]}
          />
        </Col>
        <Col lg={4} sm={1} xs={6}>
          <HexagonTextBox
            title="Building Relationships"
            text={buildingRelationships}
            size={[60, 180]}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Promises;