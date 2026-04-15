import type { CityData, PartnerData } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";

export function Partners({
  cities,
  partners,
}: {
  cities: CityData[];
  partners: PartnerData[];
}) {
  const doubled = [...partners, ...partners];

  return (
    <section id="parteneri" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full glass-subtle px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
            <span className="font-display italic text-mint-deep">04</span>
            Parteneri
          </div>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.02] text-ink text-balance">
            O rețea care{" "}
            <span className="italic text-mint-deep">conectează</span> orașe,
            oameni, idei.
          </h2>
        </div>

        <GlassCard variant="strong" className="overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full">
                <svg
                  viewBox="0 0 900 560"
                  className="absolute inset-0 h-full w-full"
                  aria-label="Harta României"
                >
                  <defs>
                    <linearGradient id="ro" x1="0" y1="0" x2="900" y2="560">
                      <stop offset="0" stopColor="#00d49e" stopOpacity="0.28" />
                      <stop offset="1" stopColor="#3057ff" stopOpacity="0.18" />
                    </linearGradient>
                    <radialGradient id="city-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0" stopColor="#00d49e" stopOpacity="0.55" />
                      <stop offset="1" stopColor="#00d49e" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <path
                    d="M90 280
                       Q 120 200 200 170
                       Q 260 150 320 160
                       Q 380 170 440 150
                       Q 510 130 580 130
                       Q 660 135 720 170
                       Q 780 200 815 250
                       Q 830 290 810 340
                       Q 790 390 760 420
                       Q 720 455 660 470
                       Q 580 485 500 475
                       Q 430 465 370 475
                       Q 300 490 240 475
                       Q 170 455 120 410
                       Q 80 360 90 280 Z"
                    fill="url(#ro)"
                    stroke="#0b1f14"
                    strokeOpacity="0.25"
                    strokeWidth="1.5"
                    strokeDasharray="3 4"
                  />
                  {cities.map((a, i) =>
                    cities.slice(i + 1).map((b, j) => (
                      <line
                        key={`${i}-${j}`}
                        x1={a.x}
                        y1={a.y}
                        x2={b.x}
                        y2={b.y}
                        stroke="#00a57a"
                        strokeOpacity="0.12"
                        strokeWidth="1"
                      />
                    ))
                  )}
                  {cities.map((c) => (
                    <g key={c.name}>
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r="22"
                        fill="url(#city-glow)"
                        className="anim-pulse-dot"
                      />
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r="5"
                        fill="#fff"
                        stroke="#00a57a"
                        strokeWidth="2.5"
                      />
                      <text
                        x={c.x + 12}
                        y={c.y - 10}
                        className="font-sans"
                        fontSize="13"
                        fill="#0b1f14"
                        fontWeight="500"
                      >
                        {c.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            <div className="lg:col-span-5 lg:self-center">
              <p className="font-display text-2xl italic leading-snug text-ink text-balance">
                „Schimbarea mobilității nu se decretează — se construiește,
                împreună, stradă cu stradă.”
              </p>
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                Colaborăm cu 23 de primării, universități și organizații
                civice. Împărtășim metodologii, unelte și, mai ales, curaj
                politic pentru a face orașele mai ușor de locuit.
              </p>
              <div className="mt-6 flex gap-2">
                <span className="rounded-full bg-mint/15 px-3 py-1 text-[11px] font-medium text-mint-deep">
                  23 orașe
                </span>
                <span className="rounded-full bg-sky/15 px-3 py-1 text-[11px] font-medium text-sky">
                  14 parteneri academici
                </span>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="mt-10 overflow-hidden">
          <div className="anim-marquee flex w-max gap-3">
            {doubled.map((name, i) => (
              <span
                key={i}
                className="glass-subtle shrink-0 rounded-full px-5 py-2.5 text-xs font-medium text-ink-soft"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
