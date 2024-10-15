'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

export default function AdminHeader() {
  return (
    <header className="w-full bg-gray-700 text-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo or Title */}
        <div className="text-xl font-bold">
          <Link href='/'>
            <Image 
              src='/logo1.png' 
              alt="website's logo" 
              width={150} 
              height={150} 
              priority // Add this attribute to prioritize the image
              style={{ width: 'auto', height: 'auto' }} 
            />
          </Link>
        </div>
        {/* User Avatar/Settings */}
        <div className="flex items-center space-x-4">
          <div className="text-sm">Bienvenue, administrateur</div>
          <FaUserCircle className="text-3xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
