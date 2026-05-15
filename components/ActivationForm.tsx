"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

const inputStyle =
  "w-full rounded-xl border border-primary/40 px-4 py-3 outline-none transition focus:border-[#0196f4]";

export default function ActivationForm({ token }: { token: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    const response = await fetch("/api/auth/activate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    const body = (await response.json()) as { success: boolean; error?: string };
    setIsSubmitting(false);

    if (!response.ok || !body.success) {
      setError(body.error ?? "Could not activate account.");
      return;
    }

    router.push("/login?activated=1");
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 w-full max-w-md space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">Create Password</label>
        <input
          type="password"
          className={inputStyle}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Confirm Password</label>
        <input
          type="password"
          className={inputStyle}
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Activating..." : "Activate Account"}
      </Button>
    </form>
  );
}

