import {
  Code2,
  GraduationCap,
  Megaphone,
  Monitor,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ── Company facts (single source of truth across pages) ─────────── */

export const SITE = {
  name: "Altagracia Technologies",
  phone: { label: "+234 805 349 9040", href: "tel:+2348053499040" },
  alternatePhone: { label: "+234 803 714 8609", href: "tel:+2348037148609" },
  email: {
    label: "info@altagraciatechnologies.com",
    href: "mailto:info@altagraciatechnologies.com",
  },
  location: "Lagos, Nigeria",
  responseNote: "We respond to enquiries within one business day.",
};

export const PHONE_NUMBERS = [SITE.phone, SITE.alternatePhone] as const;

export const COMPANY_MISSION =
  "Make technology useful and accessible by bringing together ICT equipment, digital solutions, practical training and dependable support.";

export const COMPANY_VISION =
  "A future where businesses and organizations can use technology confidently to serve people and grow sustainably.";

export const COMPANY_VALUES = [
  {
    title: "Listen first",
    body: "Understand the need before recommending a product or service.",
  },
  {
    title: "Keep it practical",
    body: "Focus on useful solutions that fit the work to be done.",
  },
  {
    title: "Communicate clearly",
    body: "Make scope, options and next steps easy to understand.",
  },
  {
    title: "Take responsibility",
    body: "Treat every commitment with care from first conversation through delivery.",
  },
  {
    title: "Keep learning",
    body: "Build skills and adapt as technology and customer needs change.",
  },
] as const;

/* ── The five service lines (terminology consistent site-wide) ───── */

export type Service = {
  slug: string;
  href: string;
  icon: LucideIcon;
  /** Full service name used in headings and dropdowns. */
  name: string;
  /** Shorter name used in nav and footer where space is tight. */
  short: string;
  /** One-line summary used in cards and lists. */
  summary: string;
};

export const SERVICES: Service[] = [
  {
    slug: "procurement",
    href: "/procurement",
    icon: Monitor,
    name: "ICT Equipment & Technology Supply",
    short: "ICT Equipment & Supply",
    summary:
      "Computers, laptops, office equipment and ICT accessories for organizations — sourced to your requirements.",
  },
  {
    slug: "digital-solutions",
    href: "/digital-solutions",
    icon: Code2,
    name: "Software & Digital Solutions",
    short: "Software & Digital Solutions",
    summary:
      "Websites, web applications and custom software built around the way your business actually works.",
  },
  {
    slug: "digital-marketing",
    href: "/digital-marketing",
    icon: Megaphone,
    name: "Digital Marketing & Business Visibility",
    short: "Digital Marketing",
    summary:
      "Help the right people find your business online and understand the value you offer.",
  },
  {
    slug: "training",
    href: "/training",
    icon: GraduationCap,
    name: "ICT Training & Capacity Development",
    short: "ICT Training",
    summary:
      "Practical ICT training for individuals, employees and teams — skills your people will use at work.",
  },
  {
    slug: "support",
    href: "/support",
    icon: Wrench,
    name: "Technical Support & ICT Maintenance",
    short: "Technical Support",
    summary:
      "Repairs, maintenance and dependable technical assistance that keeps your equipment working.",
  },
];

/* ── Client testimonials (shared with the homepage section) ──────── */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  img: string;
  alt: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Altagracia handled the ICT overhaul across our three depots — new workstations, networking, CCTV, the lot. What won us over is the after-sales support: response times are measured in hours, not days. Downtime that used to delay our dispatches is now practically zero.",
    name: "Emeka Nwosu",
    role: "Operations Director",
    img: "/images/testimonial-emeka.jpg",
    alt: "Portrait of Emeka Nwosu, Operations Director",
  },
  {
    quote:
      "They equipped our computer laboratory with forty systems, installed the learning software and trained our teachers. Two years on, they still come in every term to service the lab. Any school looking for a technology partner that keeps its word should talk to them first.",
    name: "Mrs. Aisha Bello-Abubakar",
    role: "Administrator",
    img: "/images/testimonial-aisha.jpg",
    alt: "Portrait of Mrs. Aisha Bello-Abubakar, Administrator",
  },
  {
    quote:
      "As a young company we couldn't afford trial and error. They took time to understand how we actually operate before recommending anything, then delivered our POS and inventory setup on schedule and on budget. It feels less like a vendor and more like a technical co-founder.",
    name: "Tomilola Alabi",
    role: "Co-founder & CEO",
    img: "/images/testimonial-tomilola.jpg",
    alt: "Portrait of Tomilola Alabi, Co-founder and CEO",
  },
];

/* ── Engagement numbers (mirrors the homepage stats band) ────────── */

export const NUMBERS = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 250, suffix: "+", label: "Clients Supported" },
  { value: 480, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
];
