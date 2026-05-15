"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const inputStyle =
  "w-full rounded-xl border border-primary/40 px-4 py-3 outline-none transition focus:border-[#0196f4]";

const referralSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  referrerName: z.string().min(2, "Referrer name is required"),
  projectName: z.string().min(2, "Project name is required"),
  projectValue: z
    .string()
    .optional()
    .refine((value) => !value || Number(value) > 0, {
      message: "Project value must be greater than 0",
    }),
});

type ReferralFormData = z.infer<typeof referralSchema>;

type ReferralResult = {
  success: boolean;
  message: string;
  activationPreviewLink?: string;
};

export default function ReferralForm() {
  const [result, setResult] = useState<ReferralResult | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
  });

  const onSubmit = async (data: ReferralFormData) => {
    setResult(null);
    const payload = {
      ...data,
      projectValue: data.projectValue ? Number(data.projectValue) : undefined,
    };

    const response = await fetch("/api/referral", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const body = (await response.json()) as ReferralResult & { error?: string };
    if (!response.ok || !body.success) {
      setResult({
        success: false,
        message: body.error ?? "Could not submit referral form",
      });
      return;
    }

    setResult({
      success: true,
      message: body.message,
      activationPreviewLink: body.activationPreviewLink,
    });
    reset();
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-2xl rounded-2xl border border-primary/40 p-6 shadow-lg sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium">Full Name</label>
          <input {...register("fullName")} className={inputStyle} />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input {...register("email")} type="email" className={inputStyle} />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Referrer Name</label>
          <input {...register("referrerName")} className={inputStyle} />
          {errors.referrerName && (
            <p className="mt-1 text-sm text-red-500">{errors.referrerName.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Project Name</label>
          <input {...register("projectName")} className={inputStyle} />
          {errors.projectName && (
            <p className="mt-1 text-sm text-red-500">{errors.projectName.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Project Value (optional)
          </label>
          <input {...register("projectValue")} type="number" className={inputStyle} />
          {errors.projectValue && (
            <p className="mt-1 text-sm text-red-500">{errors.projectValue.message}</p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Referral"}
        </Button>
      </form>

      {result && (
        <div
          className={`mt-6 rounded-xl border p-4 text-sm ${
            result.success
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
              : "border-red-500/40 bg-red-500/10 text-red-300"
          }`}
        >
          <p>{result.message}</p>
          {result.activationPreviewLink && (
            <p className="mt-2">
              Preview activation link:{" "}
              <Link className="underline" href={result.activationPreviewLink}>
                Open activation page
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

