import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text selection:bg-brand-500/30 selection:text-white flex flex-col">
      {/* Top Glass Navbar */}
      <Navbar />

      {/* Main Grid Content Layout */}
      <main className="flex-grow pt-16 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
