"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/site-config";

const NEEDS = [
  { value: "device", label: "Buying a computer / phone" },
  { value: "repair", label: "Repair or maintenance" },
  { value: "marketing", label: "Digital marketing" },
  { value: "training", label: "ICT training" },
  { value: "contract", label: "Bulk supply / general contract" },
  { value: "other", label: "Something else" },
];

const CHANNELS = [
  {
    icon: PhoneCall,
    label: "Call Us",
    value: SITE.phoneDisplay,
    href: SITE.phoneHref,
    note: "We answer Mon – Sat, 8am – 6pm",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: SITE.whatsappHref,
    note: "Chat with us instantly",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: SITE.email,
    href: SITE.emailHref,
    note: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Visit Our Office",
    value: SITE.address,
    note: "Walk-ins are welcome",
  },
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

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Big CTA banner */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-emerald-950 px-6 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl"
            />
            <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
              Need anything ICT? Let&apos;s talk today.
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-emerald-50/90">
              Call, WhatsApp or email us right now — a real person will respond
              today. No long forms, no stress.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 bg-amber-400 px-7 text-base font-semibold text-emerald-950 hover:bg-amber-300"
              >
                <a href={SITE.phoneHref}>
                  <PhoneCall className="h-5 w-5" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 bg-white px-7 text-base font-semibold text-emerald-950 hover:bg-emerald-50"
              >
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 border-white/30 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <a href={SITE.emailHref}>
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Contact channels */}
          <div className="grid content-start gap-4 sm:grid-cols-2">
            {CHANNELS.map((channel, i) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <channel.icon
                      className="h-5 w-5 text-primary"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-emerald-950">
                      {channel.label}
                    </p>
                    <p className="truncate text-sm font-medium text-emerald-700">
                      {channel.value}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {channel.note}
                    </p>
                  </div>
                </>
              );
              const classes =
                "flex h-full items-start gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md";
              return (
                <Reveal key={channel.label} delay={i * 0.08} className="h-full">
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={
                        channel.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className={classes}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={classes}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Call-back form */}
          <Reveal delay={0.1}>
            <Card className="border-emerald-900/10 shadow-xl shadow-emerald-950/5">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-emerald-950">
                  Request a call back
                </CardTitle>
                <CardDescription>
                  Fill this short form and we will call you — usually within a
                  few hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {success ? (
                  <div className="flex flex-col items-center gap-3 py-10 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                      <CheckCircle2
                        className="h-8 w-8 text-emerald-700"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-emerald-950">
                      Thank you, {name.split(" ")[0]}!
                    </h3>
                    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                      We received your request and will call you shortly. Need
                      help right now? Call or WhatsApp us directly.
                    </p>
                    <div className="mt-2 flex flex-wrap justify-center gap-3">
                      <Button
                        asChild
                        className="bg-amber-400 font-semibold text-emerald-950 hover:bg-amber-300"
                      >
                        <a href={SITE.phoneHref}>
                          <PhoneCall className="h-4 w-4" aria-hidden="true" />
                          Call Now
                        </a>
                      </Button>
                      <Button variant="outline" onClick={resetForm}>
                        Send another request
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="callback-name">Your name *</Label>
                        <Input
                          id="callback-name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Adaeze Okafor"
                          autoComplete="name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="callback-phone">
                          Phone / WhatsApp number *
                        </Label>
                        <Input
                          id="callback-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 0803 123 4567"
                          autoComplete="tel"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="callback-need">What do you need? *</Label>
                      <Select value={need} onValueChange={setNeed}>
                        <SelectTrigger id="callback-need" className="w-full">
                          <SelectValue placeholder="Choose one…" />
                        </SelectTrigger>
                        <SelectContent>
                          {NEEDS.map((n) => (
                            <SelectItem key={n.value} value={n.value}>
                              {n.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="callback-message">
                        Tell us more (optional)
                      </Label>
                      <Textarea
                        id="callback-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="e.g. I need 10 laptops for my office…"
                        rows={4}
                      />
                    </div>
                    {error && (
                      <p className="text-sm font-medium text-red-600" role="alert">
                        {error}
                      </p>
                    )}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="h-12 w-full text-base"
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
                          <Send className="h-5 w-5" aria-hidden="true" />
                          Send My Request
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      We will only use your details to respond to this request.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
