
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { Play, TrendingUp, User, ExternalLink } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  const tags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="work" className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-black font-syne tracking-tighter mb-4">Selected Edits.</h2>
          <p className="text-white/40 max-w-sm">Every second is engineered for retention.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                filter === t ? 'bg-white text-black border-white' : 'bg-transparent text-white/60 border-white/10 hover:border-white/30'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[9/16] group cursor-pointer overflow-hidden rounded-[2rem] bg-zinc-900/50 border border-white/5"
    >
      {/* Background/Video Layer */}
      <div className="absolute inset-0 z-0">
        {project.type === 'direct' ? (
          <video
            autoPlay={isHovered}
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          >
            <source src={project.url} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-black flex items-center justify-center">
             <ExternalLink className="w-12 h-12 text-white/20 group-hover:text-white/40 transition-colors" />
          </div>
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 mb-3">
             <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-purple-500/30">
                {project.tags[0]}
             </div>
             <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-green-500/30 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {project.results}
             </div>
          </div>
          <h3 className="text-2xl font-bold font-syne text-white leading-tight mb-2">{project.title}</h3>
          <div className="flex items-center gap-2 text-white/40 text-sm font-medium">
             <User className="w-4 h-4" /> {project.client}
          </div>
        </div>
      </div>

      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
         <div className="w-16 h-16 rounded-full glass border-white/20 flex items-center justify-center">
            <Play className="w-6 h-6 fill-white" />
         </div>
      </div>
    </motion.div>
  );
};

export default ProjectGrid;
