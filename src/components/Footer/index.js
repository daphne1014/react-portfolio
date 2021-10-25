import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGoogle, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <footer class="text-center text-lg-start bg-light text-mute fixed-bottom">
            <section class="d-flex justify-content-center p-4 border-bottom">
                <div>
                    <a href="mailto: daphnesong1014@gmail.com" class="me-4 text-reset">
                    <FontAwesomeIcon
                            icon={faGoogle}
                            className="icon-size-1He icon-color"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/daphne-song/" class="me-4 text-reset">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="icon-size-1He icon-color"
                        />
                    </a>
                    <a href="https://github.com/daphne1014" class="me-4 text-reset">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="icon-size-1He icon-color"
                        />

                    </a>
                </div>
            </section>
        </footer>
    )
}

export default Footer