"use client";
import { FormEvent, useEffect, useState } from "react";
import Hover3D from "@/components/Hover3D";
import { Contact, seedContacts, uid } from "@/lib/store";
const stages: Contact["stage"][] = ["Lead", "Qualified", "Proposal", "Won"];
export default function CrmPage() {
  const [rows, setRows] = useState<Contact[]>(seedContacts);
  const [name, setName] = useState(""); const [company, setCompany] = useState("");
  useEffect(() => { fetch("/api/contacts").then((r) => r.json()).then((d) => { if (Array.isArray(d.contacts) && d.contacts.length) setRows(d.contacts); }).catch(() => undefined); }, []);
  const add = async (e: FormEvent) => {
    e.preventDefault(); if (!name.trim()) return;
    const contact: Contact = { id: uid("c"), name, company: company || "Independent", email: `${name.split(" ")[0].toLowerCase()}@aether.local`, stage: "Lead", value: 5000 };
    setRows((r) => [contact, ...r]); setName(""); setCompany("");
    await fetch("/api/contacts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contact) });
  };
  const cycle = (id: string) => setRows((list) => list.map((c) => { if (c.id !== id) return c; const i = stages.indexOf(c.stage); return { ...c, stage: stages[(i + 1) % stages.length] }; }));
  return (
    <main className="mx-auto max-w-7xl px-5 py-10">
      <p className="text-xs uppercase tracking-[0.3em] text-aurora">Relationships</p>
      <h1 className="mt-2 font-display text-5xl text-foil">CRM chamber</h1>
      <p className="mt-3 max-w-xl text-white/55">Clone-grade pipeline. Click a card to advance stage. Backend: <code className="text-aurora">/api/contacts</code>.</p>
      <form onSubmit={add} className="mt-8 flex flex-wrap gap-3">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="glass min-w-[180px] flex-1 rounded-full px-4 py-2.5 text-sm outline-none" />
        <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" className="glass min-w-[180px] flex-1 rounded-full px-4 py-2.5 text-sm outline-none" />
        <button className="rounded-full bg-foil px-5 py-2.5 text-sm text-void">Add lead</button>
      </form>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage) => (
          <div key={stage}>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">{stage}</p>
            <div className="space-y-3">{rows.filter((c) => c.stage === stage).map((c) => (
              <Hover3D key={c.id}><button onClick={() => cycle(c.id)} className="glass w-full rounded-2xl p-4 text-left"><p className="text-sm text-white">{c.name}</p><p className="text-xs text-white/40">{c.company}</p><p className="mt-3 text-foil">${c.value.toLocaleString()}</p></button></Hover3D>
            ))}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
