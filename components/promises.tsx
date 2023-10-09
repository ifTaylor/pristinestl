import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
    <Container className="pink-container">
    <Row className="center-container item-padding">
      <Col >
        <h4>Delightful Quality</h4>
        <div>
          { delightfulQuality }
        </div>
      </Col>
      <Col >
        <h4>Trusted Professionals</h4>
        <div>
          { trustedProfessionals}
        </div>
      </Col>
    </Row>
    <Row className="center-container item-padding">
      <Col >
        <h4>Personalized Service</h4>
        <div>
          { personalizedService}
        </div>
      </Col>
    </Row>
    <Row className="center-container item-padding">
      <Col >
        <h4>Customer Satisfaction</h4>
        <div>
          { customerSatisfaction }
        </div>
      </Col>
      <Col >
        <h4>Building Relationships</h4>
        <div>
          { buildingRelationships }
        </div>
      </Col>
    </Row>
  </Container>
  );
}

export default Promises;