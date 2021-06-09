import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function Ground() {
  return (
    <div className="bg-white border-black border-t-2 p-5 relative">
      <div
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="balloon"
      >
        <div className="w-32">
          <StaticImage src="../images/aller_en_haut_hover.png" />
        </div>
        <div className="w-32">
          <StaticImage src="../images/aller_en_haut.png" />
        </div>
      </div>
      <p className="text-white text-5xl text-center">C&apos;est le sol !</p>
    </div>
  );
}

export default Ground;
