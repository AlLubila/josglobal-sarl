import Sidebar from '@/components/Sidebar';
import AdminHeader from '@/components/AdminHeader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader />
        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
