import type { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "@/components/LoginForm";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Login | Future Axis",
  description: "Login to view your referral dashboard.",
};

export default function LoginPage() {
  return (
    <Container>
      <section className="py-28 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Access</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">Login</h1>
          <p className="mt-4 text-foreground/70">
            Use your activated account credentials to open dashboard.
          </p>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </section>
    </Container>
  );
}

