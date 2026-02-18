
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative group"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img
              src="https://picsum.photos/id/64/800/1000"
              alt="Professional Portrait"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute -top-6 -right-6 w-32 h-32 glass rounded-2xl flex items-center justify-center text-5xl z-20 hidden md:flex">
            🎬
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <span className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-4 block">My Journey</span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            From 1:1 Aspect Ratio to 4K Masterpieces.
          </h2>
          <div className="space-y-6 text-white/60 leading-relaxed text-lg">
            <p>
              I started editing clips on my phone back in 2016, fascinated by the rhythm of music and motion. 
              What began as a hobby in the gym evolved into a obsession with visual storytelling.
            </p>
            <p>
              Today, I bridge the gap between high-end commercial production and the fast-paced world of social media. 
              My mission is to help brands and creators stop the scroll and leave a lasting emotional impact through cinematic editing.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl glass flex-shrink-0 flex items-center justify-center text-purple-500 border border-purple-500/30">
                <span className="font-bold">21'</span>
              </div>
              <div>
                <h4 className="font-bold text-white">Full-Time Studio Launch</h4>
                <p className="text-white/40 text-sm">Founded Aether Visuals, specializing in premium short-form editing.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl glass flex-shrink-0 flex items-center justify-center text-purple-500 border border-purple-500/30">
                <span className="font-bold">23'</span>
              </div>
              <div>
                <h4 className="font-bold text-white">100M Views Milestone</h4>
                <p className="text-white/40 text-sm">Helped clients reach over 100 million combined organic views across IG & TikTok.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
