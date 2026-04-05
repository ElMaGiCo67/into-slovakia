/* =============================================================
   INTO Slovakia – Navbar
   Design: Dark navy sticky nav with amber accent, Syne font
   ============================================================= */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Výkup náplní", href: "#vykup" },
  { label: "Originálne tonery", href: "#tonery" },
  { label: "Servis tlačiarní", href: "#servis" },
  { label: "Ako to funguje", href: "#ako" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.16_0.04_250/0.97)] backdrop-blur-md shadow-[0_2px_24px_oklch(0_0_0/0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded bg-[oklch(0.78_0.18_70)] flex items-center justify-center">
            <span className="text-[oklch(0.12_0.02_250)] font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>IN</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>INTO</span>
            <span className="text-[oklch(0.65_0.02_250)] text-[10px] tracking-widest uppercase" style={{ fontFamily: 'Roboto Mono, monospace' }}>Slovakia</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-[oklch(0.80_0.01_250)] hover:text-[oklch(0.78_0.18_70)] text-sm font-medium transition-colors duration-200"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+421244455022"
            className="flex items-center gap-2 text-[oklch(0.78_0.18_70)] text-sm font-medium hover:text-[oklch(0.85_0.20_70)] transition-colors"
            style={{ fontFamily: 'Roboto Mono, monospace' }}
          >
            <Phone size={14} />
            02 / 444 550 22
          </a>
          <button
            onClick={() => handleNav("#vykup")}
            className="btn-amber px-4 py-2 text-xs rounded"
          >
            Predaj tonery
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.16_0.04_250/0.98)] backdrop-blur-md border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-[oklch(0.80_0.01_250)] hover:text-[oklch(0.78_0.18_70)] py-2.5 text-sm font-medium transition-colors border-b border-white/5"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:+421244455022"
              className="flex items-center gap-2 text-[oklch(0.78_0.18_70)] py-2.5 text-sm font-medium mt-1"
              style={{ fontFamily: 'Roboto Mono, monospace' }}
            >
              <Phone size={14} />
              02 / 444 550 22
            </a>
            <button
              onClick={() => handleNav("#vykup")}
              className="btn-amber px-4 py-2.5 text-xs rounded mt-2 w-full"
            >
              Predaj tonery
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
