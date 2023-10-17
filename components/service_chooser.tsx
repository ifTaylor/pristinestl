import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

function ServiceChooser({
    setResidentialQuote,
    setCommercialQuote
}) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const colAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(200px)',
  });

  return (
    <Container className="text-center mt-5">
      <h2>Choose your service to get started today!</h2>
      <div ref={ref}>
        <Row className="justify-content-center">
          <Col md={4}>
            <animated.div style={colAnimation}>
              <a className="service" onClick={() => setResidentialQuote(true)}>
                <h3>Residential Cleaning</h3>
                <div>We provide comprehensive residential cleaning services to keep your home spotless.</div>
              </a>
            </animated.div>
          </Col>
          <Col md={4}>
            <animated.div style={colAnimation}>
              <a className="service" onClick={() => setCommercialQuote(true)}>
                <h3>Commercial Cleaning</h3>
                <div>Our expert team ensures a clean and sanitized work environment for your business.</div>
              </a>
            </animated.div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ServiceChooser;
