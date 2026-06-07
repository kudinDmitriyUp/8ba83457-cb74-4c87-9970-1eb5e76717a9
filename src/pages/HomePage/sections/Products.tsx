import React from 'react';
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";
import { cls } from "@/lib/utils";

export default function ProductsSection(): React.JSX.Element {
  const gridClasses = [
    "md:col-span-2",
    "md:col-span-4",
    "md:col-span-3",
    "md:col-span-3",
    "md:col-span-2",
    "md:col-span-2",
    "md:col-span-2",
  ];

  const staggerDelays = [
    0,
    0.1,
    0,
    0.1,
    0,
    0.1,
    0.2,
  ];

  const items = [
    { imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-hands-holding-bread-cloth_23-2148288069.jpg", href: "#", rating: 5 },
    { imageSrc: "http://img.b2bpic.net/free-photo/fresh-french-croissants-with-golden-crust-blue-wooden-board_114579-58902.jpg", href: "#", rating: 4 },
    { imageSrc: "http://img.b2bpic.net/free-photo/birthday-party-composition_23-2147654681.jpg", href: "#", rating: 5 },
    { imageSrc: "http://img.b2bpic.net/free-photo/glass-cup-milk-with-chocolate-cookies-wooden-cutting-board_114579-62928.jpg", href: "#", rating: 4 },
    { imageSrc: "http://img.b2bpic.net/free-photo/delicious-plum-pie-with-chemex-coffee-ingredients-with-fabric-wooden-table-with-fabric_181624-18679.jpg", href: "#", rating: 5 },
    { imageSrc: "http://img.b2bpic.net/free-photo/assortment-pieces-cake_114579-30703.jpg", href: "#", rating: 3 },
    { imageSrc: "http://img.b2bpic.net/free-photo/three-piece-fresh-baguette-flour_114579-48928.jpg", href: "#", rating: 4 }
  ];

  return (
    <div id="products" data-webild-section="products">
      <section aria-label="Features image bento section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col items-center w-content-width mx-auto gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
              <p>Our Delights</p>
            </div>

            <TextAnimation
              text="Explore Our Freshly Baked Selection"
              variant="fade-blur"
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text="From classic croissants to signature sourdoughs, our ovens are always busy crafting the perfect treat for you."
              variant="fade-blur"
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
            />
          </div>

          <div className="w-content-width mx-auto grid grid-cols-1 md:grid-cols-6 gap-3">
            {items.map((item, index) => {
              const content = (
                <div className="h-80 xl:h-100 2xl:h-120 overflow-hidden relative group">
                  <ImageOrVideo
                    imageSrc={item.imageSrc}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cls(
                            "w-5 h-5",
                            i < item.rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"
                          )} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );

              return (
                <ScrollReveal
                  key={index}
                  variant="slide-up"
                  delay={staggerDelays[index]}
                  className={cls(
                    "card rounded-lg overflow-hidden",
                    gridClasses[index]
                  )}
                >
                  {item.href ? (
                    <a href={item.href} className="block w-full h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
