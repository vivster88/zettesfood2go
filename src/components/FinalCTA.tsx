import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';
import BrandLogo from './BrandLogo';
import { fadeUp } from '../lib/animations';

interface FinalCTAProps {
  onOpenOrder: () => void;
}

export default function FinalCTA({ onOpenOrder }: FinalCTAProps) {
  return (
    <section className="py-28 sm:py-36 bg-[#FFF9F5] bg-grain relative overflow-hidden text-center">
      {/* Giant subtle watermark circular logo in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] opacity-[0.04] pointer-events-none -z-0">
        <BrandLogo size="xl" variant="compact" className="w-full h-full" />
      </div>

      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-radial from-[#5B2A86]/10 via-[#D71920]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5B2A86]/10 border border-[#5B2A86]/20 text-[#5B2A86] text-xs font-black uppercase tracking-widest"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
          <span>Taste The Tradition</span>
        </motion.div>

        {/* Huge Editorial Headline */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-black tracking-tight text-[#32124F] leading-[1.05]"
        >
          YOUR NEXT FAVORITE BITE <br />
          <span className="text-[#D71920]">STARTS HERE.</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-lg sm:text-2xl text-[#32124F]/80 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Experience the authentic homemade goodness of Zette's Special Longganisa. Fresh, savory-sweet, and made with love.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenOrder}
            className="px-10 py-5 rounded-full bg-[#D71920] hover:bg-[#F2292E] text-white font-black text-base sm:text-lg tracking-wider uppercase shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 cursor-pointer brand-red-glow"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>ORDER SPECIAL LONGGANISA</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Handwritten Tagline and Catchphrase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="pt-6 flex flex-wrap items-center justify-center gap-4 text-[#5B2A86]"
        >
          <span className="font-script text-2xl sm:text-3xl font-bold text-[#32124F]">
            "Good Food. Good Mood. Go Zette's."
          </span>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <span className="font-script text-2xl sm:text-3xl font-bold text-[#D71920]">
            "Sarap na, sulit pa!"
          </span>
        </motion.div>

      </div>
    </section>
  );
}
