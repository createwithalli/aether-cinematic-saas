"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
export default function Hover3D({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 180, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 180, damping: 18 });
  return (
    <motion.div ref={ref} className={`hover-3d ${className}`} style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      onMouseMove={(e) => { const r = ref.current?.getBoundingClientRect(); if (!r) return; mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}>
      {children}
    </motion.div>
  );
}
