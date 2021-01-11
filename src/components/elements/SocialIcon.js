import React from "react";

function SocialIcon({ info }) {
  const { url, type } = info;

  return (
    <li className="list-inline-item">
        <a href={url}>
            <i className={`fab fa-${type}`}></i>
        </a>
    </li>
  );
}

export default SocialIcon;