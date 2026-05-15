import Link from "next/link";
import ActivationForm from "@/components/ActivationForm";
import { Container } from "@/components/Container";

type ActivatePageProps = {
  searchParams: Promise<{
    token?: string;
  }>;
};

export default async function ActivatePage({ searchParams }: ActivatePageProps) {
  const params = await searchParams;
  const token = params.token;

  return (
    <Container>
      <section className="py-28 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-center text-3xl font-semibold sm:text-5xl">
            Activate Account
          </h1>
          <p className="mt-4 text-center text-foreground/70">
            Set your password to continue to login.
          </p>

          {token ? (
            <ActivationForm token={token} />
          ) : (
            <div className="mx-auto mt-8 max-w-md rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
              Activation token is missing. Go back to{" "}
              <Link href="/referral" className="underline">
                referral page
              </Link>{" "}
              and submit again.
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}

