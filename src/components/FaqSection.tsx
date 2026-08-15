import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';
import { fadeUp } from '../lib/animations';

interface FaqSectionProps {
  onOpenMessenger: () => void;
}

export default function FaqSection({ onOpenMessenger }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = BRAND_CONFIG.faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial from-[#5B2A86]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B2A86]/10 border border-[#5B2A86]/20 text-[#5B2A86] text-xs font-black uppercase tracking-widest"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#D71920]" />
            <span>Got Questions?</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-display font-black tracking-tight text-[#32124F]"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base sm:text-lg text-[#32124F]/75 max-w-lg mx-auto"
          >
            Everything you need to know about ordering, storing, and enjoying Zette's Special Longganisa.
          </motion.p>
        </div>

        {/* Search Input for Quick Answers */}
        <div className="mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., delivery, storage, cooking, events)..."
            className="w-full px-5 py-3.5 rounded-2xl bg-[#FFF9F5] border border-[#5B2A86]/20 text-sm text-[#32124F] placeholder-[#32124F]/40 focus:outline-none focus:ring-2 focus:ring-[#5B2A86] transition"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FFF9F5] border-[#5B2A86]/30 shadow-md'
                    : 'bg-white border-[#5B2A86]/15 hover:border-[#5B2A86]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-extrabold text-base sm:text-lg text-[#32124F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#5B2A86] text-white rotate-180' : 'bg-[#5B2A86]/10 text-[#5B2A86]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#32124F]/85 leading-relaxed border-t border-[#5B2A86]/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-3xl bg-[#FFF9F5] border border-[#5B2A86]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-display font-extrabold text-base text-[#32124F]">
              Have a specific question or custom inquiry?
            </h3>
            <p className="text-xs text-[#32124F]/70">
              We're always happy to assist with bulk reservations, special dates, or questions.
            </p>
          </div>

          <button
            onClick={onOpenMessenger}
            className="px-5 py-2.5 rounded-full bg-[#5B2A86] hover:bg-[#32124F] text-white font-bold text-xs shadow transition flex items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Chat with Zette</span>
          </button>
        </div>

      </div>
    </section>
  );
}
