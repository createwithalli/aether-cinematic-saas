import { NextResponse } from "next/server";
const vault: { cipher: string; at: string }[] = [];
export async function GET() { return NextResponse.json({ messages: vault, note: "server stores ciphertext only" }); }
export async function POST(req: Request) {
  const { cipher } = await req.json(); vault.push({ cipher, at: new Date().toISOString() });
  return NextResponse.json({ ok: true, stored: "cipher" });
}
