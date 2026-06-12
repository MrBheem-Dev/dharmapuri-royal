export default function Footer() {
  return (
    <footer style={{ background:"#3D0C11", borderTop:"1px solid #5A0E16", padding:"1.5rem" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"0.5rem" }}>
        <span style={{ fontFamily:"var(--font-serif)", color:"#D4A017", fontWeight:700, fontSize:"0.95rem" }}>
          Dharmapuri Royal Furniture &amp; Home Appliances
        </span>
        <p style={{ color:"#7A1520", fontSize:"0.78rem" }}>
          © {new Date().getFullYear()} All rights reserved · Dharmapuri, Tamil Nadu · dpiroyal.in
        </p>
      </div>
    </footer>
  );
}
