import React from "react";
import "./style.css";

function ProjectsCard({ details }) {
  return (
    <div className="work-project-card">
      <h6>{details.title}</h6>
      <div className="work-description">{details.description}</div>
      <ul>
        {details.info.map((item) => {
          return (
            <li key={item}>
              {" "}
              <a href={item}>{item}</a>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectsCard;
