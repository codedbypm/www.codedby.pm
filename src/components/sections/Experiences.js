import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    title: "Advanced Master in Embedded Systems Design",
    years: "2006 - 2007",
    content:
      "Compilers, microelectronics, real-time operating systems"
  },
  {
    title: "Master in Electronic Engineering",
    years: "2002 - 2005",
    content:
      "Embedded system software, microelectronics"
  },
  {
    title: "Bachelor in Electronic Engineering",
    years: "1998 - 2002",
    content:
      "Analog and digital electronics, software engineering"
  },
];

const experienceData = [
  {
    title: "Backbase",
    years: "2020",
  },
  {
    title: "Funda",
    years: "2019",
  },
  {
    title: "Dott",
    years: "2018 - 2019",
  },
  {
    title: "Payconiq",
    years: "2017 - 2018",
  }
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Education and recent projects" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline item={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline item={experience} />
              ))}
              <span className="line"></span>
            </div>
            <div class="footer">Check my
              <a href="https://www.linkedin.com/in/codedbypm/"> LinkedIn </a> 
              profile for a complete list of all my projects.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
