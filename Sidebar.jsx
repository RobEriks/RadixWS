import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <div className="p-4 text-lg font-bold">Dashboard</div>
      <nav className="mt-6">
        <ul className="space-y-2">
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Overview</li>
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Reports</li>
          <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Settings</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
