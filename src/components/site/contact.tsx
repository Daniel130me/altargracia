"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, CornerDownRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  AsteriskBadge,
  Sparkle,
  SquiggleArrow,
} from "@/components/site/doodles";
import { SITE } from "@/lib/site-config";

const NEEDS = [
  { value: "device", label: "Buying a computer / phone" },
  { value: "repair", label: "Repair or maintenance" },
  { value: "marketing", label: "Digital marketing" },
  { value: "web", label: "Web design and development" },
  { value: "software", label: "Software development" },
  { value: "uiux", label: "UI/UX design" },
  { value: "training", label: "ICT training across all areas" },
  { value: "contract", label: "Bulk supply / general contract" },
  { value: "other", label: "Something else" },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (phone.trim().length < 7) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!need) {
      setError("Please choose what you need.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          need,
          message: message.trim() || undefined,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.error ||
            "Something went wrong. Please call or WhatsApp us instead."
        );
      }
      setSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please call or WhatsApp us instead."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setSuccess(false);
    setName("");
    setPhone("");
    setNeed("");
    setMessage("");
  }

  const underlineField =
    "w-full border-0 border-b border-cream/25 bg-transparent px-0 py-3 text-base text-cream placeholder:text-cream/30 focus:border-cream focus:outline-none focus:ring-0";

  return (
    <section id="contact" className="px-2 pb-2 pt-20 sm:px-4 lg:pt-28">
      <div className="bg-grain bg-dots-dark relative overflow-hidden rounded-[2rem] bg-forest px-6 py-14 text-cream sm:rounded-[3rem] sm:px-10 lg:px-16 lg:py-20">
        {/* Section header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <a
            href="#top"
            className="inline-flex items-center gap-2.5 rounded-full bg-cream py-1.5 pl-2 pr-4 text-ink"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="leading-none">
              <span className="block font-display text-base font-bold tracking-tight">
                altagracia
              </span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.3em] text-ink/60">
                Technologies
              </span>
            </span>
          </a>
          <div className="flex items-center gap-2.5">
            <a
              href={SITE.phoneHref}
              className="inline-flex h-10 items-center rounded-full bg-cream px-5 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              Book a call
            </a>
            <a
              href={SITE.emailHref}
              className="inline-flex h-10 items-center gap-1.5 text-sm font-medium text-cream/80 transition-colors hover:text-cream"
            >
              <CornerDownRight className="h-4 w-4" aria-hidden="true" />
              Let&apos;s connect
            </a>
          </div>
        </div>

        {/* Giant heading */}
        <motion.h2
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[1.04] tracking-[-0.03em] lg:mt-14"
        >
          Let&apos;s get you
          <br />
          connected
          <SquiggleArrow className="ml-4 inline-block h-[0.45em] w-auto text-sage" />
          <AsteriskBadge tone="mauve" className="ml-3 hidden sm:inline-flex" />
          <AsteriskBadge tone="mist" className="ml-1.5 hidden sm:inline-flex" />
        </motion.h2>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Contact info */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="max-w-md text-base leading-relaxed text-cream/70">
              Call, WhatsApp, email or visit — tell us what you need and a real
              person will respond today. Prefer that we call you? Fill the form
              instead. It takes 30 seconds.
            </p>

            <div className="relative mt-8 max-w-md overflow-hidden rounded-2xl border border-cream/15">
              <Image
                src="/images/real/team.jpg"
                alt="The Altagracia team ready to help at the support desk"
                width={1400}
                height={788}
                sizes="(min-width: 1024px) 32rem, 100vw"
                className="h-44 w-full object-cover sm:h-52"
              />
              <p className="absolute bottom-2.5 left-2.5 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold text-ink">
                Inside our support desk
              </p>
            </div>

            <dl className="mt-10 space-y-7">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40">
                  Contact us
                </dt>
                <dd className="mt-2 space-y-1 text-lg">
                  <a
                    href={SITE.phoneHref}
                    className="block font-medium text-cream transition-colors hover:text-sage"
                  >
                    {SITE.phoneDisplay}
                  </a>
                  <a
                    href={SITE.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base text-cream/70 transition-colors hover:text-cream"
                  >
                    WhatsApp us instantly →
                  </a>
                  <a
                    href={SITE.emailHref}
                    className="block break-all text-base text-cream/70 transition-colors hover:text-cream"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40">
                  Visit us
                </dt>
                <dd className="mt-2 text-base text-cream/70">
                  {SITE.address}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40">
                  Opening hours
                </dt>
                <dd className="mt-2 text-base text-cream/70">{SITE.hours}</dd>
              </div>
            </dl>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {success ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage">
                  <CheckCircle2
                    className="h-8 w-8 text-ink"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="font-display text-2xl font-semibold text-cream">
                  Thank you, {name.split(" ")[0]}!
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-cream/60">
                  We received your request and will call you shortly. Need help
                  right now? Call or WhatsApp us directly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-2 inline-flex h-11 items-center rounded-full border border-cream/30 px-6 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40"
                  >
                    First &amp; last name *
                  </label>
                  <input
                    id="contact-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className={underlineField}
                    placeholder="Adaeze Okafor"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40"
                  >
                    Phone / WhatsApp number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    className={underlineField}
                    placeholder="0803 123 4567"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-need"
                    className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40"
                  >
                    What do you need? *
                  </label>
                  <div className="relative">
                    <select
                      id="contact-need"
                      value={need}
                      onChange={(e) => setNeed(e.target.value)}
                      className={`${underlineField} appearance-none pr-8 [&>option]:text-ink`}
                    >
                      <option value="" disabled>
                        Choose one…
                      </option>
                      {NEEDS.map((n) => (
                        <option key={n.value} value={n.value}>
                          {n.label}
                        </option>
                      ))}
                    </select>
                    <Sparkle
                      className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/40"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/40"
                  >
                    About your project
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className={`${underlineField} resize-none`}
                    placeholder="e.g. I need 10 laptops for my office…"
                  />
                </div>

                {error && (
                  <p className="text-sm font-medium text-mauve" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-cream px-7 text-base font-medium text-ink transition-colors hover:bg-white disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2
                        className="h-5 w-5 animate-spin"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <CornerDownRight
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                      Send message
                    </>
                  )}
                </button>
                <p className="text-xs text-cream/40">
                  We will only use your details to respond to this request.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
