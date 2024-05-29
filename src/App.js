import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import LoginGithub from 'react-login-github';
import Example from './modal.js';


import ColorMode from './color.js';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);


function App() {
  return (
    <div className="App">
     
      <Navbar className="border-bottom">
        <Container>
          <Navbar.Brand href="https://github.com/dnd-mdn">dnd-mdn</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>
              <LoginGithub
                className="btn btn-primary"
                clientId="Iv1.5dceb0507b750647"
                redirectUri="https://dnd-mdn.github.io/oauth/pop.html"
                onSuccess={onSuccess}
                onFailure={onFailure}
              />
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
      <Example />
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          title="Light dropdown"
          className="mt-2"
          data-bs-theme="light"
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          title="Dark dropdown"
          className="mt-2"
          data-bs-theme="dark"
        >
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>
      
        <ColorMode />

    </div>

  );
}

export default App;
