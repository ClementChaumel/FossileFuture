import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Fenetre from "../components/fenetre";
import CompteRendu from "../components/CompteRendu";

import SEO from "../components/seo";

import tergiBleu from "../images/CR1/tergiversations_bleu_supprimer_groupe_fb.jpg";
import FossileEtFuturTravaillent from "../images/CR1/fossileetfutur_travaillentdur.jpg";

import narration11 from "../images/CR1/Narration1/Narration1_1.jpg";
import narration12 from "../images/CR1/Narration1/Narration1_2.jpg";
import narration13 from "../images/CR1/Narration1/Narration1_3.jpg";
import narration14 from "../images/CR1/Narration1/Narration1_4.jpg";

import emotionBiere from "../images/CR2/emotion___Biere,_quel_plaisir.jpg";
import chacunSonTruc from "../images/CR2/Chacun.e_Son_Truc.jpg";

import caChipote from "../images/CR3/Ça_chipote_Comic.jpg";

import beaucoupLa from "../images/CR4/Ça_Fait_beaucoup_la_non_Comic.jpg";
import lesComissions from "../images/CR4/Didac_les_commissions_c_est_quoi_.jpg";
import EmotionLaMaison from "../images/CR4/emotion___La_Maison_Trop_Petite_A_Gentioux.jpg";

import ancienLocataires from "../images/CR6/comic_Ancien_locataires.jpg";
import bcpDeTravail from "../images/CR6/emotion___bop_de_travaux.jpg";
import reuEmotion from "../images/CR6/Émotion___Reu_Émotion.jpg";
import duMalASexp from "../images/CR6/Emotions_du_mal_a_s_exprimer.jpg";
import pasDeTitre from "../images/CR6/IMG_0768.jpg";

