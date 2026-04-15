import type { NewsData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowUpRight } from "lucide-react";

export function News({ news }: { news: NewsData[] }) {
  return (
    <section id="noutati" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
              <span className="font-display italic text-mint-deep">06</span>
              Noutăți
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-ink text-balance">
              Ce se <span className="italic text-mint-deep">întâmplă</span>{" "}
              acum.
            </h2>
          </div>
          <a
            href="#"
            className="text-xs font-medium uppercase tracking-wider text-ink-soft hover:text-ink"
          >
            Toate articolele →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {news.map((n, i) => (
            <GlassCard
              key={n.title}
              className="group flex flex-col p-6 transition-transform hover:-translate-y-1"
              style={{ transform: i === 1 ? "translateY(20px)" : undefined }}
            >
              <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-wider text-ink-mute">
                <span>{n.date}</span>
                <span className="h-1 w-1 rounded-full bg-ink-mute" />
                <span className="text-mint-deep">{n.category}</span>
              </div>
              <h3 className="mt-5 font-display text-2xl leading-[1.1] text-ink text-balance">
                {n.title}
              </h3>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-soft">
                {n.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-ink group-hover:text-mint-deep">
                Citește articolul
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
