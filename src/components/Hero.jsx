const stats = [
  { num: '58+', label: 'Years of Legacy' },
  { num: '17',  label: 'Colleges Managed' },
  { num: '95%', label: 'Placement Rate' },
  { num: '200+',label: 'Industry Partners' },
];

export default function Hero() {
  return (
    <section id="about" className="min-h-screen relative flex items-center overflow-hidden pt-[68px]">
      {/* Institutional Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(201,168,76,0.08)_0%,transparent_65%)] pointer-events-none" />
      
      {/* Subtle University Seal Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" stroke="#c9a84c" strokeWidth="0.5">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="82" strokeDasharray="2 2" />
          <path d="M100 30 L100 170 M30 100 L170 100" />
          <text x="100" y="70" textAnchor="middle" fontSize="10" className="serif" fill="#c9a84c">SAPIENTIA</text>
          <text x="100" y="140" textAnchor="middle" fontSize="10" className="serif" fill="#c9a84c">EXCELLENTIA</text>
        </svg>
      </div>

      {/* Decorative floating rings - hidden on mobile */}
      <div className="animate-float hidden lg:flex absolute top-[15%] right-[8%] w-[380px] h-[380px] rounded-full border border-[#c9a84c]/10 items-center justify-center">
        <div className="w-[280px] h-[280px] rounded-full border border-[#c9a84c]/15 flex items-center justify-center">
          <div className="w-[160px] h-[160px] rounded-full bg-[radial-gradient(rgba(201,168,76,0.12),rgba(201,168,76,0.03))] border border-[#c9a84c]/30" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 relative z-10">

        {/* Label row */}
        <div className="animate-fade-up mb-8 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-[#c9a84c]/40"></span>
            <span className="section-label !mb-0">ESTABLISHED 1965</span>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[10px] text-[#c9a84c] tracking-[0.15em] uppercase font-bold">
            UGC Approved University
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-up-2 serif text-[clamp(2.8rem,9vw,7rem)] leading-[0.95] font-semibold max-w-[900px] mb-8 tracking-tight">
          Cultivating <span className="text-[#c9a84c]">Excellence</span>,<br />
          Defining the <span className="italic">Future</span>
        </h1>

        {/* Sub */}
        <p className="animate-fade-up-3 text-lg md:text-[20px] leading-relaxed text-[#f0ebe0]/60 max-w-[550px] mb-12 font-light">
          A premier tech-driven institution in Ahmedabad, dedicated to shaping 
          the next generation of global leaders through rigorous academics and 
          industry-led innovation.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex gap-5 flex-wrap mb-24">
          <a href="#programs" className="btn-gold px-10 py-4.5 rounded-xl text-base no-underline shadow-[0_10px_40px_rgba(201,168,76,0.2)]">
            Academic Programmes
          </a>
          <a href="#about" className="btn-ghost px-10 py-4.5 rounded-xl text-base no-underline">
            University Prospectus
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up-4 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12 max-w-[850px]">
          {stats.map((s, i) => (
            <div key={i} className="group cursor-default">
              <div className="serif text-[clamp(2.2rem,5vw,3.8rem)] font-bold text-[#c9a84c] leading-none transition-transform duration-300 group-hover:-translate-y-1">
                {s.num}
              </div>
              <div className="text-[11px] text-[#f0ebe0]/40 mt-3 tracking-[0.1em] uppercase font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
