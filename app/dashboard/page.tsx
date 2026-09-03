"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Hover3D from "@/components/Hover3D";
import { seedContacts, seedEvents } from "@/lib/store";
const stats = [
  { label: "Pipeline", value: "$186k", hint: "weighted" },
  { label: "Signals", value: "24", hint: "encrypted threads" },
  { label: "Frames", value: "6", hint: "this month" },
  { label: "Chain", value: "Base", hint: "wallet dock" },
];
export default function DashboardPage() {
  const won = seedContacts.filter((c) => c.stage === "Won").length;
  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <p className="text-xs uppercase tracking-[0.3em] text-aurora">Command deck</p>
      <h1 className="mt-2 font-display text-5xl text-foil">Today&apos;s cut.</h1>
      <p className="mt-3 max-w-xl text-white/55">One surface for CRM gravity, calendar frames, private signal, and chain identity.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Hover3D key={s.label}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="glass rounded-3xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">{s.label}</p>
              <p className="mt-3 font-display text-4xl text-foil">{s.value}</p>
              <p className="mt-1 text-sm text-white/45">{s.hint}</p>
            </motion.div>
          </Hover3D>
        ))}
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass rounded-[28px] p-6">
          <div className="flex items-center justify-between"><h2 className="font-display text-2xl text-foil">Live pipeline</h2><Link href="/crm" className="text-sm text-aurora">Open CRM →</Link></div>
          <ul className="mt-5 space-y-3">{seedContacts.map((c) => (
            <li key={c.id} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
              <div><p className="text-sm text-white">{c.name}</p><p className="text-xs text-white/40">{c.company} · {c.stage}</p></div>
              <p className="text-sm text-foil">${c.value.toLocaleString()}</p>
            </li>))}</ul>
          <p className="mt-4 text-xs text-white/35">{won} won this reel.</p>
        </div>
        <div className="glass rounded-[28px] p-6">
          <div className="flex items-center justify-between"><h2 className="font-display text-2xl text-foil">Next frames</h2><Link href="/calendar" className="text-sm text-aurora">Calendar →</Link></div>
          <ul className="mt-5 space-y-3">{seedEvents.slice(0, 5).map((e) => (
            <li key={e.id} className="rounded-2xl border border-white/5 px-4 py-3"><p className="text-sm">{e.title}</p><p className="text-xs uppercase tracking-widest text-white/35">Day {e.day} · {e.time} · {e.kind}</p></li>))}</ul>
        </div>
      </div>
    </main>
  );
}
