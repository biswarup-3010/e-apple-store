import React from "react";
import "./FooterPortion.css";

export default function FooterPortion({ images, contents }) {
  return (
    <div className="main_container_footer">
      <div className="container text-center">
        <h2>What Makes Us "THE BEST" In The Market ???</h2>
        <div className="grid-container">
          <div className="grid-item" style={{ gridArea: "text1" }}>
            <h3 className="points">1. We know good usability</h3>
            <p className="discussions">{images[0].details}</p>
          </div>
          <div className="grid-item" style={{ gridArea: "img1" }}>
            <img
              className="footerImages"
              src={images[0].src}
              alt={images[0].alt}
            />
          </div>
          <div className="grid-item" style={{ gridArea: "img2" }}>
            <img
              className="footerImages"
              src={images[1].src}
              alt={images[1].alt}
            />
          </div>
          <div className="grid-item" style={{ gridArea: "text2" }}>
            <h3 className="points">2. We keep it consistent</h3>
            <p className="discussions">{images[1].details}</p>
          </div>
          <div className="grid-item" style={{ gridArea: "text3" }}>
            <h3 className="points">3. We evolve</h3>
            <p className="discussions">{images[2].details}</p>
          </div>
          <div className="grid-item" style={{ gridArea: "img3" }}>
            <img
              className="footerImages"
              src={images[2].src}
              alt={images[2].alt}
            />
          </div>
          <div className="grid-item" style={{ gridArea: "img4" }}>
            <img
              className="footerImages"
              src={images[3].src}
              alt={images[3].alt}
            />
          </div>
          <div className="grid-item" style={{ gridArea: "text4" }}>
            <h3 className="points">
              4. We make the consumer feel good about themselves
            </h3>
            <p className="discussions">{images[3].details}</p>
          </div>
        </div>
      </div>

      <center className="container-wrapup">
        <h1 className="heading-wrapup">{contents[0].heading}</h1>
        <p className="details-desc">{contents[0].details}</p>
      </center>
    </div>
  );
}
