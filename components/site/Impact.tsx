"use client";

import { useEffect, useRef, useState } from "react";
import type { ImpactMetricData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setN(value);
            return;
          }
          const duration = 1800;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-none text-ink"
    >
      {n.toLocaleString("ro-RO")}
      <span className="ml-1 text-3xl text-mint-deep">{suffix}</span>
    </div>
  );
}

export function Impact({ impact }: { impact: ImpactMetricData[] }) {
  return (
    <section id="impact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
              <span className="font-display italic text-mint-deep">03</span>
              Impact
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-ink text-balance">
              Cifre care <span className="italic text-mint-deep">măsoară</span>{" "}
              schimbarea.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 self-end text-[16px] leading-relaxed text-ink-soft text-pretty">
            Fiecare proiect produce rezultate concrete — kilometri noi de
            infrastructură, emisii evitate, cetățeni informați, primării
            echipate. Raportăm transparent, în fiecare an.
          </p>
        </div>

        <GlassCard variant="strong" className="overflow-hidden p-2">
          <div className="grid grid-cols-1 divide-y divide-ink/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {impact.map((m) => (
              <div key={m.label} className="p-6 sm:p-8">
                <Counter value={m.value} suffix={m.suffix} />
                <p className="mt-4 max-w-[18ch] text-[13px] leading-relaxed text-ink-soft">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
