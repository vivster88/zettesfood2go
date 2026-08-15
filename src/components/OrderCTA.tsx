import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, MessageCircle, Heart, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';
import BrandLogo from './BrandLogo';
import { fadeUp } from '../lib/animations';

interface OrderCTAProps {
  onOpenOrder: () => void;
  onOpenMessenger: () => void;
}

export default function OrderCTA({ onOpenOrder, onOpenMessenger }: OrderCTAProps) {
  return (
    <section className="py-24 lg:py-32 bg-[#32124F] text-white relative overflow-hidden">
      {/* Background Decorative Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-radial from-[#5B2A86]/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#D71920]/20 blur-3xl pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#5B2A86]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: High Impact Typography & Conversion Actions (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-7 space-y-7 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FCA5A5] text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct-to-Consumer Freshness</span>
            </div>

            <h2 className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight text-white leading-[1.08]">
              READY FOR YOUR <br />
              <span className="text-[#F2292E] underline decoration-white/30 decoration-wavy underline-offset-8">
                NEXT FAVORITE BITE?
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-zinc-200 font-light max-w-xl leading-relaxed">
              Get your hands on <strong className="font-bold text-white">Zette's Special Longganisa</strong>.
            </p>

            <p className="text-sm sm:text-base text-zinc-300 max-w-lg leading-relaxed font-normal">
              Prepared in fresh small batches, vacuum-sealed to preserve rich garlic-marinated juiciness, and dispatched directly to your doorstep.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenOrder}
                className="px-8 py-4 rounded-full bg-[#D71920] hover:bg-[#F2292E] text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer brand-red-glow"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>ORDER NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenMessenger}
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm sm:text-base transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>SEND US A MESSAGE</span>
              </button>
            </div>

            {/* Quick Guarantees */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-300 pt-3">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Same-day / Scheduled Delivery</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Frozen Fresh Guarantee</span>
              </span>
              <span>•</span>
              <span className="font-script text-base text-[#FCA5A5]">
                "Sarap na, sulit pa!"
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Overlapping Product Visual with Depth (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-zinc-900 group">
              <img
                src={BRAND_CONFIG.assets.pack}
                alt="Zette's Special Longganisa Order Now"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#211A25]/90 via-transparent to-transparent" />

              {/* Center Stamp */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-[#32124F] flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D71920]">
                    HOMEMADE BATCH
                  </span>
                  <h3 className="font-display font-black text-base text-[#32124F]">
                    Special Longganisa
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-script text-xl font-bold text-[#5B2A86] block leading-none">
                    Freshly Frozen
                  </span>
                </div>
              </div>

              {/* Overlapping Brand Logo Badge */}
              <div className="absolute top-4 right-4 z-20 bg-white rounded-full p-1.5 shadow-xl">
                <BrandLogo size="sm" variant="compact" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
