import React, { useState } from "react";
import PropTypes from "prop-types";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";

const Fenetre = ({ title, type = "horizontal", src, link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const typeClassMap = {
    horizontal: Horizontal,
    comic: Comic,
    carousel: Carousel,
    vertical: Vertical,
  };

  const Wrapper = typeClassMap[type];

  return (
    <div className="bg-white col-span-3">
      <div
        className={`flex fenetre items-center ${link}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h3 className="text-lg ml-auto mr-12">{title}</h3>
      </div>
      <Wrapper isOpen={isOpen} src={src} numberOfPanel />
    </div>
  );
};

export default Fenetre;

const Horizontal = ({ isOpen, src }) => {
  return (
    <div
      className={`${isOpen ? "h-96" : "h-0"} 
        overflow-y-hidden
        overflow-x-scroll
        transition-height
        duration-1000
        wrapper
        border-black
        border-2
        ${isOpen ? "border-t-2 border-b-2" : "border-t-0 border-b-0"}
        ease-in-out`}
      style={{
        paddingTop: isOpen ? "56px" : "0px",
      }}
    >
      <img
        className="max-w-none pb-3.5"
        src={src[0]}
        style={{ height: "316px" }}
      />
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
        wrapper
        border-black
        border-2
        ${isOpen ? "border-t-2 border-b-2" : "border-t-0 border-b-0"}
        ease-in-out`}
      style={{
        height: isOpen ? "362px" : "0px",
        paddingTop: isOpen ? "56px" : "0px",
      }}
    >
      <img
        className="max-w-none pb-3.5"
        src={src[0]}
        style={{ height: "316px" }}
      />
    </div>
  );
};

const Carousel = ({ isOpen, src }) => {
  return (
    <div
      className={`${isOpen ? "max-h-96" : "max-h-0"} 
        overflow-y-hidden
        overflow-x-hidden
        transition-max-height
        duration-1000
        wrapper
        border-black
        border-2
        ${isOpen ? "border-t-2 border-b-2" : "border-t-0 border-b-0"}
        ease-in-out`}
      style={{
        paddingTop: isOpen ? "56px" : "0px",
      }}
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
        wrapper
        border-black
        border-2
        ${isOpen ? "border-t-2 border-b-2" : "border-t-0 border-b-0"}
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

Fenetre.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  src: PropTypes.array.isRequired,
  type: PropTypes.oneOf(["horizontal", "comic", "carousel", "vertical"]),
  numberOfPanel: PropTypes.number,
  link: PropTypes.string,
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
