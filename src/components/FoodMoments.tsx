import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils, Heart, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';
import { fadeUp, staggerContainer } from '../lib/animations';

interface FoodMomentsProps {
  onOpenOrder: () => void;
}

export default function FoodMoments({ onOpenOrder }: FoodMomentsProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="food-moments" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-radial from-[#5B2A86]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 border border-[#5B2A86]/20 text-[#5B2A86] text-xs font-black uppercase tracking-widest"
          >
            <Utensils className="w-3.5 h-3.5 text-[#D71920]" />
            <span>Delicious Occasions</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-display font-black tracking-tight text-[#32124F]"
          >
            FOR THE MOMENTS THAT TASTE BETTER.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base sm:text-lg text-[#32124F]/75 max-w-xl mx-auto"
          >
            From quiet morning rituals to lively family weekends, Special Longganisa turns any meal into a celebration.
          </motion.p>
        </div>

        {/* 4 Editorial Food Moment Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BRAND_CONFIG.foodMoments.map((moment, idx) => (
            <motion.div
              key={moment.id}
              variants={fadeUp}
              custom={idx}
              onMouseEnter={() => setHoveredId(moment.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-3xl overflow-hidden bg-[#FFF9F5] border border-[#5B2A86]/15 hover:border-[#D71920]/40 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Image Container with Editorial Zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#211A25]/75 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                {/* Floating Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#5B2A86] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {moment.tag}
                  </span>
                </div>
              </div>

              {/* Editorial Text Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between text-left">
                <div className="space-y-1.5">
                  <h3 className="text-xl font-display font-black text-[#32124F] group-hover:text-[#D71920] transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-xs font-serif-brand italic font-semibold text-[#D71920]">
                    "{moment.subtitle}"
                  </p>
                  <p className="text-xs text-[#32124F]/75 leading-relaxed pt-1">
                    {moment.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#5B2A86]/10 flex items-center justify-between">
                  <span className="font-script text-base text-[#5B2A86] font-bold">
                    Go Zette's!
                  </span>
                  <button
                    onClick={onOpenOrder}
                    className="text-xs font-extrabold text-[#D71920] hover:text-[#5B2A86] flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Order for this</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
