import React from "react";
import Mood from "../components/mood";

import SEO from "../components/seo";

import CR11 from "../images/CR1/cr1_1.jpg";
import CR12 from "../images/CR1/cr1_2.jpg";
import CR13 from "../images/CR1/cr1_3.jpg";
import CR14 from "../images/CR1/cr1_4.jpg";
import CR15 from "../images/CR1/cr1_5.jpg";
import CR16 from "../images/CR1/cr1_6.jpg";
import CR17 from "../images/CR1/cr1_7.jpg";
import CR18 from "../images/CR1/cr1_8.jpg";
import CR19 from "../images/CR1/cr1_9.jpg";
import CR110 from "../images/CR1/cr1_10.jpg";
import CR111 from "../images/CR1/cr1_11.jpg";
import CR112 from "../images/CR1/cr1_12.jpg";

import tergiBleu from "../images/tergiversations_bleu_supprimer_groupe_fb.jpg";

import FossileEtFuturTravaillent from "../images/fossileetfutur_travaillentdur.jpg";

import narration11 from "../images/Narration1/Narration1_1.jpg";
import narration12 from "../images/Narration1/Narration1_2.jpg";
import narration13 from "../images/Narration1/Narration1_3.jpg";
import narration14 from "../images/Narration1/Narration1_4.jpg";

function IndexPage() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-96">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="max-w-screen-lg mx-auto ">
        <div className=" bg-yellow-900 p-20">
          <p className="text-white text-5xl text-center">
            C&apos;est le toit !
          </p>
        </div>
        <div className="flex flex-col p-6 border-4 border-black border-t-0 striped">
          <div className="grid grid-cols-3 p-6 gap-6 bg-white border-4 border-black mb-6">
            <img src={CR11}></img>
            <img src={CR12}></img>
            <img src={CR13}></img>
            <img src={CR14}></img>
            <img src={CR15}></img>
            <img src={CR16}></img>
          </div>

          <Mood
            type="horizontal"
            src={[tergiBleu]}
            title="Tergiversations de Bleu : Supprimer le groupe Facebook"
          />
          <div className="grid grid-cols-3 p-6 gap-6 bg-white border-4 border-black mb-6">
            <img src={CR17}></img>
            <img src={CR18}></img>
            <img src={CR19}></img>
          </div>

          <Mood
            type="horizontal"
            src={[FossileEtFuturTravaillent]}
            title="Fossile&Futur travaillent dur"
          />

          <Mood
            type="horizontal"
            src={["https://placekitten.com/3000/1000"]}
            title="Fossile&Futur, qui a pensé à tout ça ?"
          />
          <div className="grid grid-cols-3 p-6 gap-6 bg-white border-4 border-black mb-6">
            <img src={CR110}></img>
            <img src={CR111}></img>
            <img src={CR112}></img>
          </div>

          <Mood
            type="carousel"
            src={[narration11, narration12, narration13, narration14]}
            title={
              <>
                Futur<em>Futur</em> Et si l&apos;asso avait un autre nom
              </>
            }
          />
          {/* <Mood
            title="vertical"
            type="vertical"
            src={["https://placekitten.com/1000/3000"]}
          /> */}
        </div>
      </div>
      <div className="bg-green-500 p-20">
        <p className="text-white text-5xl text-center">C&apos;est le sol !</p>
      </div>
    </div>
  );
}

export default IndexPage;
