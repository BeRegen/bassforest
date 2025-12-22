import React, { useState } from 'react';
import { SectionId } from '../types';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...Object.fromEntries(formData.entries()),
        }),
      });

      setStatus('success');
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('idle');
    }
  };

  return (
    <section
      id={SectionId.CONTACT}
      className="py-24 bg-gradient-to-t from-black to-forest-950"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        {/* Text Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
            GET INVOLVED
          </h2>
          <div className="text-gray-400 text-lg mb-8 leading-relaxed space-y-4">
            <p>Bass Forest is built through collaboration.</p>
            <p>
              Artists, sponsors, partners and supporters are invited to take part
              in shaping the first edition of this annual event.
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 bg-forest-900/20 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

          {status === 'success' ? (
            <div className="h-[400px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-neon-green rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(57,255,20,0.4)]">
                <Send className="text-forest-950 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white">
                Message Sent!
              </h3>
              <p className="text-gray-400 mt-3">
                We'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              {/* Netlify required hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-forest-400 mb-2 uppercase tracking-[0.2em]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full bg-forest-950/50 border border-forest-800 rounded-xl p-4 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-400 mb-2 uppercase tracking-[0.2em]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-forest-950/50 border border-forest-800 rounded-xl p-4 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-forest-400 mb-2 uppercase tracking-[0.2em]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us how you'd like to get involved..."
                  className="w-full bg-forest-950/50 border border-forest-800 rounded-xl p-4 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-white text-forest-950 font-display font-black py-5 rounded-xl hover:bg-neon-green transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-forest-950 border-t-transparent rounded-full animate-spin"></div>
                    SENDING...
                  </span>
                ) : (
                  <>
                    SEND MESSAGE <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
