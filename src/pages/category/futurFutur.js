import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Fenetre from "../../components/fenetre";

import SEO from "../../components/seo";

import autreNom from "../../images/FuturFuturFullHeight/futurfutur_nom.jpg";
import expoEcole from "../../images/FuturFuturFullHeight/futur_futur_expoalecole.jpg";
import bonjourVoisins from "../../images/FuturFuturFullHeight/futurfutur_boujourlesvoisin.e.s.jpg";
import venteBiere from "../../images/FuturFuturFullHeight/futurfutur_premiere_vente_de_biere.jpg";
import separations from "../../images/FuturFuturFullHeight/futurfutur_separation.jpg";
import veto from "../../images/FuturFuturFullHeight/futurfutur_veto.jpg";
import voisins from "../../images/FuturFuturFullHeight/futurfutur_voisins.jpg";
import Roof from "../../components/Roof";
import Ground from "../../components/Ground";

function FuturFutur() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-48">
      <SEO
        keywords={[`Fossile`, `futur`, `bd`, `léa chaumel`]}
        title="FuturFutur"
      />
      <div className="max-w-screen-lg mx-auto ">
        <Roof showBirb={true}>
          <StaticImage src="../../images/titretoit_futurfutur.png" />
        </Roof>
        <div className="flex flex-col-reverse p-6 border-2 border-black border-t-0 border-b-0 dotted ">
          <div className="grid grid-cols-3 p-6 gap-6 bg-white border-2 border-black mb-16">
            <Fenetre
              type="fullHeight"
              src={autreNom}
              title="Et si l'asso avait un autre nom ?"
              link="futurFutur"
              alwaysOpen={true}
            />
            <Fenetre
              type="fullHeight"
              src={expoEcole}
              title="Expo à l'école"
              link="futurFutur"
              alwaysOpen={true}
            />
            <Fenetre
              type="fullHeight"
              src={bonjourVoisins}
              title="Bonjour les voisin·e·s"
              link="futurFutur"
              alwaysOpen={true}
            />
            <Fenetre
              type="fullHeight"
              src={venteBiere}
              title="Première vente de bière"
              link="futurFutur"
              alwaysOpen={true}
            />
            <Fenetre
              type="fullHeight"
              src={separations}
              title="Séparation"
              link="futurFutur"
              alwaysOpen={true}
            />
            <Fenetre
              type="fullHeight"
              src={veto}
              title="Ah non pas iel !"
              link="futurFutur"
              alwaysOpen={true}
            />
            <Fenetre
              type="fullHeight"
              src={voisins}
              title="On dérange les voisins"
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
