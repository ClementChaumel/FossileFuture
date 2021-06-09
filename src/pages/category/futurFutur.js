import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Fenetre from "../../components/fenetre";

import SEO from "../../components/seo";

import narration11 from "../../images/CR1/Narration1/Narration1_1.jpg";
import narration12 from "../../images/CR1/Narration1/Narration1_2.jpg";
import narration13 from "../../images/CR1/Narration1/Narration1_3.jpg";
import narration14 from "../../images/CR1/Narration1/Narration1_4.jpg";
import Roof from "../../components/Roof";
import Ground from "../../components/Ground";

function FuturFutur() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-48">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="FuturFutur"
      />
      <div className="max-w-screen-lg mx-auto ">
        <Roof showBirb={true}>
          <StaticImage src="../../images/titretoit_futurfutur.png" />
        </Roof>
        <div className="flex flex-col-reverse p-6 border-2 border-black border-t-0 border-b-0 dotted ">
          {/* CR1 */}
          <div className="grid grid-cols-3 p-6 gap-6 bg-white border-2 border-black mb-16">
            <Fenetre
              type="carousel"
              src={[narration11, narration12, narration13, narration14]}
              title="Et si l'asso avait un autre nom"
              link="futurFutur"
              alwaysOpen={true}
            />
          </div>
        </div>
      </div>
      <Ground />
    </div>
  );
}

export default FuturFutur;
