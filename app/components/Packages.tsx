const packages = [
  { tier:"Silver", tag:"Budget-Friendly", desc:"Everything a new home needs to get started", featured:false,
    items:["Cot & Mattress","Dressing Table","Mixer Grinder","Plastic Chairs"] },
  { tier:"Gold", tag:"Most Popular", desc:"Our most loved complete wedding package", featured:true,
    items:["Premium Cot","Wardrobe","Sofa Set","Washing Machine","Smart TV"] },
  { tier:"Royal", tag:"Complete Luxury", desc:"Nothing left out — the full dream setup", featured:false,
    items:["Premium Bedroom Set","Designer Sofa","Refrigerator","Washing Machine","Smart TV","Kitchen Appliances"] },
];

export default function Packages() {
  return (
    <section id="packages" style={{ background:"#FEF9F0", padding:"5rem 1.5rem" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <p style={{ color:"#A07510", fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", fontWeight:600 }}>Marriage Seervarisai Packages</p>
        <div className="gold-line" />
        <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(1.9rem,3.5vw,2.8rem)", fontWeight:700, color:"#3D0C11", lineHeight:1.2, marginBottom:"0.75rem" }}>
          Complete Wedding Packages<br/>for Every Budget
        </h2>
        <p style={{ color:"#9B1D28", fontSize:"0.97rem", maxWidth:520, marginBottom:"3rem", lineHeight:1.7 }}>
          Curated Seervarisai packages so you can focus on the celebration — not the shopping.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.5rem" }}>
          {packages.map(pkg => (
            <div key={pkg.tier} style={{ borderRadius:8, overflow:"hidden", border: pkg.featured ? "2px solid #D4A017" : "1px solid #FAECC4", background:"white", display:"flex", flexDirection:"column", boxShadow: pkg.featured ? "0 8px 32px rgba(212,160,23,0.15)" : "none" }}>
              <div style={{ padding:"1.5rem", background: pkg.featured ? "#5A0E16" : "#3D0C11" }}>
                {pkg.featured
                  ? <span style={{ display:"inline-block", background:"#D4A017", color:"#3D0C11", fontSize:"0.7rem", fontWeight:700, padding:"0.25rem 0.75rem", borderRadius:2, marginBottom:"0.75rem" }}>★ Most Popular</span>
                  : <span style={{ display:"inline-block", border:"1px solid #7A1520", color:"#FAECC4", fontSize:"0.7rem", padding:"0.25rem 0.75rem", borderRadius:2, marginBottom:"0.75rem" }}>{pkg.tag}</span>
                }
                <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"1.6rem", fontWeight:700, color:"white" }}>{pkg.tier}</h3>
                <p style={{ color: pkg.featured ? "rgba(255,255,255,0.75)" : "#F9A8B0", fontSize:"0.83rem", marginTop:"0.2rem" }}>{pkg.desc}</p>
              </div>
              <div style={{ padding:"1.5rem", flex:1 }}>
                <ul style={{ listStyle:"none", padding:0, margin:0 }}>
                  {pkg.items.map(item => (
                    <li key={item} style={{ display:"flex", alignItems:"center", gap:"0.6rem", fontSize:"0.88rem", color:"#3D0C11", padding:"0.45rem 0", borderBottom:"1px solid #FEF9EC" }}>
                      <span style={{ width:20, height:20, borderRadius:"50%", background:"#FEF9EC", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.65rem", color:"#A07510", fontWeight:700, flexShrink:0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ padding:"0 1.5rem 1.5rem" }}>
                <a href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(`Hello! I am interested in the ${pkg.tier} Seervarisai Package. Please share more details.`)}`}
                  style={{ display:"block", textAlign:"center", padding:"0.7rem", borderRadius:4, fontSize:"0.88rem", fontWeight:700, textDecoration:"none",
                    ...(pkg.featured ? { background:"#D4A017", color:"#3D0C11" } : { border:"1.5px solid #D4A017", color:"#A07510" }) }}>
                  Enquire via WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
