import type { AboutData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { Leaf, Lightbulb, Users } from "lucide-react";

const icons = [Leaf, Lightbulb, Users];

export function About({ about }: { about: AboutData }) {
  return (
    <section id="despre" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                <span className="font-display italic text-mint-deep">01</span>
                {about.eyebrow}
              </div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-ink text-balance">
                O asociație pentru un{" "}
                <span className="italic text-mint-deep">deceniu</span>{" "}
                decisiv.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-[17px] leading-relaxed text-ink-soft text-pretty">
              {about.body}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {about.values.map((v, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <GlassCard
                    key={v.title}
                    className="p-6"
                    style={{
                      transform:
                        i === 1
                          ? "translateY(14px)"
                          : i === 2
                            ? "translateY(-6px)"
                            : undefined,
                    }}
                  >
                    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <h3 className="font-display text-xl text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {v.body}
                    </p>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
