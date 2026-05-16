export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 bg-brand-bg relative z-10">
      <div className="space-y-2 text-center md:text-left">
        <div className="text-xl font-bold text-brand-primary">Neha Kanaki</div>
        <p className="text-sm font-medium text-[#cbc4d3]/40 max-w-sm">
          © 2024 Neha Kanaki. Built for High-Performance Analytics.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-8 justify-center">
        {['Privacy Policy', 'Terms of Service', 'Site Map'].map((link) => (
          <a
            key={link}
            href="#"
            className="text-xs font-mono font-bold tracking-widest text-[#cbc4d3]/40 hover:text-brand-accent transition-colors uppercase"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
