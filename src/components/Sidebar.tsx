'use client';

import Link from 'next/link';
import { FaNewspaper, FaUsers, FaStar, FaCogs, FaChartLine, FaShieldAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 hidden sm:flex flex-col h-screen p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-8 text-center">Panneau d&apos;administration</h2> {/* Admin Panel */}
      <nav>
        <ul className="space-y-6">
          <li>
            <Link href="/admin/dashboard/content-management" className="flex items-center text-lg hover:text-blue-500">
              <FaNewspaper className="mr-3" /> Gestion des articles {/* Blog Manager */}
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/user-management" className="flex items-center text-lg hover:text-blue-500">
              <FaUsers className="mr-3" /> Gestion des utilisateurs {/* User Management */}
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/testimonials" className="flex items-center text-lg hover:text-blue-500">
              <FaStar className="mr-3" /> Témoignages {/* Testimonials */}
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/settings" className="flex items-center text-lg hover:text-blue-500">
              <FaCogs className="mr-3" /> Paramètres {/* Settings */}
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/analystics" className="flex items-center text-lg hover:text-blue-500">
              <FaChartLine className="mr-3" /> Analytique {/* Analytics */}
            </Link>
          </li>
          <li>
            <Link href="/admin/dashboard/privacy-legal" className="flex items-center text-lg hover:text-blue-500">
              <FaShieldAlt className="mr-3" /> Confidentialité &amp; Légal {/* Privacy & Legal */}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