function IndexPage() {
  const [currentCR, setCurrentCR] = useState(1);

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-96">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="max-w-screen-lg mx-auto ">
        <div className="stroke">
          <div className="toit flex justify-center items-end">
            <div className="max-w-xs">
              <StaticImage src="../images/logotoit.png" />
            </div>
          </div>
        </div>
        <AnchorLink
          to={`/#cr-${currentCR + 1}`}
          onAnchorLinkClick={() => {
            setCurrentCR(currentCR + 1);
          }}
          className={`cloud next ${currentCR === 7 ? "disabled" : ""}`}
        >
          <div className="w-36">
            <StaticImage src="../images/clouds/suivant_hover.png" />
          </div>
          <div className="w-36">
            <StaticImage src="../images/clouds/suivant.png" />
          </div>
        </AnchorLink>
        <AnchorLink
          to={`/#cr-${currentCR - 1}`}
          onAnchorLinkClick={() => {
            setCurrentCR(currentCR - 1);
          }}
          className={`cloud previous ${currentCR === 1 ? "disabled" : ""}`}
        >
          <div className="w-36">
            <StaticImage src="../images/clouds/pecedent_hover.png" />
          </div>
          <div className="w-36">
            <StaticImage src="../images/clouds/pecedent.png" />
          </div>
        </AnchorLink>
        <a className="flex flex-col-reverse p-6 border-2 border-black border-t-0 border-b-0 dotted ">
          {/* CR1 */}

          <CompteRendu
            title="CR1: Réunion du 04/07/2019"
            number={1}
            setCurrentCR={setCurrentCR}
          >
            <StaticImage src="../images/CR1/cr1_1.jpg" />
            <StaticImage src="../images/CR1/cr1_2.jpg" />
            <StaticImage src="../images/CR1/cr1_3.jpg" />
            <Fenetre
              type="horizontal"
              src={[tergiBleu]}
              title="Supprimer le groupe Facebook"
              link="tergiversations"
            />
            <StaticImage src="../images/CR1/cr1_4.jpg" />
            <StaticImage src="../images/CR1/cr1_5.jpg" />
            <StaticImage src="../images/CR1/cr1_6.jpg" />

            <StaticImage src="../images/CR1/cr1_7.jpg" />
            <StaticImage src="../images/CR1/cr1_8.jpg" />
            <StaticImage src="../images/CR1/cr1_9.jpg" />
            <Fenetre
              type="comic"
              src={[FossileEtFuturTravaillent]}
              title="Ça travaille dur"
              link="fossileEtFutur"
            />
            <Fenetre
              type="comic"
              src={["https://placekitten.com/3000/1000"]}
              title="Qui a pensé à tout ça ?"
              link="fossileEtFutur"
            />
            <StaticImage src="../images/CR1/cr1_10.jpg" />
            <StaticImage src="../images/CR1/cr1_11.jpg" />
            <StaticImage src="../images/CR1/cr1_12.jpg" />
            <Fenetre
              type="carousel"
              src={[narration11, narration12, narration13, narration14]}
              title="Et si l'asso avait un autre nom"
              link="futurFutur"
            />
          </CompteRendu>

          {/* CR2 */}
          <CompteRendu
            title="CR2: Réunion du 08/12/2019"
            number={2}
            setCurrentCR={setCurrentCR}
          >
            <StaticImage src="../images/CR2/cr2_1.jpg" />
            <StaticImage src="../images/CR2/cr2_2.jpg" />
            <StaticImage src="../images/CR2/cr2_3.jpg" />
            <StaticImage src="../images/CR2/cr2_4.jpg" />
            <StaticImage src="../images/CR2/cr2_5.jpg" />
            <StaticImage src="../images/CR2/cr2_6.jpg" />
            <StaticImage src="../images/CR2/cr2_7.jpg" />
            <StaticImage src="../images/CR2/cr2_8.jpg" />
            <StaticImage src="../images/CR2/cr2_9.jpg" />
            <StaticImage src="../images/CR2/cr2_10.jpg" />
            <StaticImage src="../images/CR2/cr2_11.jpg" />
            <StaticImage src="../images/CR2/cr2_12.jpg" />
            <StaticImage src="../images/CR2/cr2_13.jpg" />
            <StaticImage src="../images/CR2/cr2_14.jpg" />
            <StaticImage src="../images/CR2/cr2_15.jpg" />
            <Fenetre
              type="comic"
              src={[chacunSonTruc]}
              title="Chacun.e son truc"
              link="fossileEtFutur"
            />
            <StaticImage src="../images/CR2/cr2_16.jpg" />
            <StaticImage src="../images/CR2/cr2_17.jpg" />
            <StaticImage src="../images/CR2/cr2_18.jpg" />
            <StaticImage src="../images/CR2/cr2_19.jpg" />
            <StaticImage src="../images/CR2/cr2_20.jpg" />
            <Fenetre
              type="horizontal"
              src={[emotionBiere]}
              title="Bière, quel plaisir"
              link="tergiversations"
            />
          </CompteRendu>

          {/* CR3 */}
          <CompteRendu
            title="CR3: Réunion du 10/03/2020"
            number={3}
            setCurrentCR={setCurrentCR}
          >
            <StaticImage src="../images/CR3/cr3_1.jpg" />
            <StaticImage src="../images/CR3/cr3_2.jpg" />
            <StaticImage src="../images/CR3/cr3_3.jpg" />
            <Fenetre
              type="comic"
              src={[caChipote]}
              title="Ça chipote"
              link="fossileEtFutur"
            />
            <StaticImage src="../images/CR3/cr3_4.jpg" />
            <StaticImage src="../images/CR3/cr3_5.jpg" />
            <StaticImage src="../images/CR3/cr3_6.jpg" />
            <StaticImage src="../images/CR3/cr3_7.jpg" />
            <StaticImage src="../images/CR3/cr3_8.jpg" />
            <StaticImage src="../images/CR3/cr3_9.jpg" />
            <StaticImage src="../images/CR3/cr3_10.jpg" />
            <StaticImage src="../images/CR3/cr3_11.jpg" />
            <StaticImage src="../images/CR3/cr3_12.jpg" />
            <StaticImage src="../images/CR3/cr3_13.jpg" />
            <StaticImage src="../images/CR3/cr3_14.jpg" />
            <StaticImage src="../images/CR3/cr3_15.jpg" />
            <StaticImage src="../images/CR3/cr3_16.jpg" />
            <StaticImage src="../images/CR3/cr3_17.jpg" />
            <StaticImage src="../images/CR3/cr3_18.jpg" />
          </CompteRendu>

          {/* CR4 */}
          <CompteRendu
            title="CR4: Réunion du 11/12/2020"
            number={4}
            setCurrentCR={setCurrentCR}
          >
            <StaticImage src="../images/CR4/cr4_1.jpg" />
            <StaticImage src="../images/CR4/cr4_2.jpg" />
            <StaticImage src="../images/CR4/cr4_3.jpg" />
            <Fenetre
              type="comic"
              src={[beaucoupLa]}
              title="Ça fait beaucoup là, non ?"
              link="fossileEtFutur"
            />
            <StaticImage src="../images/CR4/cr4_4.jpg" />
            <StaticImage src="../images/CR4/cr4_5.jpg" />
            <StaticImage src="../images/CR4/cr4_6.jpg" />
            <Fenetre
              type="horizontal"
              src={[EmotionLaMaison]}
              title="La maison trop petite à Gentioux"
              link="tergiversations"
            />
            <StaticImage src="../images/CR4/cr4_7.jpg" />
            <StaticImage src="../images/CR4/cr4_8.jpg" />
            <StaticImage src="../images/CR4/cr4_9.jpg" />
            <StaticImage src="../images/CR4/cr4_10.jpg" />
            <StaticImage src="../images/CR4/cr4_11.jpg" />
            <StaticImage src="../images/CR4/cr4_12.jpg" />
            <Fenetre
              type="vertical"
              src={[lesComissions]}
              title="Les commissions c'est quoi ?"
              link="tutos"
            />
            <StaticImage src="../images/CR4/cr4_13.jpg" />
            <StaticImage src="../images/CR4/cr4_14.jpg" />
            <StaticImage src="../images/CR4/cr4_15.jpg" />
            <StaticImage src="../images/CR4/cr4_16.jpg" />
            <StaticImage src="../images/CR4/cr4_17.jpg" />
            <StaticImage src="../images/CR4/cr4_18.jpg" />
          </CompteRendu>

          {/* CR5 */}
          <CompteRendu
            title="CR5: Réunion du 09/01/2021"
            number={5}
            setCurrentCR={setCurrentCR}
          >
            <StaticImage src="../images/CR5/cr5_1.jpg" />
            <StaticImage src="../images/CR5/cr5_2.jpg" />
            <StaticImage src="../images/CR5/cr5_3.jpg" />
            <StaticImage src="../images/CR5/cr5_4.jpg" />
            <StaticImage src="../images/CR5/cr5_5.jpg" />
            <StaticImage src="../images/CR5/cr5_6.jpg" />
            <StaticImage src="../images/CR5/cr5_7.jpg" />
            <StaticImage src="../images/CR5/cr5_8.jpg" />
            <StaticImage src="../images/CR5/cr5_9.jpg" />
            <StaticImage src="../images/CR5/cr5_10.jpg" />
            <StaticImage src="../images/CR5/cr5_11.jpg" />
            <StaticImage src="../images/CR5/cr5_12.jpg" />
            <StaticImage src="../images/CR5/cr5_13.jpg" />
            <StaticImage src="../images/CR5/cr5_14.jpg" />
            <StaticImage src="../images/CR5/cr5_15.jpg" />
            <StaticImage src="../images/CR5/cr5_16.jpg" />
            <StaticImage src="../images/CR5/cr5_17.jpg" />
            <StaticImage src="../images/CR5/cr5_18.jpg" />
            <StaticImage src="../images/CR5/cr5_19.jpg" />
            <StaticImage src="../images/CR5/cr5_20.jpg" />
            <StaticImage src="../images/CR5/cr5_21.jpg" />
            <StaticImage src="../images/CR5/cr5_22.jpg" />
            <StaticImage src="../images/CR5/cr5_23.jpg" />
            <StaticImage src="../images/CR5/cr5_24.jpg" />
          </CompteRendu>

          {/* CR6 */}
          <CompteRendu
            title="CR6: Réunion du 05/02/2021"
            number={6}
            setCurrentCR={setCurrentCR}
          >
            <StaticImage src="../images/CR6/cr6_1.jpg" />
            <StaticImage src="../images/CR6/cr6_2.jpg" />
            <StaticImage src="../images/CR6/cr6_3.jpg" />
            <Fenetre
              type="comic"
              src={[ancienLocataires]}
              title="Anciens locataires"
              link="fossileEtFutur"
            />
            <StaticImage src="../images/CR6/cr6_4.jpg" />
            <StaticImage src="../images/CR6/cr6_5.jpg" />
            <StaticImage src="../images/CR6/cr6_6.jpg" />
            <Fenetre
              type="horizontal"
              src={[bcpDeTravail]}
              title="Beaucoup de travaux"
              link="tergiversations"
            />
            <StaticImage src="../images/CR6/cr6_7.jpg" />
            <StaticImage src="../images/CR6/cr6_8.jpg" />
            <StaticImage src="../images/CR6/cr6_9.jpg" />
            <Fenetre
              type="horizontal"
              src={[reuEmotion]}
              title="Réunion émotions"
              link="tergiversations"
            />
            <StaticImage src="../images/CR6/cr6_10.jpg" />
            <StaticImage src="../images/CR6/cr6_11.jpg" />
            <StaticImage src="../images/CR6/cr6_12.jpg" />
            <Fenetre
              type="horizontal"
              src={[duMalASexp]}
              title="Du mal à s'exprimer"
              link="tergiversations"
            />
            <StaticImage src="../images/CR6/cr6_13.jpg" />
            <StaticImage src="../images/CR6/cr6_14.jpg" />
            <StaticImage src="../images/CR6/cr6_15.jpg" />
            <Fenetre
              type="horizontal"
              src={[pasDeTitre]}
              title="IMG_0768 C'est quoi ce titre de merde je fais quoi avec ça moi hein léa"
              link="tergiversations"
            />
            <StaticImage src="../images/CR6/cr6_16.jpg" />
            <StaticImage src="../images/CR6/cr6_17.jpg" />
            <StaticImage src="../images/CR6/cr6_18.jpg" />
            <StaticImage src="../images/CR6/cr6_19.jpg" />
            <StaticImage src="../images/CR6/cr6_20.jpg" />
          </CompteRendu>

          {/* CR7 */}
          <CompteRendu
            title="CR7: Réunion du 22/02/2021"
            number={7}
            setCurrentCR={setCurrentCR}
          >
            <StaticImage src="../images/CR7/cr7_1.jpg" />
            <StaticImage src="../images/CR7/cr7_2.jpg" />
            <StaticImage src="../images/CR7/cr7_3.jpg" />
            <StaticImage src="../images/CR7/cr7_4.jpg" />
            <StaticImage src="../images/CR7/cr7_5.jpg" />
            <StaticImage src="../images/CR7/cr7_6.jpg" />
            <StaticImage src="../images/CR7/cr7_7.jpg" />
            <StaticImage src="../images/CR7/cr7_8.jpg" />
            <StaticImage src="../images/CR7/cr7_9.jpg" />
            <StaticImage src="../images/CR7/cr7_10.jpg" />
            <StaticImage src="../images/CR7/cr7_11.jpg" />
            <StaticImage src="../images/CR7/cr7_12.jpg" />
            <StaticImage src="../images/CR7/cr7_13.jpg" />
          </CompteRendu>
        </a>
      </div>
      <div className="bg-white border-black border-t-2 p-20">
        <p className="text-white text-5xl text-center">C&apos;est le sol !</p>
      </div>
    </div>
  );
}

export default IndexPage;
