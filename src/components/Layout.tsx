import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Button from '@/components/ui/Button';

function DiscountPill() {
  const [timeLeft, setTimeLeft] = useState(300);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!isVisible) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-card border border-border shadow-xl rounded-full p-2 pl-6 flex items-center justify-between gap-4 pointer-events-auto mx-auto w-max max-w-full"
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="text-sm font-medium text-foreground truncate">
            Opt in for today's discount!
          </span>
          <span className="text-primary-cta font-bold font-mono bg-background px-2 py-1 rounded-md text-sm shrink-0">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
        <Button 
          text="Claim" 
          variant="primary" 
          className="!py-1.5 !px-4 text-sm shrink-0"
          onClick={() => setIsVisible(false)}
        />
      </motion.div>
    </div>
  );
}

export default function Layout() {
  const navItems = [
  {
    "name": "Home",    "href": "#home"
  },
  {
    "name": "Products",    "href": "#products"
  },
  {
    "name": "Our Story",    "href": "#about"
  },
  {
    "name": "Services",    "href": "#services"
  },
  {
    "name": "Testimonials",    "href": "#testimonials"
  },
  {
    "name": "FAQs",    "href": "#faq"
  },
  {
    "name": "Contact",    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="noiseGradient" heroBackground="radialGradient">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="The Daily Crumb"
      logoImageSrc="http://img.b2bpic.net/free-vector/minimal-bakery-shop-label-collection_23-2149413051.jpg"
      ctaButton={{
        text: "Order Now",        href: "#contact"}}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <DiscountPill />
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Bakery",          items: [
            {
              label: "Our Story",              href: "#about"},
            {
              label: "Our Menu",              href: "#products"},
            {
              label: "Specialty Orders",              href: "#services"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQs",              href: "#faq"},
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Wholesale Inquiry",              href: "#contact"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Facebook",              href: "https://facebook.com/thedailycrumb"},
            {
              label: "Instagram",              href: "https://instagram.com/thedailycrumb"},
            {
              label: "Leave a Review",              href: "#testimonials"},
          ],
        },
      ]}
      leftText="© 2024 The Daily Crumb. All rights reserved."
      rightText="Baked with love in our community."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
