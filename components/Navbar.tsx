import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'How It Works', id: SectionId.HOW_IT_WORKS },
    { label: 'Lineup', id: SectionId.LINEUP },
    { label: 'FAQ', id: SectionId.FAQ },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-forest-950/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollTo(SectionId.HOME)}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative">
            <img 
              src="https://res.cloudinary.com/dr0weongo/image/upload/v1774791755/copy_of_bflogo_qlxxz7_b7e750.jpg" 
              alt="Bass Forest Logo" 
              className="w-12 h-12 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-neon-green blur-md opacity-40 rounded-full"></div>
          </div>
          <span className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white">
            BASS<span className="text-forest-400">FOREST</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-neon-green transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollTo(SectionId.DONATE)}
            className="bg-white text-forest-950 hover:bg-neon-green hover:text-forest-950 px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          >
            DONATE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-forest-950/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-lg font-semibold text-white py-2 border-b border-white/5"
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => scrollTo(SectionId.DONATE)}
            className="bg-neon-green text-forest-950 w-full py-3 rounded-lg font-bold mt-2"
          >
            JOIN THE FOREST
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;