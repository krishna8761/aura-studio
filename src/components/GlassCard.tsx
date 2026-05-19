import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type CardVariant = 'glass-premium' | 'glass-cyber' | 'glass-emerald' | 'glass-sunset' | 'glass-basic';
type SpotlightColor = 'brand' | 'purple' | 'emerald' | 'sunset' | 'silver';
type HoverEffect = 'lift' | 'scale' | 'none';

interface GlassCardProps {
  title?: string;
  description?: string;
  badge?: string;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  
  // Customization
  variant?: CardVariant;
  spotlightColor?: SpotlightColor;
  hoverEffect?: HoverEffect;
  
  // Interactive triggers
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  title,
  description,
  badge,
  icon,
  className = '',
  children,
  variant = 'glass-premium',
  spotlightColor = 'brand',
  hoverEffect = 'lift',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse handler to calculate exact relative cursor coordinates for the spotlight reflection
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Spotlight color styling mappings
  const spotGradients = {
    brand: 'rgba(99, 102, 241, 0.15)',
    purple: 'rgba(168, 85, 247, 0.15)',
    emerald: 'rgba(16, 185, 129, 0.15)',
    sunset: 'rgba(244, 63, 94, 0.15)',
    silver: 'rgba(255, 255, 255, 0.1)',
  };

  // Card themes configuration classes
  const themeVariants = {
    'glass-premium': 'bg-slate-900/40 hover:bg-slate-900/50 border-white/5 hover:border-brand-500/30 text-white',
    'glass-cyber': 'bg-slate-950/50 hover:bg-slate-950/70 border-white/5 hover:border-purple-500/40 text-white',
    'glass-emerald': 'bg-teal-950/10 hover:bg-teal-950/20 border-white/5 hover:border-emerald-500/40 text-white',
    'glass-sunset': 'bg-rose-950/10 hover:bg-rose-950/20 border-white/5 hover:border-rose-500/40 text-white',
    'glass-basic': 'bg-[#0f172a]/70 hover:bg-[#0f172a]/90 border-slate-800 text-white',
  };

  // Badge styles tailored to thematic cards
  const badgeVariants = {
    'glass-premium': 'bg-brand-500/10 border-brand-500/20 text-brand-400',
    'glass-cyber': 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    'glass-emerald': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    'glass-sunset': 'bg-rose-500/10 border-rose-500/20 text-rose-400',
    'glass-basic': 'bg-white/5 border-white/10 text-white/70',
  };

  // Hover transitions mappings
  const hoverAnimations = {
    lift: { y: -6, scale: 1.01 },
    scale: { scale: 1.03 },
    none: {},
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={hoverAnimations[hoverEffect]}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className={`relative rounded-2xl border backdrop-blur-xl overflow-hidden transition-colors duration-300 p-6 md:p-8 ${
        themeVariants[variant]
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* 1. Dynamic Cursor-Tracking Ambient Spotlight Flare */}
      {isHovered && (
        <div
          className="absolute -inset-px rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${spotGradients[spotlightColor]}, transparent 70%)`,
          }}
        />
      )}

      {/* 2. Glass Card content */}
      <div className="relative z-10 flex flex-col h-full justify-between gap-6">
        <div className="space-y-4">
          
          {/* Header section (Icon + Badge) */}
          {(icon || badge) && (
            <div className="flex items-center justify-between">
              {icon && (
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-brand-400 group-hover:text-white transition-all duration-300">
                  {icon}
                </div>
              )}
              {badge && (
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${badgeVariants[variant]}`}>
                  {badge}
                </span>
              )}
            </div>
          )}

          {/* Titles & Descriptions */}
          {(title || description) && (
            <div className="space-y-2">
              {title && (
                <h3 className="text-xl font-bold tracking-tight text-white font-display group-hover:text-brand-300 transition-colors duration-300">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-sm text-dark-muted leading-relaxed font-normal">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Custom content children slot */}
        {children && <div className="mt-2 relative z-20">{children}</div>}
      </div>
    </motion.div>
  );
};
