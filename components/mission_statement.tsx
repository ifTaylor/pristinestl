import React from 'react';
import { Container, Image } from 'react-bootstrap';

function MissionStatement({}) {
    const residentialItems = [
        'Reoccurring Clean',
        'Deep Clean',
        'Carpet Shampoo',
        'Windows Cleaning',
        'Oven Cleaning', 
        'Fridge Cleaning',
        'Move In/Out Cleaning',
      ];

  return (
    <Container className="text-center mt-5" >
        <div className="container text-center container-padding">
            <img src="/p_logo.png" alt="Pristine STL Logo" style={{ maxHeight: '150px' }}></img>
            <h2>Our Pristine Mission</h2>
            <div className="container" style={{ maxWidth: '600px' }}>
                <p>
                    At Pristine, we take immense pride in the exceptional quality and delight we bring to every cleaning job. Our commitment to customer satisfaction and building strong relationships is at the heart of everything we do.
                </p>
            </div>
        </div>
    </Container>
  );
}

export default MissionStatement;