"use client";

import { useState } from "react";
import type { MemberData, MemberGroup } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { Linkedin, Mail } from "lucide-react";

const filters: { key: "all" | MemberGroup; label: string }[] = [
  { key: "all", label: "Toți" },
  { key: "board", label: "Board" },
  { key: "team", label: "Echipă" },
  { key: "volunteers", label: "Voluntari" },
];

const accentMap = {
  mint: "from-mint/30 to-mint/5 text-mint-deep",
  sky: "from-sky/25 to-sky/5 text-sky",
  sunrise: "from-sunrise/30 to-sunrise/5 text-sunrise",
} as const;

function monogram(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function Members({ members }: { members: MemberData[] }) {
  const [filter, setFilter] = useState<"all" | MemberGroup>("all");
  const list = members.filter((m) => filter === "all" || m.group === filter);

  return (
    <section id="membri" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
              <span className="font-display italic text-mint-deep">05</span>
              Membri
            </div>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-ink text-balance">
              Oamenii din spatele{" "}
              <span className="italic text-mint-deep">mișcării</span>.
            </h2>
          </div>

          <div className="glass-subtle inline-flex rounded-full p-1 text-xs">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-3.5 py-1.5 font-medium transition-all ${
                  filter === f.key
                    ? "bg-ink text-white shadow-sm"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((m, i) => (
            <GlassCard
              key={m.name}
              className="group overflow-hidden p-6 transition-transform hover:-translate-y-1"
              style={{
                transform: i % 2 === 1 ? "translateY(12px)" : undefined,
              }}
            >
              <div className="relative mb-6">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${accentMap[m.accent]} font-display text-2xl ring-1 ring-white/60`}
                >
                  {monogram(m.name)}
                </div>
                <span
                  className={`absolute -right-1 -top-1 rounded-full px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider ${
                    m.group === "board"
                      ? "bg-ink text-white"
                      : m.group === "team"
                        ? "bg-mint/20 text-mint-deep"
                        : "bg-sky/15 text-sky"
                  }`}
                >
                  {m.group === "board"
                    ? "Board"
                    : m.group === "team"
                      ? "Echipă"
                      : "Voluntar"}
                </span>
              </div>

              <h3 className="font-display text-xl text-ink leading-tight">
                {m.name}
              </h3>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-mint-deep">
                {m.role}
              </p>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                {m.bio}
              </p>

              <div className="mt-5 flex gap-1.5">
                <a
                  href="#"
                  className="glass-subtle flex h-8 w-8 items-center justify-center rounded-full text-ink-soft hover:text-ink"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#"
                  className="glass-subtle flex h-8 w-8 items-center justify-center rounded-full text-ink-soft hover:text-ink"
                  aria-label="Email"
                >
                  <Mail className="h-3.5 w-3.5" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
