"use client";
import { useState } from "react";

const interests = ["Silver Seervarisai Package","Gold Seervarisai Package","Royal Seervarisai Package","Furniture","Home Appliances","Custom Enquiry"];

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const inputStyle: React.CSSProperties = {
    width:"100%", background:"rgba(255,255,255,0.06)", border:"1px solid #7A1520",
    borderRadius:4, padding:"0.75rem 1rem", color:"white", fontFamily:"inherit",
    fontSize:"0.9rem", outline:"none",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hello DPI Royal!\n\nName: ${name}\nPhone: ${phone}\nInterested in: ${interest||"General Enquiry"}\nMessage: ${message}`);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <section id="contact" style={{ background:"#2a0809", padding:"4rem 1.25rem" }}>
      <style>{`.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:3rem}@media(max-width:700px){.contact-grid{grid-template-columns:1fr;gap:2rem}}`}</style>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <p style={{ color:"#D4A017", fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", fontWeight:600 }}>Get in Touch</p>
        <div className="gold-line" />
        <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(1.7rem,5vw,2.8rem)", fontWeight:700, color:"white", lineHeight:1.2, marginBottom:"2.5rem" }}>
          Visit Us or Send<br/>an Enquiry
        </h2>
        <div className="contact-grid">
          <div>
            <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"1.35rem", color:"#D4A017", fontWeight:700, marginBottom:"1.5rem", lineHeight:1.35 }}>
              DPI Royal Furniture<br/>&amp; Home Appliances
            </h3>
            {[
              { icon:"📍", content:"Dharmapuri, Tamil Nadu", href:undefined },
              { icon:"📞", content:"+91 XXXXX XXXXX", href:"tel:+91XXXXXXXXXX" },
              { icon:"💬", content:"WhatsApp: +91 XXXXX XXXXX", href:"https://wa.me/91XXXXXXXXXX" },
              { icon:"📧", content:"info@dpiroyal.in", href:"mailto:info@dpiroyal.in" },
              { icon:"🌐", content:"www.dpiroyal.in", href:"https://www.dpiroyal.in" },
              { icon:"🕐", content:"Open All Days", href:undefined },
            ].map(row => (
              <div key={row.content} style={{ display:"flex", alignItems:"flex-start", gap:"0.75rem", marginBottom:"0.9rem" }}>
                <div style={{ width:34, height:34, background:"rgba(255,255,255,0.06)", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.95rem", flexShrink:0, marginTop:2 }}>{row.icon}</div>
                {row.href
                  ? <a href={row.href} style={{ color:"#D4A017", fontSize:"0.87rem", textDecoration:"none", marginTop:8 }}>{row.content}</a>
                  : <span style={{ color:"#F9A8B0", fontSize:"0.87rem", marginTop:8 }}>{row.content}</span>}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"0.85rem" }}>
            <input style={inputStyle} type="text" placeholder="Your name" required value={name} onChange={e=>setName(e.target.value)} />
            <input style={inputStyle} type="tel" placeholder="Phone number" required value={phone} onChange={e=>setPhone(e.target.value)} />
            <select style={{ ...inputStyle, cursor:"pointer" }} value={interest} onChange={e=>setInterest(e.target.value)}>
              <option value="" disabled>Interested in...</option>
              {interests.map(i=><option key={i} value={i} style={{ background:"#3D0C11" }}>{i}</option>)}
            </select>
            <textarea style={{ ...inputStyle, minHeight:90, resize:"vertical" }} placeholder="Tell us what you need..." value={message} onChange={e=>setMessage(e.target.value)} />
            <button type="submit" style={{ background:"#D4A017", color:"#3D0C11", fontWeight:700, padding:"0.85rem", borderRadius:4, border:"none", cursor:"pointer", fontSize:"0.93rem", fontFamily:"inherit" }}>
              Send Enquiry via WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
