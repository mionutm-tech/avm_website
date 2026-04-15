"use client";

import { useState } from "react";
import type { ContactData, OrgData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";

export function Contact({
  contact,
  org,
}: {
  contact: ContactData;
  org: OrgData;
}) {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
            <span className="font-display italic text-mint-deep">08</span>
            Contact
          </div>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-ink text-balance">
            Să vorbim despre{" "}
            <span className="italic text-mint-deep">orașul</span> tău.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <GlassCard variant="strong" className="p-8 lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                    Nume
                  </span>
                  <input
                    required
                    placeholder="Andreea Popescu"
                    className="rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-mint-deep focus:bg-white"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    placeholder="tu@email.ro"
                    className="rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-mint-deep focus:bg-white"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2">
                <span className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                  Subiect
                </span>
                <input
                  placeholder="Vreau să colaborez la un proiect"
                  className="rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-mint-deep focus:bg-white"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">
                  Mesaj
                </span>
                <textarea
                  required
                  rows={5}
                  placeholder="Povestește-ne pe scurt..."
                  className="resize-none rounded-xl border border-ink/10 bg-white/60 px-4 py-3 text-sm outline-none transition-colors focus:border-mint-deep focus:bg-white"
                />
              </label>
              <button
                type="submit"
                disabled={sent}
                className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-all hover:gap-3 disabled:bg-mint-deep"
              >
                {sent ? (
                  <>
                    <Check className="h-4 w-4" /> Mesaj trimis
                  </>
                ) : (
                  <>
                    Trimite mesajul
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>
          </GlassCard>

          <div className="lg:col-span-5 lg:pl-4">
            <GlassCard className="p-8">
              <h3 className="font-display text-2xl italic text-ink">
                {org.shortName}
              </h3>
              <p className="mt-1 text-xs text-ink-mute">{org.fullName}</p>

              <div className="mt-8 flex flex-col gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-mint-deep" />
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-ink-mute">
                      Email
                    </div>
                    <a href={`mailto:${contact.email}`} className="text-ink">
                      {contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-mint-deep" />
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-ink-mute">
                      Telefon
                    </div>
                    <span className="text-ink">{contact.phone}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-mint-deep" />
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-wider text-ink-mute">
                      Adresă
                    </div>
                    <span className="text-ink">{contact.address}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-ink/10 pt-6">
                <div className="mb-3 text-[11px] font-medium uppercase tracking-wider text-ink-mute">
                  Rețele
                </div>
                <div className="flex gap-2">
                  {contact.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="glass-subtle rounded-full px-4 py-2 text-xs font-medium text-ink-soft hover:text-ink"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
