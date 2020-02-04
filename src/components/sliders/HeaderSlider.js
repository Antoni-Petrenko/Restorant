import React, { useState, useEffect } from "react";
import { SliderItem } from "./SliderItem";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { connect } from "react-redux";

const HeaderSlider = ({ slides }) => {
  const [sliderState, setSliderState] = useState("Header-slider");
  const [slidePosition, setSlide] = useState(0);
  const [currentSlide, setNextSlide] = useState(1); // slides lenght 100%/slides length  .toFixe

  useEffect(() => {
    if (sliderState === "Header-slider active") {
      setTimeout(() => {
        setSliderState("Header-slider");
      }, 800);
    }
  }, [sliderState]);

  const positionStep = +(100 / slides.length).toFixed(2);

  const handelChangeSlide = direction => {
    setSliderState("Header-slider active");

    switch (direction) {
      case "right":
        setNextSlide(currentSlide => currentSlide + 1);

        setSlide(slide => slide - positionStep);

        break;

      case "left":
        setNextSlide(currentSlide => currentSlide - 1);

        setSlide(slide => slide + positionStep);

        break;
      default:
        break;
    }
  };
  return (
    <div className={sliderState}>
      <div className="Header-slider__right-arrow">
        <MdKeyboardArrowRight
          onClick={
            currentSlide <= slides.length - 1
              ? handelChangeSlide.bind(null, "right")
              : null
          }
        />
      </div>
      <div className="Header-slider__left-arrow">
        <MdKeyboardArrowLeft
          onClick={
            currentSlide !== 1 ? handelChangeSlide.bind(null, "left") : null
          }
        />
      </div>
      <div
        style={{
          width: `${100 * slides.length}%`,
          transform: `translateX(${slidePosition}%)`
        }}
        className="Header-slider__container"
      >
        {slides.map((item, index) => (
          <SliderItem key={item.header + index} {...item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ slides: state.page.slides });

export default connect(mapStateToProps)(HeaderSlider);
