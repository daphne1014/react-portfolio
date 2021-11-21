import React from "react";
import { Row, Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function ProjectList() {
    const projects = [
        {
            name: "Run Buddy Webpage",
            description: "A mock-up website that offers fitness training services.",
            link: "https://daphne1014.github.io/run-buddy/",
            github: "https://github.com/daphne1014/run-buddy"
        },
        {
            name: "Cocktail-Music App",
            description: "This website allows indecisive users to select music based on the cocktail they choose. The landing page will display featured cocktail, music, and previously selected favorite music. The cocktail section includes the picture of the cocktail, the ingredients, and the instructions on how to make the cocktail. The music section lists five music selection with album cover, song title, and the artist information.",
            link: "https://daphne1014.github.io/project1-prism/",
            github: "https://github.com/daphne1014/project1-prism"
        },
        {
            name: "Code Quiz Webpage",
            description: "This app allows users to sign up using their email address. Users can then take the quiz multiple times and track their progress. The Quiz never ends; as soon the user arswered all the unique questions in a random order, questions are repeated in a rendom order again. Users can also add their own question to the questions table. Code Quiz app follows the MVC paradigm in its architectural structure.",
            link: "https://ucla-code-quiz.herokuapp.com/",
            github: "https://github.com/daphne1014/quiz-code"
        },
        {
            name: "The Tech Blog",
            description: "This is a blog website that allows users to sign up and create a profile. Users can then create a blog post and add comments to the post. The blog post can be edited and deleted by the user. The blog post can also be liked and disliked by other users.",
            link: "https://module-14-the-tech-blog.herokuapp.com/",
            github: "https://github.com/daphne1014/the-tech-blog"
        },
        {
            name: "Toilet SOS",
            description: "This is a program that will find a potty in a given location. You will also have the ability to add a new potty to the database with a review and rating.",
            link: "http://project-toilet.herokuapp.com/",
            github: "https://github.com/eisforgene/project-toilet"
        },
        {
            name: "Coming Soon!",
            description: "More projects will be added soon."
        }
    ];
    return (
        projects.map((project, i) => (
            <div>
                <Row>
                    <Col xs={12} sm={12} md={6} className="padding-top-btm-1e">
                        <div>
                            <p className="font-bold-900 font-2">{project.name}</p>
                            <p className="font-color-lightgray font-bold">
                                {project.description}
                            </p>
                            <div className="padding-top-1e">
                                <a
                                    href={project.github}
                                    className="padding-left-right-1e"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="icon-size-2e icon-color"
                                    />
                                </a>
                                <a
                                    href={project.link}
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
                        <img className= "project-gif"
                            src={require(`../../assets/img/${i}.gif`).default}
                            alt={project.name}                            key={project.name}
                        />

                    </Col>
                </Row>
                <div className="bottom-line"></div>
            </div>
        ))
    )
}

export default ProjectList;