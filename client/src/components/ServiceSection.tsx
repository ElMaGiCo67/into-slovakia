/* =============================================================
   INTO Slovakia – Printer Service Section
   Design: Dark with amber pricing cards, service details
   ============================================================= */

import { motion } from "framer-motion";
import { Wrench, Car, Building2, AlertCircle } from "lucide-react";

const serviceItems = [
  {
    icon: Building2,
    title: "Diagnostika na prevádzke",
    price: "32 €",
    priceNote: "s DPH",
    desc: "Prineste tlačiareň k nám. Cena platí iba v prípade, že sa rozhodnete tlačiareň neopraviť.",
  },
  {
    icon: Car,
    title: "Výjazd s diagnostikou",
    price: "74 €",
    priceNote: "s DPH",
    desc: "Technik príde priamo k vám. Zahŕňa dopravu a diagnostiku na mieste.",
  },
];

const brands = ["HP", "Canon"];

export default function ServiceSection() {
  return (
    <section
      id="servis"
      className="py-24 bg-[oklch(0.18_0.04_250)]"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-14">
          <div className="section-label mb-4">Servis tlačiarní</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-white max-w-xl"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Opravíme vašu{" "}
              <span className="text-[oklch(0.78_0.18_70)]">tlačiareň</span>
            </h2>
            <p
              className="text-[oklch(0.65_0.02_250)] max-w-sm text-sm leading-relaxed"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Servis laserových tlačiarní v Bratislave a Trnave do 24 hodín od nahlásenia.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: image + brand badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden mb-6 aspect-[4/3]">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663173010095/bPDzUqiYCh8AbPRokUqG8K/printer-service-3TsoFYpPC4CTsLi6HGqMW6.webp"
                alt="Servis laserových tlačiarní – technik"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Brands */}
            <div className="bg-[oklch(0.22_0.04_250)] border border-white/8 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Wrench size={16} className="text-[oklch(0.78_0.18_70)]" />
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Servisujeme značky
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="bg-[oklch(0.78_0.18_70/0.15)] border border-[oklch(0.78_0.18_70/0.3)] text-[oklch(0.78_0.18_70)] px-3 py-1 rounded text-sm font-bold"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {b}
                  </span>
                ))}
              </div>
              <p
                className="text-[oklch(0.60_0.02_250)] text-xs leading-relaxed"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Okrajovo podľa dostupnosti náhradných dielov zabezpečujeme servis aj ostatných značiek.
                Atramentové tlačiarne neopravujeme.
              </p>
            </div>
          </motion.div>

          {/* Right: pricing cards + info */}
          <div>
            <div className="space-y-4 mb-6">
              {serviceItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="card-hover bg-[oklch(0.22_0.04_250)] border border-white/8 rounded-xl p-6 flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[oklch(0.78_0.18_70/0.12)] flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-[oklch(0.78_0.18_70)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4
                        className="text-white font-bold text-base"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {item.title}
                      </h4>
                      <div className="text-right shrink-0">
                        <span
                          className="text-[oklch(0.78_0.18_70)] font-bold text-xl"
                          style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                          {item.price}
                        </span>
                        <span
                          className="text-[oklch(0.55_0.02_250)] text-xs ml-1"
                          style={{ fontFamily: 'Roboto Mono, monospace' }}
                        >
                          {item.priceNote}
                        </span>
                      </div>
                    </div>
                    <p
                      className="text-[oklch(0.65_0.02_250)] text-sm leading-relaxed"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info box */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[oklch(0.22_0.04_250)] border border-white/8 rounded-xl p-5 flex gap-3"
            >
              <AlertCircle size={18} className="text-[oklch(0.78_0.18_70)] shrink-0 mt-0.5" />
              <div>
                <p
                  className="text-[oklch(0.80_0.01_250)] text-sm leading-relaxed"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  Pokazila sa vám tlačiareň? Zasekol sa papier? Kopírka hlási výmenu dielu?
                  Zavolajte nám – pomôžeme problém odstrániť do 24 hodín.
                </p>
              </div>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+421244455022"
                className="btn-amber flex items-center gap-2 px-5 py-2.5 rounded text-sm"
              >
                Nahlásiť servis
              </a>
              <a
                href="tel:+421335512054"
                className="btn-amber-outline flex items-center gap-2 px-5 py-2.5 rounded text-sm"
              >
                Trnava: 033 / 55 120 54
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
