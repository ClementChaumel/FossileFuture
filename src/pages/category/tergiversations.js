import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Fenetre from "../../components/fenetre";

import SEO from "../../components/seo";

import tergiBleu from "../../images/CR1/tergiversations_bleu_supprimer_groupe_fb.jpg";

import emotionBiere from "../../images/CR2/emotion___Biere,_quel_plaisir.jpg";
import EmotionLaMaison from "../../images/CR4/emotion___La_Maison_Trop_Petite_A_Gentioux.jpg";

import bcpDeTravail from "../../images/CR6/emotion___bop_de_travaux.jpg";
import reuEmotion from "../../images/CR6/Émotion___Reu_Émotion.jpg";
import duMalASexp from "../../images/CR6/Emotions_du_mal_a_s_exprimer.jpg";
import pasDeTitre from "../../images/CR6/IMG_0768.jpg";
import Roof from "../../components/Roof";
import Ground from "../../components/Ground";

function Tergiversations() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-48">
      <SEO
        keywords={[`Fossile`, `futur`, `bd`, `léa chaumel`]}
        title="Tergiversations"
      />
      <div className="max-w-screen-lg mx-auto ">
        <Roof showBirb={true}>
          <StaticImage src="../../images/titretoit_tergiversations.png" />
        </Roof>
        <div className="flex flex-col-reverse p-6 border-2 border-black border-t-0 border-b-0 dotted ">
          {/* CR1 */}
          <div className="grid grid-cols-3 p-6 gap-6 bg-white border-2 border-black mb-16">
            <Fenetre
              type="horizontal"
              src={[tergiBleu]}
              title="Supprimer le groupe Facebook"
              link="tergiversations"
              alwaysOpen={true}
            />

            <Fenetre
              type="horizontal"
              src={[emotionBiere]}
              title="Bière, quel plaisir"
              link="tergiversations"
              alwaysOpen={true}
            />
            <Fenetre
              type="horizontal"
              src={[EmotionLaMaison]}
              title="La maison trop petite à Gentioux"
              link="tergiversations"
              alwaysOpen={true}
            />
            <Fenetre
              type="horizontal"
              src={[bcpDeTravail]}
              title="Beaucoup de travaux"
              link="tergiversations"
              alwaysOpen={true}
            />
            <Fenetre
              type="horizontal"
              src={[reuEmotion]}
              title="Réunion émotions"
              link="tergiversations"
              alwaysOpen={true}
            />
            <Fenetre
              type="horizontal"
              src={[duMalASexp]}
              title="Du mal à s'exprimer"
              link="tergiversations"
              alwaysOpen={true}
            />
            <Fenetre
              type="horizontal"
              src={[pasDeTitre]}
              title="Investissement personnel"
              link="tergiversations"
              alwaysOpen={true}
            />
          </div>
        </div>
      </div>
      <Ground />
    </div>
  );
}

export default Tergiversations;
