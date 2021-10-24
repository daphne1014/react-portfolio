import React from "react";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode, faUser, faUsers, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const carousel_blogpage = [
  {
    src: "./img/blogpage.png"
  },
  {
    src: "./img/blogpage2.png"
  },
  {
    src: "./img/blogpage3.png"
  },
  {
    src: "./img/blogpage4.png"
  }
];

const carousel_portfolio = [
  {
    src: "./img/portfolio.png"
  },
  {
    src: "./img/portfolio2.png"
  },
  {
    src: "./img/portfolio3.png"
  },
  {
    src: "./img/portfolio4.png"
  }
];

function Projects() {
  return (
    <div id="projects" className="padding-top-btm-5e">
      <div>
        <p className="menu-name font-color-pink">PROJECTS</p>
      </div>
      <Container>
        <Row>
          {/* first project */}
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">Run Buddy Webpage</p>
              <p className="font-color-lightgray font-bold">
                A mock-up website that offers fitness training services.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">Self</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">October 16, 2021 – October 23, 2021</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">HTML5</span>
                  <span className="keyword-yellow margin-left-right-03e">CSS</span>
                </p>
              </div>
              <div className="padding-top-1e">
                <a
                  href="https://github.com/daphne1014/run-buddy"
                  className="padding-left-right-1e"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icon-size-2e icon-color"
                  />
                </a>
                <a
                  href="https://daphne1014.github.io/run-buddy/"
                  className="padding-left-right-1e"

                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_portfolio} />
          </Col>
        </Row>

        <div className="bottom-line"></div>

        {/* 2nd project */}
        <Row>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_blogpage} />
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">Cocktail-Music App</p>
              <p className="font-color-lightgray font-bold">
                This website allows indecisive users to select music based on the cocktail they choose. The landing page will display featured cocktail, music, and previously selected favorite music. The cocktail section includes the picture of the cocktail, the ingredients, and the instructions on how to make the cocktail. The music section lists five music selection with album cover, song title, and the artist information.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">2 people</span>
                  <span className="keyword-gray margin-left-right-03e">Contribution <span className="font-red">50</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">October 16, 2021 – October 23, 2021</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">HTML5</span>
                  <span className="keyword-yellow margin-left-right-03e">CSS</span>
                  <span className="keyword-yellow margin-left-right-03e">Javascript</span>
                </p>
              </div>
              <div className="padding-top-1e">
                <a
                  href="https://github.com/daphne1014/project1-prism"
                  className="padding-left-right-1e"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icon-size-2e icon-color"
                  />
                </a>

                <a
                  href="https://daphne1014.github.io/project1-prism/"
                  className="padding-left-right-1e"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="bottom-line"></div>
        <Row>
          {/* 3rd project */}
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">Code Quiz Webpage</p>
              <p className="font-color-lightgray font-bold">
                This app allows users to sign up using their email address. Users can then take the quiz multiple times and track their progress. The Quiz never ends; as soon the user arswered all the unique questions in a random order, questions are repeated in a rendom order again. Users can also add their own question to the questions table. Code Quiz app follows the MVC paradigm in its architectural structure.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">3 people</span>
                  <span className="keyword-gray margin-left-right-03e">Contribution <span className="font-red">40</span> %</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">October 16, 2021 – October 23, 2021</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">Node.js</span>
                  <span className="keyword-yellow margin-left-right-03e">Sequelize</span>
                  <span className="keyword-yellow margin-left-right-03e">Handlebars.js</span>
                </p>
                <p className="font-bold">
                  <span className="keyword-yellow">Express.js</span>
                  <span className="keyword-yellow margin-left-right-03e">Tailwind CSS</span>
                  <span className="keyword-yellow margin-left-right-03e">Chart.js</span>
                </p>
              </div>
              <div className="padding-top-1e">
                <a
                  href="https://github.com/daphne1014/quiz-code"
                  className="padding-left-right-1e"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icon-size-2e icon-color"
                  />
                </a>

                <a
                  href="https://ucla-code-quiz.herokuapp.com/"
                  className="padding-left-right-1e"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_portfolio} />
          </Col>
        </Row>
        <div className="bottom-line"></div>
        <Row>
          {/* 4th project */}
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_blogpage} />
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">The Tech Blog</p>
              <p className="font-color-lightgray font-bold">
                A website that allows users post an article or any other contents with title and comment on them with other users.
              </p>
              <div className="padding-top-btm-1e">
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">Self</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="icon-size-1e icon-color"
                  />
                  <span className="padding-left-right-1e">October 16, 2021 – October 23, 2021</span>
                </p>
                <p className="font-bold">
                  <FontAwesomeIcon
                    icon={faCode}
                    className="icon-size-1e icon-color"
                  />
                  <span className="keyword-yellow margin-left-1e margin-right-03e">Handlebars.js</span>
                  <span className="keyword-yellow margin-left-right-03e">Bootstrap</span>
                </p>
                <p className="font-bold">
                  <span className="keyword-yellow">JavaScript(jQuery)</span>
                  <span className="keyword-yellow margin-left-right-03e">MYSQL</span>
                </p>
              </div>
              <div>
              </div>
              <div className="padding-top-1e">
                <a
                  href="https://github.com/daphne1014/the-tech-blog"
                  className="padding-left-right-1e"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icon-size-2e icon-color"
                  />
                </a>

                <a
                  href="https://module-14-the-tech-blog.herokuapp.com/"
                  className="padding-left-right-1e"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="icon-size-2e icon-color"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="bottom-line"></div>
        <Row>
          {/* 5th project */}
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">Coming Soon!</p>
              <p className="font-color-lightgray font-bold">
                More projects will be added soon.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_portfolio} />
          </Col>
        </Row>

        <div className="bottom-line"></div>
        <Row>
          {/* 6th project */}
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <UncontrolledCarousel items={carousel_blogpage} />
          </Col>
          <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
            <div>
              <p className="font-bold-900 font-2">Coming Soon!</p>
              <p className="font-color-lightgray font-bold">
                More projects will be added soon.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;