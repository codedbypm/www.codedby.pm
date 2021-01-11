import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import SocialIcon from "../elements/SocialIcon";

function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  const activeParallax = (depth = 15) => {
    let posX = (width / 2 - x) / depth;
    let posY = (height / 2 - y) / depth;
    return {
      transform: `translate(${posX}px, ${posY}px)`,
    };
  };
  
  const content = {
    name: "Paolo Moroni",
    avatar: "/images/memoji-mac.png",
    avatarWidth: "208",
    socialIcons: [
      { type: "linkedin", url: "https://www.linkedin.com/in/codedbypm/" },
      { type: "github", url: "https://github.com/codedbypm" },
      { type: "twitter", url: "https://twitter.com/paoloNL" },
    ],

    callToAction: "Get in touch!"
  };

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <img src={content.avatar} width={content.avatarWidth} alt="Bolby" className="mb-4" />

          <h1 className="mb-2 mt-0">{content.name}</h1>
          <p>
            I'm{" "} 
            <Typed
              strings={[
                'a <strong>software engineer</strong>...',
                'an <strong>experienced</strong> iOS developer...',
                'a <strong>CI/CD expert</strong>...',
                'a <strong>Google Cloud</strong> enthusiast...'
              ]}
              typeSpeed={80}
              backSpeed={70}
              loop
            >
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
              {content.socialIcons.map(info => (
                <SocialIcon info={info} />
              ))}
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              {content.callToAction}
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Herosection;
