import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CommercialServices({}) {
      const commercialItems = [
        'Carpet and Tile',
        'Disinfect high-touch areas',
        'Dust desks & furniture',
        'Waste Disposal',
      ];

  return (
    <Container className="text-center mt-5" >
      <ul className="list font-family: Times;">
        {commercialItems.map((item, index) => (
          <li className="list-group-item" key={index}>
            <img src="/p_logo.png" alt="P-" style={{ maxHeight: '20px' }}></img>
            &nbsp;{item}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default CommercialServices;