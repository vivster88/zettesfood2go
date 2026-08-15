import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../lib/brand';

interface MobileStickyBarProps {
  onOpenOrder: () => void;
}

export default function MobileStickyBar({ onOpenOrder }: MobileStickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#32124F]/95 backdrop-blur-md border-t border-white/15 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-2xl animate-fade-in">
      <div className="flex items-center justify-between gap-3">
        <div className="text-left flex-1 min-w-0">
          <p className="text-[10px] font-extrabold text-[#FCA5A5] uppercase tracking-wider truncate">
            {BRAND_CONFIG.flagshipProduct}
          </p>
          <p className="text-xs font-script font-bold text-white truncate">
            "Made with Love • Packed with Flavor"
          </p>
        </div>

        <button
          onClick={onOpenOrder}
          className="px-5 py-2.5 rounded-full bg-[#D71920] hover:bg-[#F2292E] active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-red-600/40 flex-shrink-0 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>ORDER NOW</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
