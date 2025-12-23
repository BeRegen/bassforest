import React from 'react';
import Countdown from './Countdown';
import TreeCounter from './TreeCounter';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HOME} 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/forestfog/1920/1080')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-900/60 to-forest-950"></div>
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        
        {/* Live Tree Counter Badge - Animation moved inside TreeCounter for the badge only */}
        <div className="mb-8">
          <TreeCounter />
        </div>

        {/* Main Title */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-forest-300 drop-shadow-[0_0_25px_rgba(52,211,153,0.3)] mb-4 tracking-tight">
          BASS FOREST
        </h1>

        {/* Date & Tagline */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-forest-300 font-bold tracking-widest text-sm md:text-xl mb-8">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-ping"></span>
            EARTH DAY 2026
          </span>
          <span className="hidden md:inline text-forest-600">•</span>
          <span>12-24 HR VIRTUAL LIVESTREAM</span>
        </div>

        <div className="max-w-3xl space-y-6 mb-10">
          <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
            The first edition of an annual global electronic music festival amplifying World Environment Day through music, community and real-world tree planting.
          </p>
          <p className="text-base md:text-lg text-forest-400 leading-relaxed font-medium">
          Bass Forest brings together electronic artists and listeners worldwide to support a coordinated global tree planting action on June 5, 2026, as part of the largest tree planting day in environmental history, aligned with the Monthly Earth Day ecosystem.
          </p>
        </div>

        {/* CTA */}
        <button className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-green to-emerald-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 w-full h-full blur-xl bg-neon-green opacity-40 group-hover:opacity-60 transition-opacity"></div>
          <span className="relative text-forest-950 font-display font-black text-xl md:text-2xl tracking-widest flex items-center gap-2">
            JOIN THE FOREST
          </span>
        </button>

        {/* Countdown */}
        <div className="mt-12 w-full">
          <p className="text-forest-400 text-sm uppercase tracking-[0.3em] mb-4">Countdown to Impact</p>
          <Countdown />
        </div>

      </div>

      {/* Decorative Gradient Fade at bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-forest-950 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;