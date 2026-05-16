const items = ['MBA','BBA','BCA','MCA','B.Com','M.Com','B.Tech','MSc IT','iMBA','Forensic Science','Quantum Computing','iMCA'];
const doubled = [...items, ...items];

export default function MarqueeTicker() {
  return (
    <div style={{
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(201,168,76,0.04)',
      padding: '14px 0',
    }}>
      <div className="animate-marquee" style={{ display: 'flex' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            whiteSpace: 'nowrap',
            padding: '0 2.5rem',
            fontSize: '12px',
            letterSpacing: '0.18em',
            color: 'rgba(201,168,76,0.65)',
            textTransform: 'uppercase',
            fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: '2rem',
          }}>
            {item}
            <span style={{ opacity: 0.3 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
