// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in ./<PageBase>/sections/<X>.tsx. Edit the section
// files directly; this shell only fixes render order.

import React from 'react';
import HomeSection from './HomePage/sections/Home';
import AboutSection from './HomePage/sections/About';
import * as ProductsModule from './HomePage/sections/Products';
import ServicesSection from './HomePage/sections/Services';
import TestimonialsSection from './HomePage/sections/Testimonials';
import PartnersSection from './HomePage/sections/Partners';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';

const ProductsSection = () => {
  const Component = 
    (ProductsModule as any).default || 
    (ProductsModule as any).ProductsSection || 
    (ProductsModule as any).Products || 
    (Object.keys(ProductsModule).length > 0 ? (ProductsModule as any)[Object.keys(ProductsModule)[0]] : null);
  
  return Component ? <Component /> : null;
};

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PartnersSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}