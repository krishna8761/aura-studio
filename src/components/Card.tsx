import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  badge,
  className = '',
  children,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`relative group rounded-2xl border border-white/5 bg-slate-900/40 p-6 md:p-8 backdrop-blur-md overflow-hidden hover:border-brand-500/30 transition-colors duration-300 ${className}`}
    >
      {/* Dynamic Hover Ambient Flare */}
      <div className="absolute -inset-px bg-gradient-to-tr from-brand-600/10 to-indigo-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {icon && (
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-brand-400 group-hover:text-white group-hover:bg-brand-600 group-hover:border-brand-500/50 transition-all duration-300">
                {icon}
              </div>
            )}
            {badge && (
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400">
                {badge}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-white font-display group-hover:text-brand-300 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {children && <div className="mt-2">{children}</div>}
      </div>
    </motion.div>
  );
};
