import React from 'react';
import { SectionId } from '../types';

const Lineup: React.FC = () => {
  const artists = [
    { name: 'DJ Sun Rose', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1768913732/rose_kao6xx.jpg', social: 'https://soundcloud.com/djsunrose' },
    { name: 'THUG CITY', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1768913732/thug_nyn5r0.jpg', social: 'https://soundcloud.com/j-spex-1?ref=clipboard&p=i&c=1&si=F5D69FEC18EC4C73B19687CB7026E786&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    { name: 'Duke Silver', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1768913732/duke_ksxguf.jpg', social: 'https://soundcloud.com/thisisdukesilver?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    { name: 'Miss Jaedha', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1768913732/miss_icxbgj.jpg', social: 'https://soundcloud.com/missjaedha' },
    { name: 'Bezz Bunny', image: 'https://res.cloudinary.com/dr0weongo/image/upload/v1769264466/bezzbunny_ltxluj.jpg', social: 'https://soundcloud.com/bezzbunny' },
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
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {artists.map((artist, index) => (
            <a
              key={index}
              href={artist.social}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group max-w-[150px] text-center cursor-pointer"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-forest-900 border border-white/5 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-forest-800 group-hover:scale-105 overflow-hidden">
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold leading-tight">{artist.name}</span>
            </a>
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