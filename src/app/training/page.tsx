import type { Metadata } from "next";
import {
  MonitorSmartphone,
  FileSpreadsheet,
  Mail,
  ShieldAlert,
  Users,
  Presentation,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";
import { MiniFaq } from "@/components/site/mini-faq";
import { QuoteStrip } from "@/components/site/quote-strip";
import {
  FeatureGrid,
  RelatedServices,
  StepsRow,
} from "@/components/site/service-blocks";
import { Eyebrow, SectionHeading } from "@/components/site/section-heading";
import { Pill } from "@/components/site/pill";
import { Reveal } from "@/components/site/reveal";
import { TESTIMONIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Professional ICT Training for Teams & Individuals | Altagracia Technologies",
  description:
    "Practical ICT training for individuals, employees and teams in Nigeria — computer fundamentals, office productivity, business tools and device care. Request a training plan.",
  keywords: [
    "ICT training Nigeria",
    "professional ICT training",
    "corporate computer training",
    "digital skills training for teams",
  ],
  openGraph: {
    title: "Professional ICT Training | Altagracia Technologies",
    description:
      "Practical ICT training for individuals, employees and teams — skills your people will actually use at work.",
    type: "website",
    siteName: "Altagracia Technologies",
  },
};

const features = [
  {
    icon: MonitorSmartphone,
    title: "Computer Fundamentals",
    body: "Confident, everyday use of computers — for beginners and those returning to formal study.",
  },
  {
    icon: FileSpreadsheet,
    title: "Office Productivity Tools",
    body: "Documents, spreadsheets and presentations, taught with real work scenarios.",
  },
  {
    icon: Mail,
    title: "Internet, Email & Online Tools",
    body: "Professional communication and safe, effective use of online services at work.",
  },
  {
    icon: Presentation,
    title: "Business Software Skills",
    body: "Training on the specific tools your organization uses, delivered around your workflows.",
  },
  {
    icon: ShieldAlert,
    title: "Device Care & Troubleshooting",
    body: "Practical habits and basic fixes that keep everyday technology problems small.",
  },
  {
    icon: Users,
    title: "Custom Team Training",
    body: "A training plan built around your team's roles, skill gaps and schedule.",
  },
];

const steps = [
  {
    title: "Discuss Skill Needs",
    body: "We talk through what your people should be able to do after the training.",
  },
  {
    title: "Receive a Training Plan",
    body: "You get a clear plan: topics, duration, format and cost — agreed before we start.",
  },
  {
    title: "Practical Delivery",
    body: "Hands-on sessions with plenty of practice, at your venue or an agreed arrangement.",
  },
  {
    title: "Measure & Follow Up",
    body: "We check understanding during the sessions and remain available for follow-up questions.",
  },
];

const formats = [
  {
    title: "For Organizations & Teams",
    body: "Group training for staff, planned around your operations and delivered at your premises where practical.",
  },
  {
    title: "For Schools",
    body: "Teacher training and student programs that make computer laboratories genuinely useful — alongside the equipment we supply.",
  },
  {
    title: "For Individuals",
    body: "Practical training for job seekers, professionals and anyone building digital confidence.",
  },
];

const faqs = [
  {
    question: "Where does training take place?",
    answer:
      "For organizations, training usually takes place at your premises using your equipment — which also means the training matches your real working environment. Other arrangements can be discussed.",
  },
  {
    question: "Can training be adapted to complete beginners?",
    answer:
      "Yes. Training is planned around the participants' current level, and beginner topics assume no prior knowledge.",
  },
  {
    question: "How long does a training engagement last?",
    answer:
      "It depends on the topics and depth. A training plan could be a single day, a series of sessions or an ongoing program — the plan you receive states the duration clearly.",
  },
  {
    question: "Do participants receive anything after the training?",
    answer:
      "Sessions are hands-on and practical. Where useful, we provide reference materials so participants can review what they learned.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Professional ICT Training"
        title={
          <>
            Build the skills your people{" "}
            <em className="font-light italic">need to do more.</em>
          </>
        }
        lede="Technology only delivers value when people can use it well. We provide practical ICT training for individuals, employees and teams — planned around real work, not abstract lessons."
        image={{
          src: "/images/training-session.jpg",
          alt: "Participants learning on computers during an Altagracia ICT training session",
        }}
        actions={
          <>
            <Pill href="/contact" variant="ink">
              Request a Training Plan
            </Pill>
            <Pill href="#training-areas" variant="outline">
              Training Areas
            </Pill>
          </>
        }
      />

      {/* Training areas */}
      <section
        id="training-areas"
        className="relative isolate overflow-hidden bg-mist py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Training Areas"
            title={
              <>
                Skills people use{" "}
                <em className="font-light italic">long after the session.</em>
              </>
            }
            lede="Every topic is taught with practical, work-relevant examples — because the goal is capability, not certificates."
          />
          <div className="mt-12">
            <FeatureGrid items={features} />
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who It's For"
            title={
              <>
                Training shaped around{" "}
                <em className="font-light italic">the learner.</em>
              </>
            }
            lede="The same practical standard, delivered in the format that fits each audience."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {formats.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-[1.75rem] border border-haze bg-mist p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                  <h3 className="font-display text-lg font-medium tracking-tight text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone sm:text-base">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How Training Engagements Work"
            title={
              <>
                From skill gaps to{" "}
                <em className="font-light italic">real capability.</em>
              </>
            }
            lede="A structured, transparent process — you always know what's being taught and why."
          />
          <div className="mt-12">
            <StepsRow steps={steps} />
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuoteStrip testimonial={TESTIMONIALS[1]} />
          <div className="mt-12">
            <RelatedServices current="training" />
          </div>
        </div>
      </section>

      <MiniFaq
        title={
          <>
            Questions about{" "}
            <em className="font-light italic">training.</em>
          </>
        }
        items={faqs}
      />

      <CtaBand
        eyebrow="Request a Training Plan"
        title={
          <>
            Invest in the people who{" "}
            <em className="font-light italic">use your technology.</em>
          </>
        }
        lede="Tell us who needs training and what they should be able to do. We'll respond with a practical plan and clear pricing."
      />
    </>
  );
}
