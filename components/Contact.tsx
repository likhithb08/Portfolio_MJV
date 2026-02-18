
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-24 md:py-40 container mx-auto px-6">
      <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px] border-white/5 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Let's Create <br /> Magic.</h2>
          <p className="text-white/40 text-lg mb-12">Ready to transform your vision into a viral reality?</p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block transition-colors group-focus-within:text-purple-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-purple-500 transition-all text-white text-lg"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="group relative">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block transition-colors group-focus-within:text-purple-400">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-purple-500 transition-all text-white text-lg"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="group relative">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block transition-colors group-focus-within:text-purple-400">
                How can I help?
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-purple-500 transition-all text-white text-lg resize-none"
                placeholder="Tell me about your project..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full md:w-auto px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
