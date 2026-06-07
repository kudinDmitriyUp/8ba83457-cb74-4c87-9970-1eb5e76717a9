import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type FeatureItem = {
  title?: string;
  description?: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

interface FeaturesMarqueeCardsProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: FeatureItem[];
}

const FeaturesMarqueeCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  items,
}: FeaturesMarqueeCardsProps) => {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <section aria-label="Features section" className="pt-20 pb-10">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center w-content-width mx-auto gap-2">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant="slide-up"
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
          />

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
            </div>
          )}
        </div>

        <ScrollReveal variant="fade-blur">
          <div className="w-content-width mx-auto overflow-hidden mask-fade-x-medium">
            <div className="flex w-max animate-marquee-horizontal" style={{ animationDuration: "60s" }}>
              {duplicated.map((item, i) => (
                <div key={i} className="shrink-0 w-60 md:w-75 2xl:w-80 aspect-4/5 mb-10 mr-3 md:mr-5 p-2 xl:p-3 2xl:p-4 card rounded-lg overflow-hidden">
                  <ImageOrVideo
                    imageSrc={item.imageSrc}
                    videoSrc={item.videoSrc}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesMarqueeCards;
