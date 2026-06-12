"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#why",      label: "Why Us" },
  { href: "#packages", label: "Seervarisai" },
  { href: "#products", label: "Products" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position:"sticky", top:0, zIndex:50, background:"#3D0C11", borderBottom:"1.5px solid #5A0E16" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 1.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", height:70 }}>

        {/* Logo */}
        <Link href="/" style={{ display:"flex", alignItems:"center", textDecoration:"none", flexShrink:0 }}>
          <Image
            src="/logo.png"
            alt="DPI Royal Furniture & Home Appliances"
            width={130}
            height={52}
            style={{ objectFit:"contain", height:52, width:"auto" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul style={{ display:"flex", gap:"2rem", listStyle:"none", margin:0, padding:0 }} className="nav-desktop">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="nav-desktop">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            style={{ background:"#D4A017", color:"#3D0C11", fontWeight:700, fontSize:"0.875rem", padding:"0.5rem 1.25rem", borderRadius:4, textDecoration:"none" }}
          >
            WhatsApp Us
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ background:"none", border:"none", color:"#D4A017", cursor:"pointer", padding:"0.5rem" }}
          className="nav-mobile"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <><line x1="4" y1="4" x2="18" y2="18"/><line x1="18" y1="4" x2="4" y2="18"/></>
              : <><line x1="3" y1="7" x2="19" y2="7"/><line x1="3" y1="12" x2="19" y2="12"/><line x1="3" y1="17" x2="19" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background:"#3D0C11", borderTop:"1px solid #5A0E16", padding:"1rem 1.5rem", display:"flex", flexDirection:"column", gap:"1rem" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color:"#FAECC4", fontSize:"0.875rem", textDecoration:"none" }}>
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            style={{ background:"#D4A017", color:"#3D0C11", fontWeight:700, fontSize:"0.875rem", padding:"0.6rem 1rem", borderRadius:4, textAlign:"center", textDecoration:"none" }}
          >
            WhatsApp Us
          </a>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .nav-mobile  { display: block; }
        }
      `}</style>
    </nav>
  );
}
