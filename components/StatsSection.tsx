
import React from 'react';
import { motion } from 'framer-motion';
import { STATS, CLIENT_LOGOS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-[#0D0D0D]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 rounded-3xl glass border-white/5"
            >
              <div className="text-4xl md:text-6xl font-bold mb-2 flex items-center justify-center">
                {stat.prefix && <span className="text-purple-500 text-3xl mr-1">{stat.prefix}</span>}
                <span className="text-white">{stat.value}</span>
                {stat.suffix && <span className="text-purple-500">{stat.suffix}</span>}
              </div>
              <div className="text-white/40 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative overflow-hidden py-10">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
              <div key={idx} className="mx-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 w-32 flex items-center justify-center">
                <img src={logo} alt="Client" className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: flex;
              width: fit-content;
              animation: marquee 30s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
