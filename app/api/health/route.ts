import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ ok: true, product: "AETHER", modules: ["crm", "calendar", "messenger", "web3"] });
}
