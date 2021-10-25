import React from "react";
import { Container, Row, Col } from "reactstrap";

function About() {
    return (
        <div id="about" className="padding-top-btm-5e">
            <div>
                <p className="menu-name font-color-pink">ABOUT ME</p>
            </div>
            <Container>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require(`./../../assets/img/daphne.png`).default} alt="profile" id="profile-img" />
                        <div>
                            <p className="font-bold-700 font-1H font-color-lightgray">
                                <span className="padding-left-right-05e">Daphne Song</span>
                            </p>
                        </div>
                    </Col>
                    {/* education, career */}
                    <Col xs={12} sm={6} md={6}>
                        <div className="padding-top-btm-2e">
                            <p>
                                seitan heirloom post-ironic pop-up iPhone mlkshk hella selfies fashion axe occupy readymade put a bird on it messenger bag Wes Anderson Schlitz plaid Bushwick church-key lo-fi skateboard slow-carb hashtag trust fund Williamsburg biodiesel fixie farm-to-table 8-bit banjo XOXO Banksy chillwave bicycle rights retro cliche tattooed bespoke irony mumblecore Shoreditch deep v polaroid McSweeney's bitters cray gentrify tofu Marfa you probably haven't heard of them yr banh mi asymmetrical art party selvage letterpress High Life.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;