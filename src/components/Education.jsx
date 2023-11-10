import React from "react";

function Education() {
  return (
    <div class="resume-section-content">
      <h2 class="mb-5">Education</h2>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0 text-primary">Refocus Digital Academy</h3>
          <div class="heading-location mb-0">Online - Web Learning</div>
          <div class="subheading mb-3">Web Development</div>
          <p>GPA: 1.8</p>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">August 2022 - July 2023</span>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0 text-primary">University of Cebu - Main Campus</h3>
          <div class="heading-location mb-0">Cebu City, Philippines</div>
          <div class="subheading mb-3">
            BSIT - Bachelor of Science in Information Technology
          </div>
          <div>Computer Programming - .Net Technology</div>
          <p>GA: 1.9</p>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">June 2002 - March 2006</span>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0 text-primary">Southwestern University</h3>
          <div class="heading-location mb-0">Cebu City, Philippines</div>
          <div class="subheading mb-3">
            BSN - Bachelor in Science of Nursing
          </div>
          <div>Health Care</div>
        </div>
        <div class="flex-shrink-0">
          <span class="text-primary">June 2000 - March 2002</span>
        </div>
      </div>
    </div>
  );
}

export default Education;
