import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight text-on-surface">
          Neha Kanaki
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-primary",
                location.pathname === link.path 
                  ? "text-brand-primary font-bold border-b-2 border-brand-primary pb-1"
                  : "text-[#cbc4d3]"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1yJn0qfsvYEdacS5CzH-sT50fPAC99sXw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary/20 hover:bg-brand-primary/30 text-brand-primary border border-brand-primary/20 px-6 py-2 rounded-lg font-bold text-xs transition-all scale-95 active:scale-90"
          >
          Resume
        </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[#cbc4d3]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium py-2",
                  location.pathname === link.path ? "text-brand-primary" : "text-[#cbc4d3]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://drive.google.com/uc?export=download&id=1yJn0qfsvYEdacS5CzH-sT50fPAC99sXw"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary text-brand-bg px-6 py-3 rounded-lg font-bold text-center"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
