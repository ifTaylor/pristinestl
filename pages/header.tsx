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
        <Container style={{ justifyContent: 'start' }}>
          <Navbar.Toggle
              aria-controls="navbarNav"
            />
            <Navbar.Brand href={Pages.HomePage}style={{ justifyContent: 'center' }}>
              <img src="/pristine_logo.png" alt="Pristine STL Logo" style={{ maxWidth: '250px', maxHeight: '150px' }} />
            </Navbar.Brand>
        </Container>
        <Container className="mt-2" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="flex-center">
            <div className="header-phone-number">
                <a className="nav-link" href="tel:+13147751571">(314) 775-1571</a>
            </div>
            <div>
              <a className="cta-button" onClick={() => setResidentialQuote(true)}>Get a Quote</a>
            </div>
          </div>
        </Container>
        <Container className="mt-2">
          <Navbar.Collapse id="navbarNav">
            <Nav className="ml-auto" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
              {Object.values(Pages).map((page) => {
                return (
                  <Nav.Link
                    key={page}
                    href={page}
                    active={currentPage === page}
                    className={currentPage === page ? "underlined" : ""}
                    style={{ marginRight: '10px' }}
                  >
                    {PageNames[page]}
                  </Nav.Link>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};
