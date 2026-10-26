"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, RotateCcw, Send } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded-2xl border border-haze bg-white px-4.5 py-3.5 text-sm text-ink placeholder:text-stone/60 transition-all duration-300 outline-none focus:border-royal focus:ring-4 focus:ring-royal/10";

const labelCls =
  "mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-stone";

type FieldErrors = Record<string, string | undefined>;

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submittedName, setSubmittedName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrorMsg("");
    setFieldErrors({});

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        setFieldErrors(json.fieldErrors ?? {});
        setErrorMsg(json.error ?? "Please check the form and try again.");
        setStatus("error");
        return;
      }

      setSubmittedName(String(data.name ?? "").split(" ")[0]);
      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg(
        "Network problem — your enquiry wasn't sent. Please try again, or email us directly."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[28rem] flex-col items-center justify-center rounded-[2rem] border border-haze bg-mist p-10 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-royal text-white">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </span>
        <h3 className="font-display mt-6 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Thank you{submittedName ? `, ${submittedName}` : ""}.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone sm:text-base">
          Your enquiry has been received. Our team will review your requirements
          and respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
        >
          <RotateCcw
            className="size-4 transition-transform duration-500 group-hover:-rotate-180"
            aria-hidden="true"
          />
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[2rem] border border-haze bg-mist p-7 shadow-soft sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full Name <span className="text-royal">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Adaeze Okonkwo"
            className={cn(inputCls, fieldErrors.name && "border-red-400 ring-4 ring-red-400/10")}
          />
          {fieldErrors.name ? (
            <p className="mt-2 text-xs font-medium text-red-500">{fieldErrors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email Address <span className="text-royal">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={cn(inputCls, fieldErrors.email && "border-red-400 ring-4 ring-red-400/10")}
          />
          {fieldErrors.email ? (
            <p className="mt-2 text-xs font-medium text-red-500">{fieldErrors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+234 ..."
            className={cn(inputCls, fieldErrors.phone && "border-red-400 ring-4 ring-red-400/10")}
          />
        </div>
        <div>
          <label htmlFor="organization" className={labelCls}>
            Organization
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            placeholder="Company, school or institution"
            className={inputCls}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className={labelCls}>
            What does your enquiry relate to?
          </label>
          <select id="service" name="service" className={inputCls} defaultValue="">
            <option value="">General enquiry / not sure yet</option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Your Requirements <span className="text-royal">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell us what you need — the equipment list, the project idea or simply the problem you're trying to solve."
            className={cn(
              inputCls,
              "resize-none",
              fieldErrors.message && "border-red-400 ring-4 ring-red-400/10"
            )}
          />
          {fieldErrors.message ? (
            <p className="mt-2 text-xs font-medium text-red-500">{fieldErrors.message}</p>
          ) : null}
        </div>
      </div>

      {status === "error" && errorMsg ? (
        <p
          role="alert"
          className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-3.5 text-sm font-medium text-red-600"
        >
          {errorMsg}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-royal disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send Enquiry
              <Send
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
        <p className="text-xs leading-relaxed text-stone">
          Fields marked <span className="text-royal">*</span> are required.
          <br className="hidden sm:block" />
          We respond to enquiries within one business day.
        </p>
      </div>
    </form>
  );
}
