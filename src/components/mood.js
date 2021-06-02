import React, { useState } from "react";
import PropTypes from "prop-types";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";

const Mood = ({ title, type = "horizontal", src }) => {
  const [isOpen, setIsOpen] = useState(false);

  const typeClassMap = {
    horizontal: Horizontal,
    comic: Comic,
    carousel: Carousel,
    vertical: Vertical,
  };

  const Wrapper = typeClassMap[type];

  return (
    <div className="bg-white border-4 border-black col-span-3">
      <div className="flex items-center">
        <button
          className="bg-white px-4"
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
      className={`${isOpen ? "h-96" : "h-0"} 
        overflow-y-hidden
        overflow-x-scroll
        transition-height
        duration-1000
        ease-in-out`}
    >
      <img className="max-w-none h-96 pb-3.5" src={src[0]} />
    </div>
  );
};

const Comic = ({ isOpen, src }) => {
  return (
    <div
      className={`
        overflow-hidden
        transition-height
        duration-1000
        ease-in-out`}
      style={{ height: isOpen ? "291px" : "0px" }}
    >
      <img
        className="max-w-none pb-3.5"
        src={src[0]}
        style={{ height: "305px" }}
      />
    </div>
  );
};

const Carousel = ({ isOpen, src }) => {
  return (
    <div
      className={`${isOpen ? "max-h-96" : "max-h-0"} 
        overflow-y-hidden
        overflow-x-scroll
        transition-max-height
        duration-1000
        ease-in-out`}
    >
      <ReactCarousel
        emulateTouch={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        autoPlay={false}
      >
        {src.map((source) => {
          return <img src={source} key={source} />;
        })}
      </ReactCarousel>
    </div>
  );
};

const Vertical = ({ isOpen, src }) => {
  return (
    <div
      className={`
        overflow-y-scroll
        transition-max-height
        ease-in`}
      style={{
        maxHeight: isOpen ? "80vh" : "0px",
        transitionDuration: "850ms",
      }}
    >
      <img src={src[0]} />
    </div>
  );
};

Mood.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["horizontal", "comic", "carousel", "vertical"]),
  numberOfPanel: PropTypes.number,
};
Horizontal.propTypes = {
  src: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
Comic.propTypes = {
  src: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
Carousel.propTypes = {
  src: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
Vertical.propTypes = {
  src: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
