import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  need: z.string().trim().min(1, "Please choose what you need."),
  message: z.string().trim().max(2000).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError =
        parsed.error.issues[0]?.message || "Please check your details.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const saved = await db.contactRequest.create({
      data: {
        name: parsed.data.name,
        phone: parsed.data.phone,
        need: parsed.data.need,
        message: parsed.data.message ?? null,
      },
    });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong on our side. Please call or WhatsApp us instead.",
      },
      { status: 500 }
    );
  }
}
