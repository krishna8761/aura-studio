import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Sparkles, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState(() => 
    typeof window !== 'undefined' ? window.location.hash : ''
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isDesignSystem = currentHash === '#design-system';

  const navLinks = [
    { name: 'Portfolio', href: isDesignSystem ? '/#features' : '#features' },
    { name: 'Services', href: isDesignSystem ? '/#services' : '#services' },
    { name: 'Components', href: isDesignSystem ? '/#components' : '#components' },
    { name: 'Design System', href: '#design-system' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-400 text-white shadow-lg shadow-brand-500/20">
              <Sparkles className="w-5 h-5 animate-pulse-subtle" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-display">
              Aura<span className="text-brand-400">UI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = currentHash === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'text-brand-400 font-semibold drop-shadow-[0_0_10px_rgba(99,102,241,0.2)]' 
                        : 'text-dark-muted hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-dark-muted hover:text-white hover:bg-white/5 transition-all"
                aria-label="GitHub Repository"
              >
                <Github className="w-5 h-5" />
              </a>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-dark-muted hover:text-white hover:bg-white/5 transition-all relative overflow-hidden"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-400" />
                )}
              </button>

              <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-brand-600 to-indigo-500 hover:from-brand-500 hover:to-indigo-400 text-white shadow-md shadow-brand-500/10 hover:shadow-brand-500/25 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-dark-muted hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-400" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-dark-muted hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
              aria-label="Open main menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-dark-bg/95 backdrop-blur-lg"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-dark-muted hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 border-t border-white/5 flex flex-col gap-3 px-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 py-2 text-dark-muted hover:text-white"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub Repository</span>
                </a>
                <button className="w-full py-2.5 text-center text-sm font-semibold rounded-lg bg-gradient-to-r from-brand-600 to-indigo-500 hover:from-brand-500 hover:to-indigo-400 text-white transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
