import React from 'react';
import { 
  BarChart, 
  Brain, 
  Code, 
  Cpu, 
  Globe, 
  Keyboard, 
  Layers, 
  LayoutGrid, 
  MessageSquare, 
  Music, 
  Smartphone, 
  Speaker,
  Rocket,
  Shield,
  Zap,
  Network,
  Users,
  Lightbulb,
  Building2,
  Globe2,
  Mail,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

function Logo({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Optional dashed circle background like in the image */}
      <circle 
        cx="50" 
        cy="50" 
        r="35" 
        stroke="white" 
        strokeWidth="1" 
        strokeDasharray="4 4" 
        className="opacity-20"
      />
      
      {/* Spokes and end nodes */}
      {/* Top Right */}
      <line x1="50" y1="50" x2="75" y2="30" stroke="white" strokeWidth="4" />
      <circle cx="75" cy="30" r="7" fill="white" />
      
      {/* Top Left */}
      <line x1="50" y1="50" x2="30" y2="35" stroke="white" strokeWidth="4" />
      <circle cx="30" cy="35" r="7" fill="white" />
      
      {/* Bottom Right */}
      <line x1="50" y1="50" x2="75" y2="60" stroke="white" strokeWidth="4" />
      <circle cx="75" cy="60" r="5" fill="white" />
      
      {/* Bottom Left */}
      <line x1="50" y1="50" x2="38" y2="78" stroke="white" strokeWidth="4" />
      <circle cx="38" cy="78" r="8" fill="white" />
      
      {/* Central Hub */}
      <circle cx="50" cy="50" r="16" fill="white" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
      {/* Instagram Post Container (1:1 Aspect Ratio) */}
      <div 
        id="app-container"
        className="w-full max-w-[900px] aspect-square relative overflow-hidden bg-[#020617] text-white flex flex-col p-10 border border-white/5 shadow-2xl rounded-lg bg-grid"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(30, 58, 138, 0.5) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(88, 28, 135, 0.3) 0%, transparent 50%), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)'
        }}
      >
        {/* Animated Background Scan Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="w-full h-[3px] bg-blue-500/50 absolute animate-scan top-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        </div>

        {/* Header Section */}
        <header className="relative z-10 flex justify-between items-start mb-8">
          <div className="flex items-start gap-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] border border-blue-400/50"
            >
              <Logo className="w-14 h-14 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </motion.div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-6xl font-black tracking-tighter text-white glow-text-white"
              >
                Baloch<span className="text-blue-400">Dev</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-black tracking-[0.25em] text-blue-300 glow-text uppercase mt-1"
              >
                Building the Future of Balochi Technology
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[11px] text-gray-300 mt-3 max-w-sm font-bold tracking-wide leading-tight"
              >
                EMPOWERING THE BALOCHI LANGUAGE THROUGH AI, SOFTWARE & INNOVATION
              </motion.p>
            </div>
          </div>

          {/* Top-Right Decorative Element (The Globe Concept) */}
          <div className="absolute top-0 right-0 w-48 h-48 opacity-40 pointer-events-none -mr-8 -mt-8">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-blue-500/10" />
              <div className="absolute inset-8 rounded-full border border-blue-500/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe2 className="w-32 h-32 text-blue-500/40 animate-spin-slow" />
              </div>
            </div>
          </div>
        </header>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-3 gap-4 relative z-10 flex-grow">
          {/* Partner Projects */}
          <section className="neon-card flex flex-col gap-4 border-l-2 border-blue-500/50">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-400" />
              <h2 className="text-xs font-black tracking-widest text-blue-400 uppercase">Partner Projects</h2>
            </div>
            <ul className="flex flex-col gap-4">
              <ProjectItem icon={<LayoutGrid size={16} />} title="Introduce Balochi language in Microsoft Office" />
              <ProjectItem icon={<Keyboard size={16} />} title="Introduce Balochi language in Google Keyboard" />
              <ProjectItem icon={<MessageSquare size={16} />} title="Develop a Balochi AI Chatbot" />
            </ul>
          </section>

          {/* BalochDev Projects */}
          <section className="neon-card flex flex-col gap-4 border-l-2 border-purple-500/50">
            <div className="flex items-center gap-2 mb-2">
              <Rocket className="w-5 h-5 text-purple-400" />
              <h2 className="text-xs font-black tracking-widest text-purple-400 uppercase">BalochDev Projects</h2>
            </div>
            <ul className="flex flex-col gap-3">
              <ProjectItem icon={<Music size={16} />} title="Balochi Music AI Platform" />
              <ProjectItem icon={<Brain size={16} />} title="Large-Scale Balochi AI Model" />
              <ProjectItem icon={<Speaker size={16} />} title="Smart Balochi Music & Learning Device" />
              <ProjectItem icon={<Globe size={16} />} title="Balochi Language Support for Browsers" />
            </ul>
          </section>

          {/* Services */}
          <section className="neon-card flex flex-col gap-4 border-l-2 border-indigo-500/50">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              <h2 className="text-xs font-black tracking-widest text-indigo-400 uppercase">Services</h2>
            </div>
            <ul className="flex flex-col gap-4">
              <ProjectItem icon={<Code size={16} />} title="Web Development" />
              <ProjectItem icon={<Smartphone size={16} />} title="Mobile App Development" />
              <ProjectItem icon={<Zap size={16} />} title="AI Integration" />
              <ProjectItem icon={<Layers size={16} />} title="Custom Software Solutions" />
            </ul>
          </section>
        </div>

        {/* Mission Section */}
        <div className="mt-6 mb-4 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] bg-gradient-to-r from-transparent to-blue-500/50 flex-grow" />
            <span className="text-[10px] font-black tracking-[.3em] text-blue-400 uppercase">Our Mission</span>
            <div className="h-[1px] bg-gradient-to-l from-transparent to-blue-500/50 flex-grow" />
          </div>
          <p className="text-center text-[10px] leading-relaxed text-gray-400 max-w-2xl mx-auto font-medium">
            To promote the Balochi language in global digital platforms and build AI-powered solutions that connect our culture with the future.
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6 relative z-10">
          <BottomIcon icon={<Shield className="w-6 h-6" />} label="AI & INNOVATION" />
          <BottomIcon icon={<Globe className="w-6 h-6" />} label="GLOBAL CONNECTIVITY" />
          <BottomIcon icon={<Lightbulb className="w-6 h-6" />} label="DIGITAL LANGUAGE EMPOWERMENT" />
          <BottomIcon icon={<BarChart className="w-6 h-6" />} label="CULTURE + TECHNOLOGY UNITED" />
        </div>

        {/* Footer / Launch Section */}
        <footer className="mt-auto pt-6 border-t border-white/5 relative z-10 flex items-end justify-between">
          <div className="max-w-[60%]">
            <h3 className="text-[10px] font-black text-blue-400 tracking-wider uppercase mb-1">
              We have officially launched our website.
            </h3>
            <p className="text-[9px] text-gray-500">
              Need a website, mobile app, or AI solution for your business? Contact us today.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="text-[9px] font-bold text-gray-600 tracking-widest">WEBSITE:</span>
            <a 
              href="https://balochdev.com" 
              className="bg-blue-600/10 border border-blue-500/30 rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-blue-600/20 transition-colors group"
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-bold tracking-wider text-blue-300">https://balochdev.com</span>
              <ExternalLink className="w-3 h-3 text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </footer>

        {/* Mini Footer Icons */}
        <div className="flex justify-between items-center mt-6 text-[8px] font-bold text-gray-600 tracking-[0.2em] relative z-10 opacity-70">
          <div className="flex items-center gap-2">
            <Building2 size={10} /> BUILDING TODAY
          </div>
          <div className="flex items-center gap-2">
            <Zap size={10} /> INNOVATING TOMORROW
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <Globe2 size={10} /> EMPOWERING OUR LANGUAGE
          </div>
          <div className="flex items-center gap-2">
            <Users size={10} /> CONNECTING THE WORLD
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          from { top: 0%; }
          to { top: 100%; }
        }
        .animate-scan {
          animation: scan 10s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function ProjectItem({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <li className="flex items-start gap-3 group cursor-default">
      <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-blue-400 group-hover:text-white group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all">
        {icon}
      </div>
      <span className="text-[9px] font-medium leading-tight text-gray-300 group-hover:text-white transition-colors pt-1">
        {title}
      </span>
    </li>
  );
}

function BottomIcon({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center group cursor-default">
      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
        {icon}
      </div>
      <span className="text-[7px] font-black tracking-widest text-gray-500 group-hover:text-blue-300 group-hover:glow-text transition-colors uppercase max-w-[80px]">
        {label}
      </span>
    </div>
  );
}

