import { redirect } from "next/navigation";
import { Container } from "@/components/Container";
import LogoutButton from "@/components/LogoutButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentDemoUser } from "@/lib/demo-server";

export default async function DashboardPage() {
  const user = await getCurrentDemoUser();
  if (!user) {
    redirect("/login");
  }

  return (
    <Container>
      <section className="py-28 sm:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary">Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">
              Welcome, {user.name}
            </h1>
            <p className="mt-2 text-foreground/70">
              Demo referral analytics without a database.
            </p>
          </div>
          <LogoutButton />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Total Referrals</CardTitle>
              <CardDescription>Projects referred by you</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">{user.referredProjects}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total Commission</CardTitle>
              <CardDescription>Demo 5% rule for entered value</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold">${user.commission.toFixed(2)}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Status</CardTitle>
              <CardDescription>Activation and login completed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-semibold text-emerald-400">Active</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Container>
  );
}

