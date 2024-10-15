"use client";

import '@/styles/globals.css'
import React from "react";

// Fonction qui retourne un composant tailwind pour la page d'erreur
export default function ErrorPage() {
  return (
    <>
    <main>
    <div className='errorContainer'>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            500
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Erreur Interne du Serveur.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Nous travaillons déjà à résoudre le problème{" "}
          </p>
        </div>
      </div>
    </div>
    </main>
    </>
  );
}
