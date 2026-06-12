import Image from "next/image";

const chips = ["Furniture","Home Appliances","Wedding Seervarisai","Easy EMI","Door Delivery"];

export default function Hero() {
  return (
    <section style={{ background:"#3D0C11", color:"white", padding:"5rem 1.5rem 4.5rem", textAlign:"center", position:"relative", overflow:"hidden" }}>
      {/* Subtle diagonal texture */}
      <div aria-hidden style={{ position:"absolute", inset:0, opacity:0.04,
        backgroundImage:"repeating-linear-gradient(45deg,#D4A017 0px,#D4A017 1px,transparent 1px,transparent 60px)" }} />

      <div style={{ maxWidth:720, margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* Logo centered in hero */}
        <div style={{ display:"flex", justifyContent:"center", marginBottom:"2rem" }}>
          <div style={{ background:"rgba(255,255,255,0.07)", borderRadius:16, padding:"1rem 2rem", border:"1px solid rgba(212,160,23,0.25)", backdropFilter:"blur(4px)" }}>
            <Image
              src="/logo.png"
              alt="DPI Royal Furniture & Home Appliances — Dharmapuri"
              width={220}
              height={88}
              style={{ objectFit:"contain", height:88, width:"auto" }}
              priority
            />
          </div>
        </div>

        <p style={{ color:"#D4A017", fontSize:"0.72rem", letterSpacing:"0.18em", textTransform:"uppercase", fontWeight:600, marginBottom:"1.25rem" }}>
          Dharmapuri, Tamil Nadu
        </p>

        <h1 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(2.2rem,5.5vw,3.6rem)", fontWeight:900, lineHeight:1.15, marginBottom:"1.25rem", color:"white" }}>
          Your Dream Home{" "}
          <span style={{ color:"#D4A017" }}>Starts Here</span>
        </h1>

        <p style={{ color:"#F9A8B0", fontSize:"1.05rem", lineHeight:1.7, marginBottom:"2rem", maxWidth:560, margin:"0 auto 2rem" }}>
          Premium Furniture, Home Appliances &amp; complete Marriage Seervarisai packages — all under one roof, at prices families trust.
        </p>

        {/* Chips */}
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"0.6rem", marginBottom:"2.5rem" }}>
          {chips.map(c => (
            <span key={c} style={{ border:"1px solid #7A1520", color:"#FAECC4", fontSize:"0.78rem", padding:"0.35rem 0.85rem", borderRadius:2 }}>
              ✔ {c}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"1rem" }}>
          <a href="tel:+91XXXXXXXXXX"
            style={{ background:"#D4A017", color:"#3D0C11", fontWeight:700, padding:"0.8rem 2rem", borderRadius:4, textDecoration:"none", fontSize:"0.95rem" }}>
            📞 Call Now
          </a>
          <a href="https://wa.me/91XXXXXXXXXX"
            style={{ border:"2px solid #D4A017", color:"#D4A017", fontWeight:700, padding:"0.8rem 2rem", borderRadius:4, textDecoration:"none", fontSize:"0.95rem" }}>
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
