import { useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "motion/react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import NavbarFullscreen from "@/components/ui/NavbarFullscreen";
import HeroVideoExpand from "@/components/sections/hero/HeroVideoExpand";
import AboutParallax from "@/components/sections/about/AboutParallax";
import FeaturesAttributeCards from "@/components/sections/features/FeaturesAttributeCards";
import FeaturesMediaGrid from "@/components/sections/features/FeaturesMediaGrid";
import FeaturesRevealCardsBentoSharp from "@/components/sections/features/FeaturesRevealCardsBentoSharp";
import FooterBrand from "@/components/sections/footer/FooterBrand";
import ContactSplitFormSharp from "@/components/sections/contact/ContactSplitFormSharp";
import "./theme.css";

const HERO_VIDEO = "https://storage.googleapis.com/webild/default/templates/hotel/hero.mp4";
const HERO_IMAGE = "https://storage.googleapis.com/webild/default/templates/hotel/hero.webp";

export default function HotelTemplate() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <ReactLenis root>
      <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="default">
        <SiteBackgroundSlot />

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={loaderDone ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-110"
        >
          <NavbarFullscreen
            logo="Aurion"
            navItems={[
              { name: "Rooms", href: "#rooms" },
              { name: "Experience", href: "#experience" },
              { name: "Dining", href: "#dining" },
              { name: "Contact", href: "#contact" },
            ]}
            ctaButton={{ text: "Book Now", href: "#contact" }}
          />
        </motion.div>

        <div id="hero" data-section="hero">
          <HeroVideoExpand
            title="Aurion"
            videoSrc={HERO_VIDEO}
            primaryButton={{ text: "Browse rooms", href: "#rooms" }}
            secondaryButton={{ text: "Watch tour", href: "#tour" }}
            onComplete={() => setLoaderDone(true)}
          />
        </div>

        <div id="about" data-section="about">
          <AboutParallax
            tag="About"
            title="A Sanctuary for Wellness & Rejuvenation"
            description="From private fitness studios to guided meditation sessions, our amenities are designed to enhance your well-being and foster a sense of harmony."
            imageSrc={HERO_IMAGE}
            badge="Est. 1844"
          />
        </div>

        <div id="rooms" data-section="rooms">
          <FeaturesAttributeCards
            tag="Rooms & Suites"
            title="Featured Rooms"
            description="Each room is a sanctuary of refined comfort, designed with meticulous attention to detail."
            items={[
              { title: "The Grand Suite", tags: "Panoramic, Terrace, Italian", badge: "Guest Favourite", details: [{ icon: "Bed", label: "Beds", value: 2 }, { icon: "Bath", label: "Baths", value: 2 }, { icon: "Maximize2", label: "Sqft", value: 1450 }], imageSrc: HERO_IMAGE },
              { title: "Ocean Pavilion", tags: "Oceanfront, Serene, Bright", badge: null, details: [{ icon: "Bed", label: "Beds", value: 1 }, { icon: "Bath", label: "Baths", value: 1 }, { icon: "Maximize2", label: "Sqft", value: 980 }], imageSrc: HERO_IMAGE },
              { title: "Garden Villa", tags: "Garden, Pool, Outdoor Living", badge: "Most Popular", details: [{ icon: "Bed", label: "Beds", value: 3 }, { icon: "Bath", label: "Baths", value: 2 }, { icon: "Maximize2", label: "Sqft", value: 2200 }], imageSrc: HERO_IMAGE },
              { title: "Presidential Suite", tags: "Expansive, Chef Kitchen, Butler", badge: "Guest Favourite", details: [{ icon: "Bed", label: "Beds", value: 3 }, { icon: "Bath", label: "Baths", value: 3 }, { icon: "Maximize2", label: "Sqft", value: 3400 }], imageSrc: HERO_IMAGE },
              { title: "Heritage Room", tags: "Classic, Restored, Elegant", badge: null, details: [{ icon: "Bed", label: "Beds", value: 1 }, { icon: "Bath", label: "Baths", value: 1 }, { icon: "Maximize2", label: "Sqft", value: 850 }], imageSrc: HERO_IMAGE },
              { title: "Spa Retreat", tags: "Sauna, Soaking Tub, Wellness", badge: null, details: [{ icon: "Bed", label: "Beds", value: 2 }, { icon: "Bath", label: "Baths", value: 2 }, { icon: "Maximize2", label: "Sqft", value: 1600 }], imageSrc: HERO_IMAGE },
            ]}
          />
        </div>

        <div id="experience" data-section="amenities">
          <FeaturesMediaGrid
            tag="Amenities"
            title="World-Class Experiences"
            description="Every detail has been considered to create moments of extraordinary comfort and indulgence."
            items={[
              { title: "Infinity Pool", description: "Heated oceanfront pool with panoramic sunset views", imageSrc: HERO_IMAGE },
              { title: "Private Spa", description: "Full-service wellness centre with bespoke treatments", imageSrc: HERO_IMAGE },
              { title: "Fine Dining", description: "Michelin-starred cuisine with locally sourced ingredients", imageSrc: HERO_IMAGE },
              { title: "Fitness Studio", description: "State-of-the-art equipment and personal training", imageSrc: HERO_IMAGE },
              { title: "Wine Cellar", description: "Curated collection of over 500 vintages", imageSrc: HERO_IMAGE },
              { title: "Concierge", description: "24-hour dedicated service for every request", imageSrc: HERO_IMAGE },
            ]}
          />
        </div>

        <div id="journeys" data-section="journeys">
          <FeaturesRevealCardsBentoSharp
            tag="Journeys"
            title="The Journeys"
            description="Exclusive experiences curated for Aurion guests — from cloud forests to volcanic coastlines across Costa Rica's most breathtaking landscapes."
            items={[
              { title: "Cloud Forest Expedition", description: "A private guided trek through Monteverde's misty canopy — hanging bridges, rare wildlife encounters, and a chef-prepared dinner in a hidden clearing.", href: "#", imageSrc: HERO_IMAGE },
              { title: "Volcanic Hot Springs", description: "Exclusive access to secluded thermal pools fed by Arenal Volcano, paired with a volcanic mud ritual and open-air massage.", href: "#", imageSrc: HERO_IMAGE },
              { title: "Pacific Coast Sailing", description: "A full-day private catamaran journey along the Guanacaste coastline — snorkeling, whale watching, and sunset cocktails aboard.", href: "#", imageSrc: HERO_IMAGE },
              { title: "Rainforest Immersion", description: "Descend into Osa Peninsula's pristine jungle for a two-day wildlife retreat with naturalist guides and a treehouse overnight stay.", href: "#", imageSrc: HERO_IMAGE },
              { title: "Coffee Origin Trail", description: "Travel to the highlands of the Central Valley for an intimate single-origin coffee experience — from harvest to private tasting.", href: "#", imageSrc: HERO_IMAGE },
              { title: "Sunset Safari", description: "An exclusive evening wildlife drive through private reserves, ending with a starlit dinner in the savanna.", href: "#", imageSrc: HERO_IMAGE },
              { title: "Marine Sanctuary", description: "Dive into crystal-clear waters for a guided snorkeling experience among vibrant coral reefs and sea turtles.", href: "#", imageSrc: HERO_IMAGE },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitFormSharp
            tag="Contact"
            title="Book Your Stay"
            description="Let us help you plan the perfect getaway. Our concierge team is available to assist with reservations and special requests."
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
              { name: "dates", type: "text", placeholder: "Preferred Dates" },
            ]}
            textarea={{ name: "message", placeholder: "Special Requests or Questions", rows: 4 }}
            buttonText="Send Inquiry"
            imageSrc={HERO_IMAGE}
          />
        </div>

        <FooterBrand
          brand="Aurion"
          columns={[
            { items: [{ label: "Rooms & Suites", href: "#rooms" }, { label: "Dining", href: "#dining" }, { label: "Amenities", href: "#experience" }] },
            { items: [{ label: "Journeys", href: "#journeys" }, { label: "Spa & Wellness", href: "#spa" }, { label: "Events", href: "#events" }] },
            { items: [{ label: "Book Now", href: "#contact" }, { label: "Location", href: "#location" }, { label: "Contact Us", href: "#contact" }] },
          ]}
        />
      </StyleProvider>
    </ReactLenis>
  );
}
