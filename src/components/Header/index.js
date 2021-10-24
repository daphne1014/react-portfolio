import React, { useState } from "react";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    Container,
    Row,
    Col
} from "reactstrap";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const setIsClose = () => setIsOpen(false);
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <Navbar light expand="md" className="nav" fixed="top">
                            <Col xs={{ size: 1 }} sm={{ size: 1 }} md={{ size: 1, offset: 1 }}>
                                <NavbarBrand href="/">
                                    <img src={require(`./../../assets/img/daphne.png`).default} alt="logo" className="mainImg" />
                                    <span className="mainTitle">DAPHNE</span>
                                </NavbarBrand>
                            </Col>
                            <Col xs={3} sm={2} md={{ size: 1, offset: 1 }}>
                                <NavbarToggler onClick={toggle} navbar />
                            </Col>
                            <Collapse isOpen={isOpen} navbar className="navbar-collapse">
                                <Nav navbar className="navbar-ul">
                                    <NavItem className="navItem">
                                        <NavLink href="about" onClick={setIsClose}>ABOUT ME</NavLink>
                                    </NavItem>
                                    <NavItem className="navItem">
                                        <NavLink href="portfolio" onClick={setIsClose}>PORTFOLIO</NavLink>
                                    </NavItem>
                                    <NavItem className="navItem">
                                        <NavLink href="contact" onClick={setIsClose}>CONTACT</NavLink>
                                    </NavItem>
                                    <NavItem className="navItem">
                                        <NavLink href="resume" onClick={setIsClose}>RESUME</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;