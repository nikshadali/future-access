import { cookies } from "next/headers";
import {
  DEMO_SESSION_COOKIE,
  DEMO_USERS_COOKIE,
  DemoUser,
  readSessionCookie,
  readUsersCookie,
} from "@/lib/demo-auth";

export async function getDemoSessionUser() {
  const cookieStore = await cookies();
  const sessionRaw = cookieStore.get(DEMO_SESSION_COOKIE)?.value;
  return readSessionCookie(sessionRaw);
}

export async function getAllDemoUsers(): Promise<DemoUser[]> {
  const cookieStore = await cookies();
  const usersRaw = cookieStore.get(DEMO_USERS_COOKIE)?.value;
  return readUsersCookie(usersRaw);
}

export async function getCurrentDemoUser(): Promise<DemoUser | null> {
  const session = await getDemoSessionUser();
  if (!session) return null;
  const users = await getAllDemoUsers();
  return users.find((user) => user.id === session.userId) ?? null;
}

