import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Advertise.css";

function AdvertiseContent({ images, id }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div id={id}>
      <div className="box anim middle-content">
        <Carousel
          selectedItem={currentSlide}
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          autoPlay={false}
          infiniteLoop={true}
          transitionTime={1000}
          interval={0}
        >
          {images.map((URL, index) => (
            <div className="slide" key={index}>
              <img alt="sample_file" src={URL} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default AdvertiseContent;
