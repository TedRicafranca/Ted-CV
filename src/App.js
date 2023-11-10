import "./App.css";
import profileimage from "./assets/img/profile2.jpg";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interest from "./components/Interest";
import Reference from "./components/Reference";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="/">
          <span className="d-block d-lg-none">Teodulfo L. Ricafranca Jr.</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={profileimage}
              alt="..."
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#references">
                References
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">
                Projects Created
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <About />
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="experience">
          <Experience />
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="education">
          <Education />
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="skills">
          <Skills />
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="interests">
          <Interest />
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="references">
          <Reference />
        </section>
        <hr className="m-0" />
        <section className="resume-section" id="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;
