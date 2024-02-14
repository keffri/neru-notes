import React, { FC } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type User = {
  email: string;
};

export interface NavProps {
  openAuthModal: () => void;
  updateUser: (user: User) => void;
  user: User;
  removeCookie: (name: string) => void;
  authToken: any;
}

const Navigation: FC<NavProps> = (props: NavProps) => {
  const signOut = () => {
    props.removeCookie('Email');
    props.removeCookie('AuthToken');
    window.location.reload();
  };

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
            {props.authToken && (
              <Nav.Link as={Link} to="#" className="navigation__link">
                Entry
              </Nav.Link>
            )}
            {props.authToken && (
              <Nav.Link as={Link} to="#" className="navigation__link">
                View
              </Nav.Link>
            )}
            {props.authToken && (
              <Nav.Link href="#" className="navigation__link">
                <button
                  data-testid="buttonLogout"
                  className="navigation__button"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </Nav.Link>
            )}
            {!props.authToken && (
              <Nav.Link as={Link} to="/features" className="navigation__link">
                Features
              </Nav.Link>
            )}
            {!props.authToken && (
              <Nav.Link className="navigation__link">
                <button
                  data-testid="nav_button"
                  className="navigation__button"
                  onClick={() => props.openAuthModal()}
                >
                  Get started!
                </button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
