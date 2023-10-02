import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink as RouterNavLink } from "react-router-dom";
import { pages } from './main.jsx';

export default function MainMenu() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container fluid>
        <RouterNavLink className="navbar-brand">
          Fina företaget
        </RouterNavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            {pages.map(({ label, path }) =>
              <RouterNavLink key={path} className="nav-link" to={path}>
                {label}
              </RouterNavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}