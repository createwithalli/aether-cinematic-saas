"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, LayoutDashboard, MessageSquareLock, Orbit, Users, Wallet } from "lucide-react";
const links = [
  { href: "/", label: "Atelier", icon: Orbit },
  { href: "/dashboard", label: "Command", icon: LayoutDashboard },
  { href: "/crm", label: "CRM", icon: Users },
  { href: "/calendar", label: "Calendar", icon: Calendar },
  { href: "/messenger", label: "Signal", icon: MessageSquareLock },
  { href: "/wallet", label: "Web3", icon: Wallet },
];
export default function Nav() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#05060a]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-foil/15 text-foil">AE</span>
          <span className="font-display text-lg tracking-wide text-foil">AETHER</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => { const active = path === l.href; const Icon = l.icon; return (
            <Link key={l.href} href={l.href} className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition ${active ? "bg-white/10 text-foil" : "text-white/60 hover:bg-white/5 hover:text-white"}`}>
              <Icon size={14} />{l.label}
            </Link>
          ); })}
        </nav>
        <Link href="/dashboard" className="rounded-full bg-foil px-4 py-1.5 text-sm font-medium text-void transition hover:bg-white">Enter OS</Link>
      </div>
    </header>
  );
}
