import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please tell us a little about your requirements.").max(4000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return NextResponse.json(
        { ok: false, error: "Please review the highlighted fields.", fieldErrors },
        { status: 400 }
      );
    }

    const enquiry = await db.enquiry.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        organization: parsed.data.organization || null,
        service: parsed.data.service || null,
        message: parsed.data.message,
      },
    });

    return NextResponse.json({ ok: true, id: enquiry.id }, { status: 201 });
  } catch (error) {
    console.error("Failed to save enquiry:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong while sending your enquiry. Please try again, or email us directly." },
      { status: 500 }
    );
  }
}
