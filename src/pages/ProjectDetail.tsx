import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Terminal, 
  Database, 
  BarChart3, 
  TrendingUp, 
  ShieldAlert, 
  Users, 
  Zap, 
  Clock, 
  Smartphone,
  ExternalLink,
  Github,
  Download,
  Presentation,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../constants/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div>Project not found</div>;

  const iconMap: Record<string, any> = {
    TrendingUp,
    ShieldAlert,
    Users,
    Zap,
    Clock,
    Smartphone
  };

  return (
    <div className="pt-32 pb-32 max-w-6xl mx-auto px-6 space-y-20">
      <Link to="/projects" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all">
        <ArrowLeft size={20} /> Back to Gallery
      </Link>

      <header className="space-y-8">
        <div className="space-y-2">
          <div className="text-[10px] font-mono tracking-widest text-brand-secondary uppercase font-bold">Case Study: Analytical Insight</div>
          <h1 className="text-6xl font-bold leading-tight">{project.title}</h1>
          <p className="text-3xl font-bold text-brand-accent">{project.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5 font-mono text-xs font-bold text-[#cbc4d3]">
            <Terminal size={14} className="text-brand-secondary" /> Python
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5 font-mono text-xs font-bold text-[#cbc4d3]">
            <Database size={14} className="text-brand-primary" /> SQL
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/5 font-mono text-xs font-bold text-[#cbc4d3]">
            <BarChart3 size={14} className="text-brand-accent" /> Power BI
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Column: Analysis */}
        <section className="md:col-span-8 space-y-10">
           <div className="glass-panel p-10 rounded-2xl rim-light space-y-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[60px]" />
             <h2 className="text-2xl font-bold text-brand-primary uppercase font-mono tracking-tight">Problem Statement</h2>
             <p className="text-xl text-[#cbc4d3]/80 leading-relaxed font-medium">
                {project.caseStudy.problem}
             </p>
           </div>

           <div className="glass-panel p-10 rounded-2xl rim-light space-y-8">
              <h2 className="text-2xl font-bold text-brand-primary uppercase font-mono tracking-tight">Methodology & Approach</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {project.caseStudy.methodology.map(m => (
                  <div key={m.step} className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold font-mono">
                      {m.step}
                    </div>
                    <h3 className="text-lg font-bold">{m.title}</h3>
                    <p className="text-sm text-[#cbc4d3]/60 leading-relaxed font-medium">{m.desc}</p>
                  </div>
                ))}
              </div>
           </div>

           <div className="space-y-8">
              <h2 className="text-3xl font-bold">Critical Insights</h2>
              <div className="grid gap-6">
                 {project.caseStudy.insights.map(insight => {
                   const Icon = iconMap[insight.icon] || TrendingUp;
                   return (
                     <div key={insight.title} className="glass-card p-8 rounded-2xl rim-light flex flex-col sm:flex-row gap-6 hover:shadow-xl transition-all">
                       <div className="p-4 bg-brand-accent/10 rounded-xl flex items-center justify-center shrink-0 w-fit h-fit">
                          <Icon size={24} className="text-brand-accent" />
                       </div>
                       <div className="space-y-2">
                         <h3 className="text-xl font-bold text-white uppercase font-mono tracking-tight">{insight.title}</h3>
                         <p className="text-[#cbc4d3]/70 font-medium leading-relaxed">{insight.desc}</p>
                       </div>
                     </div>
                   );
                 })}
              </div>
           </div>

           {/* Visualization Preview */}
           <div className="space-y-8">
              <h2 className="text-3xl font-bold">Analytical Visualizations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { title: 'Correlation Heatmap', desc: 'Identifying service inter-dependencies', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000' },
                   { title: 'Retention Funnel', desc: 'Visualizing critical drop-off points', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000' }
                 ].map(viz => (
                   <div key={viz.title} className="glass-card p-4 rounded-2xl rim-light group overflow-hidden">
                      <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-white/5">
                        <img 
                          src={viz.img} 
                          alt={viz.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                      <h3 className="text-lg font-bold">{viz.title}</h3>
                      <p className="text-sm text-[#cbc4d3]/50 font-medium">{viz.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Right Column: Impact & Assets */}
        <aside className="md:col-span-4 space-y-10">
          {/* Data Context */}
          <div className="glass-panel p-8 rounded-2xl rim-light space-y-6">
            <h2 className="text-xl font-bold text-brand-secondary uppercase font-mono tracking-tight">Data Context</h2>
            <div className="space-y-4">
               {Object.entries(project.caseStudy.context).map(([key, value]) => (
                 <div key={key} className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-xs font-mono uppercase text-[#cbc4d3]/60 tracking-widest font-bold">{key}</span>
                    <span className="text-sm font-bold text-white">{value}</span>
                 </div>
               ))}
            </div>
          </div>

          {/* Business Impact Card */}
          <div className="bg-brand-accent p-10 rounded-2xl space-y-8 text-brand-bg relative overflow-hidden shadow-[0_0_40px_#FF6FB120]">
             <div className="absolute -right-8 -bottom-8 opacity-10">
               <TrendingUp size={160} />
             </div>
             <div className="space-y-2">
               <h2 className="text-xl font-bold uppercase tracking-tight font-mono">Business Impact</h2>
               <div className="text-6xl font-bold">{project.caseStudy.impactValue}</div>
               <p className="text-xs font-mono font-bold uppercase tracking-tighter opacity-80">{project.caseStudy.impactLabel}</p>
             </div>
             <div className="space-y-4 pt-4 border-t border-brand-bg/10">
                {project.caseStudy.results.map(res => (
                  <div key={res} className="flex items-center gap-3">
                    <CheckCircle2 size={18} />
                    <span className="text-sm font-bold">{res}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Project Assets */}
          <div className="glass-panel p-8 rounded-2xl rim-light space-y-6">
             <h2 className="text-sm font-mono uppercase tracking-widest text-[#cbc4d3]/60 font-bold">Project Assets</h2>
             <div className="space-y-3">
                {[
                  { name: 'Full Documentation', icon: FileText, href: '#' },
                  { name: 'GitHub Repository', icon: Github, href: '' },
                  { name: 'Presentation Deck', icon: Presentation, href: '#' }
                ].map(asset => (
                  <a 
                    key={asset.name} 
                    href={asset.href}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-brand-primary/10 hover:border-brand-primary/20 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <asset.icon size={20} className="text-[#cbc4d3]" />
                      <span className="text-sm font-bold">{asset.name}</span>
                    </div>
                    <ExternalLink size={16} className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FileText(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}
