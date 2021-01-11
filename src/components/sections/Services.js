import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "iOS - iPadOS - watchOS - tvOS \n development",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    backgroundColor: "secondaryBackgroundColor",
  },
  {
    id: 1,
    icon: "images/service-1.svg",
    title: "Mobile solution architect",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    backgroundColor: "secondaryBackgroundColor",
  },
  {
    id: 2,
    icon: "images/service-2.svg",
    title: "CI/CD",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    backgroundColor: "secondaryBackgroundColor",
  },
  {
    id: 3,
    icon: "images/service-3.svg",
    title: "Distribution",
    content:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    backgroundColor: "secondaryBackgroundColor",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Services" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
