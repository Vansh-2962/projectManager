"use client";

import Sidebar from "@/components/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex">
      {/* left sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
