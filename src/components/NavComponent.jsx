import React, {useState} from "react";
import {
    Button,
    Container,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";

export default function NavComponent() {
    const [showBasic, setShowBasic] = useState(true);

    return (
        <Navbar expand="lg" bg="light" expanded={showBasic}>
            <Container fluid>
                <Navbar.Brand href="/">Brand</Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="navbarSupportedContent"
                    aria-label="Toggle navigation"
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <i className="fas fa-bars" />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link active aria-current="page" href="#">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Link</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <NavDropdown title="Dropdown">
                                <NavDropdown.Item>Action</NavDropdown.Item>
                                <NavDropdown.Item>Another action</NavDropdown.Item>
                                <NavDropdown.Item>Something else here</NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                disabled
                                href="/"
                                tabIndex={-1}
                                aria-disabled="true"
                            >
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <form>
                        <input type="search" placeholder="Type query" aria-label="Search"/>
                        <Button variant="primary">Search</Button>
                    </form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
