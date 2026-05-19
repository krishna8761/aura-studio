import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'glass' | 'neon' | 'shiny';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  children,
  isLoading = false,
  className = '',
  ...props
}) => {
  // Base Premium Styles - strict flex layout, typography, focus, and state animations
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500/50 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none overflow-hidden';
  
  // Style Presets
  const variants = {
    // Elegant deep brand gradients + subtle ambient glow
    primary: 'bg-gradient-to-r from-brand-600 to-indigo-500 hover:from-brand-500 hover:to-indigo-400 text-white shadow-md shadow-brand-500/10 hover:shadow-brand-500/30 border border-brand-400/20',
    
    // Sleek dark grey/charcoal SaaS theme
    secondary: 'bg-white/10 hover:bg-white/15 text-white border border-white/5 hover:border-white/10 hover:shadow-lg hover:shadow-black/20',
    
    // Crisp clean borders with glowing border transitions
    outline: 'bg-transparent border border-white/10 hover:border-brand-500/50 text-dark-muted hover:text-white hover:shadow-sm hover:shadow-brand-500/5',
    
    // Premium glassmorphic backdrop
    glass: 'glass-premium hover:bg-white/5 text-brand-300 hover:text-white border border-white/5 hover:border-brand-500/30 shadow-md shadow-black/10',
    
    // Intense glowing cyberpunk design (perfect for top priorities / developer portfolios)
    neon: 'bg-slate-950 text-brand-400 border border-brand-500/40 hover:border-brand-400 shadow-[0_0_12px_rgba(99,102,241,0.15)] hover:shadow-[0_0_20px_rgba(99,102,241,0.45)] hover:text-white transition-all duration-300',
    
    // Shiny metal visual sweep effect
    shiny: 'bg-slate-900 text-white border border-white/10 hover:border-white/20 shadow-md',
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5 rounded-lg',
    md: 'text-sm px-5 py-2.5 gap-2 rounded-xl',
    lg: 'text-base px-6 py-3 gap-2.5 rounded-xl',
    xl: 'text-lg px-8 py-4 gap-3 rounded-2xl tracking-tight',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {/* Moving metallic flash reflection for 'shiny' variant */}
      {variant === 'shiny' && (
        <span className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
          <span className="absolute -inset-y-0 -left-[100%] w-[50%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-[shimmer_2.5s_infinite]" />
        </span>
      )}

      {/* Loading Spinner */}
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin flex-shrink-0" />
      ) : (
        iconLeft && <span className="flex-shrink-0 relative z-10">{iconLeft}</span>
      )}

      <span className="relative z-10">{children}</span>
      
      {!isLoading && iconRight && (
        <span className="flex-shrink-0 relative z-10">{iconRight}</span>
      )}
    </motion.button>
  );
};
