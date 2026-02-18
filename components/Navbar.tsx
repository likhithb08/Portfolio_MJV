
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC<{ onAdminClick: () => void }> = ({ onAdminClick }) => {
  return (
    <nav className="fixed top-8 left-0 w-full z-[100] px-6">
      <div className="container mx-auto flex justify-between items-center glass px-6 py-4 rounded-[2rem] border-white/5 max-w-5xl">
        <div className="flex items-center gap-4">
           <div className="text-2xl font-black font-syne tracking-tighter">MJ <span className="text-purple-500">.</span></div>
           <div className="hidden md:block w-[1px] h-6 bg-white/10" />
           <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
             <a href="#work" className="hover:text-white transition-colors">Work</a>
             <a href="#about" className="hover:text-white transition-colors">Process</a>
             <a href="#contact" className="hover:text-white transition-colors">Contact</a>
           </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all shadow-lg">
            Book Campaign
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
