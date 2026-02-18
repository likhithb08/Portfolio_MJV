
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
      className="project-card relative aspect-video overflow-hidden rounded-2xl cursor-pointer group bg-zinc-900 border border-white/5"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
      />

      {/* Video Preview on Hover */}
      <AnimatePresence>
        {isHovered && project.type === 'direct' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project.url} type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 flex flex-col justify-end p-6 md:p-8">
        <span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.tags[0]}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm font-medium">
          {project.client}
        </p>
      </div>

      <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
        <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
