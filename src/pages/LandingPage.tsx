import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Code2, 
  CheckCircle2, 
  Play, 
  Activity, 
  TrendingUp, 
  Check,
  Globe,
  Smartphone,
  Lock,
  Bot,
  ShoppingCart,
  Radio,
  Calendar,
  Layers,
  Cpu,
  Cloud,
  Zap,
  Shield,
  MessageSquare,
  GitBranch,
  LifeBuoy,
  Mail,
  Send,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react';

import { Button } from '../components/Button';
import { GlassCard } from '../components/GlassCard';

export const LandingPage: React.FC = () => {
  const [activeStackTab, setActiveStackTab] = useState<'frontend' | 'backend' | 'architecture'>('frontend');
  const [conversionClicks, setConversionClicks] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState<'roi' | 'performance' | 'status'>('roi');
  const [bookedSlots, setBookedSlots] = useState<string[]>(['11:30 AM']);
  const [activeRegion, setActiveRegion] = useState<'us' | 'eu' | 'asia'>('us');
  const [activePhoneScreen, setActivePhoneScreen] = useState<'overview' | 'security' | 'database'>('overview');
  const [consultationSuccess, setConsultationSuccess] = useState(false);
  const [mockMeetingDay, setMockMeetingDay] = useState<'mon' | 'tue' | 'wed'>('mon');
  const [mockMeetingTime, setMockMeetingTime] = useState<'2pm' | '4pm' | '6pm'>('2pm');
  const [mockBookingSuccess, setMockBookingSuccess] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<'$2k-$5k' | '$5k-$10k' | '$10k+'>('$5k-$10k');

  const toggleBookedSlot = (slot: string) => {
    if (bookedSlots.includes(slot)) {
      setBookedSlots(bookedSlots.filter(s => s !== slot));
    } else {
      setBookedSlots([...bookedSlots, slot]);
    }
  };

  // Looping Floating Animations for Ambient Cards
  const floatAnim1: Variants = {
    animate: {
      y: [0, -12, 0],
      x: [0, 4, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const }
    }
  };

  const floatAnim2: Variants = {
    animate: {
      y: [0, -8, 0],
      x: [0, -6, 0],
      transition: { duration: 5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' as const }
    }
  };

  const floatAnim3: Variants = {
    animate: {
      y: [0, -15, 0],
      x: [0, 6, 0],
      transition: { duration: 7, delay: 1.0, repeat: Infinity, ease: 'easeInOut' as const }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 16 }
    }
  };

  const codeSnippets = {
    frontend: `// Next.js Server Components with absolute HMR speed
export async function ProjectShowcase() {
  const analytics = await getPerformanceMetrics();
  return (
    <Section background="mesh-gradient">
      <InteractiveGraph data={analytics.conversion} />
    </Section>
  );
}`,
    backend: `// High-efficiency Node + TS server pipelines
export const handleWebhook = async (req: Request) => {
  const signature = req.headers.get("x-stripe-signature");
  const event = stripe.webhooks.constructEvent(
    await req.text(), signature, env.WEBHOOK_SECRET
  );
  await db.transaction().update(event.data);
};`,
    architecture: `// Infrastructure caching and serverless scale
export default defineConfig({
  server: {
    edge: true,
    cache: {
      ttl: 3600,
      staleWhileRevalidate: 60
    }
  }
});`
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Absolute Ambient Background Flares */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-600/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute top-[20%] right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[30%] left-1/3 w-[700px] h-[700px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none" />

      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Sparkles Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold text-brand-400 mb-8 uppercase tracking-wider font-mono"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse-subtle" />
          <span>Available for Freelance Contracts</span>
        </motion.div>

        {/* Core Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display max-w-5xl leading-[1.1] mb-6"
        >
          Web & App Experiences That Actually <span className="text-gradient">Grow Businesses</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-dark-muted max-w-3xl leading-relaxed mb-10 font-body-premium"
        >
          I design and develop modern websites and applications with fast performance, clean UI, and scalable architecture. No templates. No shortcuts. Just high-conversion engineering built to grow your bottom line.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mb-20 z-10"
        >
          <Button 
            variant="shiny" 
            size="xl" 
            iconRight={<ArrowRight className="w-5 h-5" />}
            onClick={() => window.location.hash = '#contact'}
          >
            Start Your Project
          </Button>
          <Button 
            variant="glass" 
            size="xl" 
            iconLeft={<Play className="w-4 h-4 fill-brand-300" />}
            onClick={() => window.location.hash = '#portfolio'}
          >
            Explore Showcase
          </Button>
        </motion.div>

        {/* 2. Interactive Mock App / Dashboard Preview & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
          className="w-full max-w-5xl rounded-3xl border border-white/10 bg-slate-950/40 p-2.5 md:p-4 backdrop-blur-xl shadow-2xl shadow-indigo-500/5 relative group"
        >
          <div className="absolute -inset-px bg-gradient-to-r from-brand-500/20 to-indigo-500/20 rounded-3xl opacity-50 blur-sm pointer-events-none group-hover:opacity-85 transition-opacity duration-700" />
          
          {/* FLOATING UI CARD 1: Speed Score (Top Left) */}
          <motion.div 
            variants={floatAnim1}
            animate="animate"
            className="absolute -top-10 -left-6 md:-left-16 z-20 hidden sm:flex items-center gap-3 p-4 rounded-xl border border-emerald-500/20 bg-slate-950/90 shadow-2xl shadow-emerald-500/10 cursor-default"
          >
            <div className="w-10 h-10 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
              100
            </div>
            <div className="text-left">
              <span className="text-[10px] text-dark-muted font-mono uppercase block tracking-wider">PageSpeed Index</span>
              <span className="text-xs font-bold text-white">Ultra-Fast Compile</span>
            </div>
          </motion.div>

          {/* FLOATING UI CARD 2: Conversion ROI (Bottom Right) */}
          <motion.div 
            variants={floatAnim2}
            animate="animate"
            className="absolute -bottom-8 -right-6 md:-right-12 z-20 hidden sm:block p-4 rounded-xl border border-brand-500/20 bg-slate-950/90 shadow-2xl shadow-brand-500/10 text-left cursor-pointer"
            onClick={() => setConversionClicks(c => c + 1)}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <TrendingUp className="w-4 h-4 text-brand-400" />
              <span className="text-[10px] text-dark-muted font-mono uppercase tracking-wider">Conversion Gains</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-white font-display">+3.4%</span>
              <span className="text-[10px] text-emerald-400 font-medium">ROI Boost</span>
            </div>
            <p className="text-[9px] text-brand-400 mt-1">Clicks to simulate ROI: <strong className="text-white font-mono">{conversionClicks}</strong></p>
          </motion.div>

          {/* FLOATING UI CARD 3: Trust Badges (Top Right) */}
          <motion.div 
            variants={floatAnim3}
            animate="animate"
            className="absolute -top-12 -right-4 md:-right-16 z-20 hidden sm:flex items-center gap-2.5 p-3 px-4.5 rounded-xl border border-white/5 bg-slate-950/90 shadow-2xl"
          >
            <span className="text-amber-400 font-bold text-xs">★ 5.0</span>
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[10px] text-white/80 font-semibold tracking-tight">Verified Client Rating</span>
          </motion.div>

          {/* Core App Mock Wrapper */}
          <div className="relative rounded-2xl border border-white/5 bg-slate-900/60 overflow-hidden aspect-auto min-h-[480px] md:min-h-0 md:aspect-[16/9] flex flex-col">
            {/* Header window control buttons */}
            <div className="h-12 border-b border-white/5 bg-slate-950/60 px-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="text-xs text-dark-muted font-mono flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-400" />
                <span>client-roi-dashboard ~ active</span>
              </div>
              <div className="flex gap-1">
                <div className="w-3 h-1.5 bg-white/20 rounded-full" />
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              </div>
            </div>

            {/* Dashboard Inner Grid */}
            <div className="flex-grow p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-y-auto text-left">
              {/* Left Dashboard Panel: Metric Details */}
              <div className="md:col-span-2 space-y-6">
                
                {/* Simulated ROI Chart Box */}
                <div className="glass-premium rounded-xl p-5 border border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-dark-muted uppercase font-mono tracking-wider block">Enterprise Health Analytics</span>
                      <h4 className="text-base font-bold text-white font-display mt-0.5">Real-Time Core Performance</h4>
                    </div>
                    <div className="flex gap-1.5">
                      {(['roi', 'performance', 'status'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveProjectTab(tab)}
                          className={`px-3 py-1 text-[10px] font-semibold font-mono uppercase rounded transition-all duration-300 ${
                            activeProjectTab === tab 
                              ? 'bg-brand-600/20 border border-brand-500/30 text-brand-300' 
                              : 'text-dark-muted hover:text-white border border-transparent'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {activeProjectTab === 'roi' ? (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { label: 'Uptime Guarantee', value: '99.99%', indicator: 'Stable', color: 'text-emerald-400' },
                          { label: 'Conversion Speed', value: '0.2s', indicator: 'Lighthouse 100', color: 'text-emerald-400' },
                          { label: 'Revenue Growth', value: '180%', indicator: 'ROI Boost', color: 'text-brand-400' },
                        ].map((metric) => (
                          <div key={metric.label} className="bg-white/5 rounded-lg p-3 border border-white/5">
                            <span className="text-[9px] text-dark-muted block uppercase tracking-wider font-mono">{metric.label}</span>
                            <span className="text-base font-bold text-white font-display mt-1 block">{metric.value}</span>
                            <span className={`text-[9px] font-medium block mt-0.5 ${metric.color}`}>{metric.indicator}</span>
                          </div>
                        ))}
                      </div>
                      <div className="w-full h-8 bg-slate-950/50 rounded-lg border border-white/5 flex items-center px-3 justify-between">
                        <span className="text-[10px] text-dark-muted flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Core Web Vitals completely in the Green.</span>
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">Excellent</span>
                      </div>
                    </div>
                  ) : activeProjectTab === 'performance' ? (
                    <div className="space-y-3">
                      <p className="text-xs text-dark-muted">Optimizing compiling systems ensures that clients never lose leads due to sluggish load times.</p>
                      <div className="bg-slate-950/80 p-3 rounded-lg border border-white/5 font-mono text-[10px] text-brand-300">
                        <span className="text-white/40 block border-b border-white/5 pb-1 mb-1">~ Client Render Log:</span>
                        <span>[info] Next.js Edge compile loaded in 14ms</span>
                        <span className="block">[info] Dynamic routing resolved successfully</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-white/5 border border-white/5 rounded-lg space-y-1.5">
                        <span className="text-[9px] text-dark-muted uppercase font-mono">Infrastructure Stack</span>
                        <span className="block text-xs text-white font-semibold">AWS Edge Serverless Cloud</span>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/5 rounded-lg space-y-1.5">
                        <span className="text-[9px] text-dark-muted uppercase font-mono">Build Compiling Mode</span>
                        <span className="block text-xs text-white font-semibold">Strict TypeScript (No-Any)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sub row showing modern code compilation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="glass-premium rounded-xl p-4.5 border border-white/5 flex flex-col justify-between h-28">
                    <span className="text-[9px] text-dark-muted uppercase tracking-wider font-mono font-semibold block">Full Stack Delivery</span>
                    <h5 className="text-sm font-bold text-white mt-1">Pixel-Perfect Engineering</h5>
                    <p className="text-[11px] text-dark-muted leading-relaxed mt-1">Decoupled APIs and robust generic React widgets.</p>
                  </div>
                  <div className="glass-premium rounded-xl p-4.5 border border-white/5 flex flex-col justify-between h-28">
                    <span className="text-[9px] text-dark-muted uppercase tracking-wider font-mono font-semibold block">Uptime Reliability</span>
                    <h5 className="text-sm font-bold text-white mt-1">Zero Deployment Downtime</h5>
                    <p className="text-[11px] text-dark-muted leading-relaxed mt-1">Deploying via edge routing models and automated pipelines.</p>
                  </div>
                </div>

              </div>

              {/* Right Dashboard Panel: Project Status Tracker */}
              <div className="glass-premium rounded-xl p-5 border border-white/5 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs uppercase font-mono tracking-wider text-white">Active Roadmap</h4>
                    <span className="text-[10px] text-brand-300 font-mono">Q2 Active</span>
                  </div>
                  
                  {/* Status Steps */}
                  <div className="space-y-3 pt-2">
                    {[
                      { step: 'UI Design & Strategy', status: 'Done', done: true },
                      { step: 'Next.js Frontend Build', status: 'Done', done: true },
                      { step: 'Custom REST API Integration', status: 'Done', done: true },
                      { step: 'AWS / Edge Deploying', status: 'In Progress', done: false },
                    ].map((step, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start text-xs">
                        {step.done ? (
                          <div className="w-4 h-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-slate-950 border border-brand-500/30 text-brand-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Activity className="w-2.5 h-2.5 animate-pulse" />
                          </div>
                        )}
                        <div>
                          <span className={`block font-medium ${step.done ? 'text-white/60' : 'text-white'}`}>{step.step}</span>
                          <span className={`text-[10px] block ${step.done ? 'text-brand-400' : 'text-brand-300 font-mono font-semibold'}`}>{step.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2 mt-4">
                  <div className="flex justify-between text-[10px] text-dark-muted font-mono">
                    <span>Active Milestones Delivered</span>
                    <span className="text-white">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-600 to-indigo-400 rounded-full w-[85%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. What I Build Section: Interactive Showcase Catalog */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold tracking-wider text-brand-400 uppercase font-mono">
            Interactive Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            What I Build
          </h2>
          <p className="text-base text-dark-muted font-body-premium">
            Engineering robust, high-performance web products configured with cutting-edge visual systems, clean styling models, and seamless tactile feedback.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8"
        >
          {/* Card 1: Business Websites */}
          <motion.div variants={itemVariants}>
            <GlassCard
              variant="glass-premium"
              spotlightColor="brand"
              badge="Marketing"
              title="Business Websites"
              description="High-converting landers, bespoke visual assets, and high-fidelity typography engineered to convert visitors into solid customers."
              icon={<Globe className="w-5 h-5 text-brand-400" />}
            >
              <div className="mt-4 p-3.5 rounded-xl border border-white/5 bg-slate-950/60 text-left space-y-2 h-28 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-white/80 font-bold tracking-tight font-display">Aura Media Group</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 font-mono font-semibold">LIVE v1.0</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-16 bg-white/20 rounded" />
                  <div className="h-1 w-24 bg-white/10 rounded" />
                </div>
                <div className="flex items-center justify-between text-[9px] text-dark-muted pt-1.5 border-t border-white/5 font-mono">
                  <span>ROI Gains: +42%</span>
                  <span className="text-emerald-400 font-bold">Excellent</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {['Next.js', 'React', 'Tailwind', 'Framer Motion'].map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-dark-muted border border-white/5">{t}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2: SaaS Dashboards */}
          <motion.div variants={itemVariants}>
            <GlassCard
              variant="glass-cyber"
              spotlightColor="purple"
              badge="Analytics"
              title="SaaS Dashboards"
              description="Complex data panels configured with real-time graphs, advanced interactive controls, secure contexts, and instant cache updates."
              icon={<TrendingUp className="w-5 h-5 text-purple-400" />}
            >
              <div className="mt-4 p-3.5 rounded-xl border border-purple-500/10 bg-slate-950/60 text-left space-y-2 h-28 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[9px] text-dark-muted font-mono font-semibold">
                  <span>REVENUE ENGINE</span>
                  <span className="text-purple-400 font-bold">+$12,450</span>
                </div>
                <div className="flex-grow flex items-end h-8 gap-1 pt-2">
                  {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
                    <div key={i} className="flex-grow bg-gradient-to-t from-purple-600/50 to-purple-400 rounded-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-[8px] text-dark-muted border-t border-white/5 pt-1 font-mono">
                  <span>Uptime: 99.98%</span>
                  <span className="text-brand-400 font-bold">Live Sync</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {['React 19', 'ChartJS', 'SWR', 'WebSockets'].map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-dark-muted border border-white/5">{t}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 3: Mobile Apps */}
          <motion.div variants={itemVariants}>
            <GlassCard
              variant="glass-emerald"
              spotlightColor="emerald"
              badge="iOS & Android"
              title="Mobile Apps"
              description="Fluid responsive apps engineered for mobile layouts, optimized for swipe gestures, offline synchronization, and rapid bundle sizes."
              icon={<Smartphone className="w-5 h-5 text-emerald-400" />}
            >
              <div className="mt-4 p-3.5 rounded-xl border border-emerald-500/10 bg-slate-950/60 text-center space-y-2 h-28 flex flex-col justify-between items-center">
                <div className="w-20 h-full border border-white/10 bg-slate-900 rounded-xl p-1.5 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/20 rounded-full" />
                  <div className="mt-1 text-[7px] text-white/80 font-bold font-display">AuraApp</div>
                  <div className="my-1 p-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[6px] text-emerald-400 font-mono font-bold animate-pulse">
                    sync complete
                  </div>
                  <div className="h-1 bg-white/10 rounded overflow-hidden">
                    <div className="h-full bg-emerald-500 w-2/3" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {['React Native', 'Expo', 'Redux', 'SQLite'].map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-dark-muted border border-white/5">{t}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 4: Admin Panels */}
          <motion.div variants={itemVariants}>
            <GlassCard
              variant="glass-sunset"
              spotlightColor="sunset"
              badge="Security"
              title="Admin Panels"
              description="Enterprise tools built to manage system parameters, user roles, security audits, database sets, and custom access tokens safely."
              icon={<Lock className="w-5 h-5 text-rose-400" />}
            >
              <div className="mt-4 p-3.5 rounded-xl border border-rose-500/10 bg-slate-950/60 text-left space-y-2 h-28 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] text-dark-muted font-mono">TOKEN_ID: aura_live_9a</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="bg-slate-900 p-2 rounded border border-white/5 font-mono text-[7px] text-rose-400 leading-tight">
                  <span>[SYS] Access Level: Owner</span>
                  <span className="block">[SYS] Roles verified [Done]</span>
                </div>
                <div className="text-[8px] text-dark-muted flex justify-between font-mono">
                  <span>Audit: Active</span>
                  <span className="text-rose-400 font-bold hover:underline cursor-pointer">Revoke</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {['Node.js', 'PostgreSQL', 'JWT', 'RBAC'].map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-dark-muted border border-white/5">{t}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 5: AI Tools */}
          <motion.div variants={itemVariants}>
            <GlassCard
              variant="glass-premium"
              spotlightColor="brand"
              badge="Cognition"
              title="AI Tools"
              description="Intelligent prompt configurations, chatbot overlays, streaming outputs, and custom machine learning inference bindings."
              icon={<Bot className="w-5 h-5 text-brand-400" />}
            >
              <div className="mt-4 p-3.5 rounded-xl border border-brand-500/10 bg-slate-950/60 text-left space-y-2 h-28 flex flex-col justify-between font-mono">
                <div className="text-[8px] text-white/50 border-b border-white/5 pb-1 flex justify-between">
                  <span>prompt ~ active</span>
                  <span className="text-brand-400 font-bold">AI Core</span>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[8px] text-brand-300 leading-snug">"Analyze conversion data"</p>
                  <p className="text-[8px] text-emerald-400 leading-snug animate-pulse-subtle">"Forecast ROI boost +4.2%"</p>
                </div>
                <div className="text-[8px] text-white/20 flex justify-between pt-1 border-t border-white/5">
                  <span>Tokens: 140</span>
                  <span>Time: 120ms</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {['OpenAI API', 'LangChain', 'NextJS Edge', 'Llama'].map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-dark-muted border border-white/5">{t}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 6: E-commerce */}
          <motion.div variants={itemVariants}>
            <GlassCard
              variant="glass-cyber"
              spotlightColor="purple"
              badge="E-Commerce"
              title="E-commerce Platforms"
              description="Frictionless digital checkouts configured with secure payment links (Stripe), promotional code widgets, and automated inventory sync."
              icon={<ShoppingCart className="w-5 h-5 text-purple-400" />}
            >
              <div className="mt-4 p-3.5 rounded-xl border border-purple-500/10 bg-slate-950/60 text-left space-y-2 h-28 flex flex-col justify-between font-mono">
                <div className="flex justify-between items-center text-[9px] text-white/80 font-bold">
                  <span>Subtotal (1 item)</span>
                  <span>$240.00</span>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="text-[8px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">AURA20 (-$48.00)</span>
                  <span className="text-[7px] text-dark-muted">Applied</span>
                </div>
                <div className="w-full py-1.5 rounded-lg bg-purple-600/20 border border-purple-500/30 text-center text-[9px] text-purple-300 font-bold tracking-wider font-sans cursor-pointer hover:bg-purple-600/30 transition-colors">
                  Pay with Stripe
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {['Stripe API', 'Prisma ORM', 'Zod Schema', 'Redis'].map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-dark-muted border border-white/5">{t}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 7: Real-Time Apps */}
          <motion.div variants={itemVariants}>
            <GlassCard
              variant="glass-emerald"
              spotlightColor="emerald"
              badge="Instant Sync"
              title="Real-Time Apps"
              description="Bulletproof collaborative workspaces powered by real-time sync websockets, collaborative cursor trails, and notification systems."
              icon={<Radio className="w-5 h-5 text-emerald-400" />}
            >
              <div className="mt-4 p-3.5 rounded-xl border border-emerald-500/10 bg-slate-950/60 text-left space-y-2 h-28 flex flex-col justify-between">
                <div className="flex items-center justify-between text-[8px] text-dark-muted font-mono">
                  <span>COLLABORATIVE SYNC</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>3 Online</span>
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-5 h-5 rounded-full border border-brand-500 bg-brand-500/20 flex items-center justify-center text-[8px] text-white font-bold font-sans">A</div>
                  <div className="w-5 h-5 rounded-full border border-purple-500 bg-purple-500/20 flex items-center justify-center text-[8px] text-white font-bold font-sans">S</div>
                  <div className="text-[8px] text-dark-muted font-mono">typing...</div>
                </div>
                <div className="text-[8px] text-white/50 bg-white/5 p-1 rounded border border-white/5 font-mono text-center">
                  active ws://aurasync_x9
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {['Socket.io', 'Node Cluster', 'Express', 'Redis Pub'].map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-dark-muted border border-white/5">{t}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 8: Booking Systems */}
          <motion.div variants={itemVariants}>
            <GlassCard
              variant="glass-basic"
              spotlightColor="silver"
              badge="Scheduling"
              title="Booking Systems"
              description="Frictionless calendar scheduling integrations configured with time slot managers, custom validation thresholds, and automatic email invites."
              icon={<Calendar className="w-5 h-5 text-slate-400" />}
            >
              <div className="mt-4 p-3.5 rounded-xl border border-white/5 bg-slate-950/60 text-left space-y-2 h-28 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[8px] text-dark-muted uppercase font-mono">
                  <span>Available Slots</span>
                  <span className="text-white font-bold">Select:</span>
                </div>
                <div className="flex gap-1.5 justify-center">
                  {['09:00 AM', '11:30 AM', '04:00 PM'].map((slot) => {
                    const isSelected = bookedSlots.includes(slot);
                    return (
                      <button
                        key={slot}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookedSlot(slot);
                        }}
                        className={`flex-grow py-1 rounded text-[7px] font-bold font-mono transition-all duration-300 border ${
                          isSelected 
                            ? 'bg-brand-600/30 border-brand-500 text-brand-300 shadow shadow-brand-500/10' 
                            : 'bg-white/5 border-white/5 text-dark-muted hover:text-white'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                <div className="text-[8px] text-dark-muted font-mono flex items-center justify-between border-t border-white/5 pt-1.5">
                  <span>Auto validation: ON</span>
                  <span className="text-brand-400 font-bold">Book</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {['Tauri Config', 'Firebase Auth', 'Resend API', 'JWT'].map(t => (
                  <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-dark-muted border border-white/5">{t}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Interactive Product Showcase Section */}
      <section id="showcase" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold tracking-wider text-brand-400 uppercase font-mono">
            Interactive Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Interactive Product Showcase
          </h2>
          <p className="text-base text-dark-muted font-body-premium">
            Explore live previews of a widescreen SaaS web app overlapping a sleek companion mobile layout. Click region tags and mobile toggles to watch metrics and screens sync instantly.
          </p>
        </div>

        {/* Big Double Device Mockup Shell Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Laptop + Overlapping Phone Mockups (Col span 7) */}
          <div className="lg:col-span-7 relative flex justify-center">
            
            {/* 1. LAPTOP MOCKUP CONTAINER */}
            <div className="w-full max-w-2xl bg-slate-900 border-[12px] border-slate-950 rounded-t-3xl relative aspect-[16/10] overflow-hidden shadow-2xl z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-slate-950/40 rounded-b-md z-30" />
              
              {/* Laptop Screen Content (Interactive SaaS Dashboard Preview) */}
              <div className="absolute inset-0 bg-slate-950/95 p-4 pt-6 flex flex-col justify-between text-left select-none">
                
                {/* Dashboard Header Bar */}
                <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                    <span className="text-[10px] font-bold text-white font-display">Aura Analytics Suite</span>
                  </div>
                  <span className="text-[8px] font-mono text-dark-muted">Node Serverless Node: active</span>
                </div>

                {/* Main Content inside Laptop Screen */}
                <div className="flex-grow grid grid-cols-3 gap-3 overflow-hidden">
                  
                  {/* Left Side: Server Analytics & Active Region Selector */}
                  <div className="col-span-2 space-y-3">
                    <div className="glass p-3 rounded-lg border border-white/5 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] text-dark-muted font-mono uppercase">Region Latency Telemetry</span>
                        <span className="text-[8px] text-emerald-400 font-mono font-bold">Online</span>
                      </div>
                      
                      {/* Regional Buttons inside Mockup */}
                      <div className="flex gap-1.5">
                        {[
                          { key: 'us', label: 'US East' },
                          { key: 'eu', label: 'EU West' },
                          { key: 'asia', label: 'Asia Tokyo' },
                        ].map((reg) => (
                          <button
                            key={reg.key}
                            onClick={() => setActiveRegion(reg.key as any)}
                            className={`px-2 py-0.5 rounded text-[8px] font-mono transition-all duration-300 border ${
                              activeRegion === reg.key 
                                ? 'bg-brand-600/20 border-brand-500 text-brand-300' 
                                : 'bg-white/5 border-white/5 text-dark-muted hover:text-white'
                            }`}
                          >
                            {reg.label}
                          </button>
                        ))}
                      </div>

                      {/* Region Telemetry Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 pt-1.5">
                        <div className="bg-slate-900 p-1.5 rounded border border-white/5">
                          <span className="text-[7px] text-dark-muted block">Ping Speed</span>
                          <span className="text-xs font-bold text-white font-mono mt-0.5 block">
                            {activeRegion === 'us' ? '12ms' : activeRegion === 'eu' ? '45ms' : '88ms'}
                          </span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-white/5">
                          <span className="text-[7px] text-dark-muted block">CPU Utilization</span>
                          <span className="text-xs font-bold text-white font-mono mt-0.5 block">
                            {activeRegion === 'us' ? '14%' : activeRegion === 'eu' ? '28%' : '42%'}
                          </span>
                        </div>
                        <div className="bg-slate-900 p-1.5 rounded border border-white/5">
                          <span className="text-[7px] text-dark-muted block">Traffic Load</span>
                          <span className="text-xs font-bold text-brand-400 font-mono mt-0.5 block">
                            {activeRegion === 'us' ? '8.2k/s' : activeRegion === 'eu' ? '4.1k/s' : '2.9k/s'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Chart preview within screen */}
                    <div className="glass p-3 rounded-lg border border-white/5 flex flex-col justify-between h-20">
                      <div className="flex justify-between items-center text-[7px] text-dark-muted uppercase font-mono">
                        <span>Dynamic Core Throughput</span>
                        <span>Compiles Resolved</span>
                      </div>
                      <div className="flex-grow flex items-end h-8 gap-1 pt-1.5">
                        {[15, 30, 25, 45, 35, 60, 50, 80, 65, 95].map((h, i) => (
                          <div key={i} className="flex-grow bg-gradient-to-t from-brand-600 to-indigo-400 rounded-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Server Telemetry gauges */}
                  <div className="col-span-1 glass p-3 rounded-lg border border-white/5 flex flex-col justify-between text-left">
                    <span className="text-[7px] text-dark-muted font-mono uppercase block">Telemetry Gauge</span>
                    <div className="w-12 h-12 rounded-full border-[3px] border-slate-900 border-t-brand-500 mx-auto flex items-center justify-center relative mt-2 animate-spin-slow">
                      <span className="text-[8px] font-bold text-white font-mono">
                        {activeRegion === 'us' ? '99.9%' : activeRegion === 'eu' ? '99.8%' : '99.7%'}
                      </span>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <div className="flex justify-between text-[7px]">
                        <span className="text-dark-muted font-mono">Memory</span>
                        <span className="text-white font-mono">1.2 GB</span>
                      </div>
                      <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-500 w-1/3" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Footer Bar */}
                <div className="flex justify-between items-center text-[8px] text-dark-muted pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span>Telemetric systems operational</span>
                  </span>
                  <span>v1.2.0</span>
                </div>

              </div>

            </div>
            
            {/* Laptop Base Deck */}
            <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-[108%] h-4 bg-slate-800 border-t border-slate-700 rounded-b-2xl shadow-2xl z-10 flex justify-center">
              <div className="w-20 h-1 bg-slate-950/40 rounded-b-md" />
            </div>

            {/* 2. OVERLAPPING PHONE MOCKUP CONTAINER */}
            <div className="absolute -bottom-10 right-2 sm:-right-4 md:-right-6 w-28 sm:w-36 md:w-44 aspect-[9/18] bg-slate-950 border-[6px] border-slate-900 rounded-[2rem] shadow-2xl z-20 overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-900 rounded-full z-30" />
              
              {/* Phone Screen content (Interactive Mobile App Preview) */}
              <div className="relative h-full w-full bg-slate-950 p-2.5 pt-5.5 flex flex-col justify-between text-left select-none">
                
                {/* Mini App Header */}
                <div className="flex justify-between items-center text-[7px] border-b border-white/5 pb-1">
                  <span className="text-white font-bold font-display">Aura Mobile</span>
                  <div className="flex gap-0.5">
                    <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[5px] text-dark-muted">Sync</span>
                  </div>
                </div>

                {/* Dynamic Content Panel inside Phone */}
                <div className="flex-grow flex flex-col justify-center py-1.5">
                  {activePhoneScreen === 'overview' ? (
                    <div className="space-y-1.5">
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 space-y-0.5">
                        <span className="text-[5px] text-dark-muted block uppercase font-mono">Current Balance</span>
                        <span className="text-[10px] font-bold text-white font-display block">$45,280.99</span>
                      </div>
                      <div className="h-8 bg-white/5 rounded-lg border border-white/5 flex items-end p-1 gap-0.5 overflow-hidden">
                        {[10, 20, 15, 35, 25, 45, 55].map((h, i) => (
                          <div key={i} className="flex-grow bg-emerald-500/80 rounded-sm" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  ) : activePhoneScreen === 'security' ? (
                    <div className="space-y-1.5">
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 space-y-0.5">
                        <span className="text-[5px] text-dark-muted block uppercase font-mono">Security Context</span>
                        <span className="text-[6px] font-mono text-brand-300 block truncate">API_KEY_PRIME</span>
                        <span className="text-[5px] px-1 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold block w-fit">ACTIVE</span>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="p-1.5 rounded-lg bg-white/5 border border-white/5 space-y-0.5">
                        <span className="text-[5px] text-dark-muted block uppercase font-mono">Database Status</span>
                        <div className="flex justify-between items-center text-[6px] font-bold text-white">
                          <span>Successful sync</span>
                          <span className="text-emerald-400">99.98%</span>
                        </div>
                        <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 w-[99.98%]" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone screen controller tabs */}
                <div className="flex justify-around border-t border-white/5 pt-1.5">
                  {(['overview', 'security', 'database'] as const).map((screen) => (
                    <button
                      key={screen}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhoneScreen(screen);
                      }}
                      className={`text-[5px] uppercase font-semibold font-mono tracking-wider transition-all duration-300 ${
                        activePhoneScreen === screen 
                          ? 'text-brand-400 font-bold' 
                          : 'text-dark-muted hover:text-white'
                      }`}
                    >
                      {screen.slice(0, 4)}
                    </button>
                  ))}
                </div>

              </div>

            </div>

          </div>

          {/* Core Wording & Features explanation (Col span 5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-4xl font-bold font-display text-white tracking-tight">
                Elite Fluid Device Interactions
              </h3>
              <p className="text-sm text-dark-muted leading-relaxed font-body-premium">
                Visually demonstrate absolute responsive parity. A widescreen enterprise analytics panel perfectly matched with a responsive, gesture-ready smartphone companion screen.
              </p>
            </div>

            {/* List of features */}
            <div className="space-y-4 divide-y divide-white/5">
              {[
                { title: 'Widescreen Laptop Mockup', desc: 'CSS-rendered 16:10 laptop housing server region telemetry triggers and active compilation gauges.' },
                { title: 'Overlapping Companion Phone', desc: 'Overlapping floating smartphone mockup displaying active balance logs and secure token keys.' },
                { title: 'Interactive State Binding', desc: 'Toggle regional server buttons on the laptop to update database loads, and tap the mobile key buttons to cycle views.' },
              ].map((feature, idx) => (
                <div key={idx} className={`pt-4 ${idx === 0 ? 'pt-0 border-none' : ''} space-y-1`}>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    <span>{feature.title}</span>
                  </h4>
                  <p className="text-xs text-dark-muted leading-relaxed pl-3.5">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA action to explore design system */}
            <div className="pt-2">
              <Button 
                variant="shiny" 
                size="md" 
                onClick={() => window.location.hash = '#design-system'}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                Inspect Visual Design Tokens
              </Button>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Premium Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold tracking-wider text-brand-400 uppercase font-mono">
            Professional Deliverables
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Freelance Services
          </h2>
          <p className="text-base text-dark-muted font-body-premium">
            Fusing strict technical architecture, pixel-perfect user design, and deep commercial analysis to guarantee that your business captures and retains high-value users.
          </p>
        </div>

        {/* Services Grid (6 standard columns + 1 featured row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1: Web Development */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard
              variant="glass-premium"
              spotlightColor="brand"
              badge="Speed & ROI"
              title="Web Development"
              description="Engineering highly performant Next.js and React enterprise portals, high-fidelity customer landing pages, and interactive SaaS platforms designed to capture leads."
              icon={<Globe className="w-6 h-6 text-brand-400" />}
              hoverEffect="lift"
            />
          </motion.div>

          {/* Service 2: Mobile App Development */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard
              variant="glass-emerald"
              spotlightColor="emerald"
              badge="iOS & Android"
              title="Mobile Apps"
              description="Deploying responsive companion apps to both Apple App Store and Google Play Store with offline-first synchronization models, zero-lag layouts, and fluid gestures."
              icon={<Smartphone className="w-6 h-6 text-emerald-400" />}
              hoverEffect="lift"
            />
          </motion.div>

          {/* Service 3: UI/UX Design */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard
              variant="glass-cyber"
              spotlightColor="purple"
              badge="Visual Identity"
              title="UI/UX Engineering"
              description="Creating modern startup design languages, dark interactive grids, cinematic color systems (HSL), custom SVG blueprints, and dynamic bobs layouts."
              icon={<Layers className="w-6 h-6 text-purple-400" />}
              hoverEffect="lift"
            />
          </motion.div>

          {/* Service 4: Backend APIs */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard
              variant="glass-sunset"
              spotlightColor="sunset"
              badge="Data Integrity"
              title="Backend Databases & APIs"
              description="Writing high-concurrency server pipelines (Node.js, PostgreSQL), integrating secure Stripe payments interfaces, strict parameters check, and webhook event logs."
              icon={<Cpu className="w-6 h-6 text-rose-400" />}
              hoverEffect="lift"
            />
          </motion.div>

          {/* Service 5: Firebase Integration */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard
              variant="glass-premium"
              spotlightColor="brand"
              badge="Serverless Cloud"
              title="Firebase & Cloud"
              description="Integrating real-time firestore listeners, OAuth user validations registers, serverless backend functions, and secure user permissions security rule policies."
              icon={<Cloud className="w-6 h-6 text-indigo-400" />}
              hoverEffect="lift"
            />
          </motion.div>

          {/* Service 6: Performance Optimization */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard
              variant="glass-cyber"
              spotlightColor="purple"
              badge="Lighthouse 100"
              title="Performance & SEO"
              description="Refactoring slow bundle files and legacy codebases to achieve perfect Lighthouse scores, reducing loading latency, and boosting Google SEO rank results."
              icon={<Zap className="w-6 h-6 text-amber-400" />}
              hoverEffect="lift"
            />
          </motion.div>

          {/* Service 7: Full-Width Featured Card: Maintenance & Scaling */}
          <motion.div 
            className="col-span-1 md:col-span-2 lg:col-span-3"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <GlassCard
              variant="glass-basic"
              spotlightColor="silver"
              badge="Continuous Delivery"
              hoverEffect="none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-4">
                
                {/* Featured Left Explanation */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner">
                      <Shield className="w-8 h-8 text-slate-300" />
                    </div>
                    <div>
                      <span className="text-[10px] text-brand-400 font-mono font-bold uppercase tracking-wider block">Enterprise SLA</span>
                      <h4 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">Maintenance, Security & Scaling</h4>
                    </div>
                  </div>
                  <p className="text-sm text-dark-muted leading-relaxed font-body-premium">
                    I offer active Docker container health monitoring, strict database queries indexing audits, secure SSL credentials rotation management, and Edge server load-balancing configurations to guarantee zero-downtime scaling for growing businesses.
                  </p>
                </div>

                {/* Featured Right Assurances checklist */}
                <div className="lg:col-span-5 bg-white/5 rounded-xl border border-white/5 p-5 text-left grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: '24/7 Server telemetry logs', desc: 'Real-time uptime notifications.' },
                    { label: 'Automated data backups', desc: 'Continuous weekly database snapshots.' },
                    { label: 'Strict security audits', desc: 'OAuth token keys validations.' },
                    { label: 'Edge load balancers', desc: 'Instant capacity expansion.' },
                  ].map((assur, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-[11px] font-bold text-white flex items-center gap-1.5 font-sans">
                        <Check className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
                        <span>{assur.label}</span>
                      </span>
                      <span className="text-[10px] text-dark-muted block pl-5 font-mono">
                        {assur.desc}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </GlassCard>
          </motion.div>

        </div>
      </section>

      {/* 5. Trust-Building Section: The Engineering Standard */}
      <section id="trust" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
        
        {/* Split Grid Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Sticky Trust Banner (Col span 5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8 text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold tracking-wider text-brand-400 uppercase font-mono">
                The Engineering Standard
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display leading-[1.1]">
                Absolute Operational Integrity.
              </h2>
              <p className="text-base text-dark-muted font-body-premium">
                Every line of code is structured to protect, scale, and grow your digital business. I hold my freelance output to rigorous, high-end startup agency standards.
              </p>
            </div>

            {/* Verification trust badges */}
            <div className="glass-premium border border-white/5 rounded-2xl p-5 space-y-4">
              <span className="text-[10px] text-dark-muted uppercase font-mono font-bold tracking-wider block">Production Assurances</span>
              <div className="space-y-3">
                {[
                  '100/100 Lighthouse Speed Guaranteed',
                  'Strict TypeScript Compilation Standards',
                  'Zero Template Bloat & Custom CSS Mappings',
                ].map((assur, idx) => (
                  <div key={idx} className="flex gap-2.5 items-center text-xs font-medium text-white/90">
                    <div className="w-5 h-5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{assur}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 7 Core Trust Pillars (Col span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {[
              {
                title: 'Fast & Structured Communication',
                desc: 'Weekly milestone check-in videos (Loom), transparent Slack lines, and guaranteed responses in under 2 hours during contract windows to make sure you are never left in the dark.',
                icon: <MessageSquare className="w-5 h-5 text-brand-400" />,
                badge: 'Transparency',
                color: 'brand'
              },
              {
                title: 'Robust Scalable Architectures',
                desc: 'Serverless Edge pipelines, multi-region secure databases replication structures, and strict parameter-checking policies optimized to manage high-volume spikes safely.',
                icon: <GitBranch className="w-5 h-5 text-emerald-400" />,
                badge: 'System Scale',
                color: 'emerald'
              },
              {
                title: 'Modern Standard Technologies',
                desc: 'Utilizing robust production frameworks (React, Next.js, Node.js, PostgreSQL) to allow immediate vendor handoffs, easy developer onboarding, and zero software lock-in.',
                icon: <Cpu className="w-5 h-5 text-purple-400" />,
                badge: 'Zero Bloat',
                color: 'purple'
              },
              {
                title: 'Mobile-First Fluid Interfaces',
                desc: 'Fluid responsive viewport grids optimized for swipe actions, gestures, and highly compact initial bundle sizes mapping slow cellular data zones properly.',
                icon: <Smartphone className="w-5 h-5 text-rose-400" />,
                badge: 'Mobile Parity',
                color: 'sunset'
              },
              {
                title: 'Clean Maintainable Modular Code',
                desc: 'Strict TypeScript declarations, reusable self-contained component trees, strict ESLint compliance parameters, and deep comments to keep codebases easy to scale.',
                icon: <Code2 className="w-5 h-5 text-indigo-400" />,
                badge: 'Code Integrity',
                color: 'brand'
              },
              {
                title: 'Dedicated Long-Term SLA Support',
                desc: 'Ongoing container maintenance retainers, weekly database backup snapshots, secure SSL certificate rotations, and proactive telemetry checks to guarantee zero downtime.',
                icon: <LifeBuoy className="w-5 h-5 text-slate-400" />,
                badge: 'SLA Retainers',
                color: 'silver'
              },
              {
                title: 'Extreme Performance Optimization',
                desc: 'Achieving Lighthouse 100 speed margins, optimizing asset payloads, and accelerating edge render responses to eliminate customer bounce rates completely.',
                icon: <Zap className="w-5 h-5 text-amber-400" />,
                badge: 'Lighthouse 100',
                color: 'purple'
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="group"
              >
                <GlassCard
                  variant={pillar.color === 'brand' ? 'glass-premium' : pillar.color === 'emerald' ? 'glass-emerald' : pillar.color === 'purple' ? 'glass-cyber' : pillar.color === 'sunset' ? 'glass-sunset' : 'glass-basic'}
                  spotlightColor={pillar.color as any}
                  hoverEffect="lift"
                >
                  <div className="flex gap-4 items-start p-2 text-left">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:border-brand-500/20 transition-all flex-shrink-0 mt-0.5 shadow-inner">
                      {pillar.icon}
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base font-bold text-white font-display group-hover:text-brand-300 transition-colors">{pillar.title}</h4>
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-dark-muted border border-white/5">{pillar.badge}</span>
                      </div>
                      <p className="text-xs text-dark-muted leading-relaxed font-body-premium">{pillar.desc}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* 6. Testimonials Section: Proven Client Value */}
      <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold tracking-wider text-brand-400 uppercase font-mono">
            Proven Business Value
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Client Testimonials
          </h2>
          <p className="text-base text-dark-muted font-body-premium">
            Discover how growing SaaS apps, ecommerce leaders, and technology startups scale their operations and conversions with elite development.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {[
            {
              name: 'Kabir Mehta',
              role: 'CTO, Finverse Labs',
              project: 'SaaS Analytics Dashboard',
              metric: '+145% Sign-ups',
              review: '"We hired him to engineer our central SaaS telemetry platform. Not only is his design interface beautiful and responsive, but the codebase he handed over is strictly typed, modular, and extremely easy for our internal developers to build on. A masterclass in modern React."',
              initial: 'K',
              color: 'brand',
            },
            {
              name: 'Ananya Sharma',
              role: 'VP Growth, Aura Cart',
              project: 'E-commerce Checkout Integration',
              metric: '+32% Sales Revenue',
              review: '"Our custom Stripe checkout funnel was experiencing high drop-offs on mobile viewports. He audited our Core Web Vitals, refactored our state management, and optimized our bundles to achieve perfect Lighthouse scores. Online sales spiked instantly."',
              initial: 'A',
              color: 'emerald',
            },
            {
              name: 'Rohan Kapoor',
              role: 'CEO, SyncSpace India',
              project: 'Real-Time Sync Platform',
              metric: '-60% Server Latency',
              review: '"His WebSocket integration and real-time multiplayer syncing are outstanding. The collaborative coordinate canvas behaves instantly across instances with zero latency. Extremely responsive communicator and a true engineering partner."',
              initial: 'R',
              color: 'purple',
            }
          ].map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="flex"
            >
              <GlassCard
                variant={t.color === 'brand' ? 'glass-premium' : t.color === 'emerald' ? 'glass-emerald' : 'glass-cyber'}
                spotlightColor={t.color as any}
                hoverEffect="lift"
              >
                <div className="flex flex-col justify-between h-full text-left space-y-6 p-2">
                  
                  {/* Top Stats and Ratings */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    
                    {/* Growth Metric Badge */}
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold font-mono text-emerald-400">
                      <TrendingUp className="w-3 h-3" />
                      <span>{t.metric}</span>
                    </span>
                  </div>

                  {/* Middle Review Quote */}
                  <p className="text-sm text-dark-muted leading-relaxed font-body-premium italic flex-grow">
                    {t.review}
                  </p>

                  {/* Bottom Profile Details */}
                  <div className="flex gap-3 items-center border-t border-white/5 pt-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${
                      t.color === 'brand' 
                        ? 'from-brand-600 to-indigo-400 shadow-brand-500/20' 
                        : t.color === 'emerald' 
                          ? 'from-emerald-600 to-teal-400 shadow-emerald-500/20' 
                          : 'from-purple-600 to-rose-400 shadow-purple-500/20'
                    } flex items-center justify-center text-white font-bold font-display shadow-md flex-shrink-0`}>
                      {t.initial}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-white truncate font-display">{t.name}</h4>
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-dark-muted font-mono mt-0.5">
                        <span className="truncate">{t.role}</span>
                        <span className="w-1 h-1 bg-white/10 rounded-full" />
                        <span className="text-brand-400 font-sans font-semibold">{t.project}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </GlassCard>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 7. Stack Interactive Playground */}
      <section id="components" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold tracking-wider text-brand-400 uppercase font-mono">
              The Technology Stack
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display leading-[1.1]">
              Strict Architectural Integrity
            </h2>
            <p className="text-base text-dark-muted leading-relaxed font-body-premium">
              I only write maintainable code using the best frameworks on the market. Every project represents clean, self-contained modular component trees structured for zero maintenance overhead.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                { label: 'Strict TypeScript compilation for compile-time parameter validation.', icon: <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> },
                { label: 'Semantic, SEO-friendly structured HTML templates mapping metadata properly.', icon: <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> },
                { label: 'Mobile-first fluid viewports tailored to standard responsive breakpoints.', icon: <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" /> },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  {item.icon}
                  <span className="text-sm text-dark-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Stack Tab Showcase */}
          <div className="glass-premium border border-white/5 rounded-2xl p-6 md:p-8 space-y-6 text-left">
            <div className="flex gap-2 border-b border-white/5 pb-4 overflow-x-auto">
              {(['frontend', 'backend', 'architecture'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveStackTab(tab)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg capitalize transition-all duration-300 ${
                    activeStackTab === tab 
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-500/10' 
                      : 'text-dark-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight capitalize">
                {activeStackTab === 'frontend' ? 'Pixel Perfect Frontend Architecture' : activeStackTab === 'backend' ? 'Secure Serverless Middleware API' : 'Edge Infrastructure Caching Rules'}
              </h3>
              <p className="text-xs text-dark-muted leading-relaxed">
                {activeStackTab === 'frontend' 
                  ? 'Compiling responsive visual trees utilizing Tailwind HSL styling systems, dynamic spring physical offsets, and absolute type validations.' 
                  : activeStackTab === 'backend' 
                    ? 'Wiring secure Node TS handlers, webhook validators for Stripe SaaS payments, and scalable generic CRUD queries.' 
                    : 'Deploying serverless routes directly on AWS and edge clouds with aggressive cache-control rules for sub-millisecond response.'}
              </p>
            </div>

            {/* Faux Code Block with Copy Actions */}
            <div className="rounded-xl border border-white/5 bg-slate-950/80 p-4 font-mono text-xs overflow-x-auto relative group">
              <div className="flex items-center gap-2 mb-3 text-dark-muted border-b border-white/5 pb-2">
                <Code2 className="w-4 h-4 text-brand-400" />
                <span>{activeStackTab === 'frontend' ? 'Showcase.tsx' : activeStackTab === 'backend' ? 'webhooks.ts' : 'edge.config.js'}</span>
              </div>
              <pre className="text-brand-300 leading-relaxed">
                <code>{codeSnippets[activeStackTab]}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Modern High-Converting Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Heading Panel */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-semibold tracking-wider text-brand-400 uppercase font-mono">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Start Your Masterpiece
          </h2>
          <p className="text-base text-dark-muted font-body-premium">
            Currently accepting premium projects for next month. Pitch your application idea below or book a direct onboarding call.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Column: Direct CTAs & Mock Calendly Calendar (Col span 5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Direct Connect Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white font-display">Direct Connection Channels</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* WhatsApp CTA Button */}
                <a 
                  href="https://wa.me/919999999999?text=Hi!%20I%20have%20an%20application%20project%20I'd%20love%20to%20discuss." 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-emerald-500/10 bg-emerald-950/20 hover:bg-emerald-900/30 transition-all duration-300 group shadow-lg"
                >
                  <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold uppercase tracking-wider block">WhatsApp Chat</span>
                    <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors font-mono">Chat Now →</span>
                  </div>
                </a>

                {/* Email CTA Button */}
                <a 
                  href="mailto:dev@freelancer.com?subject=Project%20Inquiry%20-%20AuraUI"
                  className="flex items-center gap-3 p-4 rounded-xl border border-brand-500/10 bg-brand-950/20 hover:bg-brand-900/30 transition-all duration-300 group shadow-lg"
                >
                  <div className="p-2 bg-brand-500/20 rounded-lg text-brand-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-400 font-mono font-bold uppercase tracking-wider block">Direct Email</span>
                    <span className="text-xs font-bold text-white group-hover:text-brand-300 transition-colors font-mono">dev@freelancer.com</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Calendly Mock Interactive Calendar Picker */}
            <div className="glass-premium border border-white/5 rounded-2xl p-5 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">Book Onboarding call</span>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold uppercase">15 Min Slot</span>
              </div>

              {mockBookingSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-4 text-center space-y-2"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Appointment Scheduled!</h4>
                  <p className="text-[11px] text-dark-muted font-mono leading-relaxed">
                    Intro session set for <span className="text-white font-bold uppercase">{mockMeetingDay}</span> at <span className="text-white font-bold">{mockMeetingTime}</span>. A google invite has been generated.
                  </p>
                  <button 
                    onClick={() => setMockBookingSuccess(false)}
                    className="text-[9px] text-brand-400 underline font-mono mt-1 hover:text-brand-300 block mx-auto font-bold"
                  >
                    Reschedule slot
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-3.5">
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-dark-muted uppercase font-mono block text-left">1. Select Open Day:</span>
                    <div className="flex gap-2">
                      {[
                        { key: 'mon', label: 'Mon' },
                        { key: 'tue', label: 'Tue' },
                        { key: 'wed', label: 'Wed' },
                      ].map((day) => (
                        <button
                          key={day.key}
                          onClick={() => setMockMeetingDay(day.key as any)}
                          className={`flex-grow py-1 rounded text-xs font-mono font-bold transition-all border ${
                            mockMeetingDay === day.key 
                              ? 'bg-brand-600/30 border-brand-500 text-brand-300' 
                              : 'bg-white/5 border-white/5 text-dark-muted hover:text-white'
                          }`}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] text-dark-muted uppercase font-mono block text-left">2. Select Hour (IST):</span>
                    <div className="flex gap-2">
                      {[
                        { key: '2pm', label: '02:00 PM' },
                        { key: '4pm', label: '04:00 PM' },
                        { key: '6pm', label: '06:00 PM' },
                      ].map((time) => (
                        <button
                          key={time.key}
                          onClick={() => setMockMeetingTime(time.key as any)}
                          className={`flex-grow py-1 rounded text-[10px] font-mono font-bold transition-all border ${
                            mockMeetingTime === time.key 
                              ? 'bg-brand-600/30 border-brand-500 text-brand-300' 
                              : 'bg-white/5 border-white/5 text-dark-muted hover:text-white'
                          }`}
                        >
                          {time.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="shiny" 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={() => setMockBookingSuccess(true)}
                  >
                    Lock Meeting Slot
                  </Button>
                </div>
              )}
            </div>

            {/* Social Links Row */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-white uppercase tracking-wider font-mono block text-left">Social Channels</span>
              <div className="flex gap-3">
                {[
                  { icon: <Github className="w-5 h-5" />, href: 'https://github.com' },
                  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com' },
                  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com' },
                ].map((soc, i) => (
                  <a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 hover:border-white/10 text-dark-muted hover:text-white transition-all duration-300 hover:-translate-y-1 shadow"
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Project Brief Form (Col span 7) */}
          <div className="lg:col-span-7">
            <div className="glass-premium border border-white/5 rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-brand-500/5 blur-[50px] rounded-full pointer-events-none" />
              
              <div className="text-left space-y-1 pb-2 border-b border-white/5">
                <h3 className="text-xl font-bold text-white font-display">Project Brief Constructor</h3>
                <p className="text-xs text-dark-muted font-body-premium">Fill out your project context and receive a precise architectural brief in under 24 hours.</p>
              </div>

              {consultationSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h4 className="text-xl font-bold text-white">Project Pitch Transmitted!</h4>
                    <p className="text-xs text-dark-muted leading-relaxed font-body-premium">
                      Your briefs are safely registered. Aura Studio will audit your specifications and email you a customized architectural proposal within the next 24 hours.
                    </p>
                  </div>
                  <Button 
                    variant="glass" 
                    size="sm" 
                    onClick={() => setConsultationSuccess(false)}
                    className="text-xs mt-2"
                  >
                    Submit another brief
                  </Button>
                </motion.div>
              ) : (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setConsultationSuccess(true);
                  }}
                  className="space-y-5 text-left"
                >
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase font-mono tracking-wider block">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-slate-950/80 text-sm text-white placeholder-dark-muted focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all duration-300 font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase font-mono tracking-wider block">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="hello@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-slate-950/80 text-sm text-white placeholder-dark-muted focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all duration-300 font-sans"
                    />
                  </div>

                  {/* Services dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase font-mono tracking-wider block">Core Deliverable Requirement</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-slate-950/80 text-sm text-white focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all duration-300 font-sans"
                    >
                      <option className="bg-slate-950 text-white" value="web">Web Portal (Next.js / React)</option>
                      <option className="bg-slate-950 text-white" value="mobile">Companion Mobile App (React Native)</option>
                      <option className="bg-slate-950 text-white" value="uiux">Bespoke Design System / UIUX</option>
                      <option className="bg-slate-950 text-white" value="scale">Performance Optimization & Scaling</option>
                    </select>
                  </div>

                  {/* Budget Ranges Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase font-mono tracking-wider block">Estimated Project Budget</label>
                    <div className="flex gap-3">
                      {[
                        { key: '$2k-$5k', label: '₹1.5L - ₹4L' },
                        { key: '$5k-$10k', label: '₹4L - ₹8L' },
                        { key: '$10k+', label: '₹8L+' },
                      ].map((bud) => (
                        <button
                          key={bud.key}
                          type="button"
                          onClick={() => setSelectedBudget(bud.key as any)}
                          className={`flex-grow py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                            selectedBudget === bud.key 
                              ? 'bg-brand-600/30 border-brand-500 text-brand-300 shadow shadow-brand-500/10' 
                              : 'bg-white/5 border-white/5 text-dark-muted hover:text-white'
                          }`}
                        >
                          {bud.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message brief textarea */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white uppercase font-mono tracking-wider block">Project Scope Brief</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Outline your application features, pages count, timelines requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-slate-950/80 text-sm text-white placeholder-dark-muted focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all duration-300 font-sans resize-none"
                    />
                  </div>

                  {/* Submit CTA button */}
                  <Button 
                    variant="shiny" 
                    size="xl" 
                    type="submit"
                    className="w-full justify-center text-sm font-bold shadow-lg shadow-brand-500/15 group"
                    iconRight={<Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  >
                    Transmit Project Pitch
                  </Button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
