import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import 'bootstrap-icons/font/bootstrap-icons.css';

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


  const backgroundAnimation = useSpring({
    from: { backgroundColor: '#d89aad', opacity: 1, borderRadius: '20px' },
    to: async next => {
      while (1) {
        await next({ backgroundColor: '#008b8b', opacity: 0.7 });
        await next({ backgroundColor: '#d89aad', opacity: 1 });
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    },
  });

  return (
    <div ref={ref}>
      <Container className="text-center mt-5">
        <animated.div style={backgroundAnimation} className="text-center item-padding">
            <h2>Choose your service to get started today!</h2>
              <Row className="justify-content-center item-padding">
                <Col style={{ maxWidth: '300px' }}>
                  <animated.div style={colAnimation} className="text-center">
                    <a className="service" onClick={() => setResidentialQuote(true)}>
                      <i className="bi bi-house-fill service-icon"></i>
                      <br></br>
                      Residential Quote
                    </a>
                  </animated.div>
                </Col>
                <Col style={{ maxWidth: '300px' }}>
                  <animated.div style={colAnimation} className="text-center">
                    <a className="service" onClick={() => setCommercialQuote(true)}>
                      <i className="bi bi-building service-icon"></i>
                      <br></br>
                      Commercial Quote
                    </a>
                  </animated.div>
                </Col>
              </Row>
        </animated.div>
      </Container>
    </div>
  );
}

export default ServiceChooser;
