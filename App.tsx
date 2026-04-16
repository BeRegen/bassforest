import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import DonationCenter from './components/DonationCenter';
import Lineup from './components/Lineup';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Cookies from './components/Cookies';
import { X } from 'lucide-react';

function App() {
  const [activeLegal, setActiveLegal] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['privacy', 'terms', 'cookies'].includes(hash)) {
        setActiveLegal(hash);
        document.body.style.overflow = 'hidden';
      } else {
        setActiveLegal(null);
        document.body.style.overflow = 'unset';
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const closeLegal = () => {
    window.location.hash = '';
  };

  return (
    <div className="bg-forest-950 min-h-screen text-white selection:bg-neon-green selection:text-black">
      <Navbar />
      
      {/* Hero handles its own entrance animations */}
      <Hero />
      
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      
      <ScrollReveal>
        <DonationCenter />
      </ScrollReveal>
      
      <ScrollReveal>
        <Lineup />
      </ScrollReveal>
      
      <ScrollReveal>
        <Sponsors />
      </ScrollReveal>
      
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      
      <ScrollReveal>
        <ContactForm />
      </ScrollReveal>
      
      <Footer />

      {/* Floating Bubble - COMMENTED FOR FUTURE USE */}
      {/* <a
        href="https://monthlyearthday.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group animate-bounce-slow"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-1 shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(57,255,20,0.6)]">
          <div className="w-full h-full rounded-full bg-forest-950 flex items-center justify-center overflow-hidden">
            <img 
              src="https://res.cloudinary.com/dr0weongo/image/upload/v1752897191/logo_med_rucrke.png" 
              alt="Monthly Earth Day" 
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>
      </a> */}

      {/* Legal Content Overlays */}
      {activeLegal && (
        <div className="fixed inset-0 z-[100] bg-forest-950/95 backdrop-blur-xl overflow-y-auto animate-fade-in">
          <div className="relative min-h-screen">
            <button 
              onClick={closeLegal}
              className="fixed top-8 right-8 bg-neon-green text-forest-950 p-4 rounded-full hover:scale-110 transition-all z-[110] shadow-[0_0_20px_rgba(57,255,20,0.5)] flex items-center justify-center"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <div className="pt-24 pb-12">
              {activeLegal === 'privacy' && <Privacy />}
              {activeLegal === 'terms' && <Terms />}
              {activeLegal === 'cookies' && <Cookies />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;