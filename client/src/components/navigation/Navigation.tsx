import React, { FC } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface NavProps {
  openAuthModal: () => void;
}

const Navigation: FC<NavProps> = (props: NavProps) => {
  return (
    <Navbar expand="lg" className="navigation">
      <Container>
        <Navbar.Brand className="navigation__brand">寝る</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me_auto">
            <Nav.Link as={Link} to="/" className="navigation__link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/features" className="navigation__link">
              Features
            </Nav.Link>
            <Nav.Link className="navigation__link">
              <button
                data-testid="nav_button"
                className="navigation__button"
                onClick={() => props.openAuthModal()}
              >
                Get started!
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
