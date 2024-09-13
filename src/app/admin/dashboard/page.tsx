import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
    redirect('/admin/dashboard/content-management')
  return (
    <div>
      <h1>Welcome to the admin dashboard</h1>
    </div>
  )
}
