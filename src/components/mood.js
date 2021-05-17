import React, { useState } from "react";
import PropTypes from "prop-types";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";

const Mood = ({ title, type = "horizontal", src }) => {
  const [isOpen, setIsOpen] = useState(false);

  const typeClassMap = {
    horizontal: Horizontal,
    carousel: Carousel,
    vertical: Verical,
  };

  const Wrapper = typeClassMap[type];

  return (
    <div className="bg-pink-500 col-span-3">
      <div className="flex items-center">
        <button
          className="bg-pink-900 rounded p-4"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          -
        </button>
        <h3 className="text-lg">{title}</h3>
      </div>
      <Wrapper isOpen={isOpen} src={src} numberOfPanel />
    </div>
  );
};

export default Mood;

const Horizontal = ({ isOpen, src }) => {
  return (
    <div
      className={`${isOpen ? "h-32" : "h-0"} 
        overflow-y-hidden
        overflow-x-scroll
        transition-height
        duration-1000
        ease-in-out`}
    >
      <img className="max-w-none h-32" src={src[0]} />
    </div>
  );
};

const Carousel = ({ isOpen, src }) => {
  return (
    <div
      className={`${isOpen ? "h-32" : "h-0"} 
        overflow-y-hidden
        overflow-x-scroll
        transition-height
        duration-1000
        ease-in-out`}
    >
      <ReactCarousel emulateTouch={true} showStatus={false}>
        {src.map((source) => {
          return <img src={source} key={source} />;
        })}
      </ReactCarousel>
    </div>
  );
};

const Verical = ({ isOpen, src }) => {
  return (
    <div
      className={`
        overflow-y-hidden
        transition-max-height
        ease-in`}
      style={{
        maxHeight: isOpen ? "2000px" : "0px",
        transitionDuration: "3000ms",
      }}
    >
      <img src={src[0]} />
    </div>
  );
};

Mood.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["horizontal", "carousel", "vertical"]),
  numberOfPanel: PropTypes.number,
};
Horizontal.propTypes = {
  src: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
Carousel.propTypes = {
  src: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
Verical.propTypes = {
  src: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
