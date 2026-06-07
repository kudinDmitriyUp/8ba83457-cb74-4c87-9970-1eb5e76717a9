import type { LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resolveIcon } from "@/utils/resolve-icon";

type Metric = {
  value: string;
  title: string;
  description: string;
  icon: string | LucideIcon;
};

const MetricsGradientCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  metrics,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  metrics: Metric[];
}) => (
  <section aria-label="Metrics section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
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
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
          </div>
        )}
      </div>

      <ScrollReveal variant="fade">
        <GridOrCarousel>
          {metrics.map((metric) => {
            const IconComponent = resolveIcon(metric.icon);
            return (
              <div key={metric.value} className="relative flex flex-col items-center justify-center gap-0 p-6 xl:p-7 2xl:p-8 min-h-70 xl:min-h-80 2xl:min-h-90 h-full card rounded min-w-0">
                <span
                  className="max-w-full text-9xl font-semibold leading-none text-center truncate scale-150 md:scale-100"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, var(--color-foreground) 0%, var(--color-foreground) 20%, transparent 80%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {metric.value}
                </span>
                <span className="max-w-full mt-[-0.25em] md:mt-[-0.75em] text-4xl font-semibold text-center text-balance">{metric.title}</span>
                <p className="max-w-9/10 mt-2 text-base leading-snug text-center text-balance">{metric.description}</p>
                <div className="absolute bottom-6 left-6 xl:bottom-7 xl:left-7 2xl:bottom-8 2xl:left-8 flex items-center justify-center size-10 primary-button rounded">
                  <IconComponent className="h-2/5 w-2/5 text-primary-cta-text" />
                </div>
              </div>
            );
          })}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default MetricsGradientCards;
