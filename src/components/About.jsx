import React from "react";

function About() {
  return (
    <div className="resume-section-content">
      <h1 className="mb-1 text-italics text-underline">
        Teodulfo
        <span className="text-primary text-regular "> Ricafranca Jr.</span>
      </h1>
      <div className="subheading mb-0">
        Block 17 Lot 11 Phase 2 Camella Homes, Lawaan 1, Talisay City, Cebu
        Philippines
      </div>
      <div className="subheading mb-5">
        0945-879-5132 · 0997-116-0466 ·
        <a href="mailto:ted314089@gmail.com">ted314089@gmail.com</a>
      </div>
      <p className="lead mb-5">
        A family-motivated team player with vast number of years of experience
        of software development seeking a position as a web developer having its
        goal to become more efficient, effective and competitive in the world of
        web development strategies while providing profit to the company.
        Iterative approaches to corporate strategy foster collaborative thinking
        to further the overall value proposition.
      </p>
      <div className="social-icons">
        <a
          className="social-icon"
          href="http://www.linkedin.com/in/teodulfo-ricafranca-04a253105"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          className="social-icon"
          href="https://github.com/TedRicafranca"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="social-icon"
          href="https://www.twitter.com/ted314089"
          target="_blank"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          className="social-icon"
          href="https://www.facebook.com/teddy.ricafranca"
          target="_blank"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
