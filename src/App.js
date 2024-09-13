import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import ThemeSwitcher from './ThemeSwitcher.js';
import Status from './Status.js';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


import { MarkGithubIcon } from '@primer/octicons-react';


import packageJson from '../package.json';

import Load from './Load.js';

function App() {



    return (
        <>
            <Navbar className="border-bottom">
                <Container>
                    <Navbar.Brand href="https://github.com/bsoicher">Ben Soicher</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Test</Nav.Link>
                    </Nav>
                    <Nav>

                        <OverlayTrigger placement="bottom" overlay={<Tooltip>View project on GitHub</Tooltip>}>
                            <Nav.Link href="https://github.com/bsoicher/react" target="_blank">
                                <MarkGithubIcon size={22} />
                            </Nav.Link>
                        </OverlayTrigger>

                        <ThemeSwitcher />
                    </Nav>
                </Container>
            </Navbar>


            <Container>
                <h1>Resources</h1>

                <br />
               
                <Status message="Loading resources" percent={30} />
                <Load />
            </Container>
        </>
    );
}



export default App;
