import React from "react";
import TrackVisibility from "react-on-screen";
import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Me",
  avatarImage: "/images/memoji-hi.png",
  content:
    "I am Paolo, software engineer from Amsterdam, The Netherlands. I have 10+ years experience designing, developing, testing and distributing apps for iOS and its sibling OS's.",
};

const skills = [
  {
    id: 1,
    name: "Swift",
    icon: "/images/skills/swift.svg",
    value: 99,
    progressColor: "#E94E36"
  },
  {
    id: 2,
    name: "Objective-C",
    icon: "/images/skills/objc.svg",
    value: 99,
    progressColor: "#FFD15C"
  },
  {
    id: 3,
    name: "Golang",
    icon: "/images/skills/gopher.svg",
    value: 40,
    progressColor: "#71C7D6"    
  },
  {
    id: 4,
    name: "Node.js",
    icon: "/images/skills/nodejs-text.svg",
    value: 45,
    progressColor: "#8CC84A"
  },
  {
    id: 5,
    name: "Google Cloud Platform",
    icon: "/images/skills/gcloud.svg",
    value: 50,
    progressColor: "#4285F4"
  },
  {
    id: 6,
    name: "CI/CD",
    icon: "/images/skills/fastlane.svg",
    value: 80,
    progressColor: "#8B30E1"
  },
  {
    id: 7,
    name: "Ruby",
    icon: "/images/skills/ruby.svg",
    value: 20,
    progressColor: "#E51620"
  },
  {
    id: 8,
    name: "HTML/CSS",
    icon: "/images/skills/html-css.svg",
    value: 44,
    progressColor: "#146EB0"
  },
];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div 
                className="row"           
                style={{ 
                  marginRight: '0px',
                  marginLeft: '0px'
                }}
              >
                <div className="col-md-12" style={{padding: '0px'}}>
                  <p>{aboutContent.content}</p>
                </div>
                <div className="row">
                {skills.map((skill) => (
                  <div className="col-6">
                    <TrackVisibility
                      once
                      key={skill.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={skill} />
                    </TrackVisibility>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
      </div>
    </section>
  );
}

export default About;
