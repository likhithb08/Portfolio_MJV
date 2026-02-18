
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Instagram, Zap, Award, Mail, ChevronRight, Settings } from 'lucide-react';
import Navbar from './components/Navbar';
import VideoCarousel from './components/VideoCarousel';
// import ProjectGrid from './components/ProjectGrid'; // Kept for reference or future use if needed, but not rendered.
import AdminPanel from './components/AdminPanel';
import { store } from './lib/store';
import { Project } from './types';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    setProjects(store.getProjects());
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const refreshProjects = () => setProjects(store.getProjects());

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white">
      <div className="grain" />
      <Navbar onAdminClick={() => setShowAdmin(true)} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-30 grayscale blur-[2px] scale-105">
            <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-[#050505]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.3em] text-white/60 mb-8 backdrop-blur-md"
          >
            <Zap className="w-3 h-3 text-purple-500" /> Viral Retention Architect
          </motion.div>

          <h1 className="text-6xl md:text-[9rem] font-black font-syne tracking-tighter leading-[0.85] mb-8">
            MAYUR JADAV V<span className="text-purple-500">.</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/60">
             <p className="text-xl md:text-2xl font-light tracking-tight italic">"Editing that Moves Millions."</p>
             <div className="hidden md:block w-12 h-[1px] bg-white/20" />
             <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 text-white font-bold"><Eye className="w-5 h-5"/> 1M+ Views</span>
                <span className="flex items-center gap-1 text-white font-bold"><Award className="w-5 h-5"/> 3+ Brand Collabs</span>
             </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
             <div className="w-[1px] h-20 bg-gradient-to-b from-purple-500 to-transparent flex justify-center">
                <motion.div animate={{ y: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_white]" />
             </div>
          </motion.div>
        </div>
      </section>

      {/* Branding Marquee */}
      <div className="py-12 border-y border-white/5 bg-white/2 overflow-hidden whitespace-nowrap">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="flex gap-20 items-center">
           {[...Array(10)].map((_, i) => (
             <div key={i} className="text-4xl md:text-6xl font-black font-syne opacity-5 flex items-center gap-10">
               MJ <div className="w-4 h-4 rounded-full bg-purple-500" /> MV
             </div>
           ))}
        </motion.div>
      </div>

      {/* Main Carousel - Replaces Grid */}
      <VideoCarousel 
        title="Selected Edits." 
        subtitle="Every second is engineered for retention."
        videos={projects.map(p => ({
          id: p.id,
          title: p.title,
          src: p.url,
          poster: p.thumbnail
        }))} 
      />

      {/* Stats Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Total Reach', value: '1M+', icon: <Eye className="w-8 h-8"/> },
              { label: 'Engagement Rate', value: '8.4%', icon: <Zap className="w-8 h-8"/> },
              { label: 'Happy Clients', value: '50+', icon: <Award className="w-8 h-8"/> }
            ].map((stat, i) => (
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }}
                key={i} className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center"
              >
                 <div className="text-purple-500 mb-6">{stat.icon}</div>
                 <div className="text-5xl font-black font-syne mb-2 tracking-tighter">{stat.value}</div>
                 <div className="text-white/40 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 container mx-auto px-6">
         <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                  <img src="/Images/mayurJadavV.jpeg" className="w-full h-full object-cover" alt="Mayur Jadav V" />
               </div>
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 blur-[100px] -z-1" />
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[100px] -z-1" />
            </div>
            <div className="lg:w-1/2 space-y-8">
               <h2 className="text-5xl md:text-7xl font-black font-syne tracking-tighter">THE MAN <br/> BEHIND THE <span className="text-purple-500">MOMENTS.</span></h2>
               <p className="text-xl text-white/60 leading-relaxed font-light">
                  I don't just put clips together. I study psychology, attention spans, and platform algorithms to ensure your content doesn't just look good—it performs. 
                  Based in the rhythm of visual storytelling, I help creators turn viewers into fans.
               </p>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/80 font-bold">
                     <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-purple-400">01</div>
                     <span>Algorithm-Driven Pace</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80 font-bold">
                     <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-purple-400">02</div>
                     <span>Sound-First Design</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80 font-bold">
                     <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-purple-400">03</div>
                     <span>Retention-Focused Motion</span>
                  </div>
               </div>
               <button className="flex items-center gap-2 bg-white text-black px-10 py-5 rounded-2xl font-bold hover:bg-purple-500 hover:text-white transition-all group">
                  My Journey <ChevronRight className="group-hover:translate-x-1 transition-transform"/>
               </button>
            </div>
         </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#0A0A0A] py-24 border-t border-white/5">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-9xl font-black font-syne tracking-tighter mb-12">LET'S GO <br/> VIRAL.</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-16">
               <a href="https://www.instagram.com/fit_kannadiga26?igsh=MWtvZndzZXViemJrOA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 glass px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
                  <Instagram className="w-6 h-6" /> @fit_kannadiga26
               </a>
               <a href="mailto:jadavvmayur@gmail.com" className="flex items-center gap-3 glass px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
                  <Mail className="w-6 h-6" /> Work with Me
               </a>
            </div>
            <p className="text-white/20 text-sm font-bold uppercase tracking-[0.5em]">© 2025 MJ PRODUCTIONS • EST IN MOTION</p>
         </div>
      </footer>

      {/* Admin Toggle */}
      {/* <button 
        onClick={() => setShowAdmin(true)}
        className="fixed bottom-6 right-6 z-[150] bg-white/5 glass p-4 rounded-full border border-white/10 hover:bg-white/20 transition-all opacity-20 hover:opacity-100"
        aria-label="Admin Settings"
      >
        <Settings className="w-5 h-5" />
      </button> */}

      <AnimatePresence>
        {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} onUpdate={refreshProjects} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
