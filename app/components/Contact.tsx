"use client";
import { useState } from "react";

const interests = ["Silver Seervarisai Package","Gold Seervarisai Package","Royal Seervarisai Package","Furniture","Home Appliances","Custom Enquiry"];

const inputStyle: React.CSSProperties = {
  width:"100%", background:"rgba(255,255,255,0.06)", border:"1px solid #7A1520",
  borderRadius:4, padding:"0.75rem 1rem", color:"white", fontFamily:"inherit",
  fontSize:"0.87rem", outline:"none"
};

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hello Dharmapuri Royal!\n\nName: ${name}\nPhone: ${phone}\nInterested in: ${interest||"General Enquiry"}\nMessage: ${message}`);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${text}`, "_blank");
  };

  return (
    <section id="contact" style={{ background:"#2a0809", padding:"5rem 1.5rem" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <p style={{ color:"#D4A017", fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", fontWeight:600 }}>Get in Touch</p>
        <div className="gold-line" />
        <h2 style={{ fontFamily:"var(--font-serif)", fontSize:"clamp(1.9rem,3.5vw,2.8rem)", fontWeight:700, color:"white", lineHeight:1.2, marginBottom:"3rem" }}>
          Visit Us or Send<br/>an Enquiry
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"4rem" }}>
          {/* Info */}
          <div>
            <h3 style={{ fontFamily:"var(--font-serif)", fontSize:"1.5rem", color:"#D4A017", fontWeight:700, marginBottom:"1.5rem", lineHeight:1.3 }}>
              Dharmapuri Royal<br/>Furniture &amp; Home Appliances
            </h3>
            {[
              { icon:"📍", content:"Dharmapuri, Tamil Nadu", href:undefined },
              { icon:"📞", content:"+91 XXXXX XXXXX", href:"tel:+91XXXXXXXXXX" },
              { icon:"💬", content:"WhatsApp: +91 XXXXX XXXXX", href:"https://wa.me/91XXXXXXXXXX" },
              { icon:"📧", content:"info@dpiroyal.in", href:"mailto:info@dpiroyal.in" },
              { icon:"🕐", content:"Open All Days", href:undefined },
            ].map(row => (
              <div key={row.content} style={{ display:"flex", alignItems:"flex-start", gap:"0.8rem", marginBottom:"1rem" }}>
                <div style={{ width:36, height:36, background:"rgba(255,255,255,0.06)", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1rem", flexShrink:0 }}>
                  {row.icon}
                </div>
                {row.href
                  ? <a href={row.href} style={{ color:"#D4A017", fontSize:"0.87rem", textDecoration:"none", marginTop:8 }}>{row.content}</a>
                  : <span style={{ color:"#F9A8B0", fontSize:"0.87rem", marginTop:8 }}>{row.content}</span>
                }
              </div>
            ))}
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"0.9rem" }}>
            <input style={inputStyle} type="text" placeholder="Your name" required value={name} onChange={e=>setName(e.target.value)} />
            <input style={inputStyle} type="tel" placeholder="Phone number" required value={phone} onChange={e=>setPhone(e.target.value)} />
            <select style={{ ...inputStyle, cursor:"pointer" }} value={interest} onChange={e=>setInterest(e.target.value)}>
              <option value="" disabled>Interested in...</option>
              {interests.map(i => <option key={i} value={i} style={{ background:"#3D0C11" }}>{i}</option>)}
            </select>
            <textarea style={{ ...inputStyle, minHeight:100, resize:"vertical" }} placeholder="Tell us what you need..." value={message} onChange={e=>setMessage(e.target.value)} />
            <button type="submit" style={{ background:"#D4A017", color:"#3D0C11", fontWeight:700, padding:"0.85rem", borderRadius:4, border:"none", cursor:"pointer", fontSize:"0.92rem", fontFamily:"inherit" }}>
              Send Enquiry via WhatsApp →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
