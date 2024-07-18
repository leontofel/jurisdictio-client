import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:block lg:w-64 bg-gray-800 text-white p-4" style={{ minHeight: '100%' }}>
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <a href="/" className="hover:text-gray-300">Home</a>
          </li>
          <li className="mb-2">
            <a href="/about" className="hover:text-gray-300">About</a>
          </li>
          <li className="mb-2">
            <a href="/services" className="hover:text-gray-300">Services</a>
          </li>
          <li className="mb-2">
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
