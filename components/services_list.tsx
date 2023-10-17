import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

function ServicesList() {
  const residentialItems = [
    'Reoccurring Clean',
    'Deep Clean',
    'Carpet Shampoo',
    'Windows Cleaning',
    'Oven Cleaning',
    'Fridge Cleaning',
    'Move In/Out',
  ];

  const commercialItems = [
    'Carpet and Tile',
    'High-Touch Areas',
    'Desks & Furniture',
    'Waste Disposal',
    'Entrance Rugs',
  ];

  return (
      <Container className="mt-5 yellow-gradient">
        <Row className=" justify-content-center text-center">
          <h2>Our Services</h2>
          <Col style={{ maxWidth: '400px', fontFamily: 'Calibri', fontSize: '120%' }}>
            <h3>Residential</h3>
            <p>We provide comprehensive residential cleaning services to keep your home spotless.</p>
          </Col>
          <Col style={{ maxWidth: '400px', fontFamily: 'Calibri', fontSize: '120%' }}>
            <h3>Commercial</h3>
            <p>Our expert team ensures a clean and sanitized work environment for your business.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col style={{ maxWidth: '400px', fontFamily: 'Calibri', fontSize: '100%', paddingLeft: '10%' }}>
            <div className="list" style={{ display: 'flex', flexDirection: 'column' }}>
              {residentialItems.map((item, index) => (
                <div className="list-group-item" key={index} style={{ marginBottom: '5px', fontFamily: 'Calibri' }}>
                  <img src="/p_logo.png" alt="P-" style={{ maxHeight: '20px' }} />
                  &nbsp;{item}
                </div>
              ))}
            </div>
          </Col>
          <Col style={{ maxWidth: '400px', fontFamily: 'Calibri', fontSize: '100%', paddingLeft: '10%' }}>
            <div className="list" style={{ display: 'flex', flexDirection: 'column' }}>
              {commercialItems.map((item, index) => (
                <div className="list-group-item" key={index} style={{ marginBottom: '5px', fontFamily: 'Calibri' }}>
                  <img src="/p_logo.png" alt="P-" style={{ maxHeight: '20px' }} />
                  &nbsp;{item}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

  );
}

export default ServicesList;
