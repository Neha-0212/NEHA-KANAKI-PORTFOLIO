import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Database,
  Code,
  BarChart3,
  BrainCircuit,
  TrendingUp,
  FilterX,
  ArrowRight,
  Download,
  Play,
  Pause,
} from 'lucide-react';

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="pt-24 space-y-24 overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Glow Backgrounds */}
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-brand-primary/10 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-brand-secondary/10 blur-[120px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 border border-brand-primary/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-brand-primary uppercase font-bold">
                Live Data Engine
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforming{' '}
              <span className="text-gradient">Raw Flux</span> into
              Retention Revenue.
            </h1>

            <p className="text-base md:text-lg text-[#cbc4d3] max-w-xl leading-relaxed mx-auto lg:mx-0">
              I build high-performance analytical systems that map the customer
              journey, identifying drop-off nodes and maximizing lifetime value
              through algorithmic precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/projects"
                  className="bg-brand-primary text-brand-bg px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 glow-lavender"
                >
                  View Projects
                  <ArrowRight size={20} />
                </Link>
              </motion.div>

              <a
                href="https://drive.google.com/uc?export=download&id=1yJn0qfsvYEdacS5CzH-sT50fPAC99sXw"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-secondary/30 text-brand-secondary px-8 py-4 rounded-xl font-bold hover:bg-brand-secondary/5 transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 glass-panel rounded-full flex items-center justify-center glow-blue group">
              {/* Orbits */}
              <div className="absolute inset-0 border-2 border-dashed border-brand-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 border border-brand-secondary/20 rounded-full animate-[spin_15s_linear_reverse_infinite]" />

              <div className="text-center z-10">
                <BrainCircuit
                  size={48}
                  className="sm:w-16 sm:h-16 text-brand-primary mx-auto mb-4"
                />

                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-brand-secondary tracking-widest font-bold">
                    CHURN CORE
                  </div>

                  <div className="text-3xl sm:text-4xl font-bold">
                    12.4%
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-2 sm:-right-4 p-3 sm:p-4 glass-card rounded-xl rim-light transform group-hover:-translate-y-2 transition-transform shadow-lg">
                <FilterX
                  size={18}
                  className="text-brand-accent mb-1"
                />
                <div className="text-[10px] font-mono font-bold">
                  FUNNEL
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 sm:-left-4 p-3 sm:p-4 glass-card rounded-xl rim-light transform group-hover:translate-y-2 transition-transform shadow-lg">
                <TrendingUp
                  size={18}
                  className="text-brand-secondary mb-1"
                />
                <div className="text-[10px] font-mono font-bold">
                  REVENUE
                </div>
              </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none -z-20 scale-150">
              <img
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000"
                alt=""
                className="w-full h-full object-contain filter blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audio Section */}
      <section className="bg-brand-surface/30 border-y border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
          <div className="glass-card p-5 rounded-2xl rim-light w-full lg:w-auto flex flex-col sm:flex-row items-center gap-5">
            <audio ref={audioRef} src="/audio/intro.mp4" />

            <button
              onClick={toggleAudio}
              className="w-14 h-14 rounded-full bg-brand-secondary text-brand-bg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
            >
              {isPlaying ? (
                <Pause fill="currentColor" size={22} />
              ) : (
                <Play fill="currentColor" size={22} />
              )}
            </button>

            <div className="flex-1 w-full space-y-3">
              <div className="text-[10px] font-mono tracking-widest text-[#cbc4d3]/60 font-bold uppercase">
                Audio Introduction
              </div>

              <div className="h-1.5 w-full sm:w-64 bg-white/5 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-brand-secondary shadow-[0_0_10px_#3AA0FF] transition-all duration-500 ${
                    isPlaying ? 'w-full animate-pulse' : 'w-1/3'
                  }`}
                />
              </div>
            </div>

            <span className="text-xs font-mono text-[#cbc4d3]">
              0:45
            </span>
          </div>

          <p className="text-base md:text-lg italic text-center lg:text-left text-[#cbc4d3]/60 leading-relaxed font-medium max-w-2xl">
            "Listen to a brief overview of my background, projects,
            and analytical approach."
          </p>
        </div>
      </section>

      {/* Intelligence Stack */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold">
            Intelligence Stack
          </h2>

          <p className="text-[#cbc4d3]/60 mt-2 font-medium">
            Core competencies and technical nodes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card */}
          <div className="glass-card p-8 rounded-2xl rim-light space-y-4 hover:border-brand-primary transition-all group">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
              <Database size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold">SQL</h3>

              <p className="text-sm text-[#cbc4d3]/60 mt-1 font-mono">
                Complex joins & CTEs
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="glass-card p-8 rounded-2xl rim-light space-y-4 hover:border-brand-secondary transition-all group">
            <div className="w-12 h-12 bg-brand-secondary/10 rounded-xl flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
              <Code size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold">Python</h3>

              <p className="text-sm text-[#cbc4d3]/60 mt-1 font-mono">
                Pandas, NumPy, Scikit
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="glass-card p-8 rounded-2xl rim-light space-y-4 hover:border-brand-accent transition-all group">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform">
              <BarChart3 size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold">Power BI</h3>

              <p className="text-sm text-[#cbc4d3]/60 mt-1 font-mono">
                DAX & Real-time Viz
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="glass-card p-8 rounded-2xl rim-light space-y-4 hover:border-brand-primary transition-all group">
            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
              <TrendingUp size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold">RFM Segments</h3>

              <p className="text-sm text-[#cbc4d3]/60 mt-1 font-mono">
                Behavioral Clustering
              </p>
            </div>
          </div>

          {/* Wide Card */}
          <div className="glass-card lg:col-span-2 p-8 md:p-10 rounded-2xl rim-light flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">
                Funnel & Cohort Analysis
              </h3>

              <p className="text-[#cbc4d3]/60 font-medium">
                Mapping drop-offs across user lifecycle phases.
              </p>
            </div>

            <FilterX
              size={48}
              className="text-brand-secondary/40 group-hover:text-brand-secondary transition-colors"
            />
          </div>

          {/* Wide Card */}
          <div className="glass-card lg:col-span-2 p-8 md:p-10 rounded-2xl rim-light flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">
                Product Analytics
              </h3>

              <p className="text-[#cbc4d3]/60 font-medium">
                Connecting feature usage to long-term retention.
              </p>
            </div>

            <BrainCircuit
              size={48}
              className="text-brand-primary/40 group-hover:text-brand-primary transition-colors"
            />
          </div>
        </div>
      </section>
    </div>
  );
}