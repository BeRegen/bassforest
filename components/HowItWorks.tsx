import React from 'react';
import { SectionId } from '../types';
import { MonitorPlay, Sprout, Globe2 } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MonitorPlay className="w-12 h-12 text-neon-blue" />,
      title: 'Watch & Participate',
      desc: 'Join the global electronic music livestream and participate from anywhere in the world.',
    },
    {
      icon: <Sprout className="w-12 h-12 text-neon-green" />,
      title: 'Donate to Plant',
      desc: 'Donations collected during the event are routed through the Monthly Earth Day infrastructure and allocated to aligned reforestation organizations.',
    },
    {
      icon: <Globe2 className="w-12 h-12 text-emerald-400" />,
      title: 'Global Planting Day',
      desc: 'On June 5, 2026, planting actions take place worldwide as part of a coordinated, decentralized effort.',
    },
  ];

  return (
    <section
      id={SectionId.HOW_IT_WORKS}
      className="relative isolate z-0 py-24 bg-forest-950"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            HOW IT WORKS
          </h2>
          <div className="w-24 h-1 bg-neon-green mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border border-white/5
                bg-forest-900/40
                p-8
                transition-all duration-300
                hover:-translate-y-2
                hover:border-neon-green/30
              "
            >
              {/* Decorative glow (confined) */}
              <div className="pointer-events-none absolute -right-12 -top-12 w-40 h-40 rounded-full bg-neon-green/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 rounded-full border border-white/10 bg-forest-950 p-4 shadow-xl transition-transform group-hover:scale-110">
                  {step.icon}
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
