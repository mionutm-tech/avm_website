export function GradientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base aurora wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 15% 10%, #e9fbf2 0%, transparent 60%)," +
            "radial-gradient(1000px 700px at 90% 20%, #e7efff 0%, transparent 55%)," +
            "radial-gradient(1100px 900px at 70% 90%, #fff6e1 0%, transparent 60%)," +
            "linear-gradient(180deg, #f7fbf8 0%, #f3f8f5 50%, #f7fbf8 100%)",
        }}
      />

      {/* Drifting color blobs */}
      <div
        className="anim-drift-a absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #9ff2d4 0%, rgba(159,242,212,0) 65%)",
        }}
      />
      <div
        className="anim-drift-b absolute top-[20%] right-[-15%] h-[55vmax] w-[55vmax] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #b7c7ff 0%, rgba(183,199,255,0) 65%)",
        }}
      />
      <div
        className="anim-drift-c absolute bottom-[-20%] left-[10%] h-[50vmax] w-[50vmax] rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #ffe6b0 0%, rgba(255,230,176,0) 65%)",
        }}
      />

      {/* Fine grid overlay */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#0b1f14"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
