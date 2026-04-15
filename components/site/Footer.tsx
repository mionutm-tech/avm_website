"use client";

import { Logo } from "@/components/ui/Logo";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative px-4 pb-10 pt-10">
      <div className="mx-auto max-w-6xl">
        <GlassCard variant="strong" className="p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Logo />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-soft">
                Mobilitate curată, orașe pe măsura oamenilor. O asociație
                independentă, finanțată prin membri, granturi și proiecte.
              </p>
            </div>

            <div className="lg:col-span-4">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-mute">
                Newsletter
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 p-1 pl-5"
              >
                <input
                  type="email"
                  placeholder="email@domeniu.ro"
                  className="flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-ink-mute"
                />
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition-transform hover:scale-105">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-[11px] text-ink-mute">
                O dată pe lună. Fără spam, ușor de dezabonat.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-mute">
                Navigare
              </div>
              <ul className="space-y-1.5 text-sm">
                <li>
                  <a href="#despre" className="text-ink-soft hover:text-ink">
                    Despre
                  </a>
                </li>
                <li>
                  <a href="#proiecte" className="text-ink-soft hover:text-ink">
                    Proiecte
                  </a>
                </li>
                <li>
                  <a href="#membri" className="text-ink-soft hover:text-ink">
                    Membri
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-ink-soft hover:text-ink">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink/10 pt-6 text-[11px] text-ink-mute sm:flex-row sm:items-center">
            <span>
              © {new Date().getFullYear()} Asociația pentru Viitorul Mobilității Urbane și Interurbane
            </span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-ink">
                Politica de confidențialitate
              </a>
              <a href="#" className="hover:text-ink">
                Statutul asociației
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
}
