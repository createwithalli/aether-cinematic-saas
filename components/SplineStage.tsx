"use client";
export default function SplineStage() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-ink shadow-glow md:h-[560px]">
      <iframe title="Aether Spline scene" src="https://my.spline.design/miniroomartcopy-51fb8d8402219e5b621015be7fae806d/" className="absolute inset-0 h-full w-full" allow="autoplay; xr-spatial-tracking" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
      <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <p className="font-display text-2xl text-foil">Emergent matter</p>
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">Spline · WebGPU tone</p>
      </div>
    </div>
  );
}
