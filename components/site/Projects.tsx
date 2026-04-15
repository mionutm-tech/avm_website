import type { ProjectData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  Bike,
  Zap,
  Compass,
  Database,
  GraduationCap,
  Share2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  bike: Bike,
  zap: Zap,
  compass: Compass,
  database: Database,
  graduation: GraduationCap,
  share: Share2,
};

export function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <section id="proiecte" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
              <span className="font-display italic text-mint-deep">02</span>
              Proiecte
            </div>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-ink text-balance">
              Șase șantiere deschise pentru{" "}
              <span className="italic text-mint-deep">orașele</span> viitorului.
            </h2>
          </div>
          <a
            href="#contact"
            className="glass-subtle inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-ink-soft hover:text-ink"
          >
            Propune un proiect <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = iconMap[p.icon] ?? Bike;
            const featured = i === 0;
            return (
              <GlassCard
                key={p.code}
                variant={featured ? "strong" : "default"}
                className={`group relative overflow-hidden p-6 transition-transform hover:-translate-y-1 ${
                  featured ? "sm:col-span-2 lg:col-span-2 lg:row-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-xs italic text-ink-mute">
                    {p.code}
                  </span>
                  <span className="rounded-full bg-ink/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-soft">
                    {p.tag}
                  </span>
                </div>

                <div className="mt-10 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-mint/20 to-sky/20 text-mint-deep ring-1 ring-white/60">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-display text-2xl leading-tight text-ink text-balance">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>

                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-ink transition-colors group-hover:text-mint-deep">
                  Află mai mult
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {featured && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-60 blur-3xl"
                    style={{
                      background:
                        "radial-gradient(circle, #9ff2d4 0%, transparent 70%)",
                    }}
                  />
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
