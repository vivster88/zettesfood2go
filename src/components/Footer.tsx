import React from 'react';
import { Heart, MessageCircle, Instagram, Facebook, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { BRAND_CONFIG } from '../lib/brand';

interface FooterProps {
  onOpenOrder: () => void;
  onOpenMessenger: () => void;
}

export default function Footer({ onOpenOrder, onOpenMessenger }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#211A25] text-zinc-300 pt-16 pb-12 border-t border-[#5B2A86]/20 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-radial from-[#5B2A86]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info & Taglines (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <BrandLogo size="md" variant="light" />

            <p className="font-script text-2xl text-[#FCA5A5] font-bold pt-1">
              "Good Food. Good Mood. Go Zette's."
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Homemade Filipino comfort food crafted with genuine love and care. Freshly frozen Special Longganisa prepared to bring pure joy to your dining table.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#5B2A86] text-white flex items-center justify-center transition shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D71920] text-white flex items-center justify-center transition shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenMessenger}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#5B2A86] text-white flex items-center justify-center transition shadow-sm cursor-pointer"
                aria-label="Messenger"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#hero" className="hover:text-white transition">Home</a></li>
              <li><a href="#product-experience" className="hover:text-white transition">Special Longganisa</a></li>
              <li><a href="#why-zettes" className="hover:text-white transition">Why Zette's</a></li>
              <li><a href="#meet-zette" className="hover:text-white transition">Meet Zette</a></li>
              <li><a href="#food-moments" className="hover:text-white transition">Food Moments</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ & Storage</a></li>
            </ul>
          </div>

          {/* Col 3: Order & Delivery (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Orders
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><button onClick={onOpenOrder} className="hover:text-white transition text-left cursor-pointer">Order Fresh Pack</button></li>
              <li><button onClick={onOpenOrder} className="hover:text-white transition text-left cursor-pointer">Family Bundle</button></li>
              <li><button onClick={onOpenMessenger} className="hover:text-white transition text-left cursor-pointer">Bulk / Event Catering</button></li>
              <li><button onClick={onOpenMessenger} className="hover:text-white transition text-left cursor-pointer">Reseller Inquiries</button></li>
              <li><a href="#faq" className="hover:text-white transition">Delivery Coverage</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Contact & Hub
            </h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FCA5A5] flex-shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#FCA5A5] flex-shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.businessHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FCA5A5] flex-shrink-0" />
                <span>{BRAND_CONFIG.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FCA5A5] flex-shrink-0" />
                <span>{BRAND_CONFIG.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-1">
            <span>© 2026 {BRAND_CONFIG.brandName}. All rights reserved.</span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="font-script text-base text-[#FCA5A5] hidden sm:inline">
              Made with Love
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition cursor-pointer text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
