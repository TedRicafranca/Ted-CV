import React from "react";
import htmlImg from "../assets/skills/html.png";
import javascriptImg from "../assets/skills/javascript.png";
import cssImg from "../assets/skills/css.png";
import sassImg from "../assets/skills/sass.png";
import reactImg from "../assets/skills/react1.png";
import nodejsImg from "../assets/skills/nodejs.png";
import androidImg from "../assets/skills/android.png";
import bootstrapImg from "../assets/skills/bootstrap.png";
import cplusplusImg from "../assets/skills/cplusplus.png";
import csharpImg from "../assets/skills/csharp.png";
import dotnetImg from "../assets/skills/dotnet.png";
import gitImg from "../assets/skills/git.png";
import mysqlImg from "../assets/skills/mysql.png";
import sqlserverImg from "../assets/skills/sqlserver.png";
import vsImg from "../assets/skills/vs.jpg";
import reduxImg from "../assets/skills/redux.png";
import tailwindImg from "../assets/skills/tailwind.png";
import npmImg from "../assets/skills/npm.jpg";

function Skills() {
  return (
    <div className="resume-section-content">
      <h2 className="mb-5">Skills</h2>
      <div className="subheading mb-0">Programming Languages & Tools</div>

      <ul className="skills-list-inline dev-icons mb-5">
        <li className="skills-list-inline-item">
          <img src={htmlImg} title="HTML 5" />
        </li>
        <li className="skills-list-inline-item">
          <img src={javascriptImg} title="Javascript" />
        </li>
        <li className="skills-list-inline-item">
          <img src={cssImg} title="CSS" />
        </li>
        <li className="skills-list-inline-item">
          <img src={sassImg} title="SASS" />
        </li>
        <li className="skills-list-inline-item">
          <img src={reactImg} title="React" />
        </li>
        <li className="skills-list-inline-item">
          <img src={reduxImg} title="Redux" />
        </li>
        <li className="skills-list-inline-item">
          <img src={tailwindImg} title="Tailwind CSS" />
        </li>
        <li className="skills-list-inline-item">
          <img src={nodejsImg} title="Node JS" />
        </li>
        <li className="skills-list-inline-item">
          <img src={npmImg} title="NPM" />
        </li>
        <li className="skills-list-inline-item">
          <img src={androidImg} title="Android Studio" />
        </li>
        <li className="skills-list-inline-item">
          <img src={bootstrapImg} title="Bootstrap" />
        </li>
        <li className="skills-list-inline-item">
          <img src={cplusplusImg} title="C++" />
        </li>
        <li className="skills-list-inline-item">
          <img src={csharpImg} title="C#" />
        </li>
        <li className="skills-list-inline-item">
          <img src={dotnetImg} title=".Net" />
        </li>
        <li className="skills-list-inline-item">
          <img src={gitImg} title="Git Hub" />
        </li>
        <li className="skills-list-inline-item">
          <img src={mysqlImg} title="MySql" />
        </li>
        <li className="skills-list-inline-item">
          <img src={sqlserverImg} title="SQL SERVER" />
        </li>
        <li className="skills-list-inline-item">
          <img src={vsImg} title="Visual Studio" />
        </li>
      </ul>
      <div className="subheading mb-3">Workflow</div>
      <ul className="fa-ul mb-0">
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          Mobile-First, Responsive Design
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          Cross Browser Testing & Debugging
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          Cross Functional Teams
        </li>
        <li>
          <span className="fa-li">
            <i className="fas fa-check"></i>
          </span>
          Agile Development & Scrum
        </li>
      </ul>
    </div>
  );
}

export default Skills;
