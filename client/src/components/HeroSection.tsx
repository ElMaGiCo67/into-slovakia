/* =============================================================
   INTO Slovakia – Hero Section
   Design: Full-bleed dark hero, amber CTAs, floating stat cards
   Image: circuit-board toner cartridges with amber light rays
   ============================================================= */

import { ArrowRight, BadgeCheck, Recycle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: BadgeCheck, value: "24+", label: "Značiek tonerov" },
  { icon: Recycle, value: "100%", label: "Originálne náplne" },
  { icon: Clock, value: "24h", label: "Servis v BA & TT" },
];

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663173010095/bPDzUqiYCh8AbPRokUqG8K/hero-bg-c49uK5v4ELvDMTXFMVXgtv.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.14_0.04_250/0.92)] via-[oklch(0.14_0.04_250/0.75)] to-[oklch(0.14_0.04_250/0.40)]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.18_0.04_250)] to-transparent" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-6"
          >
            HP Partner · Bratislava & Trnava
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Výkup &amp;{" "}
            <span className="text-[oklch(0.78_0.18_70)]">predaj</span>
            <br />tonerov
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[oklch(0.80_0.01_250)] text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300 }}
          >
            Vykupujeme prázdne originálne náplne. Predávame originálne tonery pre 24+ značiek.
            Servis laserových tlačiarní do 24 hodín.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <button
              onClick={() => handleScroll("#vykup")}
              className="btn-amber flex items-center gap-2 px-6 py-3 rounded text-sm"
            >
              Predaj nám tonery
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScroll("#tonery")}
              className="btn-amber-outline flex items-center gap-2 px-6 py-3 rounded text-sm"
            >
              Kúpiť originálne tonery
            </button>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[oklch(0.22_0.04_250/0.85)] backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3"
              >
                <stat.icon size={18} className="text-[oklch(0.78_0.18_70)]" />
                <div>
                  <div
                    className="text-white font-bold text-lg leading-none"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[oklch(0.65_0.02_250)] text-xs mt-0.5"
                    style={{ fontFamily: 'Roboto Mono, monospace' }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[oklch(0.55_0.02_250)] text-xs tracking-widest uppercase" style={{ fontFamily: 'Roboto Mono, monospace' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-[oklch(0.78_0.18_70)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
