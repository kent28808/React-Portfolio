import React from "react";
import Profile from "../../assets/profile.jpg"

function About() {
  return (
    <div className="about-container">
      <h5>About Me</h5>

      <img src={Profile} alt="profile-photo" className="profile float-left"></img>
      <div>

        <div className="mt-3">
          <p>Aloha! My name is Ken, welcome to my portfolio! I am a Result-driven Full-Stack Developer with a construction and engineering background interested in learning and applying new techniques to build applications to help enrich the lives of many. Recently earned a certificate in Full Stack Web Development from UC Berkeley with acquired expertise in HTML, CSS, JavaScript, jQuery.js, React.js, and MERN. Known to be highly motivational and collaborative, Was able to work on multiple projects with various team members while utilizing Zoom, Slack, Github, and Gitlab during the 2020 Pandemic. I am excited to embark on a new journey into the Tech Industry!</p>


        </div>

        <div className="card-body contactLinks">
          <a href="https://github.com/kent28808" className="card-link">GitHub</a>
          <a href="kent28808@gmail.com" className="card-link">Email</a>
        </div>
      </div>
    </div>
  );
}

export default About;
