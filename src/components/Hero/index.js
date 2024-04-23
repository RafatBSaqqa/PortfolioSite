import React from "react";
import "./style.css";
function index() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Expriences That Inspire</h2>
        <p>
          Passionate FrontEnd Developer | Transforming Idea Into Seamless and
          Visually Stunning Web Solution
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="assets/images/icons8-soft-skills-64.png" />
          </div>
          <img src="assets/images/person.jpeg"width='300px' />
        </div>


        <div>
          <div className="tech-icon">
            <img src="assets/images/icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/icons8-redux-an-open-source-javascript-library-for-managing-application-state-24.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
