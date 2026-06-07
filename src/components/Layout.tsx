import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#home"
  },
  {
    "name": "Products",
    "href": "#products"
  },
  {
    "name": "Our Story",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "FAQs",
    "href": "#faq"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="noiseGradient" heroBackground="radialGradient">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="The Daily Crumb"
      logoImageSrc="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop&q=80"
      ctaButton={{
        text: "Order Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Bakery",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Our Menu",
              href: "#products",
            },
            {
              label: "Specialty Orders",
              href: "#services",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Wholesale Inquiry",
              href: "#contact",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Facebook",
              href: "https://facebook.com/thedailycrumb",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/thedailycrumb",
            },
            {
              label: "Leave a Review",
              href: "#testimonials",
            },
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
