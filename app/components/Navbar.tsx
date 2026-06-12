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
      <style>{`
        .nav-logo { height: 48px; width: auto; }
        .nav-links-desktop { display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0; }
        .nav-cta-desktop { display: flex; }
        .nav-hamburger { display: none; }

        @media (max-width: 860px) {
          .nav-links-desktop { display: none; }
          .nav-cta-desktop   { display: none; }
          .nav-hamburger     { display: block; }
          .nav-logo          { height: 40px; }
        }

        .nav-link {
          position: relative; color: #c9a87a; font-size: 0.875rem;
          text-decoration: none; transition: color 0.2s; white-space: nowrap;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: #D4A017; transition: width 0.2s;
        }
        .nav-link:hover { color: #D4A017; }
        .nav-link:hover::after { width: 100%; }
      `}</style>

      {/* Main bar */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 1.25rem", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>

        {/* Logo */}
        <Link href="/" style={{ display:"flex", alignItems:"center", textDecoration:"none", flexShrink:0 }}>
          <Image
            src="/logo.png"
            alt="DPI Royal Furniture & Home Appliances"
            width={150}
            height={60}
            className="nav-logo"
            style={{ objectFit:"contain" }}
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="nav-links-desktop">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-link">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="nav-cta-desktop">
          <a href="https://wa.me/91XXXXXXXXXX"
            style={{ background:"#D4A017", color:"#3D0C11", fontWeight:700, fontSize:"0.875rem", padding:"0.5rem 1.25rem", borderRadius:4, textDecoration:"none", whiteSpace:"nowrap" }}>
            WhatsApp Us
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-hamburger"
          style={{ background:"none", border:"none", color:"#D4A017", cursor:"pointer", padding:"0.5rem", lineHeight:0 }}
          aria-label="Toggle menu"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open
              ? <><line x1="5" y1="5" x2="21" y2="21"/><line x1="21" y1="5" x2="5" y2="21"/></>
              : <><line x1="4" y1="8"  x2="22" y2="8" /><line x1="4" y1="14" x2="22" y2="14"/><line x1="4" y1="20" x2="22" y2="20"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background:"#2a0809", borderTop:"1px solid #5A0E16", padding:"1.25rem 1.5rem", display:"flex", flexDirection:"column", gap:"0" }}>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color:"#FAECC4", fontSize:"1rem", textDecoration:"none", padding:"0.85rem 0", borderBottom: i < links.length - 1 ? "1px solid rgba(212,160,23,0.1)" : "none", fontWeight:500 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+91XXXXXXXXXX"
            style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem", marginTop:"1rem", background:"transparent", border:"1.5px solid #D4A017", color:"#D4A017", fontWeight:700, fontSize:"0.95rem", padding:"0.75rem 1rem", borderRadius:4, textDecoration:"none" }}
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem", marginTop:"0.6rem", background:"#D4A017", color:"#3D0C11", fontWeight:700, fontSize:"0.95rem", padding:"0.75rem 1rem", borderRadius:4, textDecoration:"none" }}
          >
            💬 WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
