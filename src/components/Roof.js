import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function Roof({ showBirb = false, children }) {
  return (
    <>
      {showBirb && (
        <Link to="/" className="birb">
          <div className="w-64">
            <StaticImage src="../images/retour_page_daccueil_hover.png" />
          </div>
          <div className="w-64">
            <StaticImage src="../images/retour_page_daccueil.png" />
          </div>
        </Link>
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
