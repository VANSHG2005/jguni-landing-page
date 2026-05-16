const testimonials = [
  {
    name: 'Priya Sharma', prog: 'MBA 2024', avatar: 'PS',
    text: 'JG University transformed my career trajectory. The industry connections and practical curriculum gave me skills that my competitors simply didn\'t have.',
  },
  {
    name: 'Rohan Mehta', prog: 'BCA 2023', avatar: 'RM',
    text: 'The tech labs and faculty mentorship here are exceptional. I landed a role at a top MNC six months before graduating thanks to campus placements.',
  },
  {
    name: 'Ananya Patel', prog: 'B.Com 2024', avatar: 'AP',
    text: 'The ACCA integration in the commerce programme is a game-changer. I was sitting professional exams while still in university — something no other college offered.',
  },
  {
    name: 'Vikram Desai', prog: 'iMBA 2025', avatar: 'VD',
    text: 'The five-year integrated programme prepared me in a way a standalone MBA never could have. Real projects, real clients, real responsibility from year one.',
  },
];

export default function Testimonials() {
  return (
    <section id="campus" className="py-24 md:py-40 px-6 md:px-12 max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-[600px]">
          <div className="section-label">Alumni & Student Impact</div>
          <h2 className="serif text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-[1.1]">
            Global <span className="text-[#c9a84c]">Ambassadors</span> of<br />
            <span className="italic text-[#c9a84c]">Success</span>
          </h2>
        </div>
        <div className="text-[#f0ebe0]/40 text-[14px] max-w-[300px] leading-relaxed italic border-l border-[#c9a84c]/30 pl-6">
          "Our graduates are not just employees; they are innovators and ethical leaders in their respective fields."
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {testimonials.map((t) => (
          <div key={t.name} className="prospectus-card flex flex-col md:flex-row gap-8 items-start">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center text-[24px] md:text-[28px] font-black text-[#050c1a] serif shadow-xl">
                {t.avatar}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-[#050c1a] border border-[#c9a84c]/30 flex items-center justify-center text-[14px]">
                🎓
              </div>
            </div>

            <div className="flex flex-col">
              <div className="text-[32px] text-[#c9a84c]/20 font-serif leading-none mb-4">"</div>
              <p className="text-[#f0ebe0]/70 leading-relaxed text-[16px] mb-8 font-light italic">
                {t.text}
              </p>
              <div className="mt-auto">
                <div className="font-bold text-[16px] tracking-wide text-[#f0ebe0]">{t.name.toUpperCase()}</div>
                <div className="text-[11px] text-[#c9a84c] font-bold tracking-[0.2em] mt-1 uppercase">Class of {t.prog}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
