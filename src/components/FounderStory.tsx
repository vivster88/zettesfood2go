import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';
import BrandLogo from './BrandLogo';
import { fadeUp, slideLeft, slideRight } from '../lib/animations';

interface FounderStoryProps {
  onOpenMessenger: () => void;
  onOpenOrder: () => void;
}

export default function FounderStory({ onOpenMessenger, onOpenOrder }: FounderStoryProps) {
  return (
    <section id="meet-zette" className="py-24 sm:py-32 bg-[#FFF9F5] bg-grain relative overflow-hidden">
      {/* Background Decorative Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#5B2A86]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 rounded-full bg-[#D71920]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Editorial Founder Photograph (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Editorial Frame with Organic Rounded Layers */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src={BRAND_CONFIG.assets.founder}
                alt="Zette - Founder of Zette's Food 2 Go"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#211A25]/80 via-[#211A25]/20 to-transparent" />

              {/* Floating Bottom Nameplate */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#5B2A86]/15 shadow-xl text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold tracking-widest text-[#D71920] uppercase">
                      FOUNDER & ARTISAN
                    </span>
                    <h3 className="font-display font-black text-xl text-[#32124F]">
                      Zette
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-script text-2xl text-[#5B2A86] font-bold block leading-none">
                      "Made with Love"
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Logo Badge (Top-Right of photo) */}
            <div className="absolute -top-3 -right-3 z-20 bg-white rounded-full p-2 shadow-2xl border-2 border-[#5B2A86]/20">
              <BrandLogo size="md" variant="compact" />
            </div>

            {/* Authenticity Pill (Bottom-Left) */}
            <div className="absolute -bottom-4 -left-3 z-20 px-3.5 py-2 rounded-2xl bg-[#32124F] text-white text-xs font-bold shadow-xl border border-white/20 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Real Person • Real Food</span>
            </div>
          </motion.div>

          {/* RIGHT: Editorial Founder Story Copy (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            className="lg:col-span-7 space-y-7 text-left"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 border border-[#5B2A86]/20 text-[#5B2A86] text-xs font-black uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
                <span>Our Story</span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-display font-black text-[#32124F] tracking-tight leading-tight">
                MEET ZETTE.
              </h2>

              <p className="text-xl sm:text-2xl font-serif-brand italic text-[#D71920] font-semibold">
                The face and heart behind Zette's Food 2 Go
              </p>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-[#32124F]/85 leading-relaxed font-normal">
              <p className="text-xl font-medium text-[#32124F]">
                Behind Zette's Food 2 Go is Zette — the face and heart behind the brand.
              </p>

              <p>
                What started with a love for good food is becoming something made to be shared — one delicious bite at a time.
              </p>

              <p className="text-sm sm:text-base text-[#32124F]/75">
                Every batch of Special Longganisa is prepared with honest dedication, family warmth, and the authentic taste of homemade Filipino cooking. No shortcuts, no compromises — just pure, comforting flavor.
              </p>
            </div>

            {/* Emotional Sign-off */}
            <div className="pt-2 flex items-center gap-3">
              <Heart className="w-6 h-6 text-[#D71920] fill-[#D71920]" />
              <span className="font-script text-3xl text-[#5B2A86] font-bold">
                Made with Love.
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenMessenger}
                className="px-6 py-3.5 rounded-full bg-[#5B2A86] hover:bg-[#32124F] text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Zette Directly</span>
              </button>

              <button
                onClick={onOpenOrder}
                className="px-6 py-3.5 rounded-full bg-[#D71920] hover:bg-[#F2292E] text-white font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer"
              >
                <span>Order Today's Batch</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
