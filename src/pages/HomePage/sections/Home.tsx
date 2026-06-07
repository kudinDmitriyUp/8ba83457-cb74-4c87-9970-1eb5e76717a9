import React, { useState, useEffect } from 'react';
import ButtonArrow from '@/components/ui/ButtonArrow';
import AvatarGroup from '@/components/ui/AvatarGroup';
import ImageOrVideo from '@/components/ui/ImageOrVideo';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import { Clock } from 'lucide-react';

export default function HomeSection(): React.JSX.Element {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section id="home" data-webild-section="home" className="relative w-full pt-32 pb-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <ScrollReveal variant="slide-up">
          <AvatarGroup 
            avatarsSrc={["https://i.pravatar.cc/150?img=1","https://i.pravatar.cc/150?img=2","https://i.pravatar.cc/150?img=3","https://i.pravatar.cc/150?img=4","https://i.pravatar.cc/150?img=5"]}
            label="Trusted by 1000+ customers"
            className="mb-8 justify-center"
          />
        </ScrollReveal>

        <TextAnimation 
          text="Your Daily Dose of Artisan Freshness"
          variant="slide-up"
          tag="h1"
          gradientText={false}
          className="text-5xl md:text-7xl font-bold text-foreground mb-6 max-w-4xl"
        />

        <ScrollReveal variant="slide-up" delay={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Artisan breads, pastries, and custom cakes crafted with premium ingredients. Order online or visit us today.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="slide-up" delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <ButtonArrow text="Order Now" href="#contact" variant="primary" />
            <ButtonArrow text="Our Menu" href="#products" variant="secondary" />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-up" delay={0.3} className="w-full relative">
          <div className="relative w-full aspect-[21/9] md:aspect-video rounded-3xl shadow-2xl">
            <div className="w-full h-full rounded-3xl overflow-hidden">
              <ImageOrVideo 
                imageSrc="http://img.b2bpic.net/free-photo/top-view-mix-breads-cookies-with-brown-sugar-cubes_23-2148695485.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Countdown Timer Overlay */}
            <div className="absolute -top-4 -right-4 md:top-6 md:right-6 bg-card border-2 border-primary-cta p-4 rounded-2xl shadow-2xl flex flex-col items-center z-50">
              <div className="flex items-center gap-2 text-foreground mb-2">
                <Clock size={20} className="text-primary-cta" />
                <span className="font-bold text-sm md:text-base uppercase tracking-wider">Discount ends in</span>
              </div>
              <div className="text-3xl md:text-4xl font-mono font-black text-primary-cta tracking-tight">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
