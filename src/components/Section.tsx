import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type ContainerWidth = 'sm' | 'md' | 'lg' | 'xl' | 'full';
type BackgroundType = 'transparent' | 'dot-grid' | 'grid-lines' | 'radial-glow' | 'mesh-gradient' | 'premium-dark';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  
  // Layout & Container Settings
  width?: ContainerWidth;
  py?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  
  // Premium Ambient Backgrounds
  background?: BackgroundType;
  glowColor?: 'brand' | 'purple' | 'emerald' | 'amber' | 'mixed';
  
  // Animation settings
  animate?: boolean;
  delayStagger?: number;
  
  // Built-in Section Header UI
  badge?: string;
  title?: string | React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  headerAction?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  width = 'lg',
  py = 'lg',
  background = 'transparent',
  glowColor = 'brand',
  animate = true,
  delayStagger = 0.1,
  badge,
  title,
  subtitle,
  centered = true,
  headerAction,
}) => {
  // Map Container widths to responsive classes
  const widthClasses = {
    sm: 'max-w-3xl', // Reading layout / narrow articles
    md: 'max-w-5xl', // standard forms / showcase
    lg: 'max-w-7xl', // main dashboard / grids
    xl: 'max-w-[90rem]', // ultra-wide dashboards
    full: 'max-w-full w-full',
  };

  // Map vertical padding classes
  const pyClasses = {
    none: 'py-0',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
    xl: 'py-28 md:py-44',
  };

  // Glow color presets for ambient backdrops
  const glowGradients = {
    brand: 'from-brand-600/10 via-indigo-500/5 to-transparent',
    purple: 'from-purple-600/10 via-fuchsia-500/5 to-transparent',
    emerald: 'from-emerald-600/10 via-teal-500/5 to-transparent',
    amber: 'from-amber-600/10 via-yellow-500/5 to-transparent',
    mixed: 'from-brand-500/8 via-purple-500/5 to-emerald-500/3',
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delayStagger,
      },
    },
  };

  const elementVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 18,
      },
    },
  };

  // Render Background Patterns
  const renderBackground = () => {
    switch (background) {
      case 'dot-grid':
        return (
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none opacity-[0.22] dark:opacity-[0.16]">
            {/* CSS-based high-end dot matrix grid */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--border)_1.5px,_transparent_1.5px)] [background-size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />
          </div>
        );
      case 'grid-lines':
        return (
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none opacity-[0.12] dark:opacity-[0.08]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.06)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.06)_1px,_transparent_1px)] [background-size:4rem_4rem]" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />
          </div>
        );
      case 'radial-glow':
        return (
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] bg-gradient-to-b ${glowGradients[glowColor]} blur-[130px] rounded-full`} />
          </div>
        );
      case 'mesh-gradient':
        return (
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none opacity-[0.4] dark:opacity-[0.25]">
            <div className={`absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-600/10 blur-[100px] animate-pulse-subtle`} />
            <div className={`absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[140px]`} />
            <div className={`absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full bg-emerald-500/5 blur-[120px]`} />
          </div>
        );
      case 'premium-dark':
        return (
          <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-[#070b19] to-dark-bg" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_1.5px,_transparent_1.5px)] [background-size:32px_32px] opacity-40" />
          </div>
        );
      default:
        return null;
    }
  };

  const ContentWrapper = animate ? motion.div : 'div';
  const ChildWrapper = animate ? motion.div : 'div';

  const sectionContent = (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${widthClasses[width]}`}>
      {/* Header logic */}
      {(badge || title || subtitle || headerAction) && (
        <div 
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20 ${
            centered ? 'text-center md:text-center items-center justify-center' : 'items-start'
          }`}
        >
          <div className={`space-y-4 max-w-3xl ${centered ? 'mx-auto' : ''}`}>
            {badge && (
              <ContentWrapper
                variants={animate ? elementVariants : undefined}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold tracking-wider text-brand-400 uppercase font-mono"
              >
                <span>✨</span>
                <span>{badge}</span>
              </ContentWrapper>
            )}
            
            {title && (
              <ContentWrapper
                variants={animate ? elementVariants : undefined}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]"
              >
                {typeof title === 'string' ? (
                  title.includes('premium') || title.includes('Premium') || title.includes('Design') ? (
                    <span>
                      {title.split(' ').map((word, i) => {
                        const isGradient = ['premium', 'Premium', 'Design', 'Experiences', 'Elite'].some(term => word.toLowerCase().includes(term.toLowerCase()));
                        return (
                          <span key={i} className={isGradient ? 'text-gradient' : ''}>
                            {word}{' '}
                          </span>
                        );
                      })}
                    </span>
                  ) : (
                    title
                  )
                ) : (
                  title
                )}
              </ContentWrapper>
            )}

            {subtitle && (
              <ContentWrapper
                variants={animate ? elementVariants : undefined}
                className="text-base sm:text-lg text-dark-muted font-normal leading-relaxed max-w-2xl"
              >
                {subtitle}
              </ContentWrapper>
            )}
          </div>

          {headerAction && (
            <ContentWrapper 
              variants={animate ? elementVariants : undefined}
              className={`${centered ? 'w-full flex justify-center' : ''}`}
            >
              {headerAction}
            </ContentWrapper>
          )}
        </div>
      )}

      {/* Main Grid/Child section */}
      <ChildWrapper variants={animate ? elementVariants : undefined} className="w-full">
        {children}
      </ChildWrapper>
    </div>
  );

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${pyClasses[py]} ${className}`}
    >
      {renderBackground()}
      
      {animate ? (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
        >
          {sectionContent}
        </motion.div>
      ) : (
        sectionContent
      )}
    </section>
  );
};
