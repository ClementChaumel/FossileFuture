import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Fenetre from "../../components/fenetre";

import SEO from "../../components/seo";
import protocoles from "../../images/CR1/protocolesreunions.png";
import outils from "../../images/CR1/outilsautiliserpendantlareunion.png";
import autogestion from "../../images/CR3/Autogestion_C_Quoi.jpg";
import lesComissions from "../../images/CR4/Didac_les_commissions_c_est_quoi_.jpg";
import Roof from "../../components/Roof";
import Ground from "../../components/Ground";

function Tutos() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-48">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Tutos"
      />
      <div className="max-w-screen-lg mx-auto ">
        <Roof showBirb={true}>
          <StaticImage src="../../images/titretoit_tutos.png" />
        </Roof>
        <div className="flex flex-col-reverse p-6 border-2 border-black border-t-0 border-b-0 dotted ">
          {/* CR4 */}
          <div className="grid grid-cols-3 p-6 gap-6 bg-white border-2 border-black mb-16">
            <Fenetre
              type="fullHeight"
              src={[protocoles]}
              title="Protocoles de communication en groupe"
              link="tutos"
              alwaysOpen={true}
            />
            <Fenetre
              type="fullHeight"
              src={[outils]}
              title="Outils à utiliser pendant les réunions"
              link="tutos"
              alwaysOpen={true}
            />
            <Fenetre
              type="fullHeight"
              src={[autogestion]}
              title="L'autogestion"
              link="tutos"
              alwaysOpen={true}
            />
            <Fenetre
              type="fullHeight"
              src={[lesComissions]}
              title="Les commissions c'est quoi ?"
              link="tutos"
              alwaysOpen={true}
            />
          </div>
        </div>
      </div>
      <Ground />
    </div>
  );
}

export default Tutos;
