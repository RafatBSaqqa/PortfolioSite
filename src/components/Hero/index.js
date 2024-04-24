import React from "react";
import "./style.css";
function index() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Hello. I'm Rafat | Back-end | Front-end</h2>
        <p>
        full stack web developer based in jordan.m enthusiastic about crafting user-friendly web experiences with a strong foundation. I stay updated on the latest trends and am eager to contribute to innovative projects.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="assets/images/icons8-soft-skills-64.png" />
          </div>
          <img className="rafat" src="assets/images/person.jpeg"width='300px' />
        </div>


        <div>
          <div className="tech-icon">
            <img src="assets/images/icons8-css3-48.png" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/icons8-javascript-48.png" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/icons8-node-js-48.png" />
          </div>
          <div className="tech-icon">
            <img src="assets/images/icons8-html-50.png" />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default index;
