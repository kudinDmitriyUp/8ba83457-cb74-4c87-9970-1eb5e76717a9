import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

type FeatureItem = {
  href?: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesImageBentoProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: [FeatureItem, FeatureItem, FeatureItem, FeatureItem, FeatureItem, FeatureItem, FeatureItem];
}

const FeaturesImageBento = ({ tag, title, description, primaryButton, secondaryButton, items }: FeaturesImageBentoProps) => {
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

  return (
    <section aria-label="Features image bento section" className="py-20">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center w-content-width mx-auto gap-2">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant="fade-blur"
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant="fade-blur"
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
          />

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
            </div>
          )}
        </div>

        <div className="w-content-width mx-auto grid grid-cols-1 md:grid-cols-6 gap-3">
          {items.map((item, index) => {
            const content = (
              <div className="h-80 xl:h-100 2xl:h-120 overflow-hidden">
                <ImageOrVideo
                  imageSrc={item.imageSrc}
                  videoSrc={item.videoSrc}
                  className="rounded group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            );

            return (
              <ScrollReveal key={index} variant="slide-up" delay={staggerDelays[index]} className={cls("col-span-1 group", gridClasses[index])}>
                {item.href ? (
                  <a href={item.href} className="block overflow-hidden rounded">
                    {content}
                  </a>
                ) : (
                  <div className="overflow-hidden rounded">
                    {content}
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesImageBento;
