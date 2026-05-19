import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Type, 
  Grid, 
  Layers, 
  ChevronRight, 
  Maximize2, 
  Laptop, 
  Smartphone, 
  Tablet, 
  Play, 
  Code,
  Info
} from 'lucide-react';

import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';

export const DesignSystemPage: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [typographyText, setTypographyText] = useState('Engineered for Elite UI Experiences');
  const [buttonLoading, setButtonLoading] = useState(false);
  const [activeBackground, setActiveBackground] = useState<'dot-grid' | 'grid-lines' | 'radial-glow' | 'mesh-gradient' | 'premium-dark'>('dot-grid');
  
  // Responsive Breakpoint Detector State
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = (width: number) => {
    if (width < 640) return { name: 'xs (Mobile)', css: '< 640px', color: 'text-amber-400 border-amber-500/30 bg-amber-500/5' };
    if (width < 768) return { name: 'sm (Small Tablet)', css: '>= 640px', color: 'text-sky-400 border-sky-500/30 bg-sky-500/5' };
    if (width < 1024) return { name: 'md (Medium Tablet/iPad)', css: '>= 768px', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/5' };
    if (width < 1280) return { name: 'lg (Desktop/Laptop)', css: '>= 1024px', color: 'text-purple-400 border-purple-500/30 bg-purple-500/5' };
    if (width < 1536) return { name: 'xl (Wide Desktop)', css: '>= 1280px', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/5' };
    return { name: '2xl (Ultra Wide)', css: '>= 1536px', color: 'text-rose-400 border-rose-500/30 bg-rose-500/5' };
  };

  const currentBreakpoint = getBreakpoint(windowWidth);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // 1. Color Palette Swatches
  const brandColors = [
    { name: 'Obsidian Black (Base)', value: '#030712', variable: '--background', desc: 'Core deep luxury canvas background' },
    { name: 'Dark Slate (Card)', value: '#0f172a', variable: '--card', desc: 'Glass base and secondary panels' },
    { name: 'Cyber Indigo (Accent)', value: '#6366f1', variable: '--primary', desc: 'Primary highlight and focus state' },
    { name: 'Electric Violet', value: '#8b5cf6', variable: '--accent', desc: 'Secondary action / high attention triggers' },
    { name: 'Deep Slate Border', value: '#1e293b', variable: '--border', desc: 'Ultra-thin borders and divider rules' },
    { name: 'Muted Slate', value: '#9ca3af', variable: '--muted-foreground', desc: 'Highly legible secondary texts' },
  ];

  const functionalGradients = [
    { name: 'Neon Cyber', css: 'bg-gradient-to-r from-brand-500 to-indigo-400', tailwind: 'from-brand-500 to-indigo-400', desc: 'SaaS primary buttons' },
    { name: 'Sunset Aura', css: 'bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500', tailwind: 'from-rose-500 via-fuchsia-500 to-indigo-500', desc: 'Feature banners / CTA' },
    { name: 'Emerald Dev', css: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500', tailwind: 'from-emerald-400 via-teal-400 to-cyan-500', desc: 'Tech stack metrics / successes' },
    { name: 'Glass Premium', css: 'bg-gradient-to-tr from-white/10 to-white/0 border-white/10', tailwind: 'glass-premium', desc: 'Premium overlay wrappers' },
  ];

  // 2. Typography Scales
  const typographyScales = [
    { name: 'Display Hero', class: 'font-display-hero text-4xl sm:text-6xl md:text-7xl font-extrabold', size: '72px / 4.5rem', desc: 'Main product headers / Landing hero banners' },
    { name: 'Display Section', class: 'font-display-section text-3xl sm:text-4xl md:text-5xl font-bold', size: '48px / 3.0rem', desc: 'High-level structure separators / grid headings' },
    { name: 'Subtitle H3', class: 'text-xl sm:text-2xl font-semibold font-display tracking-tight', size: '24px / 1.5rem', desc: 'Feature list titles / Card names' },
    { name: 'Body Premium', class: 'font-body-premium text-base text-dark-muted font-normal', size: '16px / 1.0rem', desc: 'High-comfort reading grids / long form descriptions' },
    { name: 'Monospace Developer', class: 'font-mono text-sm text-brand-300 bg-white/5 border border-white/5 px-2 py-1 rounded', size: '14px / 0.875rem', desc: 'Source codes / terminal mockups / structural properties' },
  ];

  // 3. Spacing System
  const spacingSystem = [
    { token: 'xs', size: '0.25rem', px: '4px', usage: 'Minor padding between icons and texts' },
    { token: 'sm', size: '0.5rem', px: '8px', usage: 'Card padding modifiers / badge padding' },
    { token: 'md', size: '1.0rem', px: '16px', usage: 'Standard margins / inner grid alignments' },
    { token: 'lg', size: '1.5rem', px: '24px', usage: 'General card spacing / mobile block padding' },
    { token: 'xl', size: '2.5rem', px: '40px', usage: 'Section subdivisions / large grid margins' },
    { token: '2xl', size: '4.0rem', px: '64px', usage: 'Hero section vertical gutters / desktop boundaries' },
  ];

  return (
    <div className="relative min-h-screen bg-dark-bg text-dark-text selection:bg-brand-500/30 selection:text-white">
      {/* 1. Header Banner */}
      <div className="relative pt-28 pb-16 border-b border-white/5 bg-slate-950/40 backdrop-blur-xl">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-brand-500/20 blur-[130px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premium Design System v1.0.0</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
                Aura<span className="text-gradient">Design System</span>
              </h1>
              <p className="text-sm sm:text-base text-dark-muted font-normal leading-relaxed">
                An ultra-premium semantic system engineered for elite developer portfolios and high-end SaaS applications. Optimized for absolute type safety, responsiveness, and jaw-dropping light-sweep aesthetic accents.
              </p>
            </div>

            {/* Live Breakpoint Widget */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 glass ${currentBreakpoint.color} flex flex-col gap-2 max-w-sm`}>
              <div className="flex items-center justify-between gap-6 border-b border-white/5 pb-2.5">
                <span className="text-xs uppercase tracking-wider font-mono font-semibold text-white/50">Responsive Context</span>
                <span className="flex items-center gap-1">
                  {windowWidth < 768 ? <Smartphone className="w-3.5 h-3.5" /> : windowWidth < 1024 ? <Tablet className="w-3.5 h-3.5" /> : <Laptop className="w-3.5 h-3.5" />}
                  <span className="text-[10px] font-mono font-bold text-white">{windowWidth}px</span>
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-lg font-bold font-display">{currentBreakpoint.name}</span>
                <p className="text-xs opacity-80 leading-snug">Active Breakpoint. Resizing the screen dynamically shifts layout configurations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Color System Section */}
      <Section id="colors" background="dot-grid" py="md" badge="01 / PALETTE" title="Curated Color Alchemy" subtitle="Designed for extreme contrast, rich visual hierarchies, and dark startup environments. Click any color panel to copy its identity.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {brandColors.map((color) => (
            <motion.div
              key={color.name}
              whileHover={{ y: -4 }}
              onClick={() => copyToClipboard(color.value, color.name)}
              className="p-5 rounded-2xl border border-white/5 bg-slate-900/30 backdrop-blur-md hover:border-brand-500/20 transition-all cursor-pointer group flex flex-col justify-between h-44"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">{color.name}</span>
                <button className="p-1.5 rounded-lg bg-white/5 text-dark-muted hover:text-white hover:bg-brand-500/20 transition-all">
                  {copiedText === color.name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-xl border border-white/10 shadow-lg" style={{ backgroundColor: color.value }} />
                  <div className="font-mono text-xs text-white">
                    <span className="block font-bold">{color.value}</span>
                    <span className="block text-white/40 text-[10px]">{color.variable}</span>
                  </div>
                </div>
                <p className="text-xs text-dark-muted font-normal mt-3">{color.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradients Showcase Subgrid */}
        <div className="border-t border-white/5 pt-12 space-y-6">
          <h3 className="text-lg font-bold font-display text-white">High-End SaaS Gradient Alignments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {functionalGradients.map((grad) => (
              <GlassCard key={grad.name} className="p-6" hoverEffect="lift">
                <div className="space-y-4">
                  <div className={`h-12 w-full rounded-xl ${grad.css} border border-white/5 shadow-md flex items-center justify-center`}>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white drop-shadow-md">Preview Accent</span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white flex items-center justify-between">
                      <span>{grad.name}</span>
                      <button 
                        onClick={() => copyToClipboard(grad.tailwind, grad.name)}
                        className="text-dark-muted hover:text-white transition-all"
                      >
                        {copiedText === grad.name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </h4>
                    <p className="text-xs text-dark-muted">{grad.desc}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. Typography Scale Section */}
      <Section id="typography" background="radial-glow" py="md" badge="02 / TYPOGRAPHY" title="Responsive Typography Hierarchy" subtitle="Fusing 'Outfit' (display elements) and 'Inter' (high-comfort reading body types). Try typing in the field below to visualize responsive rendering:">
        
        {/* Dynamic preview box */}
        <div className="max-w-xl mb-12 p-4 rounded-xl border border-white/5 bg-slate-900/40 backdrop-blur-md flex items-center gap-3">
          <Type className="w-5 h-5 text-brand-400 flex-shrink-0" />
          <input 
            type="text" 
            value={typographyText} 
            onChange={(e) => setTypographyText(e.target.value)} 
            placeholder="Type custom heading text..."
            className="w-full bg-transparent outline-none border-none text-white text-sm placeholder:text-dark-muted"
          />
        </div>

        {/* Typography List */}
        <div className="space-y-8 glass rounded-2xl border border-white/5 p-6 md:p-10 divide-y divide-white/5">
          {typographyScales.map((scale, i) => (
            <div key={scale.name} className={`flex flex-col lg:flex-row justify-between gap-6 py-6 ${i === 0 ? 'pt-0' : ''}`}>
              <div className="space-y-1 max-w-xs">
                <span className="text-xs uppercase tracking-wider font-semibold font-mono text-brand-400">{scale.name}</span>
                <span className="block text-[11px] font-mono text-dark-muted">{scale.size}</span>
                <p className="text-xs text-dark-muted max-w-xs">{scale.desc}</p>
              </div>
              <div className="flex-grow flex items-center">
                {scale.name.includes('Display') ? (
                  <span className={scale.class}>
                    {typographyText}
                  </span>
                ) : scale.name.includes('Subtitle') ? (
                  <span className={scale.class}>
                    {typographyText}
                  </span>
                ) : scale.name.includes('Body') ? (
                  <p className={scale.class}>
                    A meticulously crafted React template designed to skyrocket your developer speed. Armed with absolute type safety, gorgeous glassmorphism, and seamless motion frameworks.
                  </p>
                ) : (
                  <span className={scale.class}>
                    {`const aura = () => <Section heading="${typographyText}" />`}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Spacing System Section */}
      <Section id="spacing" background="grid-lines" py="md" badge="03 / LAYOUT GRID" title="Mathematical Spacing Architecture" subtitle="Calculated utilizing strict base multiples of 4px / 8px for uniform, highly proportional margins, paddings, and alignment properties.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* visual matrix showcase */}
          <div className="glass border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Visual Spacing Playground</h3>
            <div className="space-y-4">
              {spacingSystem.map((sp) => (
                <div key={sp.token} className="flex items-center gap-4">
                  <div className="w-16 font-mono text-xs">
                    <span className="block font-bold text-brand-300">{sp.token}</span>
                    <span className="block text-[10px] text-dark-muted">{sp.px} ({sp.size})</span>
                  </div>
                  
                  {/* Visual block bar */}
                  <div className="flex-grow h-8 bg-slate-950/60 rounded-lg border border-white/5 flex items-center pl-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-brand-600 to-indigo-500 rounded-lg opacity-80" 
                      style={{ 
                        width: `calc(${sp.token === 'xs' ? '4px' : sp.token === 'sm' ? '8px' : sp.token === 'md' ? '16px' : sp.token === 'lg' ? '24px' : sp.token === 'xl' ? '40px' : '64px'} * 4)` 
                      }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold font-display text-white">Consistent Ergonomic Alignments</h3>
            <p className="text-sm text-dark-muted leading-relaxed">
              Standardized variables prevent "spaghetti paddings" and guarantee identical structural rhythms on desktop laptops and compact phone screens. The layout adapts margins on responsive break barriers natively.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-400">Card Margins</span>
                <p className="text-lg font-bold text-white mt-1">gap-6 / gap-8</p>
                <span className="text-[10px] text-dark-muted">Adapts to grid systems</span>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-slate-900/40">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-400">Section Padding</span>
                <p className="text-lg font-bold text-white mt-1">py-20 md:py-32</p>
                <span className="text-[10px] text-dark-muted">Fluid screen vertical boundaries</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Reusable Button Showcase */}
      <Section id="buttons" background="premium-dark" py="md" badge="04 / COMPONENTS" title="Tactile High-Performance Buttons" subtitle="Leveraging fluid spring physics from Framer Motion. Fully responsive with robust loaders, icon placements, and luxury hover sweeps.">
        
        {/* Playground controls */}
        <div className="flex gap-4 mb-10 items-center justify-center">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setButtonLoading(!buttonLoading)}
            iconLeft={<Play className="w-3.5 h-3.5" />}
          >
            Toggle Loader State: <strong className="text-white font-mono ml-1">{buttonLoading ? 'ON' : 'OFF'}</strong>
          </Button>
        </div>

        <div className="glass border border-white/5 rounded-3xl p-6 md:p-10 space-y-12">
          {/* 1. Grid of Variants */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2">Visual Variants (Size: Medium)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
              <div className="flex flex-col items-center gap-2">
                <Button variant="primary" isLoading={buttonLoading}>Primary</Button>
                <span className="text-[10px] font-mono text-dark-muted">variant="primary"</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="secondary" isLoading={buttonLoading}>Secondary</Button>
                <span className="text-[10px] font-mono text-dark-muted">variant="secondary"</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="outline" isLoading={buttonLoading}>Outline</Button>
                <span className="text-[10px] font-mono text-dark-muted">variant="outline"</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="glass" isLoading={buttonLoading}>Glass</Button>
                <span className="text-[10px] font-mono text-dark-muted">variant="glass"</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="neon" isLoading={buttonLoading}>Neon Glow</Button>
                <span className="text-[10px] font-mono text-dark-muted">variant="neon"</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="shiny" isLoading={buttonLoading}>Shiny sweep</Button>
                <span className="text-[10px] font-mono text-dark-muted">variant="shiny"</span>
              </div>
            </div>
          </div>

          {/* 2. Grid of Sizes */}
          <div className="space-y-6 pt-6 border-t border-white/5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono border-b border-white/5 pb-2">Size Proportions (Variant: Primary)</h3>
            <div className="flex flex-wrap items-end justify-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Button variant="primary" size="sm" isLoading={buttonLoading}>Small Call</Button>
                <span className="text-[10px] font-mono text-dark-muted">size="sm" (px-3.5 py-2)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="primary" size="md" isLoading={buttonLoading}>Medium Call</Button>
                <span className="text-[10px] font-mono text-dark-muted">size="md" (px-5 py-2.5)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="primary" size="lg" isLoading={buttonLoading}>Large Call</Button>
                <span className="text-[10px] font-mono text-dark-muted">size="lg" (px-6 py-3)</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Button variant="primary" size="xl" isLoading={buttonLoading}>Ultra CTA Hero</Button>
                <span className="text-[10px] font-mono text-dark-muted">size="xl" (px-8 py-4)</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Glassmorphism Spotlight Cards Showcase */}
      <Section id="cards" background="radial-glow" py="md" badge="05 / GLASS CARDS" title="Premium Cursor-Tracking Spotlight Cards" subtitle="Built with deep CSS radial spotlights. Move your mouse across each card below to witness responsive ambient neon trails.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <GlassCard 
            variant="glass-premium"
            spotlightColor="brand"
            badge="Indigo Glow"
            title="SaaS Spotlight Card"
            description="Perfect for primary dashboards. Emits a smooth blue/indigo radial halo that tracks coordinates instantly."
            icon={<Sparkles className="w-5 h-5 text-brand-400" />}
          >
            <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
              <span className="text-dark-muted">Interactive</span>
              <span className="text-brand-400 font-semibold flex items-center">Move Mouse <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </GlassCard>

          <GlassCard 
            variant="glass-cyber"
            spotlightColor="purple"
            badge="Purple Cyber"
            title="Cyberpunk Obsidian"
            description="Ultra-high-end developer portfolio design. Highlights boundary edges with purple glow on cursor touch."
            icon={<Code className="w-5 h-5 text-purple-400" />}
          >
            <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
              <span className="text-dark-muted">Spotlight</span>
              <span className="text-purple-400 font-semibold flex items-center">Move Mouse <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </GlassCard>

          <GlassCard 
            variant="glass-emerald"
            spotlightColor="emerald"
            badge="Emerald Mint"
            title="Optimized Analytics"
            description="Geared towards micro-bundler metrics, uptime calculations, and developer performance counters."
            icon={<Grid className="w-5 h-5 text-emerald-400" />}
          >
            <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
              <span className="text-dark-muted">Analytics</span>
              <span className="text-emerald-400 font-semibold flex items-center">Move Mouse <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </GlassCard>

          <GlassCard 
            variant="glass-sunset"
            spotlightColor="sunset"
            badge="Sunset Pink"
            title="Cinematic Pitch Card"
            description="High conversion layouts with strong aesthetic warmth. Blends hot rose accents and diagonal shadows."
            icon={<Maximize2 className="w-5 h-5 text-rose-400" />}
          >
            <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
              <span className="text-dark-muted">Showcase</span>
              <span className="text-rose-400 font-semibold flex items-center">Move Mouse <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </GlassCard>

          <GlassCard 
            variant="glass-basic"
            spotlightColor="silver"
            badge="Titanium Silver"
            title="Minimalist Neutral"
            description="Clean clean slate container suitable for secondary details, forms, or auxiliary documentation."
            icon={<Layers className="w-5 h-5 text-slate-400" />}
          >
            <div className="border-t border-white/5 pt-4 flex justify-between items-center text-xs">
              <span className="text-dark-muted">Neutral</span>
              <span className="text-slate-400 font-semibold flex items-center">Move Mouse <ChevronRight className="w-3.5 h-3.5" /></span>
            </div>
          </GlassCard>

          {/* Code Block detailing Spotlight integration */}
          <GlassCard variant="glass-premium" spotlightColor="brand" badge="DEVELOPER LOG" title="Spotlight Logic">
            <div className="font-mono text-[11px] leading-relaxed text-brand-300 space-y-2">
              <div className="flex gap-1.5 items-center text-white/50 border-b border-white/5 pb-2 mb-2">
                <Info className="w-3.5 h-3.5 text-brand-400" />
                <span>Cursor Tracking Snippet</span>
              </div>
              <p className="text-[10px] text-dark-muted leading-tight mb-2">How coordinates drive gradients inside child elements:</p>
              <pre className="overflow-x-auto bg-slate-950/60 p-2.5 rounded-lg border border-white/5 text-[10px]">
{`const handleMouseMove = (e) => {
  const rect = ref.current.getBoundingClientRect();
  setCoords({
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  });
};`}
              </pre>
            </div>
          </GlassCard>

        </div>
      </Section>

      {/* 7. Reusable Section Containers & Background Showcase */}
      <Section id="sections" background="dot-grid" py="md" badge="06 / BACKGROUND CONTROLLERS" title="Modular Canvas Backgrounds" subtitle="Our Section component handles container sizes, paddings, animations, and beautiful ambient backgrounds natively:">
        
        {/* Controller buttons */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {(['dot-grid', 'grid-lines', 'radial-glow', 'mesh-gradient', 'premium-dark'] as const).map((bg) => (
            <button
              key={bg}
              onClick={() => setActiveBackground(bg)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition-all duration-300 border ${
                activeBackground === bg 
                  ? 'bg-brand-600 border-brand-500 text-white shadow-md shadow-brand-500/10' 
                  : 'text-dark-muted hover:text-white hover:bg-white/5 border-white/5'
              }`}
            >
              {bg.replace('-', ' ')}
            </button>
          ))}
        </div>

        {/* Dynamic Inner Section Preview */}
        <div className="rounded-3xl border border-white/5 bg-slate-950/40 overflow-hidden shadow-2xl relative">
          <Section 
            background={activeBackground} 
            py="md" 
            title="Simulated Canvas Section" 
            subtitle={`Currently rendering the beautiful custom background: "${activeBackground.replace('-', ' ')}"`}
            centered={true}
            animate={false}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <Button variant="primary" size="md">Call Action</Button>
              <Button variant="glass" size="md">Secondary Action</Button>
            </div>
          </Section>
        </div>
      </Section>

      {/* 8. Shadows & Extra Glow Accents Section */}
      <Section id="shadows" background="radial-glow" py="md" badge="07 / AMBIENT SHADOWS" title="Neon Glow Shadow Aura Mapping" subtitle="Subtle glowing box-shadow bounds that match modern startup visuals:">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950/50 border border-brand-500/10 shadow-glow-brand text-center space-y-3">
            <div className="w-4 h-4 rounded-full bg-brand-500 mx-auto shadow-[0_0_12px_rgba(99,102,241,1)]" />
            <h4 className="text-sm font-bold text-white">Cyber Indigo</h4>
            <span className="text-[10px] font-mono text-dark-muted">.shadow-glow-brand</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/50 border border-purple-500/10 shadow-glow-purple text-center space-y-3">
            <div className="w-4 h-4 rounded-full bg-purple-500 mx-auto shadow-[0_0_12px_rgba(168,85,247,1)]" />
            <h4 className="text-sm font-bold text-white">Electric Purple</h4>
            <span className="text-[10px] font-mono text-dark-muted">.shadow-glow-purple</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/50 border border-emerald-500/10 shadow-glow-emerald text-center space-y-3">
            <div className="w-4 h-4 rounded-full bg-emerald-500 mx-auto shadow-[0_0_12px_rgba(16,185,129,1)]" />
            <h4 className="text-sm font-bold text-white">Emerald Glow</h4>
            <span className="text-[10px] font-mono text-dark-muted">.shadow-glow-emerald</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/50 border border-rose-500/10 shadow-glow-sunset text-center space-y-3">
            <div className="w-4 h-4 rounded-full bg-rose-500 mx-auto shadow-[0_0_12px_rgba(244,63,94,1)]" />
            <h4 className="text-sm font-bold text-white">Sunset Flare</h4>
            <span className="text-[10px] font-mono text-dark-muted">.shadow-glow-sunset</span>
          </div>
        </div>
      </Section>

      {/* Footer Details */}
      <div className="border-t border-white/5 py-12 bg-slate-950/50 text-center text-xs text-dark-muted space-y-2">
        <p>Aura Design System and tokens are bound to active contexts dynamically.</p>
        <p className="font-mono text-[10px] text-white/30">Coded with 🤍 using React + TypeScript + Tailwind CSS v3</p>
      </div>

      {/* Copy notification popup */}
      <AnimatePresence>
        {copiedText && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl border border-emerald-500/30 bg-slate-900 shadow-2xl flex items-center gap-2 text-xs text-white"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Copied identity for <strong className="text-brand-300 font-semibold">{copiedText}</strong> to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
