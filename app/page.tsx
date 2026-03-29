"use client";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 font-sans text-zinc-100">
      {/* Ambient gradient mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(88,28,135,0.45),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(37,99,235,0.25),transparent_50%),radial-gradient(ellipse_80%_50%_at_0%_80%,rgba(147,51,234,0.2),transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-[480px] w-[480px] rounded-full bg-purple-600/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-600/25 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-950/40 blur-[140px]"
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black,transparent)]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90 shadow-[0_0_24px_rgba(34,211,238,0.15)] backdrop-blur-md transition hover:border-cyan-400/40 hover:shadow-[0_0_32px_rgba(34,211,238,0.25)]">
            Smart Projection System
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-br from-white via-violet-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(167,139,250,0.45)]">
              LUME
            </span>
          </h1>

          <p className="mt-6 text-lg font-medium leading-relaxed text-zinc-300 sm:text-xl md:text-2xl">
            Transform any space into an immersive environment
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            An AI-powered smart projection system that adapts to light, motion,
            and mood.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => window.location.href = "/connect"}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 text-base font-semibold text-zinc-950 transition duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 opacity-100 transition duration-300 group-hover:opacity-100" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 opacity-0 blur-xl transition duration-300 group-hover:opacity-70" />
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 opacity-60 blur-lg transition duration-300 group-hover:opacity-90 group-hover:blur-xl" />
              <span className="relative">Start Experience</span>
            </button>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mx-auto mt-20 grid w-full max-w-5xl gap-5 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {[
            {
              title: "Adaptive Intelligence",
              blurb:
                "Learns your rhythms and adjusts visuals in real time for the perfect atmosphere.",
              accent: "from-violet-500/80 to-fuchsia-500/40",
              glow: "shadow-violet-500/20 group-hover:shadow-violet-400/35",
            },
            {
              title: "Immersive Experiences",
              blurb:
                "Cinematic projection mapping that wraps walls, ceilings, and mood in one flow.",
              accent: "from-cyan-500/80 to-blue-600/40",
              glow: "shadow-cyan-500/20 group-hover:shadow-cyan-400/35",
            },
            {
              title: "Smart IoT Control",
              blurb:
                "Orchestrate lights, sensors, and scenes from a single intelligent command layer.",
              accent: "from-indigo-500/80 to-purple-600/40",
              glow: "shadow-indigo-500/20 group-hover:shadow-indigo-400/35",
            },
          ].map((card) => (
            <article
              key={card.title}
              className={`group relative rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 sm:p-7 ${card.glow}`}
            >
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${card.accent} opacity-40 blur-2xl transition duration-500 group-hover:opacity-70`}
              />
              <div
                className={`mb-4 inline-flex h-1 w-12 rounded-full bg-gradient-to-r ${card.accent}`}
              />
              <h2 className="text-lg font-semibold text-white transition duration-300 group-hover:text-cyan-100 sm:text-xl">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 transition duration-300 group-hover:text-zinc-300">
                {card.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
