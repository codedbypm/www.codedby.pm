import React from "react";

function Skill({ progress, isVisible }) {
  const { name, value, progressColor } = progress;
  const winWidth = window.innerWidth;
  
  const progressQuery = () => {
    if (winWidth && winWidth > 767) {
      return (
        <div
          className="progress-bar data-background"
          style={
            isVisible
              ? {
                  width: `${value}%`,
                  background: progressColor,
                }
              : { width: 0, background: progressColor }
          }
        ></div>
      );
    }
    return (
      <div
        className="progress-bar data-background"
        style={{
          width: `${value}%`,
          background: progressColor,
        }}
      ></div>
    );
  };

  return (
    <div className="skill-item">
      <div className="skill-info clearfix">
        <h4 className="float-left mb-3 mt-0">{name}</h4>
        <span className="float-right">{value}%</span>
      </div>
      <div className="progress">{progressQuery()}</div>
    </div>
  );
}

export default Skill;
