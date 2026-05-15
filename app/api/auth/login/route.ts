import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { z } from "zod";
import {
  createSessionCookie,
  DEMO_SESSION_COOKIE,
  DEMO_USERS_COOKIE,
  DemoUser,
  createUsersCookie,
  hashPassword,
  readUsersCookie,
} from "@/lib/demo-auth";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = loginSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message ?? "Invalid login data" },
        { status: 400 },
      );
    }

    const usersCookie = request.cookies.get(DEMO_USERS_COOKIE)?.value;
    const users = readUsersCookie(usersCookie);
    const email = parsed.data.email.toLowerCase();
    let user = users.find((item) => item.email === email);

    const isDummyLogin =
      email === "demo@futureaxis.com" && parsed.data.password === "demo12345";
    let usersChanged = false;

    if (!user && isDummyLogin) {
      const dummyUser: DemoUser = {
        id: randomUUID(),
        email: "demo@futureaxis.com",
        name: "Demo User",
        passwordHash: hashPassword("demo12345"),
        referredProjects: 12,
        commission: 2480.5,
        joinedAt: new Date().toISOString(),
      };
      users.push(dummyUser);
      user = dummyUser;
      usersChanged = true;
    }

    if (!user || user.passwordHash !== hashPassword(parsed.data.password)) {
      return NextResponse.json(
        { success: false, error: "Invalid email or password" },
        { status: 401 },
      );
    }

    const sessionValue = createSessionCookie({
      userId: user.id,
      email: user.email,
      name: user.name,
    });

    const response = NextResponse.json({
      success: true,
      message: "Logged in successfully.",
    });

    response.cookies.set({
      name: DEMO_SESSION_COOKIE,
      value: sessionValue,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    if (usersChanged) {
      response.cookies.set({
        name: DEMO_USERS_COOKIE,
        value: createUsersCookie(users),
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
      });
    }

    return response;
  } catch (error) {
    console.error("Login error", error);
    return NextResponse.json(
      { success: false, error: "Could not login." },
      { status: 500 },
    );
  }
}

