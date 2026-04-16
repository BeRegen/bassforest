import React from 'react';
import { SectionId } from '../types';

const Lineup: React.FC = () => {
  const artists = [
    
    { 
      name: 'Duke Silver', 
      image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1768913732/duke_ksxguf.jpg', 
      social: 'https://soundcloud.com/thisisdukesilver?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      b2b: {
        name: 'Just B',
        image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1769742815/justb_kuqmo6.jpg',
        social: 'https://soundcloud.com/justbfunky'
      }
    },
    { name: 'DJ Sun Rose', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1768913732/rose_kao6xx.jpg', social: 'https://soundcloud.com/djsunrose' },
    { name: 'THUG CITY', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1768913732/thug_nyn5r0.jpg', social: 'https://soundcloud.com/j-spex-1?ref=clipboard&p=i&c=1&si=F5D69FEC18EC4C73B19687CB7026E786&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    { name: 'DJ Jimeni', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1769303738/IMG-20260124-WA0001_dcw7v4.jpg', social: 'https://soundcloud.com/jimeni' },
    { name: 'Bezz Bunny', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1769264466/bezzbunny_ltxluj.jpg', social: 'https://soundcloud.com/bezzbunny' },
    { name: 'Aphorize', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1773359783/aphorize_zcpfkk.jpg', social: 'https://soundcloud.com/aphorize-music' },
    { name: 'Hippy Mann', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1773360962/hippy_man_rhoril.jpg', social: 'https://soundcloud.com/hippy-mann-802095340' },
    { name: 'XYLLA', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1773360962/xylla_dsnkgn.jpg', social: 'https://soundcloud.com/xyllamusic' },
    { name: 'Macefacekilla', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1774791375/macefacekilla_fmujqr.jpg', social: 'https://on.soundcloud.com/UWAHeLbq5mUFQ39eRv' },
    { name: 'Bassurgence', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1774791375/bassurgence_ifybaa.jpg', social: 'https://on.soundcloud.com/QUnM5UR3LmZShz6NFA' },
    { name: 'Boogie Lights', image: 'https://res.cloudinary.com/dr0weongo/image/upload/q_auto/f_auto/v1775231505/boogie_prm2k3.jpg', social: 'https://on.soundcloud.com/1QV8EkOHkdpS3a1w8h' },
    { name: 'Ali Omshuara', image: 'https://res.cloudinary.com/dr0weongo/image/upload/q_auto/f_auto/v1776344621/aliom_jvdlld.png', social: 'https://soundcloud.com/aliomshuara' },
  ];
  return (
    <section id={SectionId.LINEUP} className="py-24 bg-gradient-to-b from-forest-950 to-forest-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">THE LINEUP</h2>
          <p className="text-gray-400 max-w-xl text-lg">
            A curated mix of global electronic artists — from underground to mid-tier and established names.
          </p>
          <ul className="mt-8 flex flex-col md:flex-row items-center justify-center gap-x-12 gap-y-4 text-sm font-bold text-neon-green uppercase tracking-[0.2em]">
            <li className="flex items-center gap-2">Open artist submissions</li>
            <li className="flex items-center gap-2">Global participation</li>
            <li className="flex items-center gap-2">Community-driven curation</li>
          </ul>
        </div>

        {/* Artist Bubbles */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-start">
          {artists.map((artist, index) => (
            <React.Fragment key={index}>
              {artist.b2b ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-neon-green/5 border border-neon-green/20 rounded-full blur-sm"></div>
                  <div className="relative flex items-center gap-2 md:gap-4 px-6 md:px-8 py-4">
                    <a
                      href={artist.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center group max-w-[120px] md:max-w-[150px] text-center cursor-pointer"
                    >
                      <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-forest-900 border border-white/5 flex items-center justify-center mb-2 md:mb-4 transition-all duration-300 group-hover:bg-forest-800 group-hover:scale-105 overflow-hidden">
                        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover rounded-full scale-125" />
                      </div>
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold leading-tight">{artist.name}</span>
                    </a>
                    
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-sm md:text-lg font-bold text-neon-green uppercase tracking-[0.3em]">b2b</span>
                    </div>
                    
                    <a
                      href={artist.b2b.social}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center group max-w-[120px] md:max-w-[150px] text-center cursor-pointer"
                    >
                      <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-forest-900 border border-white/5 flex items-center justify-center mb-2 md:mb-4 transition-all duration-300 group-hover:bg-forest-800 group-hover:scale-105 overflow-hidden">
                        <img src={artist.b2b.image} alt={artist.b2b.name} className="w-full h-full object-cover rounded-full scale-125" />
                      </div>
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold leading-tight">{artist.b2b.name}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  href={artist.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group max-w-[120px] md:max-w-[150px] text-center cursor-pointer"
                >
                  <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-forest-900 border border-white/5 flex items-center justify-center mb-2 md:mb-4 transition-all duration-300 group-hover:bg-forest-800 group-hover:scale-105 overflow-hidden">
                    <img src={artist.image} alt={artist.name} className="w-full h-full object-cover rounded-full scale-125" />
                  </div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold leading-tight">{artist.name}</span>
                </a>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 text-center">
           <p className="text-lg text-white/80 mb-6">Want to play at Bass Forest?</p>
           <a 
             href="https://forms.gle/p2Yzc8EtzRXzK3wg6"
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block border border-neon-green text-neon-green hover:bg-neon-green hover:text-forest-950 px-10 py-4 rounded-full font-bold transition-all uppercase tracking-[0.2em] text-sm transform hover:scale-105"
           >
             Artist Submission Form
           </a>
        </div>
      </div>
    </section>
  );
};

export default Lineup;