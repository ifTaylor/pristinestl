import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ResidentialServices({}) {
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
      <ul className="list">
          {residentialItems.map((item, index) => (
            <li className="list-group-item" key={index}>
              <img src="/p_logo.png" alt="P-" style={{ maxHeight: '20px' }}></img>
              &nbsp;{item}
            </li>
          ))}
        </ul>
    </Container>
  );
}

export default ResidentialServices;