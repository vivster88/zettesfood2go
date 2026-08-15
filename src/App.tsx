/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStatement from './components/BrandStatement';
import ProductShowcase from './components/ProductShowcase';
import WhyZettes from './components/WhyZettes';
import FounderStory from './components/FounderStory';
import FoodMoments from './components/FoodMoments';
import SocialGrid from './components/SocialGrid';
import OrderCTA from './components/OrderCTA';
import FaqSection from './components/FaqSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import MobileStickyBar from './components/MobileStickyBar';
import ToastContainer, { ToastMessage } from './components/Toast';
import { BRAND_CONFIG } from './lib/brand';

export default function App() {
  // Modal states
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  // Toast notifications state
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const notify = (type: 'success' | 'error' | 'info', title: string, description?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { id, type, title, description };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenMessenger = () => {
    window.open(BRAND_CONFIG.messengerUrl, '_blank', 'noopener,noreferrer');
    notify('info', 'Opening Messenger', 'Connecting you with Zette on Facebook Messenger.');
  };

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#211A25] font-sans antialiased overflow-x-hidden selection:bg-[#5B2A86] selection:text-white">
      
      {/* 1. Sticky Navigation */}
      <Navbar
        onOpenOrder={() => setOrderModalOpen(true)}
        onOpenMessenger={handleOpenMessenger}
      />

      {/* Main Experience Layout */}
      <main id="main-content">
        {/* 2. Hero Section with Real Packaging and Editorial Typography */}
        <Hero
          onOpenOrder={() => setOrderModalOpen(true)}
          onOpenMessenger={handleOpenMessenger}
        />

        {/* 3. Editorial Brand Statement */}
        <BrandStatement />

        {/* 4. Signature Product Experience ("Meet the Special") */}
        <ProductShowcase
          onOpenOrder={() => setOrderModalOpen(true)}
          onOpenMessenger={handleOpenMessenger}
        />

        {/* 5. 4 Brand Pillars ("Why Zette's?") */}
        <WhyZettes />

        {/* 6. Founder Story ("Meet Zette") */}
        <FounderStory
          onOpenMessenger={handleOpenMessenger}
          onOpenOrder={() => setOrderModalOpen(true)}
        />

        {/* 7. 4 Food Moments ("For the Moments that Taste Better") */}
        <FoodMoments onOpenOrder={() => setOrderModalOpen(true)} />

        {/* 8. Social Media Grid ("Follow the Flavor") */}
        <SocialGrid onNotify={notify} />

        {/* 9. High-Conversion Order CTA Section */}
        <OrderCTA
          onOpenOrder={() => setOrderModalOpen(true)}
          onOpenMessenger={handleOpenMessenger}
        />

        {/* 10. Searchable FAQ Section */}
        <FaqSection onOpenMessenger={handleOpenMessenger} />

        {/* 11. Final Closing Brand CTA */}
        <FinalCTA onOpenOrder={() => setOrderModalOpen(true)} />
      </main>

      {/* 12. Footer with Business & Location Placeholders */}
      <Footer
        onOpenOrder={() => setOrderModalOpen(true)}
        onOpenMessenger={handleOpenMessenger}
      />

      {/* Mobile Sticky Order Bar */}
      <MobileStickyBar onOpenOrder={() => setOrderModalOpen(true)} />

      {/* Interactive Order / Pre-order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        onNotify={notify}
      />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
