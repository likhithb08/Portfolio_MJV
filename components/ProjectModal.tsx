
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={onClose} />

        <motion.div
          layoutId={`project-${project.id}`}
          className="relative w-full max-w-6xl glass rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row max-h-[90vh]"
        >
          {/* Video Side */}
          <div className="lg:w-2/3 bg-black aspect-video flex items-center justify-center">
            {project.type === 'direct' ? (
              <video
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                <source src={project.url} type="video/mp4" />
              </video>
            ) : (
              <div className="text-white flex flex-col items-center gap-4">
                <p>Instagram Content</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2 rounded-full font-bold">View Reel</a>
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="lg:w-1/3 p-8 lg:p-12 overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="text-purple-400 font-medium uppercase tracking-widest text-[10px] px-2 py-1 glass rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                <h4 className="text-purple-400 text-xs font-bold uppercase mb-2">Impact</h4>
                <p className="text-white font-bold text-xl">{project.results}</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <h4 className="text-white/40 text-xs font-bold uppercase mb-1">Client</h4>
              <p className="text-white text-lg font-bold">{project.client}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
