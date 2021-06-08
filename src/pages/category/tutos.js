import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Fenetre from "../../components/fenetre";

import SEO from "../../components/seo";
import lesComissions from "../../images/CR4/Didac_les_commissions_c_est_quoi_.jpg";

function Tutos() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-96">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Tutos"
      />
      <div className="max-w-screen-lg mx-auto ">
        <div className="stroke">
          <div className="toit flex justify-center items-end">
            <div className="max-w-sm">
              <StaticImage src="../../images/titretoit_tutos.png" />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse p-6 border-2 border-black border-t-0 border-b-0 dotted ">
          {/* CR4 */}
          <div className="grid grid-cols-3 p-6 gap-6 bg-white border-2 border-black mb-16">
            <Fenetre
              type="vertical"
              src={[lesComissions]}
              title="Les commissions c'est quoi ?"
              link="tutos"
              alwaysOpen={true}
            />
          </div>
        </div>
      </div>
      <div className="bg-white border-black border-t-2 p-5">
        <p className="text-white text-5xl text-center">C&apos;est le sol !</p>
      </div>
    </div>
  );
}

export default Tutos;
