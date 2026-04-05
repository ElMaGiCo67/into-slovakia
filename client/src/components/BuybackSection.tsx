/* =============================================================
   INTO Slovakia – Buyback Section
   Design: Dark card with amber accents, 3-step process flow
   ============================================================= */

import { motion } from "framer-motion";
import { MapPin, Package, Truck, Euro, CheckCircle2, AlertTriangle } from "lucide-react";

const methods = [
  {
    icon: MapPin,
    step: "01",
    title: "Priamo u zákazníka",
    desc: "V Bratislave a Trnave prídeme k vám. Peniaze vyplácame v hotovosti na mieste.",
    highlight: "Platba v hotovosti",
  },
  {
    icon: Package,
    step: "02",
    title: "Na našej pobočke",
    desc: "Prídite k nám v pracovných dňoch medzi 8:00 a 15:30. Peniaze dostanete ihneď.",
    highlight: "Po–Pia 8:00–15:30",
  },
  {
    icon: Truck,
    step: "03",
    title: "Poštou / kuriérom",
    desc: "Pošlite nám náplne. Pri hodnote výkupu nad 20 EUR hradíme prepravu my. Platba bankovým prevodom.",
    highlight: "Doprava zdarma od 20 €",
  },
];

const conditions = [
  "Náplne musia byť originálne (nie renovované)",
  "Nepoškodené – bez prasklín, zlomených dielov",
  "Štartovacie verzie (starter) nevykupujeme",
  "Originálny štítok výrobcu musí byť neporušený",
  "Blombovacia páska (Brother, Lexmark) nesmie byť poškodená",
];

export default function BuybackSection() {
  return (
    <section id="vykup" className="py-24 bg-[oklch(0.18_0.04_250)]">
      <div className="container">
        {/* Header */}
        <div className="mb-14">
          <div className="section-label mb-4">Výkup náplní</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-white max-w-xl"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Predajte nám{" "}
              <span className="text-[oklch(0.78_0.18_70)]">prázdne náplne</span>
            </h2>
            <p
              className="text-[oklch(0.65_0.02_250)] max-w-sm text-sm leading-relaxed"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Vykupujeme prázdne originálne kazety do laserových aj atramentových tlačiarní.
              Aktuálny cenník výkupu na vyžiadanie.
            </p>
          </div>
        </div>

        {/* 3 methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {methods.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-hover bg-[oklch(0.22_0.04_250)] border border-white/8 rounded-xl p-6 relative overflow-hidden"
            >
              {/* Step number watermark */}
              <span
                className="absolute top-4 right-5 text-5xl font-bold text-white/5 select-none"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {m.step}
              </span>
              <div className="w-10 h-10 rounded-lg bg-[oklch(0.78_0.18_70/0.15)] flex items-center justify-center mb-4">
                <m.icon size={20} className="text-[oklch(0.78_0.18_70)]" />
              </div>
              <h3
                className="text-white font-bold text-lg mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {m.title}
              </h3>
              <p
                className="text-[oklch(0.65_0.02_250)] text-sm leading-relaxed mb-4"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {m.desc}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-[oklch(0.78_0.18_70)] text-xs font-medium"
                style={{ fontFamily: 'Roboto Mono, monospace' }}
              >
                <Euro size={12} />
                {m.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Two-column: image + conditions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden aspect-[4/3]"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663173010095/bPDzUqiYCh8AbPRokUqG8K/buyback-section-ay3YbdGLigucJnUmwSschk.webp"
              alt="Výkup tonerov – odovzdanie náplní"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Conditions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-accent-left mb-6">
              <h3
                className="text-white text-2xl font-bold"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Podmienky výkupu
              </h3>
            </div>
            <ul className="space-y-3 mb-8">
              {conditions.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[oklch(0.78_0.18_70)] mt-0.5 shrink-0" />
                  <span
                    className="text-[oklch(0.80_0.01_250)] text-sm leading-relaxed"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>

            {/* Warning box */}
            <div className="bg-[oklch(0.78_0.18_70/0.08)] border border-[oklch(0.78_0.18_70/0.25)] rounded-lg p-4 flex gap-3">
              <AlertTriangle size={18} className="text-[oklch(0.78_0.18_70)] shrink-0 mt-0.5" />
              <p
                className="text-[oklch(0.80_0.01_250)] text-sm leading-relaxed"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                <strong className="text-white">Máme radi veľké množstvá!</strong> Pri väčších objemoch
                upravíme ceny výkupu individuálne. Neváhajte kontaktovať naše Call centrum.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+421244455022"
                className="btn-amber flex items-center gap-2 px-5 py-2.5 rounded text-sm"
              >
                Zavolajte nám
              </a>
              <a
                href="http://www.vykuptonerov.sk/wp-content/uploads/2026/03/vykup-Marec-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber-outline flex items-center gap-2 px-5 py-2.5 rounded text-sm"
              >
                Cenník výkupu (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
