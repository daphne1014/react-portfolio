import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode, 
    faCalendarAlt,
    faUniversity,
    faBuilding,
    faDownload
  } from "@fortawesome/free-solid-svg-icons";
  import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Resume() {
    return (
        <div id="resume" className="padding-top-btm-5e">
            <div>
                <p className="menu-name font-color-pink">RESUME</p>
            </div>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <div className="padding-top-2e">
                            <p className="font-bold-900 font-1H font-color-bl padding-top-2e">
                                PROFILE
                            </p>
                        </div>
                        <img src={require(`./../../assets/img/daphne.png`).default} alt="profile" id="profile-img" />
                        <div>
                            <p className="font-bold-700 font-1H font-color-lightgray">
                                <span className="padding-left-right-05e">Daphne Song</span>
                            </p>
                        </div>
                        <div className="padding-top-btm-1e">
                            <span className="padding-left-right-1e">
                                <a
                                    href="https://www.linkedin.com/in/daphne-song/"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="icon-size-2He icon-color"
                                    />
                                </a>
                            </span>
                            <span className="padding-left-right-1e">
                                <a
                                    href="https://github.com/daphne1014"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="icon-size-2He icon-color"
                                    />
                                </a>
                            </span>
                            <span className="padding-left-right-1e">
                                <a
                                    href={require(`./../../assets/documents/resume.pdf`).default} download
                                >
                                    <FontAwesomeIcon
                                        icon={faDownload}
                                        className="icon-size-2He icon-color"
                                    />
                                </a>
                            </span>
                        </div>
                    </Col>
                    {/* education, career */}
                    <Col xs={12} sm={6} md={6}>
                        <div className="padding-top-btm-2e">
                            <div>
                                <p className="font-bold-900 font-1H font-color-bl">EDUCATION</p>
                            </div>
                            <div>
                                <p className="font-color-lightgray font-bold-700">
                                    <FontAwesomeIcon
                                        icon={faUniversity}
                                        className="icon-size-1e icon-color"
                                    />
                                    <span className="padding-left-right-1e">University of California, Irvine</span>
                                </p>
                            </div>
                            <div className="bottom-line-small"></div>
                            <div>
                            <p className="font-color-lightgray font-bold-700">
                                    <FontAwesomeIcon
                                        icon={faUniversity}
                                        className="icon-size-1e icon-color"
                                    />
                                    <span className="padding-left-right-1e">UCLA - Extension</span>
                                </p>
                                <p className="font-color-lightgray font-bold-700">
                                    <FontAwesomeIcon
                                        icon={faCalendarAlt}
                                        className="icon-size-1e icon-color"
                                    />
                                    <span className="padding-left-right-1e"> June 2021 - November 2021</span>
                                </p>
                                <p className="font-color-lightgray font-bold-700">
                                    <FontAwesomeIcon
                                        icon={faCode}
                                        className="icon-size-1e icon-color"
                                    />
                                    <span className="keyword-yellow margin-left-1e margin-right-03e">HTML5</span>
                                    <span className="keyword-yellow margin-left-right-03e">CSS</span>
                                    <span className="keyword-yellow margin-left-right-03e">Bootstrap</span>
                                </p>
                                <p className="font-color-lightgray font-bold-700">
                                    <span className="keyword-yellow">JavaScript(jQuery)</span>
                                    <span className="keyword-yellow margin-left-right-03e">Node.js</span>
                                    <span className="keyword-yellow margin-left-right-03e">SQL</span>
                                </p>
                                <p className="font-color-lightgray font-bold-700">
                                    <span className="keyword-yellow">MongoDB</span>
                                    <span className="keyword-yellow margin-left-right-03e">React</span>
                                    <span className="keyword-yellow margin-left-right-03e">NoSQL</span>
                                </p>
                            </div>
                        </div>
                       
                        <div>
                            <div>
                                <p className="font-bold-900 font-1H font-color-bl">CAREER</p>
                            </div>
                            <div>
                                <p className="font-color-lightgray font-bold-700">
                                    <FontAwesomeIcon
                                        icon={faBuilding}
                                        className="icon-size-1e icon-color"
                                    />
                                    <span className="padding-left-right-1e">Spigen Inc,</span>
                                </p>
                                <p className="font-color-lightgray font-bold-700">
                                    <FontAwesomeIcon
                                        icon={faCalendarAlt}
                                        className="icon-size-1e icon-color"
                                    />
                                    <span className="padding-left-right-1e">February 2019 - </span>
                                </p>
                            </div>
                            
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;