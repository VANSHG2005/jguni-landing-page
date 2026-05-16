const footerLinks = [
  ['Programmes', ['MBA','BBA','BCA','MCA','B.Com','M.Com','B.Tech','iMBA']],
  ['University',  ['About Us','Faculty','Research','Campus Life','News & Events']],
  ['Connect',     ['Admissions','Careers','Alumni Network','Contact','Student Portal']],
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 px-6 md:px-12 py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-14">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#c9a84c] to-[#e8c96a] flex items-center justify-center text-[16px] font-extrabold text-[#050c1a] serif">
                J
              </div>
              <span className="serif text-[18px] font-bold">
                JG University
              </span>
            </div>
            <p className="text-[13px] text-[#f0ebe0]/40 leading-relaxed max-w-[280px]">
              A tech-driven university sponsored by the ASIA Charitable Trust,
              shaping careers since 1965.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              {['𝕏','in','f','▶'].map(s => (
                <a key={s} href="#" className="w-[34px] h-[34px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[13px] text-[#f0ebe0]/45 no-underline transition-all duration-250 hover:border-[#c9a84c]/40 hover:text-[#c9a84c]">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map(([title, links]) => (
            <div key={title}>
              <div className="text-[11px] tracking-[0.16em] text-[#f0ebe0]/30 mb-5 font-semibold uppercase">
                {title}
              </div>
              <div className="flex flex-col gap-2.5">
                {links.map(l => (
                  <a key={l} href="#" className="text-[13px] text-[#f0ebe0]/50 no-underline transition-colors duration-250 hover:text-[#c9a84c]">
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <span className="text-[12px] text-[#f0ebe0]/30">
            © 2026 JG University. All rights reserved. UGC Approved.
          </span>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Use','Grievance'].map(l => (
              <a key={l} href="#" className="text-[12px] text-[#f0ebe0]/30 no-underline transition-colors duration-250 hover:text-[#c9a84c]/70">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
