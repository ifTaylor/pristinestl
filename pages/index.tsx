import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, ListGroup } from 'react-bootstrap';
import { RootLayout, Pages } from '../layouts';
import ResidentialQuote from '../modals/residential_quote';
import ServiceChooser from '../components/service_chooser';
import Promises from '../components/promises';
import ContactForm from '../components/contact_form';
import HeaderMessage from '../components/header_message';
import BannerGraphic from '../components/banner_graphic';
import MissionStatement from '../components/mission_statement';

function HomePage() {
  const [showResidentialQuote, setResidentialQuote] = useState(false);

  return (
    <div>
      <ResidentialQuote
        onHide={() => setResidentialQuote(false)}
        show={showResidentialQuote} onResidentialQuote={function (file: Blob): void {
          throw new Error('Function not implemented.');
        }}/>

      <HeaderMessage/>
      <RootLayout pages={Pages.HomePage}>
          <BannerGraphic/>
          <ServiceChooser
            setResidentialQuote={setResidentialQuote}
            setCommercialQuote={setResidentialQuote}
          />
          <MissionStatement/>
          <Promises/>
          <ContactForm/>
      </RootLayout>
    </div>
  );
}

export default HomePage;
