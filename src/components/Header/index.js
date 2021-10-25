import React, {useState} from "react";

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

function Header(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const setIsClose = () => setIsOpen(false);
    const {
        setAboutSelected,
        aboutSelected,
        setContactSelected,
        contactSelected,
        setProjectSelected,
        projectSelected,
        setResumeSelected,
        resumeSelected
    } = props;
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <Navbar light expand="md" className="nav" fixed="top">
                            <Col xs={{ size: 1 }} sm={{ size: 1 }} md={{ size: 1, offset: 1 }}>
                                <NavbarBrand href="/react-portfolio">
                                    <img src={require(`./../../assets/img/daphne.png`).default} alt="logo" className="mainImg" />
                                    <span className="mainTitle">DAPHNE</span>
                                </NavbarBrand>
                            </Col>
                            <Col xs={3} sm={2} md={{ size: 1, offset: 1 }}>
                                <NavbarToggler onClick={toggle} navbar />
                            </Col>
                            <Collapse navbar isOpen={isOpen} className="navbar-collapse">
                                <Nav navbar className="navbar-ul">
                                    <NavItem className={`navItem && ${aboutSelected}`}>
                                        <NavLink  onClick={()=>{setIsClose();setAboutSelected(true);setProjectSelected(false);setContactSelected(false);setResumeSelected(false)}}>ABOUT ME</NavLink>
                                    </NavItem>
                                    <NavItem className={`navItem && ${projectSelected}`}>
                                        <NavLink  onClick={()=>{setIsClose(); setProjectSelected(true); setContactSelected(false);setAboutSelected(false);setResumeSelected(false)}} >PORTFOLIO</NavLink>
                                    </NavItem>
                                    <NavItem className={`navItem && ${contactSelected}`}>
                                        <NavLink  onClick={()=>{setIsClose(); setContactSelected(true); setProjectSelected(false);setAboutSelected(false);setResumeSelected(false)}} >CONTACT</NavLink>
                                    </NavItem>
                                    <NavItem className={`navItem && ${resumeSelected}`}>
                                        <NavLink onClick={()=>{setIsClose(); setContactSelected(false); setProjectSelected(false);setAboutSelected(false);setResumeSelected(true)}} >RESUME</NavLink>
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