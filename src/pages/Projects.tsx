import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants/projects';

export default function Projects() {
  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-6 space-y-16">
      <section className="space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold tracking-tight"
        >
          Projects Gallery
        </motion.h1>
        <p className="text-xl text-[#cbc4d3]/60 max-w-2xl leading-relaxed">
          High-performance analytics and strategic business intelligence cases focused on technical excellence and measurable impact.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-2xl p-8 flex flex-col lg:flex-row gap-10 group relative overflow-hidden"
          >
            {/* Visual */}
            <div className="w-full lg:w-2/5 aspect-video lg:aspect-auto h-auto rounded-xl overflow-hidden border border-white/5 relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-between py-2">
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-4 py-1.5 bg-brand-surface border border-white/5 rounded-full text-[10px] font-mono font-bold text-brand-secondary tracking-widest uppercase">
                      {tool}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h2>
                
                <p className="text-[#cbc4d3]/70 text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="bg-brand-primary/5 border-l-4 border-brand-primary p-6 rounded-r-xl space-y-1">
                  <div className="text-[10px] font-mono tracking-widest text-brand-primary font-bold uppercase">Impact</div>
                  <p className="text-[#e6e0e9] italic font-medium">"{project.impact}"</p>
                </div>

                {project.metrics && (
                   <div className="grid grid-cols-2 gap-4">
                      {project.metrics.map(m => (
                        <div key={m.label} className="bg-white/5 border border-white/5 p-4 rounded-xl">
                          <div className="text-[10px] font-mono text-brand-accent uppercase font-bold mb-1">{m.label}</div>
                          <div className="text-xl font-bold">{m.value}</div>
                        </div>
                      ))}
                   </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link 
                  to={`/projects/${project.id}`}
                  className="bg-brand-primary text-brand-bg px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  View Case Study <ArrowRight size={18} />
                </Link>
                <button className="border border-brand-secondary/30 text-brand-secondary px-6 py-3 rounded-xl font-bold hover:bg-brand-secondary/5 transition-all flex items-center gap-2">
                  Live Dashboard <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
