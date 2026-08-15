import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Heart, Sparkles, Flame, Volume2, VolumeX, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';
import BrandLogo from './BrandLogo';

interface HeroProps {
  onOpenOrder: () => void;
  onOpenMessenger: () => void;
}

export default function Hero({ onOpenOrder, onOpenMessenger }: HeroProps) {
  const [isSizzling, setIsSizzling] = useState(false);

  const toggleSizzle = () => {
    setIsSizzling(!isSizzling);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FFF9F5] bg-grain"
    >
      {/* Background Architectural Brand Blobs & Rings */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-radial from-[#5B2A86]/10 via-[#D71920]/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#5B2A86]/5 blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 -left-28 w-80 h-80 rounded-full bg-[#D71920]/5 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Editorial Typography & Conversion Hierarchy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-left relative z-10"
          >
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 border border-[#5B2A86]/20 text-[#5B2A86] text-xs sm:text-sm font-bold tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
              <span>ZETTE'S FOOD 2 GO</span>
              <span className="text-[#32124F]/30">•</span>
              <span className="font-script text-base normal-case text-[#D71920] font-bold">
                {BRAND_CONFIG.tagalogCatchphrase}
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-1">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight text-[#32124F] leading-[1.05]"
              >
                GOOD FOOD.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight text-[#32124F] leading-[1.05]"
              >
                GOOD MOOD.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-4xl sm:text-6xl xl:text-7xl font-display font-black tracking-tight leading-[1.05] flex flex-wrap items-center gap-3"
              >
                <span className="text-[#5B2A86]">GO</span>
                <span className="text-[#D71920] relative inline-block underline decoration-[#5B2A86]/30 decoration-wavy underline-offset-8">
                  ZETTE'S.
                </span>
              </motion.h1>
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl text-[#32124F]/80 max-w-xl font-normal leading-relaxed"
            >
              Meet our <strong className="font-bold text-[#5B2A86]">Special Longganisa</strong> — made with love, packed with flavor, and ready for your next favorite meal.
            </motion.p>

            {/* Handwritten Annotations & Filipino Touch */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-wrap items-center gap-6 text-[#5B2A86] pt-1"
            >
              <div className="flex items-center gap-1.5 font-script text-2xl text-[#D71920] font-bold">
                <Heart className="w-5 h-5 fill-[#D71920] text-[#D71920] inline animate-bounce" />
                <span>Made with Love.</span>
              </div>
              <span className="text-zinc-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5 font-script text-2xl text-[#5B2A86] font-bold">
                <Sparkles className="w-5 h-5 text-[#5B2A86] inline" />
                <span>Packed with Flavor.</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenOrder}
                className="px-8 py-4 rounded-full bg-[#D71920] hover:bg-[#F2292E] text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer brand-red-glow group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>ORDER SPECIAL LONGGANISA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#meet-zette"
                className="px-7 py-4 rounded-full bg-white hover:bg-[#5B2A86]/5 border-2 border-[#5B2A86]/20 text-[#32124F] font-bold text-sm sm:text-base tracking-wide transition-all duration-200 text-center flex items-center justify-center gap-2 hover:border-[#5B2A86]"
              >
                <span>MEET ZETTE</span>
              </a>
            </motion.div>

            {/* Trust Points Mini Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#32124F]/70"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Homemade Pork Sausages</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Frozen Fresh Vacuum Pack</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Metro Manila & Regional Delivery</span>
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: High-Impact Layered Product Composition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Signature Decorative Purple Brand Ring */}
            <div className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] flex items-center justify-center">
              
              {/* Spinning / glowing ambient ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#5B2A86]/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border-2 border-[#D71920]/40" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#5B2A86]/20 via-[#FFF9F5] to-[#D71920]/15 shadow-2xl brand-ring-glow" />

              {/* Main REAL Product Packaging Image */}
              <div className="relative z-20 w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105 group">
                <img
                  src={BRAND_CONFIG.assets.pack}
                  alt="Zette's Special Longganisa Vacuum Sealed Pack"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#211A25]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Bottom label overlay */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#5B2A86]/15 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-extrabold tracking-widest text-[#D71920] uppercase">
                      FLAGSHIP PRODUCT
                    </p>
                    <p className="text-xs sm:text-sm font-display font-extrabold text-[#32124F]">
                      Special Longganisa
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#5B2A86] text-white text-[10px] font-bold">
                    Frozen Fresh
                  </span>
                </div>
              </div>

              {/* Overlapping Circular Brand Badge (Top-Left) */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
                className="absolute -top-3 -left-3 z-30 bg-white rounded-full p-1.5 shadow-xl border-2 border-[#5B2A86]/20"
              >
                <BrandLogo size="md" variant="compact" />
              </motion.div>

              {/* Overlapping Founder Cameo Badge (Bottom-Right) */}
              <motion.div
                initial={{ scale: 0, x: 20 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.9, type: 'spring' }}
                className="absolute -bottom-4 -right-2 sm:-right-6 z-30 bg-white rounded-2xl p-2.5 shadow-xl border border-[#5B2A86]/20 flex items-center gap-2.5 max-w-[210px]"
              >
                <img
                  src={BRAND_CONFIG.assets.founder}
                  alt="Zette Founder of Zette's Food 2 Go"
                  className="w-11 h-11 rounded-xl object-cover border border-[#5B2A86]/20 flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <p className="text-[11px] font-display font-black text-[#32124F] leading-tight">
                    Crafted by Zette
                  </p>
                  <p className="text-[9px] text-[#D71920] font-bold font-script text-xs">
                    "Made with Love"
                  </p>
                </div>
              </motion.div>

              {/* Floating Sizzle Audio / Pan Visual Trigger */}
              <motion.button
                onClick={toggleSizzle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-0 z-30 px-3 py-1.5 rounded-full bg-[#32124F] text-white text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/20 cursor-pointer"
                title="Simulate skillet sizzle"
              >
                <Flame className="w-3.5 h-3.5 text-[#F2292E] animate-bounce" />
                <span>{isSizzling ? 'Sizzling hot! 🔥' : 'Simmer & Sizzle'}</span>
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
