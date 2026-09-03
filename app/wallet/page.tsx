"use client";
import { useMemo, useState } from "react";
import Hover3D from "@/components/Hover3D";
function fakeAddress() { return "0x" + Array.from({ length: 20 }, () => Math.floor(Math.random() * 16).toString(16)).join(""); }
export default function WalletPage() {
  const [addr, setAddr] = useState<string | null>(null); const [chain, setChain] = useState("Base");
  const short = useMemo(() => (addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "Disconnected"), [addr]);
  const connect = async () => {
    const eth = (window as Window & { ethereum?: { request: (a: { method: string }) => Promise<string[]> } }).ethereum;
    if (eth) { try { const accounts = await eth.request({ method: "eth_requestAccounts" }); setAddr(accounts[0]); return; } catch { /* demo */ } }
    setAddr(fakeAddress());
  };
  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <p className="text-xs uppercase tracking-[0.3em] text-aurora">On-chain dock</p>
      <h1 className="mt-2 font-display text-5xl text-foil">Web3 identity</h1>
      <p className="mt-3 max-w-xl text-white/55">Detects MetaMask. If none exist, a demo address is minted. Wire RainbowKit when you ship.</p>
      <Hover3D className="mt-10"><div className="glass rounded-[32px] p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-white/40">Session</p>
        <p className="mt-4 font-display text-4xl text-foil">{short}</p>
        <p className="mt-2 font-mono text-xs text-white/35">{addr ?? "no provider"}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={connect} className="rounded-full bg-foil px-5 py-2.5 text-sm text-void">{addr ? "Rotate wallet" : "Connect wallet"}</button>
          <button onClick={() => setAddr(null)} className="rounded-full border border-white/15 px-5 py-2.5 text-sm">Disconnect</button>
          {["Base", "Ethereum", "Optimism"].map((c) => <button key={c} onClick={() => setChain(c)} className={`rounded-full px-4 py-2.5 text-sm ${chain === c ? "bg-aurora/20 text-aurora" : "bg-white/5 text-white/50"}`}>{c}</button>)}
        </div>
      </div></Hover3D>
      <div className="mt-6 grid gap-4 md:grid-cols-3">{[{ k: "Treasury", v: "12.4 ETH" }, { k: "Allowlist", v: "Aether Pass" }, { k: "Network", v: chain }].map((card) => <div key={card.k} className="glass rounded-3xl p-5"><p className="text-xs uppercase tracking-[0.2em] text-white/40">{card.k}</p><p className="mt-2 font-display text-2xl text-foil">{card.v}</p></div>)}</div>
    </main>
  );
}
