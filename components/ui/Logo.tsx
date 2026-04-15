export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="lg1" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0" stopColor="#00d49e" />
            <stop offset="1" stopColor="#3057ff" />
          </linearGradient>
        </defs>
        <circle
          cx="20"
          cy="20"
          r="17"
          stroke="url(#lg1)"
          strokeWidth="2"
          fill="rgba(255,255,255,0.55)"
        />
        <circle cx="20" cy="20" r="2.4" fill="#0b1f14" />
        <path
          d="M20 20 L20 6"
          stroke="#0b1f14"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M20 20 L31 26"
          stroke="#0b1f14"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M20 20 L9 26"
          stroke="#0b1f14"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M26 10 Q31 14 30 20 Q28 17 24 16 Q26 14 26 10 Z"
          fill="#00d49e"
          opacity="0.85"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-[19px] italic tracking-tight text-ink">
          AVM-UI
        </span>
        <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-ink-mute">
          Mobilitate · România
        </span>
      </div>
    </div>
  );
}
