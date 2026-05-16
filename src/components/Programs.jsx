import { useState } from 'react';

const schools = [
  {
    name: 'JG School of Management',
    desc: 'Developing visionary leaders for the global business landscape through innovation and ethical practice.',
    cat: 'Business',
    items: [
      { icon: '🎓', title: 'MBA',   sub: 'Master of Business Administration', dur: '2 Years', mode: 'Full-time', tag: 'Most Popular' },
      { icon: '📊', title: 'BBA',   sub: 'Bachelor of Business Administration', dur: '3 Years', mode: 'Full-time', tag: '' },
      { icon: '🧬', title: 'iMBA',  sub: 'Integrated MBA — 5 Year Programme', dur: '5 Years', mode: 'Full-time', tag: '' },
    ]
  },
  {
    name: 'JG School of Computing',
    desc: 'Advancing the frontiers of technology through rigorous computer science education and research.',
    cat: 'Technology',
    items: [
      { icon: '🔬', title: 'B.Tech', sub: 'Computer Science & Engineering', dur: '4 Years', mode: 'Full-time', tag: 'New' },
      { icon: '💻', title: 'MCA',   sub: 'Master of Computer Applications', dur: '2 Years', mode: 'Full-time', tag: '' },
      { icon: '🖥️', title: 'BCA',   sub: 'Bachelor of Computer Applications', dur: '3 Years', mode: 'Full-time', tag: '' },
    ]
  },
  {
    name: 'JG School of Commerce',
    desc: 'Fostering financial expertise and professional competence in the evolving world of trade and finance.',
    cat: 'Commerce',
    items: [
      { icon: '📈', title: 'M.Com', sub: 'Master of Commerce', dur: '2 Years', mode: 'Full-time', tag: '' },
      { icon: '📚', title: 'B.Com', sub: 'Bachelor of Commerce', dur: '3 Years', mode: 'Full-time', tag: '' },
    ]
  }
];

const cats = ['All', 'Business', 'Technology', 'Commerce'];

export default function Programs() {
  const [active, setActive] = useState('All');

  const filteredSchools = active === 'All' 
    ? schools 
    : schools.filter(s => s.cat === active);

  return (
    <section id="programs" className="py-20 md:py-32 px-6 md:px-12 relative bg-white/[0.01] border-y border-white/5">
      {/* Grid texture bg */}
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="section-label mb-5">Academic Faculties</div>
          <h2 className="serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.2] mb-6">
            Schools of Excellence
          </h2>
          <div className="flex gap-2 justify-center flex-wrap mb-10">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-6 py-2.5 rounded-full border text-[13px] font-bold tracking-wider cursor-pointer transition-all duration-300 ${
                  active === c
                    ? 'border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]'
                    : 'border-white/10 bg-transparent text-[#f0ebe0]/40 hover:border-white/20'
                }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Schools list */}
        <div className="flex flex-col gap-20 md:gap-32">
          {filteredSchools.map(school => (
            <div key={school.name} className="animate-fade-in">
              <div className="grid lg:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-start mb-12">
                <div>
                  <h3 className="serif text-[32px] md:text-[40px] font-bold text-[#c9a84c] mb-4 leading-tight">
                    {school.name}
                  </h3>
                  <p className="text-[#f0ebe0]/50 text-base leading-relaxed max-w-[400px]">
                    {school.desc}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {school.items.map(p => (
                    <div key={p.title} className="prog-card group !p-8 border-white/5 hover:border-[#c9a84c]/20">
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-[38px]">{p.icon}</div>
                        {p.tag && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-[9px] text-[#c9a84c] font-bold tracking-[0.1em] uppercase">
                            {p.tag}
                          </span>
                        )}
                      </div>
                      <h4 className="serif text-[26px] font-bold mb-1 text-[#f0ebe0] group-hover:text-[#c9a84c] transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-[13px] text-[#f0ebe0]/40 mb-6 leading-relaxed">
                        {p.sub}
                      </p>
                      <div className="flex gap-8 border-t border-white/5 pt-6 mt-auto">
                        <div>
                          <div className="text-[10px] text-[#f0ebe0]/20 font-bold uppercase tracking-widest mb-1">Duration</div>
                          <div className="text-[13px] font-semibold">{p.dur}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-[#f0ebe0]/20 font-bold uppercase tracking-widest mb-1">Mode</div>
                          <div className="text-[13px] font-semibold">{p.mode}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
