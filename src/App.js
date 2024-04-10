import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import LoginGithub from 'react-login-github';

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
                redirectUri="https://dnd-mdn.github.io/oauth"
                onSuccess={onSuccess}
                onFailure={onFailure}
              />
              </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>

    </div>

  );
}

export default App;
