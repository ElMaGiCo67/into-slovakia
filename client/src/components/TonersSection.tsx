/* =============================================================
   INTO Slovakia – Original Toners Section
   Design: Brand logo grid, dark cards, HP Partner badge
   ============================================================= */

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Zap, BadgeCheck } from "lucide-react";

const brands = [
  "Brother", "Canon", "Dell", "Epson", "HP", "IBM",
  "Konica Minolta", "Kyocera", "Lanier", "Lexmark", "Mita",
  "Nashuatec", "OCÉ", "OKI", "Olivetti", "Panasonic",
  "Philips", "Ricoh", "Samsung", "Sharp", "Star",
  "Tally", "Toshiba", "Xerox",
];

const guarantees = [
  {
    icon: ShieldCheck,
    title: "24 mesiacov záruka",
    desc: "Na všetok originálny spotrebný tovar poskytujeme záruku 24 mesiacov.",
  },
  {
    icon: Clock,
    title: "Reklamácia do 24 hodín",
    desc: "Reklamácie vybavujeme do 24 hodín. Výrobca má povinnosť odpovedať do 30 dní.",
  },
  {
    icon: Zap,
    title: "Špeciálna ponuka pre firmy",
    desc: "Pri odbere nad 160 € bez DPH mesačne vypracujeme individuálnu cenovú ponuku.",
  },
  {
    icon: BadgeCheck,
    title: "HP Authorized Partner",
    desc: "Ako certifikovaný HP partner garantujeme 100% originálne náplne HP.",
  },
];

export default function TonersSection() {
  return (
    <section
      id="tonery"
      className="py-24 bg-[oklch(0.20_0.04_250)] diagonal-top"
      style={{ clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 100%)", marginTop: "-3rem", paddingTop: "6rem" }}
    >
      <div className="container">
        {/* Header */}
        <div className="mb-14">
          <div className="section-label mb-4">Originálne náplne</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-white max-w-xl"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Originál je{" "}
              <span className="text-[oklch(0.78_0.18_70)]">iba jeden</span>
            </h2>
            <p
              className="text-[oklch(0.65_0.02_250)] max-w-sm text-sm leading-relaxed"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Dodávame výhradne originálne náplne od výrobcov. Žiadne kompatibilné, žiadne renovácie.
            </p>
          </div>
        </div>

        {/* Two-column: image + guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          {/* Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guarantees.map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-hover bg-[oklch(0.24_0.04_250)] border border-white/8 rounded-xl p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-[oklch(0.78_0.18_70/0.12)] flex items-center justify-center mb-3">
                  <g.icon size={18} className="text-[oklch(0.78_0.18_70)]" />
                </div>
                <h4
                  className="text-white font-bold text-sm mb-1.5"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {g.title}
                </h4>
                <p
                  className="text-[oklch(0.60_0.02_250)] text-xs leading-relaxed"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {g.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663173010095/bPDzUqiYCh8AbPRokUqG8K/toner-products-ZwiW96y34SWej2yR7Q4txS.webp"
              alt="Originálne tonery – HP, Canon, Brother, Kyocera, Samsung"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>

        {/* Brand grid */}
        <div>
          <div className="section-label mb-6">Značky v ponuke</div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025, duration: 0.3 }}
                className="bg-[oklch(0.24_0.04_250)] border border-white/8 rounded-lg px-3 py-2.5 text-center hover:border-[oklch(0.78_0.18_70/0.4)] hover:bg-[oklch(0.78_0.18_70/0.06)] transition-all duration-200 cursor-default"
              >
                <span
                  className="text-[oklch(0.80_0.01_250)] text-xs font-medium"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>

          {/* B2B offer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-gradient-to-r from-[oklch(0.78_0.18_70/0.10)] to-[oklch(0.78_0.18_70/0.04)] border border-[oklch(0.78_0.18_70/0.25)] rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <h4
                className="text-white font-bold text-lg mb-1"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Špeciálna ponuka pre firmy
              </h4>
              <p
                className="text-[oklch(0.65_0.02_250)] text-sm"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Pri predpokladanom odbere nad{" "}
                <span
                  className="text-[oklch(0.78_0.18_70)] font-medium"
                  style={{ fontFamily: 'Roboto Mono, monospace' }}
                >
                  160 € bez DPH / mesiac
                </span>{" "}
                vypracujeme špeciálnu cenovú ponuku.
              </p>
            </div>
            <a
              href="mailto:gabika@vykuptonerov.sk"
              className="btn-amber px-5 py-2.5 rounded text-sm whitespace-nowrap"
            >
              Vyžiadať ponuku
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
