import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPanel() {
  const links = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:nehaakanaki0218@gmail.com',
      label: 'nehaakanaki0218@gmail.com',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/neha-kanaki/',
      label: 'LinkedIn',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Neha-0212',
      label: 'GitHub',
    },
    {
      name: 'Resume',
      icon: FileText,
      href: 'https://drive.google.com/uc?export=download&id=1yJn0qfsvYEdacS5CzH-sT50fPAC99sXw',
      label: 'Resume',
    },
  ];

  return (
    <motion.aside
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      className="fixed bottom-6 right-6 z-40 p-1 space-y-1 bg-brand-surface/60 backdrop-blur-lg rounded-xl w-14 md:w-64 border border-brand-primary/20 shadow-[0_0_20px_rgba(183,156,255,0.1)]"
    >
      <div className="hidden md:block p-3 border-b border-white/5">
        <div className="text-sm font-bold text-brand-primary">
          Contact
        </div>
        <div className="text-[10px] uppercase font-mono tracking-widest text-[#cbc4d3]/60">
          Let's collaborate
        </div>
      </div>

      <div className="flex flex-col gap-1 p-1">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2 rounded-lg text-[#cbc4d3] hover:text-brand-secondary hover:bg-white/5 transition-all duration-300 group"
          >
            <link.icon size={20} className="shrink-0" />

            <span className="hidden md:block text-xs font-mono truncate">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </motion.aside>
  );
}