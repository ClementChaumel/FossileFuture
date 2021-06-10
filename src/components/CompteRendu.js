import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useInView } from "react-hook-inview";
import { Link } from "gatsby";

function CompteRendu({ title, number, setCurrentCR, children }) {
  const [crRef, isCRVisible] = useInView();
  useEffect(() => {
    if (isCRVisible) {
      setCurrentCR(number);
    }
  }, [isCRVisible]);

  return (
    <div className="grid grid-cols-3 p-6 gap-6 bg-white border-2 border-black mb-16">
      <Link to={`/ordres_du_jour#cr-${number}`} className="col-span-3">
        <h1
          ref={crRef}
          id={`cr-${number}`}
          className="underline text-center text-3xl"
        >
          {title}
        </h1>
      </Link>
      {children}
    </div>
  );
}

CompteRendu.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  setCurrentCR: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CompteRendu;
