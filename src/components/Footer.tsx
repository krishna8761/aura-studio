import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Components', href: '#components' },
        { name: 'Templates', href: '#' },
        { name: 'Releases', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Guides', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Community', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative bg-dark-bg border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Absolute Ambient Light Flares */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-brand-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16">
          {/* Logo & Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-600 to-indigo-400 text-white shadow-md">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white font-display">
                Aura<span className="text-brand-400">UI</span>
              </span>
            </div>
            <p className="text-sm text-dark-muted max-w-sm leading-relaxed">
              Beautiful, production-ready React templates & components engineered with Tailwind CSS, TypeScript, and Framer Motion.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-dark-muted hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://twitter.com"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-dark-muted hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/5 text-dark-muted hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-dark-muted hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-muted">
          <div>
            &copy; {currentYear} AuraUI. All rights reserved. Designed for elite developers.
          </div>
          <div className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};
