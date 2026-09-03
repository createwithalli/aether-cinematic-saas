"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Orbit, Sparkles, Wallet } from "lucide-react";
import Hover3D from "@/components/Hover3D";
import SplineStage from "@/components/SplineStage";

const modules = [
  { href: "/crm", title: "CRM atelier", copy: "Pipeline, contacts, and deal gravity in a glass stage.", icon: Sparkles },
  { href: "/calendar", title: "Cinematic calendar", copy: "Days as frames. Calls, demos, and closings on a film strip.", icon: Orbit },
  { href: "/messenger", title: "Encrypted signal", copy: "AES-GCM messenger. Cipher in transit, plaintext only in your hand.", icon: Lock },
  { href: "/wallet", title: "Web3 dock", copy: "Wallet connect mock, chain pulse, and on-chain identity.", icon: Wallet },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-10">
      <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.32em] text-aurora">Emergent style · cinematic OS</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-4 font-display text-5xl leading-[0.95] text-foil sm:text-7xl">The room<br />where software<br />breathes.</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 max-w-md text-lg text-white/65">AETHER is an open-source SaaS template: ultra-realistic UI, 3D hover, Spline stage, Framer motion, CRM, calendars, encrypted chat, and a Web3 dock — front and back end in one Next.js app.</motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-full bg-foil px-6 py-3 text-sm font-medium text-void">Open the command deck</Link>
            <Link href="/messenger" className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/80">Test encryption</Link>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}>
          <SplineStage />
        </motion.div>
      </section>
      <section className="mt-20 grid gap-5 md:grid-cols-2">
        {modules.map((m, i) => { const Icon = m.icon; return (
          <Hover3D key={m.href}>
            <Link href={m.href} className="glass group block rounded-[28px] p-7">
              <div className="flex items-start justify-between"><Icon className="text-aurora" size={22} /><ArrowUpRight className="text-white/30 transition group-hover:text-foil" size={18} /></div>
              <h2 className="mt-8 font-display text-3xl text-foil">{m.title}</h2>
              <p className="mt-3 text-white/60">{m.copy}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-white/35">Module 0{i + 1}</p>
            </Link>
          </Hover3D>
        ); })}
      </section>
    </main>
  );
}
