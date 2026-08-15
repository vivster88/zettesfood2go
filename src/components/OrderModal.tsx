import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Check, MessageCircle, Send, ShieldCheck, Heart, Sparkles, MapPin, Phone, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_CONFIG } from '../lib/brand';
import BrandLogo from './BrandLogo';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (type: 'success' | 'error' | 'info', title: string, desc?: string) => void;
}

export default function OrderModal({ isOpen, onClose, onNotify }: OrderModalProps) {
  const [packQuantity, setPackQuantity] = useState(2);
  const [customerName, setCustomerName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('Metro Manila');
  const [preferredDate, setPreferredDate] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const handleIncrement = () => setPackQuantity((prev) => Math.min(prev + 1, 20));
  const handleDecrement = () => setPackQuantity((prev) => Math.max(prev - 1, 1));

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !contactNumber || !deliveryAddress) {
      onNotify('error', 'Incomplete Details', 'Please fill in your name, contact number, and delivery address.');
      return;
    }

    const generatedId = 'ZET-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5B2A86', '#D71920', '#FFF9F5']
      });
    } catch {
      // Confetti fallback
    }

    onNotify('success', 'Order Placed with Love!', `Reference ID: ${generatedId}. We will message you shortly to confirm.`);
  };

  const handleMessengerSubmit = () => {
    const message = encodeURIComponent(
      `Hello Zette's Food 2 Go! I would like to order Special Longganisa:\n\n• Quantity: ${packQuantity} pack(s)\n• Name: ${customerName || '[Name]'}\n• Contact: ${contactNumber || '[Contact]'}\n• Area: ${deliveryArea}\n• Address: ${deliveryAddress || '[Address]'}\n• Notes: ${orderNotes || 'None'}\n\nThank you! Good Food. Good Mood. Go Zette's!`
    );
    window.open(`${BRAND_CONFIG.messengerUrl}?text=${message}`, '_blank', 'noopener,noreferrer');
    onNotify('info', 'Connecting to Messenger', 'Opening Facebook Messenger with your order details.');
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      `Hello Zette's Food 2 Go! I'd like to order Special Longganisa (${packQuantity} packs) for delivery to ${deliveryArea}.`
    );
    window.open(`${BRAND_CONFIG.whatsappUrl}?text=${message}`, '_blank', 'noopener,noreferrer');
    onNotify('info', 'Connecting to WhatsApp', 'Opening WhatsApp chat.');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#5B2A86]/20 overflow-hidden text-left"
      >
        {/* Modal Header */}
        <div className="bg-[#FFF9F5] px-6 py-5 border-b border-[#5B2A86]/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <div>
              <h3 className="font-display font-black text-lg text-[#32124F]">
                Order Special Longganisa
              </h3>
              <p className="text-xs text-[#D71920] font-script text-base font-bold">
                "Made with Love. Packed with Flavor."
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#5B2A86]/20 text-[#32124F] hover:bg-[#5B2A86]/10 flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        {!orderSubmitted ? (
          <form onSubmit={handleDirectSubmit} className="p-6 space-y-6">
            
            {/* Product & Quantity Selector Card */}
            <div className="p-4 rounded-2xl bg-[#FFF9F5] border border-[#5B2A86]/15 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={BRAND_CONFIG.assets.pack}
                  alt="Special Longganisa Pack"
                  className="w-14 h-14 rounded-xl object-cover border border-[#5B2A86]/15"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-black text-sm text-[#32124F]">
                    Special Longganisa
                  </h4>
                  <p className="text-xs text-[#32124F]/70">
                    Vacuum-sealed frozen pack
                  </p>
                  <span className="text-[10px] font-bold text-[#D71920] uppercase tracking-wider">
                    {BRAND_CONFIG.tagalogCatchphrase}
                  </span>
                </div>
              </div>

              {/* Counter */}
              <div className="flex items-center gap-2 bg-white rounded-full p-1 border border-[#5B2A86]/20 shadow-sm">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="w-7 h-7 rounded-full bg-[#FFF9F5] text-[#32124F] hover:bg-[#5B2A86]/10 flex items-center justify-center transition cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-display font-black text-base text-[#32124F] px-2 min-w-[24px] text-center">
                  {packQuantity}
                </span>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="w-7 h-7 rounded-full bg-[#D71920] text-white hover:bg-[#F2292E] flex items-center justify-center transition cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Customer Information Inputs */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#32124F] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Maria Santos"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#FFF9F5] border border-[#5B2A86]/20 text-[#32124F] focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#32124F] uppercase tracking-wider mb-1">
                    Contact / Mobile No. *
                  </label>
                  <input
                    type="tel"
                    required
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="0917 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#FFF9F5] border border-[#5B2A86]/20 text-[#32124F] focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#32124F] uppercase tracking-wider mb-1">
                    Delivery Area *
                  </label>
                  <select
                    value={deliveryArea}
                    onChange={(e) => setDeliveryArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#FFF9F5] border border-[#5B2A86]/20 text-[#32124F] focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                  >
                    <option value="Metro Manila">Metro Manila (Same-Day / Next-Day)</option>
                    <option value="Rizal">Rizal (Antipolo, Cainta, Taytay, etc.)</option>
                    <option value="Cavite">Cavite (Bacoor, Imus, Dasma, etc.)</option>
                    <option value="Laguna">Laguna (San Pedro, Biñan, Santa Rosa)</option>
                    <option value="Provincial Pickup">Other Provincial Pickup Hub</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#32124F] uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#FFF9F5] border border-[#5B2A86]/20 text-[#32124F] focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#32124F] uppercase tracking-wider mb-1">
                  Complete Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="House/Unit No., Street, Barangay, City, Landmarks..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-[#FFF9F5] border border-[#5B2A86]/20 text-[#32124F] focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#32124F] uppercase tracking-wider mb-1">
                  Special Notes / Landmark (Optional)
                </label>
                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="e.g. Leave with building guard, call upon arrival"
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#FFF9F5] border border-[#5B2A86]/20 text-[#32124F] focus:outline-none focus:ring-2 focus:ring-[#5B2A86]"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#D71920] hover:bg-[#F2292E] text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer brand-red-glow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>CONFIRM ORDER ({packQuantity} PACK{packQuantity > 1 ? 'S' : ''})</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleMessengerSubmit}
                  className="flex-1 py-3 rounded-2xl bg-[#5B2A86]/10 hover:bg-[#5B2A86]/15 text-[#5B2A86] font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via Messenger</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Bottom trust note */}
            <div className="text-[11px] text-center text-[#32124F]/60 flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>We will contact you immediately to confirm delivery schedule & payment mode.</span>
            </div>
          </form>
        ) : (
          /* Confirmation View */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black text-[#D71920] uppercase tracking-widest">
                ORDER RECEIVED WITH LOVE
              </span>
              <h3 className="text-2xl font-display font-black text-[#32124F]">
                Thank you, {customerName}!
              </h3>
              <p className="font-mono text-xs font-bold text-[#5B2A86] bg-[#5B2A86]/10 px-3 py-1.5 rounded-full inline-block">
                Reference ID: {orderId}
              </p>
            </div>

            <p className="text-sm text-[#32124F]/80 max-w-sm mx-auto leading-relaxed">
              Your order for <strong>{packQuantity} pack(s) of Special Longganisa</strong> has been recorded. Zette and the team will reach out via SMS / Messenger at <strong>{contactNumber}</strong> to coordinate your delivery.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleMessengerSubmit}
                className="px-6 py-3 rounded-full bg-[#5B2A86] text-white font-bold text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Zette on Messenger</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
}
