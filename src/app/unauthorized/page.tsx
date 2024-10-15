'use client'

import { useRouter } from 'next/navigation';

export default function Unauthorized() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between min-h-screen bg-[#021526] text-white">
      {/* Header */}
      <header className="py-4 bg-gray-900 text-center">
        <h1 className="text-3xl font-bold">Access Denied</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">403 - Unauthorized</h2>
        <p className="text-lg mb-6">
          Vous n'êtes pas autorisé à voir cette page. Veuillez contacter l'administrateur si vous pensez qu'il s'agit d'une erreur.
        </p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Retourner à la page d'accueil
        </button>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-900 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Josglobal Sarl. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
