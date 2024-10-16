import { redirect } from 'next/navigation';
import React from 'react';

export default function page() {
    redirect('/admin/dashboard/content-management');
    return (
        <div>
            <h1>Bienvenue sur le tableau de bord d&apos;administration</h1>
        </div>
    );
}
