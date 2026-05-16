import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['About', 'Programs', 'Admissions', 'Campus', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex items-center justify-between px-6 md:px-12 h-[72px] ${
        scrolled 
          ? 'bg-[#050c1a]/95 backdrop-blur-2xl border-b border-white/5 translate-y-0 shadow-2xl' 
          : 'bg-transparent md:translate-y-[40px]'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center text-[20px] font-black text-[#050c1a] serif shadow-lg">
          J
        </div>
        <div className="flex flex-col leading-tight">
          <span className="serif text-[22px] font-bold tracking-tight text-[#f0ebe0]">
            JG University
          </span>
          <span className="text-[9px] tracking-[0.2em] text-[#c9a84c] font-bold uppercase hidden md:block">
            Legacy of Excellence
          </span>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>)}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <a href="#contact" className="btn-ghost hidden md:block px-5 py-2 rounded-lg text-[13px] no-underline">
          Login
        </a>
        <a href="#admissions" className="btn-gold px-[22px] py-[9px] rounded-lg text-[13px] no-underline">
          Apply Now
        </a>
        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-none border-none text-[#f0ebe0] text-[22px] cursor-pointer"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-[#050c1a]/98 backdrop-blur-xl border-b border-white/10 px-8 py-6 flex flex-col gap-5 animate-fade-in">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link text-base"
              onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
          <a href="#contact" className="nav-link text-base border-t border-white/5 pt-4"
            onClick={() => setMenuOpen(false)}>
            Login
          </a>
        </div>
      )}
    </nav>
  );
}
