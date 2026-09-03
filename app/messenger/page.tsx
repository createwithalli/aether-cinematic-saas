"use client";
import { FormEvent, useState } from "react";
import { decryptMessage, encryptMessage } from "@/lib/crypto";
import { ChatMessage, uid } from "@/lib/store";
const ROOM_KEY = "aether-atelier-key";
export default function MessengerPage() {
  const [pass, setPass] = useState(ROOM_KEY); const [draft, setDraft] = useState("");
  const [thread, setThread] = useState<ChatMessage[]>([{ id: "m0", from: "peer", cipher: "", plaintext: "Channel is sealed. Only matching keys reveal the cut.", at: "09:41" }]);
  const send = async (e: FormEvent) => {
    e.preventDefault(); if (!draft.trim()) return;
    const cipher = await encryptMessage(draft, pass);
    const msg: ChatMessage = { id: uid("m"), from: "you", cipher, plaintext: draft, at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) };
    setThread((t) => [...t, msg]); setDraft("");
    fetch("/api/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ cipher }) });
    setTimeout(async () => { const reply = "Copy that. Cipher stored server-side, plaintext never leaves the glass."; const rc = await encryptMessage(reply, pass); setThread((t) => [...t, { id: uid("m"), from: "peer", cipher: rc, plaintext: reply, at: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]); }, 700);
  };
  const reveal = async (msg: ChatMessage) => { if (msg.plaintext) return; const text = await decryptMessage(msg.cipher, pass); setThread((t) => t.map((m) => (m.id === msg.id ? { ...m, plaintext: text ?? "[wrong key]" } : m))); };
  return (
    <main className="mx-auto max-w-3xl px-5 py-10">
      <p className="text-xs uppercase tracking-[0.3em] text-aurora">Private signal</p>
      <h1 className="mt-2 font-display text-5xl text-foil">Encrypted messenger</h1>
      <p className="mt-3 text-white/55">AES-GCM in the browser. Swap <code className="text-aurora">lib/crypto.ts</code> for Signal or MLS when you ship.</p>
      <label className="mt-6 block text-xs uppercase tracking-[0.2em] text-white/40">Shared room key</label>
      <input value={pass} onChange={(e) => setPass(e.target.value)} className="glass mt-2 w-full rounded-full px-4 py-2.5 text-sm outline-none" />
      <div className="glass mt-6 h-[420px] space-y-3 overflow-y-auto rounded-[28px] p-5 scrollbar-thin">
        {thread.map((m) => (
          <button key={m.id} onClick={() => reveal(m)} className={`max-w-[80%] rounded-3xl px-4 py-3 text-left text-sm ${m.from === "you" ? "ml-auto bg-foil text-void" : "bg-white/8 text-white"}`}>
            <p>{m.plaintext ?? m.cipher.slice(0, 48) + "..."}</p>
            <p className={`mt-1 text-[10px] ${m.from === "you" ? "text-void/60" : "text-white/35"}`}>{m.at} · {m.plaintext ? "clear" : "cipher"}</p>
          </button>
        ))}
      </div>
      <form onSubmit={send} className="mt-4 flex gap-2">
        <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Write in the clear — we seal it before the wire" className="glass flex-1 rounded-full px-4 py-3 text-sm outline-none" />
        <button className="rounded-full bg-foil px-5 text-sm text-void">Seal</button>
      </form>
    </main>
  );
}
