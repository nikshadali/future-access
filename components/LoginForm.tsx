"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

const inputStyle =
  "w-full rounded-xl border border-primary/40 px-4 py-3 outline-none transition focus:border-[#0196f4]";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activated = searchParams.get("activated") === "1";

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const body = (await response.json()) as { success: boolean; error?: string };

    setIsSubmitting(false);
    if (!response.ok || !body.success) {
      setError(body.error ?? "Invalid login");
      return;
    }

    router.push("/dashboard");
  };

  const loginAsDemoUser = async () => {
    setError(null);
    setIsSubmitting(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "demo@futureaxis.com",
        password: "demo12345",
      }),
    });
    const body = (await response.json()) as { success: boolean; error?: string };

    setIsSubmitting(false);
    if (!response.ok || !body.success) {
      setError(body.error ?? "Could not login with demo user.");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="mx-auto mt-8 w-full max-w-md rounded-2xl border border-primary/40 p-6 shadow-lg sm:p-8">
      {activated && (
        <p className="mb-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3 text-sm text-emerald-300">
          Account activated. Login with your email and password.
        </p>
      )}
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium">Email</label>
          <input
            type="email"
            className={inputStyle}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Password</label>
          <input
            type="password"
            className={inputStyle}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
      </form>

      <Button
        type="button"
        variant="outline"
        onClick={loginAsDemoUser}
        disabled={isSubmitting}
        className="mt-3 w-full"
      >
        Login as Demo User
      </Button>

      <p className="mt-3 text-xs text-foreground/60">
        Demo credentials: demo@futureaxis.com / demo12345
      </p>

      <p className="mt-5 text-sm text-foreground/70">
        New referral? <Link href="/referral" className="underline">Submit or activate here</Link>.
      </p>
    </div>
  );
}

