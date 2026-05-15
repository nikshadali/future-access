import type { Metadata } from "next";
import ReferralForm from "@/components/ReferralForm";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Referral Form | Future Axis",
  description:
    "Submit a referral and send account activation instructions to the referred user.",
};

export default function ReferralPage() {
  return (
    <Container>
      <section className="py-28 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Referral</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">
            Refer a project in one step
          </h1>
          <p className="mt-4 text-foreground/70">
            This demo flow sends an activation link so the user can set password
            and then login to a dashboard.
          </p>
        </div>
        <ReferralForm />
      </section>
    </Container>
  );
}

