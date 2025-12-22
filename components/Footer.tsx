import React, { useState } from 'react';
import { Instagram, Twitter, Youtube, Music2 } from 'lucide-react';

const Footer: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Music2 className="text-neon-green w-8 h-8" />
              <span className="text-2xl font-display font-bold text-white tracking-tighter">
                BASS<span className="text-forest-400">FOREST</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Bass Forest is the first edition of an annual virtual electronic music festival amplifying global tree planting through World Environment Day, aligned with the Monthly Earth Day ecosystem.
            </p>
            
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-green hover:text-black transition-all transform hover:-translate-y-1">
                <Instagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-green hover:text-black transition-all transform hover:-translate-y-1">
                <Twitter size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-green hover:text-black transition-all transform hover:-translate-y-1">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-6 text-sm uppercase tracking-[0.2em]">
              Explore
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#how-it-works" className="hover:text-neon-green transition-colors">Mission</a></li>
              <li><a href="#lineup" className="hover:text-neon-green transition-colors">Lineup</a></li>
              <li><a href="#donate" className="hover:text-neon-green transition-colors">Impact Stats</a></li>
              <li>
                <a
                  href="https://forms.gle/p2Yzc8EtzRXzK3wg6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-green/80 hover:text-neon-green transition-colors"
                >
                  Apply to Perform
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-display font-bold mb-6 text-sm uppercase tracking-[0.2em]">
              Updates
            </h4>
            <p className="text-gray-500 text-sm mb-6">
              Stay informed on the reforestation mission.
            </p>

            {!submitted ? (
              <form
                name="newsletter"
                method="POST"
                data-netlify="true"
                onSubmit={() => setSubmitted(true)}
                className="flex group"
              >
                <input type="hidden" name="form-name" value="newsletter" />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="bg-white/5 border border-white/10 text-white px-5 py-3 rounded-l-xl focus:outline-none focus:border-neon-green w-full text-sm transition-all"
                />

                <button
                  type="submit"
                  className="bg-neon-green text-black font-bold px-6 py-3 rounded-r-xl hover:bg-emerald-400 transition-colors"
                >
                  JOIN
                </button>
              </form>
            ) : (
              <div className="bg-forest-900/60 border border-neon-green/30 rounded-xl px-5 py-4 text-sm text-neon-green">
                Thanks for joining! You’ll receive updates as we build toward June 5, 2026.
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs">
          <p className="mb-4 md:mb-0 italic">
            © 2026 Bass Forest Festival. Seed by beat, beat by seed.
          </p>
          <div className="flex gap-8">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 pt-8">
          Powered by BeRegen ®
        </div>
      </div>
    </footer>
  );
};

export default Footer;
