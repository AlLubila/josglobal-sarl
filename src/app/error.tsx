"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import '@/styles/globals.css'
import React from "react";

// Function return a tailwind component for error page
export default function Error() {
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
            Internal Server Error.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Nous travaillons déjà pour résoudre le problème{" "}
          </p>
        </div>
      </div>
    </div>
    </main>
    </>
  );
}
