"use client";

import Link from "next/link";

const themes = [
  {
    id: "sleep",
    title: "Sleep Mode",
    emoji: "🌙",
    description: "Relax with calming visuals and white noise",
    accent:
      "from-indigo-400/90 via-violet-500/70 to-slate-900/50 shadow-indigo-500/25 hover:shadow-indigo-400/45 border-indigo-400/25 hover:border-indigo-300/50",
    orb: "bg-indigo-500/35",
  },
  {
    id: "gaming",
    title: "Gaming Mode",
    emoji: "🎮",
    description: "Enhance your gaming setup with dynamic lighting",
    accent:
      "from-fuchsia-500/90 via-cyan-400/70 to-violet-900/50 shadow-fuchsia-500/25 hover:shadow-cyan-400/40 border-fuchsia-400/30 hover:border-cyan-300/55",
    orb: "bg-fuchsia-500/35",
  },
  {
    id: "galaxy",
    title: "Galaxy Mode",
    emoji: "🌌",
    description: "Explore immersive cosmic visuals",
    accent:
      "from-violet-500/90 via-blue-500/70 to-indigo-950/50 shadow-violet-500/25 hover:shadow-blue-400/45 border-violet-400/25 hover:border-blue-300/50",
    orb: "bg-violet-500/35",
  },
  {
    id: "forest",
    title: "Forest Mode",
    emoji: "🌳",
    description: "Experience peaceful natural environments",
    accent:
      "from-emerald-400/90 via-teal-500/70 to-emerald-950/50 shadow-emerald-500/25 hover:shadow-teal-400/45 border-emerald-400/25 hover:border-teal-300/50",
    orb: "bg-emerald-500/35",
  },
  {
    id: "meditation",
    title: "Meditation Mode",
    emoji: "🧘",
    description: "Guided breathing with OM sound",
    accent:
      "from-amber-400/80 via-violet-500/70 to-rose-950/40 shadow-amber-500/20 hover:shadow-violet-400/40 border-amber-400/20 hover:border-violet-300/45",
    orb: "bg-amber-500/30",
  },
  {
    id: "rain",
    title: "Rain Mode",
    emoji: "🌧️",
    description: "Cozy rain visuals with soothing sound",
    accent:
      "from-sky-400/90 via-slate-500/70 to-blue-950/50 shadow-sky-500/25 hover:shadow-blue-400/45 border-sky-400/25 hover:border-slate-300/45",
    orb: "bg-sky-500/35",
  },
];

export default function ThemesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white mb-4 inline-block"
          >
            ← Back
          </Link>

          <h1 className="text-4xl font-bold text-white mb-3">
            Choose Your Experience
          </h1>

          <p className="text-gray-400">
            Select a projection theme to transform your environment
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() =>
                (window.location.href = `/remote?theme=${theme.id}`)
              }
              className={`relative p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:scale-105 transition-all duration-300 text-left ${theme.accent}`}
            >
              <div className="text-4xl mb-3">{theme.emoji}</div>

              <h2 className="text-xl font-semibold text-white">
                {theme.title}
              </h2>

              <p className="text-sm text-gray-400 mt-2">
                {theme.description}
              </p>

              <div className="mt-4 text-xs text-cyan-300 opacity-70">
                Click to activate →
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}