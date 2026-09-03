"use client";
import { useMemo, useState } from "react";
import { seedEvents, CalendarEvent, uid } from "@/lib/store";
export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>(seedEvents);
  const [title, setTitle] = useState(""); const [day, setDay] = useState(10);
  const days = useMemo(() => Array.from({ length: 30 }, (_, i) => i + 1), []);
  const add = () => { if (!title.trim()) return; setEvents((e) => [...e, { id: uid("e"), title, day, time: "13:00", kind: "call" }]); setTitle(""); fetch("/api/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ title, day }) }); };
  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <p className="text-xs uppercase tracking-[0.3em] text-aurora">Time as film</p>
      <h1 className="mt-2 font-display text-5xl text-foil">Calendar frames</h1>
      <p className="mt-3 max-w-xl text-white/55">Thirty frames. Calendly-shaped clone inside the OS.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New frame title" className="glass min-w-[220px] flex-1 rounded-full px-4 py-2.5 text-sm outline-none" />
        <input type="number" min={1} max={30} value={day} onChange={(e) => setDay(Number(e.target.value))} className="glass w-24 rounded-full px-4 py-2.5 text-sm outline-none" />
        <button onClick={add} className="rounded-full bg-foil px-5 py-2.5 text-sm text-void">Schedule</button>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-5 lg:grid-cols-10">
        {days.map((d) => { const hits = events.filter((e) => e.day === d); return (
          <div key={d} className="glass min-h-[110px] rounded-2xl p-3"><p className="text-xs text-white/35">{String(d).padStart(2, "0")}</p><div className="mt-2 space-y-1">{hits.map((e) => <p key={e.id} className="truncate rounded-lg bg-aurora/15 px-1.5 py-1 text-[11px] text-aurora">{e.title}</p>)}</div></div>
        ); })}
      </div>
    </main>
  );
}
