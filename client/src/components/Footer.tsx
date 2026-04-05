/* =============================================================
   INTO Slovakia – Footer
   Design: Dark navy footer with amber accents
   ============================================================= */

import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.14_0.04_250)] border-t border-white/8">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-[oklch(0.78_0.18_70)] flex items-center justify-center">
                <span className="text-[oklch(0.12_0.02_250)] font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>IN</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>INTO</span>
                <span className="text-[oklch(0.55_0.02_250)] text-[10px] tracking-widest uppercase" style={{ fontFamily: 'Roboto Mono, monospace' }}>Slovakia s.r.o.</span>
              </div>
            </div>
            <p
              className="text-[oklch(0.55_0.02_250)] text-xs leading-relaxed"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Výkup a predaj tonerov. HP Authorized Partner.
              Bratislava &amp; Trnava od roku 2003.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Služby
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Výkup náplní", href: "#vykup" },
                { label: "Originálne tonery", href: "#tonery" },
                { label: "Servis tlačiarní", href: "#servis" },
                { label: "Ako to funguje", href: "#ako" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-[oklch(0.55_0.02_250)] text-xs hover:text-[oklch(0.78_0.18_70)] transition-colors"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Bratislava */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Bratislava
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin size={12} className="text-[oklch(0.78_0.18_70)] mt-0.5 shrink-0" />
                <span className="text-[oklch(0.55_0.02_250)] text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Krajná 86, 821 04 Bratislava
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-[oklch(0.78_0.18_70)] shrink-0" />
                <a href="tel:+421244455022" className="text-[oklch(0.55_0.02_250)] text-xs hover:text-[oklch(0.78_0.18_70)] transition-colors" style={{ fontFamily: 'Roboto Mono, monospace' }}>
                  02 / 444 550 22
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-[oklch(0.78_0.18_70)] shrink-0" />
                <a href="mailto:gabika@vykuptonerov.sk" className="text-[oklch(0.55_0.02_250)] text-xs hover:text-[oklch(0.78_0.18_70)] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  gabika@vykuptonerov.sk
                </a>
              </li>
            </ul>
          </div>

          {/* Trnava */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Trnava
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin size={12} className="text-[oklch(0.78_0.18_70)] mt-0.5 shrink-0" />
                <span className="text-[oklch(0.55_0.02_250)] text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Mikovíniho 10, budova Nadoku, Trnava
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={12} className="text-[oklch(0.78_0.18_70)] shrink-0" />
                <a href="tel:+421335512054" className="text-[oklch(0.55_0.02_250)] text-xs hover:text-[oklch(0.78_0.18_70)] transition-colors" style={{ fontFamily: 'Roboto Mono, monospace' }}>
                  033 / 55 120 54
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={12} className="text-[oklch(0.78_0.18_70)] shrink-0" />
                <a href="mailto:g.machova@vykuptonerov.sk" className="text-[oklch(0.55_0.02_250)] text-xs hover:text-[oklch(0.78_0.18_70)] transition-colors" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  g.machova@vykuptonerov.sk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[oklch(0.40_0.02_250)] text-xs"
            style={{ fontFamily: 'Roboto Mono, monospace' }}
          >
            © {year} INTO Slovakia s.r.o. · IČO: 36 276 316 · IČ DPH: 2022075913
          </p>
          <p
            className="text-[oklch(0.40_0.02_250)] text-xs"
            style={{ fontFamily: 'Roboto Mono, monospace' }}
          >
            Zapísaná na OS Trnava, Odd. Sro, vl.č. 177667/T
          </p>
        </div>
      </div>
    </footer>
  );
}
