import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const DEMO_USERS_COOKIE = "demo_users";
export const DEMO_SESSION_COOKIE = "demo_session";

const DAY_IN_SECONDS = 60 * 60 * 24;
const USERS_COOKIE_TTL = DAY_IN_SECONDS * 30;
const SESSION_COOKIE_TTL = DAY_IN_SECONDS * 7;
const ACTIVATION_TOKEN_TTL = DAY_IN_SECONDS;

type SignedEnvelope<T> = {
  iat: number;
  exp: number;
  data: T;
};

export type DemoUser = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  referredProjects: number;
  commission: number;
  joinedAt: string;
};

export type ActivationPayload = {
  email: string;
  fullName: string;
  referrerName: string;
  projectName: string;
  projectValue: number | null;
};

export type SessionPayload = {
  userId: string;
  email: string;
  name: string;
};

function base64UrlEncode(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function base64UrlDecode(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

function getDemoSecret(): string {
  return (
    process.env.DEMO_AUTH_SECRET ??
    process.env.NEXTAUTH_SECRET ??
    "future-axis-demo-secret-change-in-production"
  );
}

function sign(input: string): string {
  return createHmac("sha256", getDemoSecret())
    .update(input)
    .digest("base64url");
}

function createSignedToken<T>(data: T, ttlSeconds: number): string {
  const now = Math.floor(Date.now() / 1000);
  const envelope: SignedEnvelope<T> = {
    iat: now,
    exp: now + ttlSeconds,
    data,
  };
  const encoded = base64UrlEncode(JSON.stringify(envelope));
  const signature = sign(encoded);
  return `${encoded}.${signature}`;
}

function verifySignedToken<T>(token: string): T | null {
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;

  const expected = sign(encoded);
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(signature);
  if (expectedBuffer.length !== actualBuffer.length) return null;
  if (!timingSafeEqual(expectedBuffer, actualBuffer)) return null;

  try {
    const envelope = JSON.parse(base64UrlDecode(encoded)) as SignedEnvelope<T>;
    if (!envelope.exp || !envelope.data) return null;

    const now = Math.floor(Date.now() / 1000);
    if (envelope.exp < now) return null;

    return envelope.data;
  } catch {
    return null;
  }
}

export function hashPassword(password: string): string {
  return createHash("sha256")
    .update(`${getDemoSecret()}:${password}`)
    .digest("hex");
}

export function createActivationToken(payload: ActivationPayload): string {
  return createSignedToken(payload, ACTIVATION_TOKEN_TTL);
}

export function readActivationToken(token: string): ActivationPayload | null {
  return verifySignedToken<ActivationPayload>(token);
}

export function createUsersCookie(users: DemoUser[]): string {
  return createSignedToken(users, USERS_COOKIE_TTL);
}

export function readUsersCookie(rawValue?: string): DemoUser[] {
  if (!rawValue) return [];
  const users = verifySignedToken<DemoUser[]>(rawValue);
  return Array.isArray(users) ? users : [];
}

export function createSessionCookie(payload: SessionPayload): string {
  return createSignedToken(payload, SESSION_COOKIE_TTL);
}

export function readSessionCookie(rawValue?: string): SessionPayload | null {
  if (!rawValue) return null;
  return verifySignedToken<SessionPayload>(rawValue);
}

