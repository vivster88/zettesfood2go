import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { fadeUp } from '../lib/animations';

export default function BrandStatement() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden text-center">
      {/* Subtle decorative background rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-radial from-[#5B2A86]/5 via-[#D71920]/3 to-transparent blur-2xl pointer-events-none" />

      {/* Decorative vertical guide lines */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-8 max-w-3xl mx-auto"
        >
          {/* Subtle brand tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF9F5] border border-[#5B2A86]/15 text-[#5B2A86] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
            <span>The Zette's Philosophy</span>
          </div>

          {/* Large Dramatic Editorial Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-[#32124F] leading-[1.1]">
            ONE BITE. <br />
            <span className="text-[#D71920] relative inline-block">
              THAT'S ALL IT TAKES.
              <svg
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#5B2A86]/30"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 15 Q150 2 295 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* Supporting Copy with high breathing room */}
          <div className="pt-4 space-y-4 text-lg sm:text-2xl text-[#32124F]/85 font-light leading-relaxed max-w-2xl mx-auto">
            <p>
              Some meals fill you up. <br />
              <strong className="font-bold text-[#32124F]">Some meals make you want another bite.</strong>
            </p>

            <p className="text-base sm:text-lg text-[#32124F]/70 pt-2">
              Zette's Food 2 Go is here to make everyday food moments a little more delicious.
            </p>
          </div>

          {/* Handwritten accent mark */}
          <div className="pt-2 flex items-center justify-center gap-2 font-script text-2xl sm:text-3xl text-[#5B2A86] font-bold">
            <Heart className="w-5 h-5 text-[#D71920] fill-[#D71920]" />
            <span>Good Food. Good Mood. Go Zette's.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
