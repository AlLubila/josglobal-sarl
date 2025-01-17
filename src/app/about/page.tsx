import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

import styles from "@/styles/About.module.css";

export const metadata: Metadata = {
  title: "À Propos de Nous - JOSGLOBAL Sarl",
  description:
    "En savoir plus sur JOSGLOBAL Sarl, une entreprise leader en approvisionnement basée à Kinshasa, RDC. Découvrez nos valeurs, notre mission et comment nous nous efforçons de fournir l'excellence en connectant les entreprises avec des fournisseurs mondiaux.",
};

export default function About() {
  return (
    <>
      <section className="py-14 mt-20 lg:py-24 relative z-0 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-white mb-5 md:text-5xl md:leading-normal">
            Votre Partenaire de Confiance en Approvisionnement en <span className="text-indigo-400">Afrique Centrale</span>
          </h1>
          <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-400 mb-9">
            Collaborez avec nous pour vous connecter à des fournisseurs fiables et accéder à des produits de haute qualité adaptés aux besoins de votre entreprise.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <Image
                src="/officeEnvironment.jpeg"
                width={600}
                height={600}
                alt="Page À Propos de Nous tailwind"
                className="max-lg:mx-auto object-cover"
                priority
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center relative">
                  À Propos de Nous
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-300 max-lg:text-center max-w-2xl mx-auto">
                  JOSGLOBAL Sarl est une entreprise dynamique basée à Kinshasa, en République Démocratique du Congo, spécialisée dans les solutions B2B pour les entreprises de divers secteurs. Grâce à notre emplacement stratégique en Afrique Centrale, nous connectons les entreprises locales et internationales avec des fournisseurs fiables, garantissant l&apos;accès à des produits et services de haute qualité répondant aux divers besoins des entreprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <Image
                  src="/mission.jpg"
                  width={600}
                  height={600}
                  alt="Notre Mission"
                  className="block lg:hidden mb-9 mx-auto object-cover"
                  priority
                />
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-white mb-9 max-lg:text-center">Notre Mission</h2>
                <p className="font-normal text-xl leading-8 text-gray-300 max-lg:text-center max-w-2xl mx-auto">
                  Notre mission est d&apos;être le principal partenaire d&apos;approvisionnement pour les entreprises en République Démocratique du Congo et au-delà, en fournissant un accès à des produits de haute qualité provenant de fournisseurs mondiaux de confiance. Nous nous engageons à offrir une valeur exceptionnelle à travers des solutions d&apos;approvisionnement efficaces, fiables et éthiques.
                </p>
              </div>
            </div>
            <div className="img-box">
              <Image
                src="/mission.jpg"
                width={600}
                height={600}
                alt="Notre Mission"
                className="hidden lg:block object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

    {/*  <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-white font-bold mb-14">Nos Résultats en Chiffres</h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 p-6 rounded-2xl shadow-md bg-gray-800">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-400">240%</div>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-semibold mb-2">Croissance de l&apos;Entreprise</h4>
                  <p className="text-xs text-gray-400 leading-5">Une croissance remarquable grâce à notre innovation continue et à nos efforts pour atteindre de nouveaux sommets de succès.</p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 p-6 rounded-2xl shadow-md bg-gray-800">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-400">175+</div>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-semibold mb-2">Membres de l&apos;Équipe</h4>
                  <p className="text-xs text-gray-400 leading-5">Nos membres talentueux sont la clé de notre réussite.</p>
                </div>
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 p-6 rounded-2xl shadow-md bg-gray-800">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-400">625+</div>
                <div className="flex-1">
                  <h4 className="text-xl text-white font-semibold mb-2">Projets Terminés</h4>
                  <p className="text-xs text-gray-400 leading-5">Nous avons mené à bien plus de 625 projets dans le monde et continuons de grandir.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-14 mt-16 lg:py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-16 rounded-full">
            <h2 className="text-4xl font-manrope font-bold text-white text-center">Ce Que Disent Nos Clients !</h2>
          </div>

          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-400 leading-8 mb-8 text-center">
                      &quot;Travailler avec JOSGLOBAL a été un véritable atout pour nos besoins en approvisionnement. L&apos;expertise et le dévouement de leur équipe nous ont permis de trouver rapidement et efficacement des fournisseurs fiables.&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-400 leading-8 mb-8 text-center">
                      &quot;Le professionnalisme et le soutien de JOSGLOBAL ont dépassé nos attentes. Nous recommandons vivement leurs services à toute personne à la recherche de solutions d&apos;approvisionnement.&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="relative mb-20">
                  <div className="max-w-max mx-auto lg:max-w-4xl">
                    <p className="text-lg text-gray-400 leading-8 mb-8 text-center">
                      &quot;JOSGLOBAL a rationalisé notre processus d&apos;approvisionnement et a été un partenaire fiable. Leur souci du détail et leur engagement envers la qualité sont remarquables.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
