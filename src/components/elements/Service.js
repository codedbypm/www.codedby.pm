import React from "react";

function Service({ service }) {
  const { title, content, icon, backgroundColor } = service;
  return (
    <div
      className={"service-box rounded data-background padding-30 text-center"}
      style={{
        background: backgroundColor
      }}
    >
      <img src={icon} alt={title} />
      <h3 className="mb-3 mt-0">{title}</h3>
      <p className="mb-0">{content}</p>
    </div>
  );
}

export default Service;
