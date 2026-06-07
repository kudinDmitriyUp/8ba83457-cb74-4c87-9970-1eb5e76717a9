import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesGridSplit from '@/components/sections/features/FeaturesGridSplit';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="home" data-section="home">
    <SectionErrorBoundary name="home">
          <HeroBillboard
      title="Freshly Baked Goodness, Made Daily"
      description="Artisan breads, pastries, and custom cakes crafted with premium ingredients. Order online or visit us today."
      primaryButton={{
        text: "Order Now",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Our Menu",
        href: "#products",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-mix-breads-cookies-with-brown-sugar-cubes_23-2148695485.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="Our Passion for Baking"
      descriptions={[
        "At The Daily Crumb, every loaf of bread, every delicate pastry, and every celebration cake is baked with love and the finest ingredients. We are a family-owned bakery, dedicated to bringing joy and delicious moments to our community.",
        "For over a decade, we've perfected our recipes, combining traditional techniques with innovative flavors. From early morning deliveries to bespoke wedding cakes, our commitment to quality and freshness shines through in every bite. Come taste the difference!",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Our Delights"
      title="Explore Our Freshly Baked Selection"
      description="From classic croissants to signature sourdoughs, our ovens are always busy crafting the perfect treat for you."
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-hands-holding-bread-cloth_23-2148288069.jpg",
          href: "#",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-french-croissants-with-golden-crust-blue-wooden-board_114579-58902.jpg",
          href: "#",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/birthday-party-composition_23-2147654681.jpg",
          href: "#",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/glass-cup-milk-with-chocolate-cookies-wooden-cutting-board_114579-62928.jpg",
          href: "#",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-plum-pie-with-chemex-coffee-ingredients-with-fabric-wooden-table-with-fabric_181624-18679.jpg",
          href: "#",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-pieces-cake_114579-30703.jpg",
          href: "#",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/three-piece-fresh-baguette-flour_114579-48928.jpg",
          href: "#",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesGridSplit
      tag="Beyond the Counter"
      title="Custom Orders & Catering"
      description="Planning a special event or need a personalized cake? We offer bespoke solutions to make your moments extra sweet."
      topItems={[
        {
          title: "Custom Celebration Cakes",
          description: "From elegant wedding cakes to fun birthday creations, we design custom cakes that are as unique as your celebration.",
          imageSrc: "http://img.b2bpic.net/free-photo/sweet-candy-bar-wedding-celebration-party_482257-31517.jpg",
        },
        {
          title: "Event & Corporate Catering",
          description: "Impress your guests or clients with a delightful selection of our finest pastries, mini desserts, and savory treats.",
          imageSrc: "http://img.b2bpic.net/free-photo/candy-bar-with-mousse-desserts-eclairs-patisserie-violet-table_8353-9830.jpg",
        },
      ]}
      bottomItem={{
        title: "Wholesale Partnerships",
        description: "Looking to offer quality baked goods at your café or restaurant? Partner with The Daily Crumb for fresh, reliable supply.",
        primaryButton: {
          text: "Learn More",
          href: "#contact",
        },
        imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-clinking-glasses_23-2149295545.jpg",
      }}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeCards
      tag="Loved by Many"
      title="What Our Customers Say"
      description="Hear from our happy customers who enjoy the freshness and quality of The Daily Crumb."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Local Resident",
          quote: "The sourdough bread from The Daily Crumb is simply the best in town. It's a staple in our household!",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-holding-cupcake_23-2148263228.jpg",
        },
        {
          name: "Michael C.",
          role: "Event Planner",
          quote: "Their custom cakes are true works of art. The attention to detail and flavor are unmatched for our corporate events.",
          imageSrc: "http://img.b2bpic.net/free-photo/family-routine-concept-mixed-race-male-reads-attentively-news-tablet-computer-sits-kitchen_273609-8912.jpg",
        },
        {
          name: "Emily R.",
          role: "Community Member",
          quote: "I love stopping by for my morning coffee and a croissant. The staff are always so friendly, and everything is so fresh.",
          imageSrc: "http://img.b2bpic.net/free-photo/family-cooks-dough-cookies-kitchen_1157-25225.jpg",
        },
        {
          name: "David K.",
          role: "Restaurant Owner",
          quote: "Partnering with The Daily Crumb for our daily bread supply has been fantastic. Our customers rave about the quality.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessmen-laughing_23-2147704583.jpg",
        },
        {
          name: "Jessica L.",
          role: "Student",
          quote: "The muffins are my go-to study snack. Always delicious and gives me the perfect energy boost!",
          imageSrc: "http://img.b2bpic.net/free-photo/father-s-day-composition-with-delicious-croissant_23-2147632064.jpg",
        },
        {
          name: "Robert B.",
          role: "Retiree",
          quote: "This bakery reminds me of my grandmother's kitchen. The classic recipes are just perfect, pure comfort.",
          imageSrc: "http://img.b2bpic.net/free-photo/excited-elegant-middle-aged-businesswoman-using-laptop-work-clenching-fists-happy-win-tender_343059-3753.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="partners" data-section="partners">
    <SectionErrorBoundary name="partners">
          <SocialProofMarquee
      tag="Trusted Partners"
      title="Proudly Serving Our Community"
      description="We partner with local businesses and events to bring our delicious baked goods further."
      names={[
        "Cafe Delight",
        "Sweet Escapes Catering",
        "Golden Oven Bistro",
        "Morning Muffin Co.",
        "Flourish Foods Market",
        "Dough & Co. Eatery",
        "Sugar & Spice Event Planners",
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Got Questions?"
      title="Frequently Asked Questions"
      description="Find quick answers to common inquiries about our products, ordering, and services."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "What are your bakery's operating hours?",
              answer: "We are open Monday to Saturday from 7 AM to 6 PM, and Sunday from 8 AM to 3 PM. Please check our Google Maps listing for any holiday hours.",
            },
            {
              question: "Do you offer gluten-free or vegan options?",
              answer: "Yes, we have a selection of delicious gluten-free and vegan pastries available daily. Please ask our staff for today's special selection as it varies.",
            },
            {
              question: "Where are your ingredients sourced from?",
              answer: "We pride ourselves on using locally sourced, premium ingredients whenever possible. Our flour comes from local mills, and seasonal fruits are from nearby farms.",
            },
          ],
        },
        {
          name: "Ordering",
          items: [
            {
              question: "How can I place an online order?",
              answer: "You can place online orders directly through our website by navigating to the 'Order Now' section. Select your items, choose pick-up or delivery, and complete the checkout process.",
            },
            {
              question: "What is the lead time for custom cake orders?",
              answer: "For custom cakes, we require a minimum of 7 days' notice. For intricate designs or large orders, we recommend booking 2-3 weeks in advance to ensure availability.",
            },
            {
              question: "Do you offer delivery services?",
              answer: "Yes, we offer local delivery within a 10-mile radius for online orders over $25. Delivery fees apply based on distance. You can check availability at checkout.",
            },
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Visit Us or Order Today"
      text="Ready to indulge? Stop by our bakery, or place your order online for pick-up or delivery. We can't wait to serve you!"
      primaryButton={{
        text: "Order Now",
        href: "mailto:orders@thedailycrumb.com",
      }}
      secondaryButton={{
        text: "Get Directions",
        href: "https://maps.google.com/maps?q=The+Daily+Crumb",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
