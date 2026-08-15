import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MessageCircle, ChevronRight, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { BRAND_CONFIG } from '../lib/brand';

interface NavbarProps {
  onOpenOrder: () => void;
  onOpenMessenger: () => void;
}

export default function Navbar({ onOpenOrder, onOpenMessenger }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Special Longganisa', href: '#product-experience' },
    { name: 'Why Zette’s', href: '#why-zettes' },
    { name: 'Our Story', href: '#meet-zette' },
    { name: 'Food Moments', href: '#food-moments' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FFF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#5B2A86]/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Circular Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <BrandLogo size="md" />
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-[#32124F]/85 hover:text-[#D71920] transition-colors tracking-wide relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D71920] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenMessenger}
                className="px-3.5 py-2 rounded-full text-xs font-bold text-[#5B2A86] bg-[#5B2A86]/10 hover:bg-[#5B2A86]/15 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Message us on Messenger"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#5B2A86]" />
                <span>Chat with Us</span>
              </button>

              <button
                onClick={onOpenOrder}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#D71920] hover:bg-[#F2292E] shadow-md hover:shadow-lg hover:shadow-red-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER NOW</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenOrder}
                className="px-3.5 py-1.5 rounded-full text-xs font-black text-white bg-[#D71920] uppercase tracking-wider"
              >
                Order
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#32124F] hover:bg-[#5B2A86]/10 transition cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#FFF9F5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-[#5B2A86]/20">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#5B2A86]/15">
                <BrandLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#32124F] hover:bg-[#5B2A86]/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-bold text-[#32124F] hover:bg-[#5B2A86]/10 hover:text-[#D71920] transition"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#5B2A86]/15">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrder();
                }}
                className="w-full py-3.5 rounded-2xl bg-[#D71920] text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-500/30"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ORDER SPECIAL LONGGANISA</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMessenger();
                }}
                className="w-full py-3 rounded-2xl bg-[#5B2A86]/10 text-[#5B2A86] font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on Facebook Messenger</span>
              </button>

              <p className="text-[11px] text-center text-[#32124F]/60 font-script text-base">
                "Good Food. Good Mood. Go Zette's."
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
