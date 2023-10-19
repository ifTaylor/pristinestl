import React from 'react';
import { Container, Row, Col, Button, Modal, Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ServicePackages: React.FC = () => {
    const roomNames = ['Kitchen', 'Bathrooms', 'Living Room', 'Main Bedroom', 'All Other Rooms'];

    const options = [
    {
        clean: 'Pristine Clean',
        rooms: {
            [roomNames[0]]: true,
            [roomNames[1]]: true,
            [roomNames[2]]: true,
            [roomNames[3]]: true,
            [roomNames[4]]: true,
        },
        },
      {
        clean: 'Complete Clean',
        rooms: {
          [roomNames[0]]: true,
          [roomNames[1]]: true,
          [roomNames[2]]: true,
          [roomNames[3]]: false,
          [roomNames[4]]: false,
        },
      },
      {
        clean: 'Essential Clean',
        rooms: {
          [roomNames[0]]: true,
          [roomNames[1]]: true,
          [roomNames[2]]: false,
          [roomNames[3]]: false,
          [roomNames[4]]: false,
        },
      },
    ];

  return (
    <Container className="container-padding">
      <Row>
        <Col>
          <Table>
            <thead className="plans-table">
              <tr className="table-top-row">
                <th>
                  <div>
                    <div className="table-top-title mb-0">Your Lifestyle</div>
                    <div className="table-top-subtitle">...your pristine plan</div>
                  </div>
                </th>
              </tr>
              <tr>
                <th>
                  <div className="table-header-cell">
                    Pristine offers base plans to help get you started!
                  </div>
                </th>
                <th className="table-cell-center">
                  <div className="plan-title">Pristine Clean</div>
                  <div className="table-text">All Rooms Cleaned</div>
                </th>
                <th className="table-cell-center">
                  <div className="plan-title">Complete Clean</div>
                  <div className="table-text">5-6 Rooms Cleaned</div>
                </th>
                <th className="table-cell-center">
                  <div className="plan-title">Essential Clean</div>
                  <div className="table-text">3-4 Rooms Cleaned</div>
                </th>
              </tr>
            </thead>
            <tbody>
                {roomNames.map((roomName, rowIndex) => (
                <tr key={rowIndex}>
                    <td className="table-cell">{roomName}</td>
                    {options.map((option, optionIndex) => (
                    <td
                        key={optionIndex}
                        className={`table-cell${option.rooms[roomName] ? ' filled' : ''}`}
                    >
                        {option.rooms[roomName] && (
                        <i className="bi bi-house-check-fill table-icon"></i>
                        )}
                    </td>
                    ))}
                </tr>
                ))}
              <tr>
                <td colSpan={2}>
                  <div className="footer-heading">Got Questions?</div>
                  <div className="footer-text">
                    We're here to help!{' '}
                    <a href="/locations/" style={{ color: 'var(--headline-blue)' }}>
                      Contact us
                    </a>
                  </div>
                </td>
                <td>
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ServicePackages;