import React from 'react';

const LiveStream: React.FC = () => {
  return (
    <div id="live-stream-section" className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8 py-12">
      
      {/* VIDEO EMBED */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-black text-neon-green mb-6 tracking-widest text-center">
          LIVE STREAM
        </h2>
        <div className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.2)] border border-neon-green/20">
          <div style={{paddingBottom: '56.25%', position: 'relative', height: 0}}>
            <iframe 
              src="https://vimeo.com/event/5882370/embed" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen 
              style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
            />
          </div>
        </div>
      </div>

      {/* CHAT EMBED */}
      <div>
        <h2 className="text-3xl md:text-4xl font-display font-black text-neon-green mb-6 tracking-widest text-center">
          LIVE CHAT
        </h2>
        <div className="rounded-xl overflow-hidden shadow-[0_0_30px_rgba(57,255,20,0.2)] border border-neon-green/20 w-full">
          <script src="https://minnit.chat/js/embed.js?c=1772345192" defer></script>
          <span 
            style={{
              display: 'block !important',
              width: '100% !important',
              height: '600px !important',
            }} 
            className="minnit-chat-sembed" 
            data-chatname="https://organizations.minnit.chat/633716470669231/c/bassforest?embed" 
            data-style="width:100% !important; height:600px !important; max-height:none !important;"
            data-version="1.55"
          >
            Chat
          </span>
        </div>
      </div>

    </div>
  );
};

export default LiveStream;