"use client";

import { useEffect, useState } from "react";

export default function RemotePage() {
  const themes = ["sleep", "gaming", "galaxy", "forest", "meditation", "rain"];

  const [theme, setTheme] = useState("sleep");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(70);
  const [auto, setAuto] = useState(false);

  // get theme from URL safely
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("theme");
    if (t && themes.includes(t)) setTheme(t);
  }, []);

  const currentIndex = themes.indexOf(theme);

  const goNext = () => {
    const next = themes[(currentIndex + 1) % themes.length];
    window.location.href = `/remote?theme=${next}`;
  };

  const goPrev = () => {
    const prev =
      themes[(currentIndex - 1 + themes.length) % themes.length];
    window.location.href = `/remote?theme=${prev}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white gap-6">

      <h1 className="text-3xl font-bold">LUME Remote</h1>
      <p className="text-lg">Theme: {theme}</p>

      {/* Power */}
      <button
        onClick={() => setPower(!power)}
        className="px-6 py-2 rounded bg-red-500"
      >
        {power ? "Turn OFF" : "Turn ON"}
      </button>

      {/* Auto Brightness */}
      <button
        onClick={() => setAuto(!auto)}
        className="px-6 py-2 rounded bg-yellow-500 text-black"
      >
        {auto ? "Auto Mode ON" : "Auto Mode OFF"}
      </button>

      {/* Brightness */}
      <div className="w-64">
        <p>Brightness: {brightness}</p>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          disabled={auto}
          onChange={(e) => setBrightness(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Volume */}
      <div className="w-64">
        <p>Volume: {volume}</p>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={goPrev}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          Previous
        </button>

        <button
          onClick={goNext}
          className="px-4 py-2 bg-green-500 rounded"
        >
          Next
        </button>
      </div>

    </div>
  );
}