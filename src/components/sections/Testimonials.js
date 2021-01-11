import React from "react";
import Slider from "react-slick";
import Pagetitle from "../elements/Pagetitle";
import Testimonial from "../elements/Testimonial";

const sliderData = [
  {
    id: 1,
    avatar: "images/testimonials/1572779888805.jpeg",
    userName: "Nandini Chauhan",
    subtitle: "IT Lead at FINN by ING",
    review:
      "It was great to work with Paolo. He is a team player, friendly and approachable with all his colleagues. He has right knowledge, experience and attitude on his side"
  },
  {
    id: 2,
    avatar: "images/testimonials/1517764321614.jpeg",
    userName: "Javier Saiz Hernansanz",
    subtitle: "Mobile developer at Holvi",
    review: 
      "If you need a great techie, passionate developing new projects and amazing colleague bringing support and positivism, you are in the correct place... Paolo is here!",
  },
  {
    id: 3,
    avatar: "images/testimonials/1516256239328.jpeg",
    userName: "Niels Verdonk",
    subtitle: "Agile Coach & Certified Scrum Trainer at agile42",
    review:
      "It has always been a pleasure to work with Paolo. He is an out going type, but he is not someone who needs to be in the center of the attention. Paolo comes up with creative solutions and thinks out of the box. Paolo doesn't need much guidance and works diligently with attention to detail. He is someone who likes to work in collaboration with others and is a great team player, focussed and result oriented.",
  },
  {
    id: 4,
    avatar: "images/testimonials/1516885378215.jpeg",
    userName: "Adriana Ormaetxea",
    subtitle: "iOS Engineer at Nomasystems S.L.",
    review:
    "Paolo is very organised and efficient developer. With extensive knowledge of iOS development and the Objective-C language. It was a pleasure working with him and learning from him.",
  },
];

function Testimonials() {
  const slidetSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <div className="container">
        <Pagetitle title="Clients & Review" />
        <Slider {...slidetSettings} className="testimonials-wrapper">
          {sliderData.map((slider) => (
            <Testimonial key={slider.id} slider={slider} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
