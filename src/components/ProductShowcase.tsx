import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Sparkles, CheckCircle, Flame, Clock, Snowflake, Utensils, Heart, ChevronRight } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';
import BrandLogo from './BrandLogo';
import { fadeUp, slideLeft, slideRight } from '../lib/animations';

interface ProductShowcaseProps {
  onOpenOrder: () => void;
  onOpenMessenger: () => void;
}

export default function ProductShowcase({ onOpenOrder, onOpenMessenger }: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'cooking' | 'specs'>('profile');
  const [activeView, setActiveView] = useState<'pack' | 'breakfast'>('pack');

  const product = BRAND_CONFIG.products[0];

  return (
    <section id="product-experience" className="py-24 lg:py-32 bg-[#FFF9F5] bg-grain relative overflow-hidden">
      {/* Decorative Brand Accent Backgrounds */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#5B2A86]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-[#D71920]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 text-[#D71920] text-xs font-black uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Signature Flagship Selection</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-display font-black tracking-tight text-[#32124F]"
          >
            MEET THE SPECIAL.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-xl sm:text-2xl font-serif-brand italic text-[#D71920] font-semibold"
          >
            "Special Longganisa"
          </motion.p>
        </div>

        {/* Signature Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT: Signature Scroll-Interactive Brand Ring Showcase (6 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="lg:col-span-6 relative flex flex-col items-center justify-center"
          >
            {/* Signature Large Purple Circular Ring Frame */}
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              {/* Outer rotating dashed ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#5B2A86]/25 animate-[spin_80s_linear_infinite]" />
              
              {/* Middle solid vibrant ring */}
              <div className="absolute inset-6 rounded-full border-2 border-[#D71920]/30" />
              
              {/* Inner ambient glow backdrop */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#5B2A86]/15 via-[#FFF9F5] to-[#D71920]/10 shadow-2xl brand-ring-glow" />

              {/* Central Main Product Image with Smooth Switcher */}
              <div className="relative z-20 w-[88%] h-[88%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={activeView === 'pack' ? BRAND_CONFIG.assets.pack : BRAND_CONFIG.assets.breakfast}
                  alt={activeView === 'pack' ? "Special Longganisa Pack" : "Freshly Cooked Longsilog"}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid view pill switcher */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                  <div className="flex bg-white/90 backdrop-blur-md p-1 rounded-full shadow-md border border-[#5B2A86]/15 text-xs font-bold">
                    <button
                      onClick={() => setActiveView('pack')}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                        activeView === 'pack'
                          ? 'bg-[#5B2A86] text-white shadow-sm'
                          : 'text-[#32124F]/70 hover:text-[#32124F]'
                      }`}
                    >
                      Fresh Pack
                    </button>
                    <button
                      onClick={() => setActiveView('breakfast')}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                        activeView === 'breakfast'
                          ? 'bg-[#D71920] text-white shadow-sm'
                          : 'text-[#32124F]/70 hover:text-[#32124F]'
                      }`}
                    >
                      Plated Dish
                    </button>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-[#D71920] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {product.badge}
                  </span>
                </div>

                {/* Bottom caption */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#5B2A86]/15 shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-[#5B2A86] uppercase tracking-wider">
                      Authentic Recipe
                    </span>
                    <h3 className="font-display font-extrabold text-sm text-[#32124F]">
                      {activeView === 'pack' ? 'Special Longganisa Pack' : 'Golden Breakfast Longsilog'}
                    </h3>
                  </div>
                  <span className="font-script text-base font-bold text-[#D71920]">
                    "Made with Love"
                  </span>
                </div>
              </div>

              {/* Floating Circular Badge (Bottom Left) */}
              <div className="absolute -bottom-3 -left-2 z-30 bg-white rounded-full p-2 shadow-2xl border-2 border-[#5B2A86]/20">
                <BrandLogo size="md" variant="compact" />
              </div>
            </div>

            {/* Micro guarantee tags */}
            <div className="mt-6 flex items-center gap-6 text-xs font-bold text-[#32124F]/70">
              <span className="flex items-center gap-1.5">
                <Snowflake className="w-4 h-4 text-sky-600" />
                <span>Frozen Fresh</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#D71920] fill-[#D71920]" />
                <span>Real Pork & Garlic</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Ready in 10-12 Mins</span>
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Editorial Copy & Interactive Product Details (6 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            className="lg:col-span-6 space-y-7 text-left"
          >
            <div className="space-y-2">
              <span className="text-xs font-black tracking-[0.2em] text-[#D71920] uppercase">
                FLAGSHIP COMFORT FOOD
              </span>
              <h3 className="text-3xl sm:text-5xl font-display font-black text-[#32124F] leading-tight">
                SPECIAL LONGGANISA
              </h3>
              <p className="text-lg font-display italic text-[#5B2A86] font-bold">
                "Your next favorite meal starts here."
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#32124F]/85 leading-relaxed">
              Made to bring something delicious to the table — whether it's breakfast, merienda, family time, or a quick food trip. Every sausage is stuffed with seasoned pork, slow-cured with fragrant native garlic, and perfectly balanced with sweet cane undertones.
            </p>

            {/* Interactive Feature Tabs */}
            <div className="border border-[#5B2A86]/15 rounded-2xl bg-white p-5 shadow-sm space-y-4">
              {/* Tab Selector */}
              <div className="flex border-b border-zinc-100 pb-3 gap-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'profile'
                      ? 'bg-[#5B2A86] text-white shadow-sm'
                      : 'text-[#32124F]/70 hover:text-[#32124F] hover:bg-[#5B2A86]/5'
                  }`}
                >
                  Taste Profile
                </button>
                <button
                  onClick={() => setActiveTab('cooking')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'cooking'
                      ? 'bg-[#5B2A86] text-white shadow-sm'
                      : 'text-[#32124F]/70 hover:text-[#32124F] hover:bg-[#5B2A86]/5'
                  }`}
                >
                  How to Cook
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'specs'
                      ? 'bg-[#5B2A86] text-white shadow-sm'
                      : 'text-[#32124F]/70 hover:text-[#32124F] hover:bg-[#5B2A86]/5'
                  }`}
                >
                  Storage & Pack
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'profile' && (
                <div className="space-y-2.5 text-xs text-[#32124F]/85 animate-fade-in">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D71920] flex-shrink-0 mt-0.5" />
                    <span><strong>Sweet & Savory Garlic Blend:</strong> Richly caramelized exterior with a tender, juicy, aromatic bite.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D71920] flex-shrink-0 mt-0.5" />
                    <span><strong>Plump Pork Quality:</strong> Carefully ground cuts with the ideal fat-to-meat ratio for maximum flavor release.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D71920] flex-shrink-0 mt-0.5" />
                    <span><strong>Pairing Perfection:</strong> Divine with spicy cane vinegar, garlic rice, atchara, and sliced fresh tomatoes.</span>
                  </div>
                </div>
              )}

              {activeTab === 'cooking' && (
                <div className="space-y-2 text-xs text-[#32124F]/85 animate-fade-in">
                  <p className="font-bold text-[#5B2A86]">Simple 2-Step Pan Method:</p>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1">
                    <li>Place sausages in a pan with <strong>1/2 cup of water</strong> over medium heat.</li>
                    <li>Simmer until water evaporates completely. Let it fry and glaze in its <strong>own natural savory oil</strong> until deeply caramelized!</li>
                  </ol>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="grid grid-cols-2 gap-3 text-xs text-[#32124F]/85 animate-fade-in">
                  <div className="p-2.5 rounded-xl bg-[#FFF9F5] border border-[#5B2A86]/10">
                    <span className="text-[10px] uppercase font-bold text-[#5B2A86] block">Packaging</span>
                    <span className="font-semibold">Vacuum Sealed Pack</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FFF9F5] border border-[#5B2A86]/10">
                    <span className="text-[10px] uppercase font-bold text-[#5B2A86] block">Storage</span>
                    <span className="font-semibold">Keep Frozen (-18°C)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FFF9F5] border border-[#5B2A86]/10 col-span-2">
                    <span className="text-[10px] uppercase font-bold text-[#5B2A86] block">Freshness</span>
                    <span className="font-semibold">Best enjoyed within 3 months of freeze date</span>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenOrder}
                className="px-8 py-4 rounded-full bg-[#D71920] hover:bg-[#F2292E] text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:shadow-red-600/30 transition-all flex items-center justify-center gap-3 cursor-pointer brand-red-glow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER NOW</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenMessenger}
                className="px-6 py-4 rounded-full bg-[#5B2A86]/10 hover:bg-[#5B2A86]/15 text-[#5B2A86] font-bold text-sm transition-all text-center cursor-pointer"
              >
                Send Us a Message
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
