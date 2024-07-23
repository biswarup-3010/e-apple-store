import "./SectionDeclaration.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
export default function SectionDeclaration({
  name,
  elements,
  showDetails,
  id,
}) {
  if (showDetails === "true") {
    return (
      <>
        <center id={id} className="idsss">
          <center className="section-container" id={id}>
            <h1 className="h1setting">{name}</h1>
            <div className="d-flex section-content">
              {elements.map((image, index) => (
                <div key={index} className="card-container-elements">
                  <img className="img-elements" src={image.src} />
                  <p className="card-text specifications sp-name">
                    <b>{image.name}</b>
                  </p>
                  <p className="card-text specifications sp-speci">
                    {image.specifiaction}
                  </p>
                  <p className="card-text specifications sp-price">
                    <b>{image.price}</b>
                  </p>
                  <button type="button" className="btn btn-light">
                    Add
                  </button>
                  <button type="button" className="btn btn-warning">
                    Buy
                  </button>
                </div>
              ))}
            </div>{" "}
          </center>
        </center>
      </>
    );
  }
  return (
    <>
      <center className="section-container" id={id}>
        <h1 className="h1setting">{name}</h1>
        <br />
        <div className="d-flex section-content">
          {elements.map((image, index) => (
            <div key={index} className="card-container no-borders">
              <img className="img-top " src={image.src} />
            </div>
          ))}
        </div>{" "}
        <br />
        <br />
      </center>
    </>
  );
}
