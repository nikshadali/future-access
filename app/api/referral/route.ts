import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { createActivationToken } from "@/lib/demo-auth";

const referralSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  referrerName: z.string().min(2, "Referrer name is required"),
  projectName: z.string().min(2, "Project name is required"),
  projectValue: z.preprocess(
    (value) => {
      if (value === "" || value === null || value === undefined) {
        return undefined;
      }
      const parsed = Number(value);
      return Number.isNaN(parsed) ? value : parsed;
    },
    z.number().positive("Project value must be positive").optional(),
  ),
});

function getBaseUrl(request: NextRequest): string {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL;
  if (fromEnv) return fromEnv;
  return request.nextUrl.origin;
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = referralSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0]?.message ?? "Invalid referral details",
        },
        { status: 400 },
      );
    }

    const payload = parsed.data;
    const token = createActivationToken({
      email: payload.email.toLowerCase(),
      fullName: payload.fullName.trim(),
      referrerName: payload.referrerName.trim(),
      projectName: payload.projectName.trim(),
      projectValue: payload.projectValue ?? null,
    });

    const activateUrl = `${getBaseUrl(request)}/activate?token=${encodeURIComponent(token)}`;
    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.REFERRAL_FROM_EMAIL ?? "onboarding@resend.dev";
    let emailSent = false;

    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: `Future Axis Referrals <${fromEmail}>`,
        to: [payload.email],
        subject: "Activate your account and set password",
        html: `
          <h2>Welcome to Future Axis</h2>
          <p>Hello ${payload.fullName},</p>
          <p>${payload.referrerName} has referred your project: <strong>${payload.projectName}</strong>.</p>
          <p>Click below to activate your account and set your password:</p>
          <p><a href="${activateUrl}">Activate Account</a></p>
          <p>This demo link expires in 24 hours.</p>
        `,
      });
      emailSent = true;
    } else {
      console.log("Activation link (demo):", activateUrl);
    }

    return NextResponse.json({
      success: true,
      message: emailSent
        ? "Referral submitted. Activation email sent."
        : "Referral submitted. Email not configured, use preview activation link.",
      activationPreviewLink: emailSent ? undefined : activateUrl,
    });
  } catch (error) {
    console.error("Referral submit error", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong while submitting the referral form.",
      },
      { status: 500 },
    );
  }
}

