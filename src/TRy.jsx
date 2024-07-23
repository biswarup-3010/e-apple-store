import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DetailsShowing.css";
export default function DetailsShowing({ ContentName, Elements, flag }) {
  if (flag) {
    return (
      <center>
        <center className="box anim details-content">
          <Carousel>
            {Elements.filter(Boolean).map((URL, index) => (
              <div className="slide-cards" key={index}>
                <img alt="sample_file" src={URL} />
              </div>
            ))}
          </Carousel>
        </center>
      </center>
    );
  }
  return (
    <center>
      <center className="sec-l">
        <h1>{ContentName}</h1>
      </center>
      <center className="box anim details-content">
        <Carousel>
          {Elements.filter(Boolean).map((URL, index) => (
            <div className="slide" key={index}>
              <img alt="sample_file" src={URL} />
            </div>
          ))}
        </Carousel>
      </center>
    </center>
  );
}
