import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

function Roof({ showBirb = false, children }) {
  return (
    <>
      {showBirb && (
        <a href="/" className="birb">
          <div className="w-40">
            <StaticImage src="../../images/retour_page_daccueil_hover.png" />
          </div>
          <div className="w-40">
            <StaticImage src="../../images/retour_page_daccueil.png" />
          </div>
        </a>
      )}
      <div className="stroke">
        <div className="toit flex justify-center items-end relative">
          <div className={showBirb ? "max-w-sm" : "max-w-xs"}>{children}</div>
        </div>
      </div>
    </>
  );
}

Roof.propTypes = {
  showBirb: PropTypes.boolean,
  children: PropTypes.node.isRequired,
};

export default Roof;
