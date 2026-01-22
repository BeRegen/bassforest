import React from 'react';
import { Globe, Mail } from 'lucide-react';

const Sponsors: React.FC = () => {
  const partners = [
    { 
      name: 'Treegens', 
      image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1769091259/treegens_zrifvj.jpg', 
      social: 'https://x.com/thetreegens' 
    },
    { 
      name: 'Silvi Protocol', 
      image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1769091259/silvi_larcxb.jpg', 
      social: 'https://x.com/SilviProtocol' 
    },
  ];

  const categories = [
    "Reforestation & Impact Organizations",
    "Media & Streaming",
    "Technology & Infrastructure",
    "Aligned Sponsors"
  ];

  return (
    <section className="py-24 bg-forest-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 uppercase tracking-tighter">OUR PARTNERS & SPONSORS</h2>
          <div className="w-16 h-1 bg-forest-800 mx-auto rounded-full"></div>
        </div>

        {/* Partner Bubbles */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.social}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group max-w-[150px] text-center cursor-pointer"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-forest-900 border border-white/5 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-forest-800 group-hover:scale-105 overflow-hidden">
                <img src={partner.image} alt={partner.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold leading-tight">{partner.name}</span>
            </a>
          ))}
        </div>

        {/* Category Bubbles */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {categories.map((label, index) => (
            <div key={index} className="flex flex-col items-center group max-w-[150px] text-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-forest-900 border border-white/5 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-forest-800">
                <Globe className="text-white/10 w-8 h-8" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold leading-tight">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center">
          <p className="text-gray-400 font-medium mb-8 text-center">
            Interested in supporting Bass Forest 2026?
          </p>
          
          <div className="w-full max-w-md">
            <div className="p-6 bg-forest-900/30 rounded-2xl border border-white/10 flex items-start gap-4 transition-all hover:border-neon-green/30 hover:bg-forest-900/50">
              <div className="bg-neon-green/20 p-3 rounded-xl">
                <Mail className="text-neon-green w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Direct Contact</h4>
                <a href="mailto:nick@bassforest.earth" className="text-neon-green hover:underline font-mono text-lg break-all">
                  nick@bassforest.earth
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;