import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "./section-heading";
import { Reveal } from "./reveal";

export type FaqItem = { question: string; answer: string };

type MiniFaqProps = {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  items: FaqItem[];
};

/**
 * Compact FAQ block for inner pages — same accordion system as the
 * homepage, fed with page-specific questions.
 */
export function MiniFaq({
  eyebrow = "Common Questions",
  title,
  lede = "Can't find your answer here? Contact our team — we're happy to help.",
  items,
}: MiniFaqProps) {
  return (
    <section className="bg-white pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-balance text-3xl leading-[1.08] font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.8rem]">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
                {lede}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Accordion
                type="single"
                collapsible
                className="rounded-[1.75rem] border border-haze bg-mist px-6 py-2 sm:px-8"
              >
                {items.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${index}`}
                    className="border-haze"
                  >
                    <AccordionTrigger className="py-5 text-left font-display text-lg font-medium tracking-tight text-ink hover:no-underline hover:text-ink/70 [&>svg]:size-5 [&>svg]:text-ink [&>svg]:transition-transform">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-stone sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
