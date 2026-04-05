/* =============================================================
   INTO Slovakia – Contact Section
   Design: Two-column branch cards, dark background, amber accents
   ============================================================= */

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Building2, Printer } from "lucide-react";

const branches = [
  {
    city: "Bratislava",
    address: "Krajná 86, 821 04 Bratislava",
    phone: "02 / 444 550 22",
    phoneHref: "tel:+421244455022",
    fax: "02 / 444 550 22",
    hours: "Po–Pia 8:00–15:30",
    contacts: [
      { name: "Ing. Gabriela Slížová", mob: "0915 721 343", email: "gabika@vykuptonerov.sk" },
      { name: "Daniela Zellnerová", mob: "0918 622 056", email: "d.zellnerova@vykuptonerov.sk" },
    ],
    mapQuery: "Krajná+86,+821+04+Bratislava",
  },
  {
    city: "Trnava",
    address: "Mikovíniho 10, budova Nadoku, Trnava",
    phone: "033 / 55 120 54",
    phoneHref: "tel:+421335512054",
    fax: "033 / 55 120 55",
    hours: "Po–Pia 8:00–15:30",
    contacts: [
      { name: "Ing. Gabriela Machová", mob: "0905 317 641", email: "g.machova@vykuptonerov.sk" },
      { name: "Matej Horváth", mob: "0903 142 638", email: "horvath@vykuptonerov.sk" },
    ],
    mapQuery: "Mikovíniho+10,+Trnava",
  },
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-24 bg-[oklch(0.18_0.04_250)]">
      <div className="container">
        {/* Header */}
        <div className="mb-14">
          <div className="section-label mb-4">Kontakt</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Nájdite nás{" "}
            <span className="text-[oklch(0.78_0.18_70)]">v dvoch mestách</span>
          </h2>
        </div>

        {/* Branch cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.city}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-[oklch(0.22_0.04_250)] border border-white/8 rounded-xl overflow-hidden"
            >
              {/* Card header */}
              <div className="bg-gradient-to-r from-[oklch(0.78_0.18_70/0.12)] to-transparent border-b border-white/8 px-6 py-4 flex items-center gap-3">
                <Building2 size={18} className="text-[oklch(0.78_0.18_70)]" />
                <h3
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Pobočka {branch.city}
                </h3>
              </div>

              <div className="p-6">
                {/* Address & hours */}
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-[oklch(0.78_0.18_70)] mt-0.5 shrink-0" />
                    <span
                      className="text-[oklch(0.80_0.01_250)] text-sm"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {branch.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={15} className="text-[oklch(0.78_0.18_70)] shrink-0" />
                    <a
                      href={branch.phoneHref}
                      className="text-[oklch(0.80_0.01_250)] text-sm hover:text-[oklch(0.78_0.18_70)] transition-colors"
                      style={{ fontFamily: 'Roboto Mono, monospace' }}
                    >
                      {branch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Printer size={15} className="text-[oklch(0.55_0.02_250)] shrink-0" />
                    <span
                      className="text-[oklch(0.55_0.02_250)] text-sm"
                      style={{ fontFamily: 'Roboto Mono, monospace' }}
                    >
                      Fax: {branch.fax}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={15} className="text-[oklch(0.78_0.18_70)] shrink-0" />
                    <span
                      className="text-[oklch(0.78_0.18_70)] text-sm font-medium"
                      style={{ fontFamily: 'Roboto Mono, monospace' }}
                    >
                      {branch.hours}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/8 mb-5" />

                {/* Contacts */}
                <div className="space-y-4">
                  {branch.contacts.map((c, j) => (
                    <div key={j} className="flex flex-col gap-1">
                      <span
                        className="text-white text-sm font-medium"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {c.name}
                      </span>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={`tel:+421${c.mob.replace(/\s/g, "").replace(/^0/, "")}`}
                          className="flex items-center gap-1.5 text-[oklch(0.65_0.02_250)] text-xs hover:text-[oklch(0.78_0.18_70)] transition-colors"
                          style={{ fontFamily: 'Roboto Mono, monospace' }}
                        >
                          <Phone size={11} />
                          {c.mob}
                        </a>
                        <a
                          href={`mailto:${c.email}`}
                          className="flex items-center gap-1.5 text-[oklch(0.65_0.02_250)] text-xs hover:text-[oklch(0.78_0.18_70)] transition-colors"
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          <Mail size={11} />
                          {c.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map link */}
                <a
                  href={`https://maps.google.com/?q=${branch.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center gap-2 text-[oklch(0.78_0.18_70)] text-xs font-medium hover:text-[oklch(0.85_0.20_70)] transition-colors"
                  style={{ fontFamily: 'Roboto Mono, monospace' }}
                >
                  <MapPin size={13} />
                  Zobraziť na mape →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company info + postal address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Postal address */}
          <div className="bg-[oklch(0.22_0.04_250)] border border-white/8 rounded-xl p-6">
            <div className="section-label mb-4">Zasielacia adresa</div>
            <p
              className="text-white font-bold text-base mb-1"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              INTO Slovakia s.r.o.
            </p>
            <p
              className="text-[oklch(0.80_0.01_250)] text-sm mb-4"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Krajná 86, 821 04 Bratislava
            </p>
            <div className="bg-[oklch(0.78_0.18_70/0.08)] border border-[oklch(0.78_0.18_70/0.2)] rounded-lg p-3">
              <p
                className="text-[oklch(0.80_0.01_250)] text-xs leading-relaxed"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Pri hodnote výkupu nad <strong className="text-[oklch(0.78_0.18_70)]">20 €</strong> zabezpečíme
                a uhradíme prepravu kurierom na naše náklady.
              </p>
            </div>
          </div>

          {/* Company details */}
          <div className="bg-[oklch(0.22_0.04_250)] border border-white/8 rounded-xl p-6">
            <div className="section-label mb-4">Firemné údaje</div>
            <div className="space-y-2">
              {[
                ["Obchodné meno", "INTO Slovakia s.r.o."],
                ["Fakturačná adresa", "Javorová 22, 917 05 Trnava"],
                ["IČO", "36 276 316"],
                ["IČ DPH", "2022075913"],
                ["Register", "OS Trnava, Odd. Sro, vl.č. 177667/T"],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span
                    className="text-[oklch(0.55_0.02_250)] text-xs w-36 shrink-0"
                    style={{ fontFamily: 'Roboto Mono, monospace' }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-[oklch(0.80_0.01_250)] text-sm"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
