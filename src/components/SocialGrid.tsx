import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';
import { fadeUp, staggerContainer } from '../lib/animations';

interface SocialGridProps {
  onNotify: (type: 'success' | 'error' | 'info', title: string, desc?: string) => void;
}

export default function SocialGrid({ onNotify }: SocialGridProps) {
  const socialPosts = [
    {
      id: 'post-1',
      image: BRAND_CONFIG.assets.breakfast,
      caption: "Nothing beats a golden morning Longsilog! Crispy garlic rice + sunny egg + Special Longganisa. 🍳✨ #ZettesFood2Go",
      likes: '342',
      comments: '28',
      tag: 'Breakfast Club'
    },
    {
      id: 'post-2',
      image: BRAND_CONFIG.assets.pack,
      caption: "Fresh batches vacuum-sealed and ready for delivery across Metro Manila! Keep frozen, cook anytime. ❄️❤️",
      likes: '489',
      comments: '45',
      tag: 'Fresh Delivery'
    },
    {
      id: 'post-3',
      image: BRAND_CONFIG.assets.founder,
      caption: "From my kitchen to your table with all my love! Thank you everyone for the incredible support! — Zette 👩‍🍳",
      likes: '612',
      comments: '56',
      tag: 'Meet The Maker'
    },
    {
      id: 'post-4',
      image: BRAND_CONFIG.assets.sizzle,
      caption: "Hear that golden pan sizzle! Simmer in water first, then let it caramelize in its own sweet garlic glaze. 🔥",
      likes: '517',
      comments: '39',
      tag: 'Pan Sizzle'
    },
    {
      id: 'post-5',
      image: BRAND_CONFIG.assets.family,
      caption: "Weekend table spreads where sharing a hot plate brings the whole family together. Sarap na, sulit pa! 👨‍👩‍👧‍👦",
      likes: '425',
      comments: '31',
      tag: 'Family Table'
    },
    {
      id: 'post-6',
      image: BRAND_CONFIG.assets.pack,
      caption: "Stock your freezer for spontaneous cravings and out-of-town trips. Pack it, share it, enjoy it! 🚙💨",
      likes: '378',
      comments: '22',
      tag: 'Food Trip'
    }
  ];

  const handlePostClick = () => {
    onNotify('info', 'Follow @zettesfood2go', 'Opening our official Instagram community page.');
    window.open(BRAND_CONFIG.instagramUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FFF9F5] bg-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 text-[#D71920] text-xs font-black uppercase tracking-widest"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>{BRAND_CONFIG.instagramHandle}</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-display font-black tracking-tight text-[#32124F]"
          >
            FOLLOW THE FLAVOR.
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base sm:text-lg text-[#32124F]/75 max-w-xl mx-auto"
          >
            Behind the scenes, food moments, new drops, and everything Zette's.
          </motion.p>
        </div>

        {/* 6-Item Instagram-Inspired Magazine Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {socialPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              custom={idx}
              onClick={handlePostClick}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-zinc-100 shadow-md cursor-pointer border-2 border-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay with Caption & Instagram Icon */}
              <div className="absolute inset-0 bg-[#32124F]/85 opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-between text-white text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FCA5A5]">
                    {post.tag}
                  </span>
                  <Instagram className="w-4 h-4 text-white" />
                </div>

                <p className="text-[11px] leading-snug line-clamp-3 text-zinc-200 font-medium">
                  {post.caption}
                </p>

                <div className="flex items-center gap-3 text-[11px] font-bold text-red-200 pt-1 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram Follow Callout Bar */}
        <div className="mt-10 text-center">
          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#5B2A86]/20 text-[#32124F] hover:text-[#D71920] hover:border-[#D71920] font-bold text-xs shadow-sm hover:shadow transition"
          >
            <Instagram className="w-4 h-4 text-[#D71920]" />
            <span>Join our community on Instagram {BRAND_CONFIG.instagramHandle}</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
