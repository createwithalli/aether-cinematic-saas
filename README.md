# AETHER — Cinematic SaaS OS

Open-source Next.js template for an ultra-realistic product surface.

Cinematic tone. Emergent motion. Easy UI.

## What this is

A full-stack starter that blends a marketing atelier with a working command deck:

| Surface | Purpose |
| --- | --- |
| `/` | Landing with Spline stage, 3D hover cards, Framer Motion |
| `/dashboard` | Command deck + live pipeline |
| `/crm` | Kanban CRM talking to `/api/contacts` |
| `/calendar` | 30-frame month + `/api/events` |
| `/messenger` | AES-GCM encrypted chat, ciphertext-only API |
| `/wallet` | Web3 dock (injected wallet or demo address) |

Front end and back end live in one Next.js app. In-memory API routes stand in for a CRM database so the template runs with zero infra. Swap them for Postgres + Prisma / Drizzle when you productize.

## Stack

- Next.js 14 App Router + TypeScript
- Tailwind CSS
- Framer Motion (cinematic enter / 3D hover)
- Spline public embed (`components/SplineStage.tsx`)
- Canvas particle field with WebGPU detection (`components/CanvasField.tsx`)
- Web Crypto AES-GCM (`lib/crypto.ts`)
- Next.js Route Handlers as the backend

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make it yours

1. Replace the Spline iframe URL in `components/SplineStage.tsx` with your scene from [spline.design](https://spline.design) (Export → Public URL).
2. Persist CRM / calendar / messages with Postgres. The route shapes are already there.
3. Replace demo encryption with Signal protocol / MLS for a real messenger.
4. Drop in RainbowKit or wagmi on `/wallet`.
5. Deploy to Vercel.

## Concepts packed in one template

- SaaS command OS
- Popular-app shapes: Salesforce-like CRM, Calendly-like calendar, Signal-like messenger, MetaMask-like wallet
- 3D hover (pointer-tracked springs)
- Cinematic letterbox + film grain
- Easy, large-type UI

MIT. Built as a starting cut, not a finished studio picture.
