import { motion } from 'motion/react';
import { 
  Box, 
  Settings, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  LineChart,
  Brain
} from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-6 space-y-32">
      {/* Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-secondary/10 border border-brand-secondary/20 rounded-full">
            <CheckCircle2 size={16} className="text-brand-secondary" />
            <span className="text-[10px] font-mono tracking-widest text-brand-secondary uppercase font-bold">Product Analytics Professional</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Turning Complex User Behavior into <span className="text-brand-primary">Actionable Intelligence.</span>
          </h1>
          
          <p className="text-xl text-[#cbc4d3]/70 leading-relaxed max-w-2xl">
            I specialize in deciphering customer behavior, minimizing churn, and engineering high-conversion funnel optimizations through rigorous data analysis and BI thinking.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-5 aspect-square rounded-3xl overflow-hidden glass-card rim-light relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" 
            alt="Neha Kanaki"
            className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
          
          {/* Label Badge */}
          <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-2xl rim-light flex items-center gap-4">
             <div className="w-10 h-10 bg-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary">
                <LineChart size={20} />
             </div>
             <div>
                <div className="text-[10px] font-mono text-[#cbc4d3]/60 uppercase tracking-widest font-bold">Focus</div>
                <div className="text-sm font-bold">Retention Strategy</div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Grid */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">Technical Stack</h2>
            <p className="text-[#cbc4d3]/60 text-lg font-medium">Optimized for high-performance data environments.</p>
          </div>
          <div className="text-[10px] font-mono tracking-tighter text-brand-primary uppercase font-bold mb-2">Skills & Capabilities</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-2 glass-card p-8 rounded-2xl rim-light space-y-6 hover:shadow-2xl transition-all border-white/5">
            <Box size={32} className="text-brand-secondary" />
            <h3 className="text-2xl font-bold">Analytics</h3>
            <p className="text-[#cbc4d3]/60 font-medium">Deep dive into funnel mechanics and user segmentation.</p>
            <div className="flex flex-wrap gap-2 pt-4">
              {['Funnel', 'Cohort', 'RFM'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 rounded text-[10px] font-mono font-bold text-brand-secondary tracking-widest uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 glass-card p-8 rounded-2xl rim-light space-y-6">
            <Settings size={32} className="text-brand-primary" />
            <h3 className="text-2xl font-bold">Tools</h3>
            <p className="text-[#cbc4d3]/60 font-medium">Industry standard platforms for data visualization.</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-[10px] font-mono font-bold text-brand-primary uppercase tracking-widest">
                <span>Power BI</span>
                <span>Advanced</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[90%] bg-brand-primary" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 border border-white/10 rounded text-[10px] font-mono font-bold text-[#cbc4d3] uppercase">SQL</span>
              <span className="px-3 py-1 border border-white/10 rounded text-[10px] font-mono font-bold text-[#cbc4d3] uppercase">Excel</span>
            </div>
          </div>

          <div className="lg:col-span-2 glass-card p-8 rounded-2xl rim-light space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <Code2 size={32} className="text-brand-accent" />
              <h3 className="text-2xl font-bold">Programming</h3>
              <p className="text-[#cbc4d3]/60 font-medium">Automating workflows and complex data manipulation.</p>
            </div>
            <div className="bg-brand-bg/50 p-4 rounded-xl border border-white/5 font-mono text-xs">
              <code className="text-brand-accent">
                def optimize_retention(data):<br/>
                &nbsp;&nbsp;return insights
              </code>
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-4 glass-card p-10 rounded-2xl rim-light flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-brand-secondary/30 flex items-center justify-center shrink-0">
               <Brain size={40} className="text-brand-secondary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">BI Thinking & Strategy</h3>
              <p className="text-[#cbc4d3]/70 font-medium text-lg leading-relaxed">
                Designing KPI frameworks and retention strategies that align with core business objectives and drive bottom-line results.
              </p>
              <div className="flex gap-8 flex-wrap">
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                   <span className="text-sm font-bold font-mono tracking-widest text-brand-secondary uppercase">KPI Design</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                   <span className="text-sm font-bold font-mono tracking-widest text-brand-secondary uppercase">Retention Strategy</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-2 glass-card p-10 rounded-2xl rim-light bg-brand-primary/5 border-brand-primary/20 space-y-6">
            <Rocket size={32} className="text-brand-primary" />
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="text-lg text-[#cbc4d3]/80 leading-relaxed font-medium">
              Building data-driven decision systems as an <span className="text-brand-primary font-bold">AI + Product Analytics</span> professional.
            </p>
          </div>
        </div>
      </section>

      {/* Data Philosophy */}
      <section className="glass-card p-16 rounded-3xl rim-light relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 blur-[120px] rounded-full -z-10" />
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <h2 className="text-4xl font-bold">Data Philosophy</h2>
               <p className="text-[#cbc4d3]/80 text-xl leading-relaxed font-medium">
                  I believe analytics is not just about counting what happened, but predicting what happens next. By merging funnel optimization with AI-driven insights, I transform static dashboards into dynamic growth engines.
               </p>
               <ul className="space-y-6">
                 {['Customer-Centric Modeling', 'Automated Lifecycle Triggers'].map(item => (
                   <li key={item} className="flex items-center gap-4">
                     <div className="w-2 h-2 rounded-full bg-brand-primary" />
                     <span className="text-lg font-bold text-[#cbc4d3]/80 uppercase font-mono tracking-widest">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="glass-card bg-brand-bg/40 p-4 rounded-2xl border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="Analytical Visualization"
                className="rounded-xl opacity-60 w-full"
              />
            </div>
         </div>
      </section>
    </div>
  );
}
