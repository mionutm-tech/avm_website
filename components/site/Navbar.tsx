"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Despre", href: "#despre" },
  { label: "Proiecte", href: "#proiecte" },
  { label: "Impact", href: "#impact" },
  { label: "Parteneri", href: "#parteneri" },
  { label: "Membri", href: "#membri" },
  { label: "Noutăți", href: "#noutati" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6">
      <nav
        className={`w-full max-w-6xl rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong" : "glass"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
          <a href="#" className="shrink-0" aria-label="AVM-UI — acasă">
            <Logo />
          </a>
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-[13px] font-medium text-ink-soft transition-colors hover:bg-white/60 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="#alatura-te"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Devino membru
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <button
            onClick={() => setOpen((o) => !o)}
            className="glass-subtle flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            aria-label="Meniu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/40 px-4 py-4 lg:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-ink-soft hover:bg-white/60 hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#alatura-te"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white"
                >
                  Devino membru <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
