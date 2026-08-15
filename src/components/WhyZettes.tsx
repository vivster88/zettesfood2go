import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Snowflake, Package, Check } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';
import { fadeUp, staggerContainer } from '../lib/animations';

export default function WhyZettes() {
  const iconMap: Record<string, React.ReactNode> = {
    love: <Heart className="w-6 h-6 text-[#D71920] fill-[#D71920]" />,
    flavor: <Sparkles className="w-6 h-6 text-[#5B2A86]" />,
    fresh: <Snowflake className="w-6 h-6 text-sky-600" />,
    togo: <Package className="w-6 h-6 text-amber-600" />
  };

  return (
    <section id="why-zettes" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-radial from-[#5B2A86]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 border border-[#5B2A86]/20 text-[#5B2A86] text-xs font-black uppercase tracking-widest"
          >
            <span>The Zette's Difference</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-display font-black tracking-tight text-[#32124F]"
          >
            WHY ZETTE'S?
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base sm:text-lg text-[#32124F]/75 max-w-xl mx-auto"
          >
            Crafted for the love of good food — four promises we fold into every single pack of Special Longganisa.
          </motion.p>
        </div>

        {/* 4 Brand Pillars in Organic Food-Brand Styling */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {BRAND_CONFIG.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              variants={fadeUp}
              custom={idx}
              className="relative p-8 rounded-3xl bg-[#FFF9F5] border border-[#5B2A86]/15 hover:border-[#D71920]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group flex flex-col justify-between text-left"
            >
              {/* Top icon and badge */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-[#5B2A86]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[pillar.id]}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#5B2A86]/10 text-[#5B2A86]">
                    {pillar.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-display font-black text-[#32124F] tracking-tight group-hover:text-[#D71920] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#32124F]/80 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Bottom decorative stamp */}
              <div className="pt-6 mt-6 border-t border-[#5B2A86]/10 flex items-center gap-1.5 text-xs font-semibold text-[#5B2A86]">
                <Check className="w-3.5 h-3.5 text-[#D71920]" />
                <span className="font-script text-base text-[#32124F]">Zette's Standard</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
