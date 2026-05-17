export default function TopBar() {
  return (
    <div className="bg-[#c9a84c] text-[#050c1a] text-[11px] md:text-[12px] font-bold py-2.5 px-6 flex justify-center md:justify-between items-center tracking-[0.05em] uppercase border-b border-[#050c1a]/10 relative z-[101]">
      <div className="flex items-center gap-4">
        <span className="hidden md:inline-block border-r border-[#050c1a]/20 pr-4">Admissions 2026-27</span>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#050c1a] animate-pulse"></span>
          Latest News: Application deadline extended to June 30th
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <a href="#contact" className="hover:opacity-70 transition-opacity">Student Portal</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity">Faculty</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity">Alumni</a>
      </div>
    </div>
  );
}
