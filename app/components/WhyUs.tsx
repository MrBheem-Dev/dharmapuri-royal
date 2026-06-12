const features = [
  { icon:"🏅", title:"Premium Quality Products", desc:"Only branded, durable products that stand the test of time in every home." },
  { icon:"💰", title:"Best Price Guarantee", desc:"Competitive pricing you won't find elsewhere across Dharmapuri & Harur." },
  { icon:"🏦", title:"Easy EMI Available", desc:"Flexible monthly payment plans tailored to fit every family's budget." },
  { icon:"🚚", title:"Home Delivery", desc:"Doorstep delivery across Dharmapuri, Salem, Harur & nearby areas." },
  { icon:"🔧", title:"Installation Support", desc:"Professional installation included with every appliance purchase." },
  { icon:"💍", title:"Seervarisai Specialists", desc:"Complete curated wedding packages so your family shops stress-free." },
];

export default function WhyUs() {
  return (
    <section id="why" style={{ background:"white", padding:"5rem 1.5rem", borderTop:"1px solid #FAECC4", borderBottom:"1px solid #FAECC4" }}>
      <style>{`.why-card{border:1px solid #FAECC4;border-radius:8px;padding:1.5rem;background:#FFFDF8;transition:border-color 0.2s}.why-card:hover{border-color:#D4A017}`}</style>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <p style={{ color:"#A07510", fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", fontWeight:600 }}>Why Choose Us</p>
        <div className="gold-line" />
        <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(1.9rem,3.5vw,2.8rem)", fontWeight:700, color:"#3D0C11", lineHeight:1.2, marginBottom:"0.75rem" }}>
          Trusted by Hundreds<br/>of Families
        </h2>
        <p style={{ color:"#9B1D28", fontSize:"0.97rem", maxWidth:520, marginBottom:"3rem", lineHeight:1.7 }}>
          Quality products, honest pricing, and service that families across Dharmapuri have relied on for years.
        </p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1.25rem" }}>
          {features.map(f => (
            <div key={f.title} className="why-card">
              <div style={{ width:40, height:40, background:"#FEF9EC", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", marginBottom:"0.9rem" }}>
                {f.icon}
              </div>
              <h3 style={{ fontWeight:600, color:"#3D0C11", fontSize:"0.93rem", marginBottom:"0.35rem" }}>{f.title}</h3>
              <p style={{ color:"#9B1D28", fontSize:"0.84rem", lineHeight:1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
