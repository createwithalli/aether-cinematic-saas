import { NextResponse } from "next/server";
import { seedContacts, type Contact } from "@/lib/store";
const memory: Contact[] = [...seedContacts];
export async function GET() { return NextResponse.json({ contacts: memory }); }
export async function POST(req: Request) {
  const body = (await req.json()) as Contact; memory.unshift(body);
  return NextResponse.json({ ok: true, contact: body });
}
