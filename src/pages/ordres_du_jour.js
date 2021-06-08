import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import SEO from "../components/seo";
import { AnchorLink } from "gatsby-plugin-anchor-links";

function OrdresDuJour() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-50 to-blue-400 pt-96">
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="OrdresDuJour"
      />
      <div className="max-w-screen-lg mx-auto ">
        <div className="stroke">
          <div className="toit flex justify-center items-end">
            <div className="max-w-sm">
              <StaticImage src="../../images/titretoit_OrdresDuJour.png" />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-6 border-2 border-black border-t-0 border-b-0 dotted ">
          <div className="p-6 gap-6 bg-white border-2 border-black mb-16">
            <a href="/#cr-1">
              <h1 id="cr-1" className="underline text-center text-3xl pb-6">
                Réunion du 04/07/2019
              </h1>
            </a>
            <ul className="list-disc pl-10">
              <li className="pb-2">Création de plateformes communes</li>
              <li className="pb-2">
                Recherche/Propositions d’un nom pour la SCI
              </li>
              <li className="pb-2">Récapitulatif des papiers à faire</li>
              <li className="pb-2">Autre</li>
            </ul>
          </div>
          <div className="p-6 gap-6 bg-white border-2 border-black mb-16">
            <AnchorLink to="/#cr-2">
              <h1 id="cr-2" className="underline text-center text-3xl pb-6">
                Réunion du 08/12/2019
              </h1>
            </AnchorLink>
            <ul className="list-disc pl-10">
              <li className="pb-2">
                Remise à jour:
                <ul className=" ml-6" style={{ listStyle: "circle" }}>
                  <li>Envies</li>
                  <li>Recherches</li>
                  <li>Stéphane Henin</li>
                </ul>
              </li>
              <li className="pb-2">Création de l’association</li>
              <li className="pb-2">La bière</li>
            </ul>
          </div>
          <div className="p-6 gap-6 bg-white border-2 border-black mb-16">
            <AnchorLink to="/#cr-3">
              <h1 id="cr-3" className="underline text-center text-3xl pb-6">
                Réunion du 10/03/2020
              </h1>
            </AnchorLink>
            <ul className="list-disc pl-10">
              <li className="pb-2">
                Proposition de division des tâches en commissions
              </li>
              <li className="pb-2">
                Micro édition, établissement d’une charte graphique ?
              </li>
              <li className="pb-2">
                Écriture de textes définitifs expliquant le projet
              </li>
              <li className="pb-2">Réseaux sociaux, création et gestion</li>
              <li className="pb-2">Bière, en refaire</li>
              <li className="pb-2">Documents administratifs</li>
              <li className="pb-2">Recherche de potentiel lieu ?</li>
              <li className="pb-2">Organisation d’événements ?</li>
            </ul>
          </div>
          <div className="p-6 gap-6 bg-white border-2 border-black mb-16">
            <AnchorLink to="/#cr-4">
              <h1 id="cr-4" className="underline text-center text-3xl pb-6">
                Réunion du 11/12/2020
              </h1>
            </AnchorLink>
            <ul className="list-disc pl-10">
              <li className="pb-2">Bière</li>
              <li className="pb-2">
                Compte rendu de la visite de maison du 05 et 06/12/2020 à
                Gentioux sur le plateau de Millevache
              </li>
              <li className="pb-2">
                Commissions, refaire le point réexpliquer
              </li>
              <li className="pb-2">
                Refaire le point, qui est prêt à mettre de l’argent ? combien ?
              </li>
              <li className="pb-2">Création de la SCI</li>
              <li className="pb-2">
                Mémoire de Eli / projet de diplôme de Simon
              </li>
              <li className="pb-2">
                Question de qui on accepte dans le projet
              </li>
            </ul>
          </div>
          <div className="p-6 gap-6 bg-white border-2 border-black mb-16">
            <AnchorLink to="/#cr-5">
              <h1 id="cr-5" className="underline text-center text-3xl pb-6">
                Réunion du 09/01/2021
              </h1>
            </AnchorLink>
            <ul className="list-disc pl-10">
              <li className="pb-2">
                Mise à jour commission, nouvelle commissions et changements
              </li>
              <li className="pb-2">
                Instagram, mise au point sur le compte plus propositions pour la
                suite
              </li>
              <li className="pb-2">Investissement personnel</li>
              <li className="pb-2">Meymac</li>
              <li className="pb-2">Couples au sein de l’association</li>
              <li className="pb-2">Proposition exposition + hello asso</li>
              <li className="pb-2">
                Question de qui on accepte dans le projet
              </li>
            </ul>
          </div>
          <div className="p-6 gap-6 bg-white border-2 border-black mb-16">
            <AnchorLink to="/#cr-6">
              <h1 id="cr-6" className="underline text-center text-3xl pb-6">
                Réunion du 05/02/2021
              </h1>
            </AnchorLink>
            <ul className="list-disc pl-10">
              <li className="pb-2">
                Faire un point sur la visite du 30/31 janvier à Meymac
              </li>
              <li className="pb-2">
                Liste des travaux à faire en premier pour y habiter
              </li>
              <li className="pb-2">Assurance</li>
              <li className="pb-2">
                Récolte de matériel, outils, meubles, objets, machines etc +
                faire une liste et voir comment les récupérer
              </li>
              <li className="pb-2">
                Commencer à mettre de l’argent en commun pour les premières
                dépenses
              </li>
              <li className="pb-2">
                Y aller pendant les vacances de février ?
              </li>
              <li className="pb-2">Définition + déroulement réunion émotion</li>
            </ul>
          </div>
          <div className="p-6 gap-6 bg-white border-2 border-black mb-16">
            <AnchorLink to="/#cr-7">
              <h1 id="cr-7" className="underline text-center text-3xl pb-6">
                Réunion du 22/02/2021
              </h1>
            </AnchorLink>
            <ul className="list-disc pl-10">
              <li className="pb-2">To do list semaine</li>
              <li className="pb-2">Organisation journée du lendemain</li>
              <li className="pb-2">Rencontre mairie / voisins / commercants</li>
              <li className="pb-2">Point contrats</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white border-black border-t-2 p-5">
        <p className="text-white text-5xl text-center">C&apos;est le sol !</p>
      </div>
    </div>
  );
}

export default OrdresDuJour;
