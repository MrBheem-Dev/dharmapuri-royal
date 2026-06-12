const categories = [
  { label:"Furniture", emoji:"🛏",
    products:[
      { name:"Cot & Mattress",    img:"https://images.unsplash.com/photo-1505693314120-0d443867891c?w=400&q=80", tag:"Bedroom" },
      { name:"Wardrobe",          img:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80", tag:"Bedroom" },
      { name:"Sofa Set",          img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", tag:"Living Room" },
      { name:"Dining Table",      img:"https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80", tag:"Dining" },
      { name:"Dressing Table",    img:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80", tag:"Bedroom" },
      { name:"Office Furniture",  img:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80", tag:"Office" },
    ]},
  { label:"Home Appliances", emoji:"📺",
    products:[
      { name:"Smart TV",           img:"https://images.unsplash.com/photo-1593359677879-a4bb92f4834a?w=400&q=80", tag:"Entertainment" },
      { name:"Refrigerator",       img:"https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80", tag:"Kitchen" },
      { name:"Washing Machine",    img:"https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80", tag:"Laundry" },
      { name:"Air Conditioner",    img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80", tag:"Comfort" },
      { name:"Mixer Grinder",      img:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&q=80", tag:"Kitchen" },
      { name:"Kitchen Appliances", img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80", tag:"Kitchen" },
    ]},
];
export default function Products() {
  return (
    <section id="products" style={{ background:"#3D0C11", padding:"4rem 1.25rem" }}>
      <style>{`
        .prod-card{background:rgba(255,255,255,0.05);border:1px solid rgba(212,160,23,0.2);border-radius:10px;overflow:hidden;transition:border-color .2s,transform .2s}
        .prod-card:hover{border-color:#D4A017;transform:translateY(-3px)}
        .prod-img{width:100%;height:170px;object-fit:cover;display:block;background:#2a0809}
        .prod-enquire{display:block;text-align:center;margin:0 1rem 1rem;padding:.5rem;border:1.5px solid #D4A017;border-radius:4px;color:#D4A017;font-size:.8rem;font-weight:600;text-decoration:none;transition:background .2s,color .2s}
        .prod-enquire:hover{background:#D4A017;color:#3D0C11}
        .cat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem;margin-top:1.25rem}
        .cat-info-row{display:flex;flex-wrap:wrap;gap:1.25rem;padding:1.25rem 1.75rem}
        .cat-top-band{padding:1.75rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1.25rem}
        .cat-dl-btns{display:flex;flex-direction:column;gap:.6rem;flex-shrink:0;width:100%}
        @media(min-width:640px){.cat-dl-btns{width:auto}}
        @media(max-width:400px){.cat-grid{grid-template-columns:repeat(2,1fr)}}
      `}</style>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <p style={{ color:"#D4A017", fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", fontWeight:600 }}>Our Products</p>
        <div className="gold-line" />
        <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(1.7rem,5vw,2.8rem)", fontWeight:700, color:"white", lineHeight:1.2, marginBottom:"0.75rem" }}>
          Everything Your<br/>Home Needs
        </h2>
        <p style={{ color:"#F9A8B0", fontSize:"0.97rem", maxWidth:520, marginBottom:"2.5rem", lineHeight:1.7 }}>
          From furniture to fully-loaded kitchen appliances — one store, endless choices.
        </p>

        {categories.map(cat => (
          <div key={cat.label} style={{ marginBottom:"3rem" }}>
            <div style={{ display:"flex", alignItems:"center", gap:"0.65rem", marginBottom:"0.4rem" }}>
              <span style={{ fontSize:"1.4rem" }}>{cat.emoji}</span>
              <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"1.35rem", color:"#D4A017", fontWeight:700 }}>{cat.label}</h3>
            </div>
            <div style={{ width:40, height:1.5, background:"#D4A017", marginBottom:"1rem" }} />
            <div className="cat-grid">
              {cat.products.map(p => (
                <div key={p.name} className="prod-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} className="prod-img" loading="lazy" />
                  <div style={{ padding:"0.75rem 1rem 0.4rem" }}>
                    <span style={{ fontSize:"0.65rem", background:"rgba(212,160,23,0.15)", color:"#D4A017", padding:"0.18rem 0.5rem", borderRadius:2, fontWeight:600 }}>{p.tag}</span>
                    <h4 style={{ color:"white", fontSize:"0.9rem", fontWeight:600, marginTop:"0.45rem", marginBottom:"0.65rem" }}>{p.name}</h4>
                  </div>
                  <a href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(`Hello! I am interested in ${p.name}. Please share price and availability.`)}`} className="prod-enquire">
                    Enquire →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Catalogue */}
        <div style={{ marginTop:"0.5rem", border:"1px solid rgba(212,160,23,0.3)", borderRadius:12, overflow:"hidden" }}>
          <div style={{ background:"#D4A017" }} className="cat-top-band">
            <div>
              <p style={{ fontSize:"0.68rem", letterSpacing:"0.14em", textTransform:"uppercase", fontWeight:700, color:"#3D0C11", marginBottom:"0.35rem" }}>Product Catalogue</p>
              <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(1.4rem,4vw,1.8rem)", fontWeight:900, color:"#3D0C11", lineHeight:1.2 }}>
                Download Our Full<br/>Product Catalogue
              </h3>
            </div>
            <div className="cat-dl-btns">
              <a href="/catalogue.pdf" download style={{ background:"#3D0C11", color:"#D4A017", fontWeight:700, padding:"0.8rem 1.5rem", borderRadius:4, textDecoration:"none", fontSize:"0.88rem", textAlign:"center" }}>
                📄 Download PDF Catalogue
              </a>
              <a href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent("Hello! Please share your product catalogue.")}`}
                style={{ background:"white", color:"#3D0C11", fontWeight:700, padding:"0.75rem 1.5rem", borderRadius:4, textDecoration:"none", fontSize:"0.88rem", textAlign:"center" }}>
                💬 Get on WhatsApp
              </a>
            </div>
          </div>
          <div style={{ background:"rgba(255,255,255,0.04)" }} className="cat-info-row">
            {[
              { icon:"📦", text:"Full product list with specs" },
              { icon:"💰", text:"Pricing & EMI options" },
              { icon:"📐", text:"Dimensions & materials" },
              { icon:"🎁", text:"Current offers & bundles" },
            ].map(item => (
              <div key={item.text} style={{ display:"flex", alignItems:"center", gap:"0.45rem" }}>
                <span style={{ fontSize:"1rem" }}>{item.icon}</span>
                <span style={{ color:"#FAECC4", fontSize:"0.82rem", fontWeight:500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
