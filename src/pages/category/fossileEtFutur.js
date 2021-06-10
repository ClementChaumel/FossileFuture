import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Fenetre from "../../components/fenetre";

import SEO from "../../components/seo";

import FossileEtFuturTravaillent from "../../images/CR1/fossileetfutur_travaillentdur.jpg";

import chacunSonTruc from "../../images/CR2/Chacun.e_Son_Truc.jpg";

import caChipote from "../../images/CR3/Ça_chipote_Comic.jpg";

import beaucoupLa from "../../images/CR4/Ça_Fait_beaucoup_la_non_Comic.jpg";

import ancienLocataires from "../../images/CR6/comic_Ancien_locataires.jpg";
import Roof from "../../components/Roof";
import Ground from "../../components/Ground";

function FossileEtFutur() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-48">
      <SEO
        keywords={[`Fossile`, `futur`, `bd`, `léa chaumel`]}
        title="FossileEtFutur"
      />
      <div className="max-w-screen-lg mx-auto ">
        <Roof showBirb={true}>
          <StaticImage src="../../images/titretoit_fossileetfutur.png" />
        </Roof>
        <div className="flex flex-col-reverse p-6 border-2 border-black border-t-0 border-b-0 dotted ">
          {/* CR1 */}
          <div className="grid grid-cols-3 p-6 gap-6 bg-white border-2 border-black mb-16">
            <Fenetre
              type="comic"
              src={[FossileEtFuturTravaillent]}
              title="Ça travaille dur"
              link="fossileEtFutur"
              alwaysOpen={true}
            />

            <Fenetre
              type="comic"
              src={[chacunSonTruc]}
              title="Chacun.e son truc"
              link="fossileEtFutur"
              alwaysOpen={true}
            />

            <Fenetre
              type="comic"
              src={[caChipote]}
              title="Ça chipote"
              link="fossileEtFutur"
              alwaysOpen={true}
            />

            <Fenetre
              type="comic"
              src={[beaucoupLa]}
              title="Ça fait beaucoup là, non ?"
              link="fossileEtFutur"
              alwaysOpen={true}
            />

            <Fenetre
              type="comic"
              src={[ancienLocataires]}
              title="Anciens locataires"
              link="fossileEtFutur"
              alwaysOpen={true}
            />
          </div>
        </div>
      </div>
      <Ground />
    </div>
  );
}

export default FossileEtFutur;
