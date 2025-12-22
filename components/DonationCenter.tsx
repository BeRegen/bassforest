import React from 'react';
import { SectionId } from '../types';
import { ExternalLink, Trees, Info } from 'lucide-react';

const DonationCenter: React.FC = () => {
  return (
    <section
      id={SectionId.DONATE}
      className="py-24 bg-forest-900/20 relative"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* PURPOSE & IMPACT */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            Purpose & Impact
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-400">
            <p className="font-bold text-white">
              Music as a catalyst for a global planting day.
            </p>
            <p>
              Bass Forest exists to amplify awareness and participation around a
              globally coordinated tree planting action taking place on World
              Environment Day, June 5, 2026.
            </p>
            <p>
              The event mobilizes artists, listeners, sponsors and organizations
              worldwide to contribute to a collective effort toward a
              billion-tree milestone, through decentralized planting actions
              across many regions.
            </p>
            <p className="italic">
              Bass Forest does not plant trees directly — it exists to activate
              participation, funding and visibility at global scale.
            </p>
          </div>
        </div>

        {/* TRANSPARENCY */}
        <div className="max-w-4xl mx-auto mb-20 space-y-8">
          <div className="bg-black/40 p-8 rounded-3xl border border-white/10">
            <h4 className="text-white font-display font-bold uppercase tracking-widest text-lg mb-4 flex items-center gap-2">
              <span className="bg-neon-green/20 p-1 rounded-md">
                <Info size={20} className="text-neon-green" />
              </span>
              Where your contribution goes
            </h4>

            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>100% of donations collected during Bass Forest are allocated to tree planting organizations.</p>
              <p>Donations are processed through Monthly Earth Day, the organizing ecosystem behind the event.</p>
              <p>Production, administration and artist compensation are not funded by donations — they are covered through sponsorships and grants.</p>
            </div>
          </div>

          <div className="bg-forest-900/40 p-8 rounded-3xl border border-neon-green/20 text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              $1 can fund approximately 10–15 trees.
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Tree counts vary depending on region, species and planting methodology.
              Every contribution supports real planting efforts coordinated with aligned partners.
            </p>
          </div>
        </div>

        {/* DONATION CENTER */}
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">

          {/* LIVE GOAL BAR */}
          <div className="w-full bg-black/40 p-6 rounded-3xl border border-white/10">
            <h4 className="text-forest-400 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2 justify-center">
              <Trees size={16} /> Live Planting Goal
            </h4>

            <div className="w-full aspect-[4/1] bg-forest-950 rounded-xl overflow-hidden border border-white/5">
              <iframe
                src="https://www.gofundme.com/f/bass-forest-plant-1-billion-trees-on-june-5th-2026/stream-goal-bar?locale=en-US"
                className="w-full h-full border-none"
                title="GoFundMe Stream Goal Bar"
              ></iframe>
            </div>
          </div>

          {/* QR + TEXT */}
          <div className="w-full flex flex-col items-center text-center gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-xs">
              <div className="w-full aspect-square">
                <iframe
                  src="https://www.gofundme.com/f/bass-forest-plant-1-billion-trees-on-june-5th-2026/stream-qr-code?locale=en-US"
                  className="w-full h-full border-none"
                  title="GoFundMe QR Code"
                ></iframe>
              </div>
            </div>

            <div className="space-y-3 max-w-md">
              <h3 className="text-2xl font-display font-bold text-white">
                SCAN TO PLANT
              </h3>
              <p className="text-gray-400">
                Quickly donate from your mobile device using the stream QR code.
              </p>
              <div className="bg-forest-800/50 p-4 rounded-xl border border-white/10">
                <p className="text-sm text-forest-300">
                  Your contribution appears live on the stream during the event!
                </p>
              </div>
            </div>
          </div>

          {/* DONATE BUTTON */}
          <a
            href="https://gofund.me/9c0b8d38e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-white text-forest-950 font-display font-black text-xl py-6 rounded-2xl hover:bg-neon-green transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            DONATE NOW <ExternalLink size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationCenter;
