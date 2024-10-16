import React from "react";
import '@/styles/globals.css';
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Function returns a tailwind component for not found page
export default function notFound() {
  return (
    <>
      <main>
        <div className='NotFoundcontainer'>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                Page introuvable.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Désolé, nous ne trouvons pas cette page. Vous trouverez beaucoup de choses à explorer sur la page d&apos;accueil.
              </p>
              <Link
                href="/"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Retour à la page d&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
