import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "./section-heading";
import { Pill } from "./pill";
import { Reveal } from "./reveal";

const faqs = [
  {
    question: "What kind of ICT services does Altagracia Technologies provide?",
    answer:
      "Our services cover ICT equipment supply, digital solutions, software and web development, digital marketing, ICT training and technical support. You can explore our solutions or contact us about a specific requirement.",
  },
  {
    question: "Do you work with businesses and organizations?",
    answer:
      "Yes. Our solutions are structured around the technology needs of businesses, schools, institutions and other organizations. Tell us what your organization needs, and we can discuss the available options.",
  },
  {
    question: "Can individuals buy computers and accessories from Altagracia?",
    answer:
      "Yes. While our primary focus is corporate ICT solutions, individuals can also enquire about computers, accessories and other available technology products.",
  },
  {
    question: "Can I request a quotation for a business project?",
    answer:
      "Yes. Share your requirements through our contact page, and we can discuss the scope, available solutions and quotation process.",
  },
  {
    question: "What if I need an ICT service that isn't listed?",
    answer:
      "You can still contact us. Describe what you need, and we'll let you know whether it's something we can assist with.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply call, send an email or complete our enquiry form. Tell us about your needs, and we can discuss the next step.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-mist pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Common Questions</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-balance text-4xl leading-[1.06] font-medium tracking-tight text-ink sm:text-5xl">
                Everything you need to know before{" "}
                <em className="font-light italic">getting started.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-stone sm:text-lg">
                Can&rsquo;t find the answer you&rsquo;re looking for? Reach out to
                our team directly — we&rsquo;re happy to help.
              </p>
              <div className="mt-8">
                <Pill href="#contact" variant="ink">
                  Ask a Question
                </Pill>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Accordion
                type="single"
                collapsible
                className="rounded-[1.75rem] border border-haze bg-white px-6 py-2 shadow-card sm:px-8"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${index}`}
                    className="border-haze"
                  >
                    <AccordionTrigger className="py-5 text-left font-display text-lg font-medium tracking-tight text-ink hover:no-underline hover:text-ink/70 sm:text-xl [&>svg]:size-5 [&>svg]:text-ink [&>svg]:transition-transform">
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
