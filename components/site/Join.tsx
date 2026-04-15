import type { TierData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check, Sparkles } from "lucide-react";

export function Join({ tiers }: { tiers: TierData[] }) {
  return (
    <section id="alatura-te" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
            <span className="font-display italic text-mint-deep">07</span>
            Alătură-te
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-ink text-balance">
            Trei moduri de a face parte din{" "}
            <span className="italic text-mint-deep">comunitate</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
            Alege felul în care vrei să contribui. Poți oricând să crești sau
            să schimbi nivelul — e o comunitate, nu un abonament.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <GlassCard
              key={t.name}
              variant={t.featured ? "dark" : "strong"}
              className={`relative flex flex-col p-8 ${
                t.featured ? "lg:-translate-y-4 lg:scale-[1.02]" : ""
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-mint px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink shadow-lg">
                  <Sparkles className="mr-1 inline h-3 w-3" />
                  Cel mai popular
                </span>
              )}
              <h3
                className={`font-display text-3xl ${
                  t.featured ? "text-white" : "text-ink"
                }`}
              >
                {t.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`font-display text-5xl ${
                    t.featured ? "text-mint" : "text-ink"
                  }`}
                >
                  {t.price}
                </span>
                <span
                  className={`text-sm ${
                    t.featured ? "text-white/60" : "text-ink-mute"
                  }`}
                >
                  {t.period}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {t.perks.map((p) => (
                  <li
                    key={p}
                    className={`flex items-start gap-2 text-[14px] ${
                      t.featured ? "text-white/85" : "text-ink-soft"
                    }`}
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        t.featured ? "text-mint" : "text-mint-deep"
                      }`}
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                  t.featured ? "bg-mint text-ink" : "bg-ink text-white"
                }`}
              >
                {t.cta}
              </a>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
