import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  DEMO_USERS_COOKIE,
  DemoUser,
  hashPassword,
  readActivationToken,
  readUsersCookie,
  createUsersCookie,
} from "@/lib/demo-auth";

const activateSchema = z.object({
  token: z.string().min(10, "Activation token is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = activateSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message ?? "Invalid data" },
        { status: 400 },
      );
    }

    const activation = readActivationToken(parsed.data.token);
    if (!activation) {
      return NextResponse.json(
        { success: false, error: "Invalid or expired activation link" },
        { status: 400 },
      );
    }

    const usersCookie = request.cookies.get(DEMO_USERS_COOKIE)?.value;
    const users = readUsersCookie(usersCookie);
    const email = activation.email.toLowerCase();
    const passwordHash = hashPassword(parsed.data.password);

    const existingIndex = users.findIndex((user) => user.email === email);
    const nextUser: DemoUser = {
      id: existingIndex >= 0 ? users[existingIndex].id : randomUUID(),
      email,
      name: activation.fullName,
      passwordHash,
      referredProjects:
        existingIndex >= 0 ? users[existingIndex].referredProjects : 1,
      commission:
        existingIndex >= 0
          ? users[existingIndex].commission
          : activation.projectValue
            ? Number((activation.projectValue * 0.05).toFixed(2))
            : 0,
      joinedAt: existingIndex >= 0 ? users[existingIndex].joinedAt : new Date().toISOString(),
    };

    if (existingIndex >= 0) {
      users[existingIndex] = nextUser;
    } else {
      users.push(nextUser);
    }

    const response = NextResponse.json({
      success: true,
      message: "Account activated. You can now login.",
    });

    response.cookies.set({
      name: DEMO_USERS_COOKIE,
      value: createUsersCookie(users),
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    console.error("Activation error", error);
    return NextResponse.json(
      { success: false, error: "Could not activate account." },
      { status: 500 },
    );
  }
}

