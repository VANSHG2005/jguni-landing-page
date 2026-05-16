const features = [
  ['UGC Approved', 'Nationally recognised credentials'],
  ['Industry Curriculum', 'Built with employers, not just academics'],
  ['Global Outlook', 'International exchange and ACCA integration'],
  ['Research Culture', 'Active labs across tech and science'],
];

export default function About() {
  return (
    <section id="about-section" className="py-24 md:py-40 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:gap-32 items-center">

        {/* Text side */}
        <div className="order-2 lg:order-1">
          <div className="section-label">University Profile</div>
          <h2 className="serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1] mb-8">
            Decades of <span className="text-[#c9a84c]">Academic</span><br />
            <span className="italic">Heritage</span>
          </h2>
          <p className="text-[#f0ebe0]/60 leading-relaxed mb-6 text-[16px] font-light">
            Founded under the prestigious ASIA Charitable Trust — a cornerstone of Indian 
            education since 1965 — JG University represents the pinnacle of six 
            decades of academic evolution across 17 specialized colleges.
          </p>
          <p className="text-[#f0ebe0]/60 leading-relaxed mb-12 text-[16px] font-light">
            Our pedagogical approach transcends traditional boundaries, integrating 
            research-driven curriculum with real-world professional standards to 
            cultivate leaders who possess both technical mastery and ethical judgment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(([title, desc]) => (
              <div key={title} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:border-[#c9a84c]/30 hover:bg-[#c9a84c]/5 group">
                <div className="text-[#c9a84c] text-[20px] mb-3 group-hover:scale-110 transition-transform origin-left italic font-serif font-bold">0{features.indexOf(features.find(f => f[0] === title)) + 1}.</div>
                <div className="font-bold text-[15px] mb-2 tracking-wide uppercase">{title}</div>
                <div className="text-[12px] text-[#f0ebe0]/40 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual side */}
        <div className="relative order-1 lg:order-2">
          <div className="rounded-[40px] overflow-hidden bg-[#c9a84c]/5 border border-[#c9a84c]/10 aspect-[4/5] flex flex-col items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="text-[100px] opacity-10 group-hover:scale-110 transition-transform duration-700">🏛️</div>
            <div className="serif text-[24px] text-[#c9a84c]/50 italic text-center px-8 relative z-10">
              JG University Main Campus
            </div>
            <div className="text-[11px] text-[#f0ebe0]/20 tracking-[0.3em] font-bold uppercase mt-4 relative z-10">
              Ahmedabad, India
            </div>
          </div>

          {/* Floating badge top-right */}
          <div className="animate-float absolute -top-4 -right-2 md:-top-5 md:-right-5 w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex flex-col items-center justify-center backdrop-blur-md">
            <div className="serif text-[22px] md:text-[24px] font-bold text-[#c9a84c] leading-none">A+</div>
            <div className="text-[9px] text-[#c9a84c]/60 tracking-wider mt-1">RANKING</div>
          </div>

          {/* Year card bottom-left */}
          <div className="absolute -bottom-4 -left-2 md:-bottom-4 md:-left-4 px-5 py-3 rounded-2xl bg-[#050c1a]/95 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="serif text-[20px] md:text-[22px] font-bold text-[#c9a84c]">1965</div>
            <div className="text-[11px] text-[#f0ebe0]/45 mt-0.5">Established</div>
          </div>
        </div>
      </div>
    </section>
  );
}
