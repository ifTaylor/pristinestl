import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutKim({}) {
  return (
    <Container>
      <Row className="flex-center item-padding">
        <Col md={5} className="text-center">
          <Image
            className="item-padding green-gradient"
            src="/kim_headshot.png"
            alt="Owner's Image"
            fluid
            style={{ maxHeight: '300px', borderRadius: '80px' }}
          />
`         <div style={{ verticalAlign: 'bottom' }}>
            <img src="/p_logo.png" alt="Pristine STL Logo" style={{ maxHeight: '150px', display: 'inline' }} />
            <h2 style={{ display: 'inline', verticalAlign: 'bottom' }}>Meet the Owner</h2>
          </div>
          <div className="pink-container">
            <p className='item-padding'>
              Hi, I'm Kim Chettle, the proud owner of Pristine STL LLC. I've been running this cleaning business since 2020, and it has been an incredible journey. As a hardworking mom, I understand the importance of maintaining a clean and healthy home environment for your family.
            </p>
            <p className='item-padding'>
              Our mission at Pristine STL LLC is to provide exceptional cleaning services that delight our clients. My team and I take pride in our work, and our dedicated team ensures that every corner of your home shines.
            </p>
            <p className='item-padding'>
              I know the challenges of balancing work and family life, so let us take care of your cleaning needs while you focus on what matters most to you.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutKim;
