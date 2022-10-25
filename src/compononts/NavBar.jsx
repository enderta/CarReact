import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/cars">Navbar</Navbar.Brand>
                    <Nav className="me-auto">

                        <Nav.Link href="/cars">Cars</Nav.Link>
                        {/*<Nav.Link href="/owners">Owners</Nav.Link>*/}
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavBar;