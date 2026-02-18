
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Maximize2 } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  src: string;
  poster?: string;
}

interface VideoCarouselProps {
  title: string;
  subtitle?: string;
  videos: VideoItem[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ title, subtitle, videos }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [videos]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 overflow-hidden relative">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />
       
       <div className="container mx-auto px-6 mb-12 flex items-end justify-between relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black font-syne tracking-tighter mb-4">{title}</h2>
            {subtitle && <p className="text-white/40 max-w-sm">{subtitle}</p>}
          </div>
          <div className="flex gap-4">
            <button onClick={scrollLeft} className="p-4 rounded-full glass hover:bg-white/10 transition-colors group">
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={scrollRight} className="p-4 rounded-full glass hover:bg-white/10 transition-colors group">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
       </div>

       <motion.div 
         className="cursor-grab active:cursor-grabbing overflow-hidden pl-6 md:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]" 
         ref={carouselRef}
       >
         <motion.div 
           drag="x" 
           dragConstraints={{ right: 0, left: -width }} 
           className="flex gap-8 w-max pr-12"
         >
           {videos.map((video, index) => (
             <VideoCard key={video.id} video={video} index={index} onSelect={() => setSelectedVideo(video)} />
           ))}
         </motion.div>
       </motion.div>

       <AnimatePresence>
         {selectedVideo && (
            <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
         )}
       </AnimatePresence>
    </section>
  );
};

const VideoCard: React.FC<{ video: VideoItem; index: number; onSelect: () => void }> = ({ video, index, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleMouseEnter = () => {
    videoRef.current?.play().catch(() => {}); 
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    if(videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <motion.div 
      className="relative w-[300px] md:w-[400px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 group shadow-2xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
    >
      <video 
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        muted
        loop
        playsInline
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
         <h3 className="text-2xl font-bold font-syne leading-none mb-2">{video.title}</h3>
         <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-400">
           <Play className="w-3 h-3 fill-current" /> Watch Preview
         </div>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 pointer-events-none">
         <div className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white">
            <Maximize2 className="w-4 h-4" />
         </div>
      </div>
    </motion.div>
  );
};

const VideoModal: React.FC<{ video: VideoItem; onClose: () => void }> = ({ video, onClose }) => {
  // Random animation logic
  const animations = [
    { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: 100, opacity: 0 } }, // Slide Left
    { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: -100, opacity: 0 } }, // Slide Right
    { initial: { scale: 0.8, opacity: 0, y: 50 }, animate: { scale: 1, opacity: 1, y: 0 }, exit: { scale: 0.8, opacity: 0, y: 50 } } // Pop Up
  ];
  
  const randomAnim = useRef(animations[Math.floor(Math.random() * animations.length)]).current;

  return (
    <motion.div 
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
    >
      <motion.div
        {...randomAnim}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <video 
          src={video.src} 
          className="w-full h-full object-contain" 
          autoPlay 
          controls 
          playsInline
        />
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-4 bg-black/50 hover:bg-white hover:text-black backdrop-blur-md rounded-full transition-all text-white border border-white/10"
        >
          <Maximize2 className="w-5 h-5 rotate-45" /> {/* Close Icon simulated */}
        </button>
      </motion.div>
    </motion.div>
  );
};
export default VideoCarousel;
