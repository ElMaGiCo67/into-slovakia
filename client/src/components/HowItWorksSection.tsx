/* =============================================================
   INTO Slovakia – How It Works Section
   Design: Step flow with amber connectors, dark background
   ============================================================= */

import { motion } from "framer-motion";
import { Phone, PackageCheck, Banknote, Search } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Kontaktujte nás",
    desc: "Zavolajte na naše Call centrum alebo pošlite e-mail. Dohodneme podmienky výkupu.",
  },
  {
    icon: Search,
    step: "02",
    title: "Kontrola náplní",
    desc: "Skontrolujeme, či sú náplne originálne, nepoškodené a nerenovované.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Odovzdanie",
    desc: "Prídeme k vám, prídite k nám, alebo pošlite náplne poštou. Pri väčších objemoch hradíme prepravu.",
  },
  {
    icon: Banknote,
    step: "04",
    title: "Platba ihneď",
    desc: "Hotovosť na mieste, alebo bankový prevod z Tatra Banky. Peniaze posielame ihneď.",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="ako"
      className="py-24 bg-[oklch(0.20_0.04_250)]"
      style={{ clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0 100%)", marginTop: "-3rem", paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4">Postup</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Ako to{" "}
            <span className="text-[oklch(0.78_0.18_70)]">funguje</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[oklch(0.78_0.18_70/0.3)] to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-[oklch(0.24_0.04_250)] border-2 border-[oklch(0.78_0.18_70/0.3)] flex items-center justify-center">
                  <step.icon size={28} className="text-[oklch(0.78_0.18_70)]" />
                </div>
                <span
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[oklch(0.78_0.18_70)] text-[oklch(0.12_0.02_250)] text-xs font-bold flex items-center justify-center"
                  style={{ fontFamily: 'Roboto Mono, monospace' }}
                >
                  {i + 1}
                </span>
              </div>

              <h4
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {step.title}
              </h4>
              <p
                className="text-[oklch(0.60_0.02_250)] text-sm leading-relaxed max-w-[200px]"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <p
            className="text-[oklch(0.65_0.02_250)] text-sm mb-4"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Máte otázky? Naše Call centrum je k dispozícii v pracovných dňoch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+421244455022"
              className="btn-amber px-6 py-2.5 rounded text-sm"
            >
              BA: 02 / 444 550 22
            </a>
            <a
              href="tel:+421335512054"
              className="btn-amber-outline px-6 py-2.5 rounded text-sm"
            >
              TT: 033 / 55 120 54
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
