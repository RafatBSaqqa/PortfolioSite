import React, { useRef } from "react";
import "./style.css";
import { PROJECTS } from "../utils/data";
import ProjectsCard from "./ProjectCard/ProjectsCard";
import Slider from "react-slick";

function Projects() {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };
  const sliderleft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <section className="projects-container">
      <h5>Projects</h5>

      <div className="projects-content">
        <div className="arrow-right" onClick={sliderRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={sliderleft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item) => {
            return <ProjectsCard key={item.title} details={item} />;
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
