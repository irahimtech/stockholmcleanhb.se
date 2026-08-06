import React from 'react';
import { FaMagic, FaHome, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-700 antialiased flex flex-col justify-center items-center pt-28 pb-16 px-6 relative overflow-hidden">
      
      {/* BACKGROUND VECTOR SVG 1: Abstract Mesh Dot Pattern */}
      <svg className="absolute top-10 left-10 w-72 h-72 opacity-[0.03] text-blue-950 pointer-events-none" fill="currentColor" viewBox="0 0 200 200">
        <defs>
          <pattern id="dotPattern" x="0" y="0" width="20" h="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>

      {/* BACKGROUND VECTOR SVG 2: Deep Ambient Gradient Spheres */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500 rounded-full filter blur-[140px] opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-[140px] opacity-10 pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-2xl mx-auto text-center space-y-10 relative z-10">
        
        {/* CENTERPIECE VISUAL: Complex Isometric SVG Graphic & 404 Node */}
        <div className="relative inline-flex flex-col items-center justify-center">
          
          {/* Main Decorative Cleaning/Asset SVG Scene */}
          <svg className="w-48 h-48 md:w-56 md:h-56 text-[#0D2B5C] drop-shadow-xl" viewBox="0 0 240 240" fill="none" xmlns="http://w3.org">
            {/* Base Shield / Platform */}
            <path d="M120 20L200 55V125C200 176 166 213 120 225C74 213 40 176 40 125V55L120 20Z" fill="#0D2B5C" fillOpacity="0.04" stroke="#0D2B5C" strokeWidth="2" strokeDasharray="4 4"/>
            {/* Concentric Modern Grid Lines */}
            <circle cx="120" cy="125" r="70" stroke="#0D2B5C" strokeWidth="1" strokeOpacity="0.1"/>
            <circle cx="120" cy="125" r="50" stroke="#0D2B5C" strokeWidth="1" strokeOpacity="0.1"/>
            {/* Isometric Document / Screen Border Vector */}
            <rect x="80" y="85" width="80" height="80" rx="16" transform="rotate(-15 120 125)" fill="white" stroke="#0D2B5C" strokeWidth="3" className="shadow-md"/>
            {/* Dynamic Search Vector Spark Lines */}
            <path d="M100 115H140" stroke="#0D2B5C" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8"/>
            <path d="M100 127H130" stroke="#0D2B5C" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8"/>
            <path d="M100 139H120" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
            {/* Floating Amber Energy Nodes */}
            <circle cx="70" cy="80" r="6" fill="#F59E0B" className="animate-ping"/>
            <circle cx="70" cy="80" r="4" fill="#F59E0B"/>
            <circle cx="175" cy="160" r="5" fill="#F59E0B"/>
          </svg>

          {/* Absolute Typography Node */}
          <div className="absolute -bottom-6 bg-white border border-slate-200 shadow-lg px-6 py-2 rounded-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">
              Error <span className="text-amber-500">404</span>
            </h1>
          </div>
        </div>

        {/* CONTENT BLOCK: Deep SEO Text Values */}
        <div className="space-y-4 pt-4">
          <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-4 py-2 rounded-xl border border-amber-500/20 inline-flex items-center gap-2">
            <FaMagic className="text-amber-500 animate-pulse text-[10px]" /> Directory Coordinate Alteration
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            Target Property Blueprint <br />
            <span className="text-amber-400 bg-[#0D2B5C] px-3 py-1 rounded-xl inline-block mt-2">Cannot Be Located</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto font-light">
            The service parameters or operational sub-route you followed might be broken, or the local Stockholm municipal directory path has changed. Let’s redirect you to verified maintenance portals.
          </p>
        </div>

        {/* TRUST SIGNALS MODULE */}
        <div className="text-xs font-bold text-slate-500 bg-white border border-slate-200 rounded-2xl p-4 max-w-md mx-auto shadow-sm flex items-center justify-center gap-4">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span> 100% Secure F-skatt</span>
          <span className="text-slate-200">|</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Trygg Hansa Protected</span>
        </div>

        {/* HIGH-CONTRAST CONVERSION BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <a 
            href="/" 
            className="w-full sm:w-auto px-8 py-4 bg-[#0D2B5C] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <FaHome className="text-xs" /> Return To Home Page
          </a>
          <a 
            href="/services" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-950 font-extrabold text-sm uppercase tracking-wider rounded-xl border border-slate-200 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            Explore Services <FaArrowRight className="text-xs text-amber-500" />
          </a>
        </div>

        {/* VOICE RESPONSE DISPATCH CALLOUT */}
        <div className="pt-6 border-t border-slate-200 max-w-xs mx-auto">
          <a href="tel:+46XXXXXXXXX" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-950 transition-colors group">
            <FaPhoneAlt className="text-amber-500 text-[10px] group-hover:animate-bounce" /> Call Stockholm Support Hotline
          </a>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
