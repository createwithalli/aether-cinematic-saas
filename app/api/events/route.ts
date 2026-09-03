import { NextResponse } from "next/server";
import { seedEvents, type CalendarEvent, uid } from "@/lib/store";
const memory: CalendarEvent[] = [...seedEvents];
export async function GET() { return NextResponse.json({ events: memory }); }
export async function POST(req: Request) {
  const body = await req.json();
  const event: CalendarEvent = { id: uid("e"), title: String(body.title ?? "Untitled"), day: Number(body.day ?? 1), time: "13:00", kind: "call" };
  memory.push(event);
  return NextResponse.json({ ok: true, event });
}
