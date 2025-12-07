import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <div className="ml-64 flex-1 p-8 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;