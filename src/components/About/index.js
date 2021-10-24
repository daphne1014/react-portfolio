import React from 'react';
import profileImage from "./../../assets/images/daphne.png"

function About() {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <img src={profileImage} alt="Daphne" />
    </section>
  );
}

export default About;