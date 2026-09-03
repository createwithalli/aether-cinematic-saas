"use client";
import { useEffect, useRef } from "react";
export default function CanvasField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const dots = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), z: Math.random(), s: 0.15 + Math.random() * 0.6 }));
    const resize = () => { canvas.width = window.innerWidth * devicePixelRatio; canvas.height = window.innerHeight * devicePixelRatio; };
    resize();
    window.addEventListener("resize", resize);
    const gpu = "gpu" in navigator;
    const tick = (t: number) => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.y -= d.s * 0.00018; if (d.y < 0) d.y = 1;
        const x = d.x * w; const y = d.y * h + Math.sin(t * 0.0004 + d.x * 8) * 18;
        const a = 0.12 + d.z * 0.35;
        ctx.fillStyle = gpu ? `rgba(126,224,214,${a})` : `rgba(232,213,181,${a})`;
        ctx.beginPath(); ctx.arc(x, y, (0.6 + d.z * 1.8) * devicePixelRatio, 0, Math.PI * 2); ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0 opacity-70" aria-hidden />;
}
