import React from "react";
import profileImage from "../../assets/large/Profile/";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hey, hey, hey! I'm Juan Delatorre! I am a student under the program, KU Coding Boootcamp for Full Stack Dev! 
          </p>
          <p>test.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
