import type { HeroData, OrgData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Sparkles, Bike, Bus, Leaf, Zap } from "lucide-react";

export function Hero({ hero, org }: { hero: HeroData; org: OrgData }) {
  return (
    <section className="relative px-4 pb-20 pt-36 sm:pt-44 lg:pt-48">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Left column — copy */}
        <div className="lg:col-span-7">
          <div className="anim-fade-up inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
            <Sparkles className="h-3 w-3 text-mint-deep" />
            {hero.eyebrow}
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.98] text-ink text-balance">
            <span className="anim-fade-up delay-100 inline-block">
              {hero.titleLead}
            </span>{" "}
            <span className="anim-fade-up delay-200 relative inline-block italic text-mint-deep">
              {hero.titleDisplay}
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 300 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 10 Q 80 2, 150 7 T 298 5"
                  stroke="#00d49e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="anim-draw"
                  style={{ strokeDasharray: 400, strokeDashoffset: 400 }}
                />
              </svg>
            </span>
            <br />
            <span className="anim-fade-up delay-300 inline-block">
              {hero.titleTail}
            </span>
          </h1>

          <p className="anim-fade-up delay-400 mt-8 max-w-xl text-[17px] leading-relaxed text-ink-soft text-pretty">
            {hero.subtitle}
          </p>

          <div className="anim-fade-up delay-500 mt-9 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-all hover:gap-3"
            >
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-ink hover:text-mint-deep"
            >
              {hero.secondaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Stat strip */}
          <div className="anim-fade-up delay-700 mt-12 grid grid-cols-3 gap-3 sm:gap-4">
            {hero.stats.map((s, i) => (
              <GlassCard
                key={s.label}
                variant="subtle"
                className={`px-4 py-4 sm:px-5 sm:py-5 ${
                  i === 1 ? "sm:translate-y-3" : ""
                } ${i === 2 ? "sm:-translate-y-1" : ""}`}
              >
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl sm:text-4xl text-ink">
                    {s.value}
                  </span>
                  <span className="text-xs font-medium text-ink-mute">
                    {s.unit}
                  </span>
                </div>
                <div className="mt-1 text-[11px] leading-snug text-ink-mute">
                  {s.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right column — artwork */}
        <div className="relative lg:col-span-5">
          <div className="anim-fade-in delay-300 relative aspect-square w-full">
            <div className="absolute inset-0 rounded-full glass-strong grain" />

            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="route" x1="0" y1="0" x2="400" y2="400">
                  <stop offset="0" stopColor="#00d49e" />
                  <stop offset="1" stopColor="#3057ff" />
                </linearGradient>
                <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#00d49e" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#00d49e" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle
                cx="200"
                cy="200"
                r="170"
                fill="none"
                stroke="#0b1f14"
                strokeOpacity="0.08"
                strokeDasharray="2 6"
              />
              <circle
                cx="200"
                cy="200"
                r="130"
                fill="none"
                stroke="#0b1f14"
                strokeOpacity="0.06"
              />

              <path
                d="M50 260 Q 130 80, 210 180 T 360 140"
                fill="none"
                stroke="url(#route)"
                strokeWidth="4"
                strokeLinecap="round"
                className="anim-draw"
              />

              {[
                { cx: 50, cy: 260 },
                { cx: 210, cy: 180 },
                { cx: 290, cy: 155 },
                { cx: 360, cy: 140 },
              ].map((p, i) => (
                <g key={i}>
                  <circle
                    cx={p.cx}
                    cy={p.cy}
                    r="16"
                    fill="url(#dot-glow)"
                    className="anim-pulse-dot"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  />
                  <circle
                    cx={p.cx}
                    cy={p.cy}
                    r="5"
                    fill="#fff"
                    stroke="#00d49e"
                    strokeWidth="2.5"
                  />
                </g>
              ))}
            </svg>

            <GlassCard
              variant="strong"
              className="anim-float absolute -left-4 top-10 flex items-center gap-2 px-3 py-2 text-[11px] font-medium text-ink sm:-left-6"
            >
              <Bike className="h-4 w-4 text-mint-deep" /> 148 km piste
            </GlassCard>
            <GlassCard
              variant="strong"
              className="anim-float-slow absolute right-0 top-28 flex items-center gap-2 px-3 py-2 text-[11px] font-medium text-ink"
            >
              <Zap className="h-4 w-4 text-sky" /> Flotă EV
            </GlassCard>
            <GlassCard
              variant="strong"
              className="anim-float absolute -right-2 bottom-16 flex items-center gap-2 px-3 py-2 text-[11px] font-medium text-ink"
              style={{ animationDelay: "1s" }}
            >
              <Leaf className="h-4 w-4 text-mint-deep" /> 3.2k t CO₂
            </GlassCard>
            <GlassCard
              variant="strong"
              className="anim-float-slow absolute -left-2 bottom-8 flex items-center gap-2 px-3 py-2 text-[11px] font-medium text-ink"
              style={{ animationDelay: "1.5s" }}
            >
              <Bus className="h-4 w-4 text-sunrise" /> Transit +
            </GlassCard>
          </div>
        </div>
      </div>

      <div className="anim-fade-up delay-900 mx-auto mt-16 flex max-w-6xl items-center justify-between text-[11px] font-medium uppercase tracking-[0.16em] text-ink-mute">
        <span>
          Est. {org.established} · {org.shortName}
        </span>
        <span className="hidden sm:block">Derulează pentru poveste ↓</span>
      </div>
    </section>
  );
}
