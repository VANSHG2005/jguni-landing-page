export default function CTA() {
  return (
    <section id="admissions" className="py-24 md:py-40 px-6 md:px-12 relative overflow-hidden bg-[#050c1a]">
      {/* Institutional Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid-bg" />
      
      {/* Academic Dividers */}
      <div className="academic-divider !m-0 absolute top-0 left-0 right-0 opacity-40" />
      <div className="academic-divider !m-0 absolute bottom-0 left-0 right-0 opacity-40" />

      <div className="max-w-[800px] mx-auto text-center relative z-10">
        <div className="section-label">Enrollment 2026—27</div>
        <h2 className="serif text-[clamp(2.8rem,5vw,4.5rem)] font-semibold leading-[1.1] mb-8">
          Begin Your <span className="text-[#c9a84c]">Academic</span><br />
          <span className="italic text-[#c9a84c]">Journey</span>
        </h2>
        <p className="text-[#f0ebe0]/55 text-base md:text-[18px] leading-relaxed mb-12 max-w-[600px] mx-auto font-light">
          Join a community of scholars and innovators. Our admission process is designed 
          to identify potential and foster excellence. Applications for the 
          upcoming academic session are now being processed.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a href="#" className="btn-gold px-12 py-5 rounded-2xl text-[15px] font-bold no-underline shadow-[0_15px_50px_rgba(201,168,76,0.25)] hover:scale-105 transition-transform">
            START APPLICATION
          </a>
          <a href="#" className="btn-ghost px-12 py-5 rounded-2xl text-[15px] font-bold no-underline hover:bg-[#c9a84c]/10">
            REQUEST INFORMATION
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
          {[
            { label: 'ADMISSIONS OFFICE', val: '+91 79 2630 0000' },
            { label: 'EMAIL ENQUIRY', val: 'admissions@jguni.in' },
            { label: 'CAMPUS LOCATION', val: 'Ahmedabad, Gujarat' },
          ].map(item => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="text-[10px] text-[#c9a84c] font-bold tracking-[0.2em]">{item.label}</span>
              <span className="text-[14px] text-[#f0ebe0]/50 font-medium">{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
