import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './SideBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex " style={{ minHeight: '100%' }}>
        <Sidebar />
        <main className="flex-grow p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
