import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Example from './modal.js';
import ThemeToggle from './ThemeToggle.js';


function App() {
  return (
    <>
      <Navbar className="border-bottom">
        <Container>
          <Navbar.Brand href="https://github.com/bsoicher">Ben Soicher</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>
              <ThemeToggle />
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <br />
        <Example />
      </Container>
    </>
  );
}

export default App;
