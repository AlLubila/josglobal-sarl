import React from "react";
import Image from "next/image";

import styles from "@/styles/section/homepage/testimony.module.css";

export default function Testimony() {
  return (
    <div>
      <section className="text-white py-16 my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">
            Ce que nos clients disent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                "S'associer avec JOSGLOBAL Sarl a été un véritable changement
                pour notre entreprise. Leur capacité à sourcer des matériaux de
                construction de haute qualité à des prix compétitifs nous a
                aidés à réaliser nos projets dans les délais et dans le
                budget. La fiabilité de leur chaîne d'approvisionnement,
                notamment dans la gestion de la logistique complexe, est sans
                égal. Avec leur excellent service client, nous avons toujours
                l'impression d'être leur priorité. JOSGLOBAL est plus qu'un
                simple fournisseur : c'est un acteur clé de notre succès."
              </p>
              <p className="text-gray-700 font-medium">
                - John M., PDG de Kinshasa Construction Solutions
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                "Nous achetons des vêtements, des chaussures et des
                accessoires en gros auprès de JOSGLOBAL Sarl depuis plus d'un
                an, et leur service a été exceptionnel. Leurs produits répondent
                toujours à nos normes de qualité élevées, et l'équipe fait
                toujours tout pour satisfaire nos demandes de styles et de
                tendances spécifiques. Grâce à leur dévouement et à leur
                soutien, nous avons pu développer notre activité et offrir à
                nos clients de la mode haut de gamme à des prix abordables."
              </p>
              <p className="text-gray-700 font-medium">
                - Marie T., Fondatrice de Kinshasa Boutique
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                "JOSGLOBAL Sarl a été un partenaire essentiel pour nous dans le
                sourcing de machines agricoles. Leur large sélection
                d'équipements pour les petites industries nous a permis
                d'améliorer l'efficacité et la productivité des opérations de
                nos clients. Nous apprécions leur transparence, leurs
                livraisons ponctuelles et la qualité exceptionnelle des
                produits. Ils sont véritablement engagés à soutenir nos
                besoins commerciaux, et nous sommes impatients de poursuivre ce
                partenariat pendant de nombreuses années."
              </p>
              <p className="text-gray-700 font-medium">
                - Claude L., Directeur Général, Congo Agro Solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
