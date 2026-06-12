import Image from "next/image";

const chips = ["Furniture","Home Appliances","Wedding Seervarisai","Easy EMI","Door Delivery"];

export default function Hero() {
  return (
    <section style={{ background:"#3D0C11", color:"white", padding:"4rem 1.25rem 4rem", textAlign:"center", position:"relative", overflow:"hidden" }}>
      <style>{`
        .hero-logo-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.92);
          border-radius: 12px;
          padding: 0.75rem 1.5rem;
          border: 1px solid rgba(212,160,23,0.4);
          margin-bottom: 2rem;
        }
        .hero-logo-wrap img { height: 72px !important; width: auto !important; }
        .hero-h1 { font-family: var(--font-serif); font-weight: 900; line-height: 1.15; margin-bottom: 1.1rem; color: white; font-size: clamp(2rem, 8vw, 3.6rem); }
        .hero-sub { color: #F9A8B0; font-size: clamp(0.9rem, 3.5vw, 1.05rem); line-height: 1.7; margin: 0 auto 2rem; max-width: 560px; }
        .hero-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem; margin-bottom: 2rem; }
        .hero-chip { border: 1px solid rgba(212,160,23,0.35); color: #FAECC4; font-size: 0.78rem; padding: 0.3rem 0.75rem; border-radius: 2px; }
        .hero-btns { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; }
        .hero-btn-primary { background: #D4A017; color: #3D0C11; font-weight: 700; padding: 0.85rem 1.75rem; border-radius: 4px; text-decoration: none; font-size: 0.95rem; white-space: nowrap; }
        .hero-btn-outline { border: 2px solid #D4A017; color: #D4A017; font-weight: 700; padding: 0.85rem 1.75rem; border-radius: 4px; text-decoration: none; font-size: 0.95rem; white-space: nowrap; }

        @media (max-width: 480px) {
          .hero-logo-wrap { padding: 0.6rem 1rem; margin-bottom: 1.5rem; }
          .hero-logo-wrap img { height: 56px !important; }
          .hero-btns { flex-direction: column; align-items: center; }
          .hero-btn-primary, .hero-btn-outline { width: 100%; max-width: 280px; text-align: center; }
        }
      `}</style>

      {/* Diagonal texture */}
      <div aria-hidden style={{ position:"absolute", inset:0, opacity:0.04, backgroundImage:"repeating-linear-gradient(45deg,#D4A017 0px,#D4A017 1px,transparent 1px,transparent 60px)" }} />

      <div style={{ maxWidth:680, margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* Logo on white background so it's visible on dark */}
        <div style={{ display:"flex", justifyContent:"center" }}>
          <div className="hero-logo-wrap">
            <Image
              src="/logo.png"
              alt="DPI Royal Furniture & Home Appliances — Dharmapuri"
              width={220}
              height={88}
              style={{ objectFit:"contain", height:72, width:"auto" }}
              priority
            />
          </div>
        </div>

        <p style={{ color:"#D4A017", fontSize:"0.7rem", letterSpacing:"0.18em", textTransform:"uppercase", fontWeight:600, marginBottom:"1rem" }}>
          Dharmapuri, Tamil Nadu
        </p>

        <h1 className="hero-h1">
          Your Dream Home{" "}
          <span style={{ color:"#D4A017" }}>Starts Here</span>
        </h1>

        <p className="hero-sub">
          Premium Furniture, Home Appliances &amp; complete Marriage Seervarisai packages — all under one roof, at prices families trust.
        </p>

        <div className="hero-chips">
          {chips.map(c => (
            <span key={c} className="hero-chip">✔ {c}</span>
          ))}
        </div>

        <div className="hero-btns">
          <a href="tel:+91XXXXXXXXXX" className="hero-btn-primary">📞 Call Now</a>
          <a href="https://wa.me/91XXXXXXXXXX" className="hero-btn-outline">💬 WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}
