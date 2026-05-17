const news = [
  {
    date: 'May 12, 2026',
    title: 'JG University Partners with Global Tech Giant for AI Research Lab',
    category: 'Research'
  },
  {
    date: 'May 05, 2026',
    title: 'Annual Convocation 2026: Celebrating Our Newest Graduates',
    category: 'Campus Life'
  },
  {
    date: 'Apr 28, 2026',
    title: 'New Scholarship Programme Announced for Merit Students',
    category: 'Admissions'
  }
];

const events = [
  {
    day: '22',
    month: 'MAY',
    title: 'International Business Seminar 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium'
  },
  {
    day: '05',
    month: 'JUN',
    title: 'Hackathon: Code for Future 4.0',
    time: 'All Day Event',
    location: 'School of Computing'
  }
];

export default function NewsEvents() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-2 gap-20">
        
        {/* Latest News */}
        <div>
          <div className="section-label mb-8">Latest News</div>
          <div className="flex flex-col gap-8">
            {news.map((item, i) => (
              <div key={i} className="group cursor-pointer border-b border-white/5 pb-8 last:border-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold text-[#c9a84c] tracking-[0.2em] uppercase px-2 py-0.5 rounded bg-[#c9a84c]/10">
                    {item.category}
                  </span>
                  <span className="text-[12px] text-[#f0ebe0]/30 font-medium">{item.date}</span>
                </div>
                <h3 className="serif text-[22px] md:text-[24px] font-bold leading-snug group-hover:text-[#c9a84c] transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
          <a href="#" className="inline-block mt-8 text-[13px] font-bold text-[#c9a84c] border-b border-[#c9a84c]/30 pb-1 hover:border-[#c9a84c] transition-all">
            VIEW ALL NEWS →
          </a>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="section-label mb-8">Upcoming Events</div>
          <div className="flex flex-col gap-6">
            {events.map((event, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-300">
                <div className="flex flex-col items-center justify-center min-w-[70px] h-[70px] rounded-xl bg-[#c9a84c] text-[#050c1a]">
                  <span className="text-[24px] font-black leading-none">{event.day}</span>
                  <span className="text-[10px] font-bold tracking-widest">{event.month}</span>
                </div>
                <div>
                  <h3 className="serif text-[20px] font-bold mb-2 leading-tight">
                    {event.title}
                  </h3>
                  <div className="flex flex-col gap-1 text-[12px] text-[#f0ebe0]/40">
                    <span className="flex items-center gap-1.5">🕒 {event.time}</span>
                    <span className="flex items-center gap-1.5">📍 {event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="inline-block mt-8 text-[13px] font-bold text-[#c9a84c] border-b border-[#c9a84c]/30 pb-1 hover:border-[#c9a84c] transition-all">
            UNIVERSITY CALENDAR →
          </a>
        </div>

      </div>
    </section>
  );
}
