import React from "react";


function About() {
  return (
    <div className="about-container">
      <h5>About Me</h5>

      <img src={Profile} alt="profile-photo" className="profile float-left"></img>
      <div>

        <div className="mt-3">
          <p>Aloha! My name is Ken, welcome to my portfolio! I recently moved to the California and have worked in the Construction Industry for the past 7 years. I am excited to embark on a new journey into the Tech Industry!</p>

          <p>
            <a href="mailto:kent28808@gmail.com"
              target="_blank">kent28808@gmail.com, </a> through<a
                href="https://github.com/kent28808"> GitHub</a>
          </p>
        </div>

        <div className="card-body contactLinks">
          <a href="https://github.com/kent28808" className="card-link">GitHub</a>
        </div>
      </div>
      {/* end copy paste  */}
    </div>
  );
}

export default About;
