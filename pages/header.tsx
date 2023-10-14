import React, { useState } from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Pages, PageNames } from '../layouts';
import ResidentialQuote from '../modals/residential_quote';

interface HeaderProps {
  currentPage: Pages
}

export default function Header(
  {
    currentPage
  }: HeaderProps
) {
  const [showResidentialQuote, setResidentialQuote] = useState(false);
  return (
    <Container>
      <ResidentialQuote
        onHide={() => setResidentialQuote(false)}
        show={showResidentialQuote} onResidentialQuote={function (file: Blob): void {
          throw new Error('Function not implemented.');
      } }/>
      <Navbar expand="lg" className="navbar-light">
        <Container>
          <Row>
            <Col>
              <Container className="flex-center">
                <Navbar.Toggle type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Brand href={Pages.HomePage}>
                  <img src="/pristine_logo.png" alt="Pristine STL Logo" style={{ maxWidth: '250px', maxHeight: '150px' }} />
                </Navbar.Brand>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container>
                <div className="flex-center">
                  <div className="header-phone-number">
                      <a className="nav-link" href="tel:+13147751571">(314) 775-1571</a>
                  </div>
                  <div>
                    <a className="cta-button" onClick={() => setResidentialQuote(true)}>Get a Quote</a>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col>
              <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto">
                  {Object.values(Pages).map((page) => {
                    return (
                      <Nav.Link
                        key={page}
                        href={page}
                        active={currentPage === page}
                        className={currentPage === page ? "underlined" : ""}
                      >
                        {PageNames[page]}
                      </Nav.Link>
                    )
                  })}
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Container>
  );
};
