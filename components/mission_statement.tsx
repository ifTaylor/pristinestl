import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import Container from 'react-bootstrap/Container';
import { useInView } from 'react-intersection-observer';

function YourComponent() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const containerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: config.wobbly,
  });

  return (
    <Container className="text-center mt-5">
      <div className="container text-center item-padding">
        <div ref={ref}>
          <animated.div
            style={{
              opacity: containerAnimation.opacity,
              transform: containerAnimation.transform,
            }}
          >
            <animated.img
              src="/p_logo.png"
              alt="Pristine STL Logo"
              style={{ maxHeight: '150px' }}
            />
            <div className="top-title">Our Pristine Mission</div>
            <div className="container" style={{ maxWidth: '400px' }}>
                At Pristine, we take immense pride in the exceptional quality and delight we bring to every cleaning job.
            </div>
            <div className="container mt-3" style={{ maxWidth: '325px' }}>
                Our commitment to customer satisfaction and building strong relationships is at the heart of everything we do.
            </div>
          </animated.div>
        </div>
      </div>
    </Container>
  );
}

export default YourComponent;
