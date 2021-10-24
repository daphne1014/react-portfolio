import React from "react";
import { Container, Row, Col } from "reactstrap";

function Home(){
  return (
    <div id="home">
      <Container className="home-container">
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div className="title">
              <div className="font-bold">
                Hello, I’m
                <span className="font-color-pink"> DAPHNE</span>.
              </div>
              <div className="font-bold">Full Stack Developer.</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;