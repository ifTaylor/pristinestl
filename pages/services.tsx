import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, ListGroup } from 'react-bootstrap';
import { RootLayout, Pages } from '../layouts';
import ResidentialQuote from '../modals/residential_quote';
import ServiceChooser from '../components/service_chooser';
import ContactForm from '../components/contact_form';
import ResidentialServices from '../components/services_residential';
import CommercialServices from '../components/services_commercial';

function ServicesPage() {
  const [showResidentialQuote, setResidentialQuote] = useState(false);

  return (
    <Container>
      <ResidentialQuote
        onHide={() => setResidentialQuote(false)}
        show={showResidentialQuote} onResidentialQuote={function (file: Blob): void {
          throw new Error('Function not implemented.');
        }}/>
      <RootLayout pages={Pages.Services}>
        <ServiceChooser
          setResidentialQuote={setResidentialQuote}
          setCommercialQuote={setResidentialQuote}
        />
        <Row className="justify-content-center">
          <Col md={4}>
            <ResidentialServices/>
          </Col>
          <Col md={4}>
            <CommercialServices/>
          </Col>
        </Row>
        <ContactForm/>
      </RootLayout>
    </Container>
  );
}

export default ServicesPage;
