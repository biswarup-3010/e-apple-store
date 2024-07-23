import React from "react";
import "./contactUs.css";
export default function ContactUsPage({ msgs, links }) {
  return (
    <center className="main-container">
      <h3 className="cont">Contact Us On</h3>
      <center>
        <li>
          <a href="http://#">
            <img src={links[0].src} alt={links[0].alt} className="logs" />
          </a>
          <a href="http://#">
            <img src={links[1].src} alt={links[1].alt} className="logs" />
          </a>
          <a href="http://#">
            <img src={links[2].src} alt={links[2].alt} className="logs" />
          </a>
          <a href="http://#">
            <img src={links[3].src} alt={links[3].alt} className="logs" />
          </a>
        </li>
      </center>
      {msgs}
    </center>
  );
}
