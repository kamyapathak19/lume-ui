"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function RemotePage() {
  const params = useSearchParams();
  const theme = params.get("theme");

  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(50);
  const [brightness, setBrightness] = useState(70);
  const [auto, setAuto] = useState(false);

  const themes = ["sleep", "gaming", "galaxy", "forest", "meditation", "rain"];
  const currentIndex = themes.indexOf(theme || "sleep");

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % themes.length;
    window.location.href = `/remote?theme=${themes[nextIndex]}`;
  };

  const goPrev = () => {
    const prevIndex = (currentIndex - 1 + themes.length) % themes.length;
    window.location.href = `/remote?theme=${themes[prevIndex]}`;
  };

  const goRandom = () => {
    const randomIndex = Math.floor(Math.random() * themes.length);
    window.location.href = `/remote?theme=${themes[randomIndex]}`;
  };

  // 🔥 LOAD SAVED SETTINGS
  useEffect(() => {
    if (theme) {
      const saved = localStorage.getItem(theme);
      if (saved) {
        const data = JSON.parse(saved);
        setVolume(data.volume ?? 50);
        setBrightness(data.brightness ?? 70);
        setAuto(data.auto ?? false);
      }
    }
  }, [theme]);

  // 🔥 SAVE SETTINGS
  useEffect(() => {
    if (theme) {
      localStorage.setItem(
        theme,
        JSON.stringify({
          volume,
          brightness,
          auto,
        })
      );
    }
  }, [theme, volume, brightness, auto]);

  // 🔥 AUTO BRIGHTNESS (LDR SIMULATION)
  useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        const simulatedLight = Math.floor(Math.random() * 100);
        setBrightness(simulatedLight);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [auto]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      
      {/* Theme Title */}
      <h1 className="text-3xl font-bold mb-6 text-cyan-300">
        {theme ? theme.toUpperCase() : "LOADING"} MODE
      </h1>

      {/* Power */}
      <button
        onClick={() => setPower(!power)}
        className={`px-6 py-3 rounded-full mb-6 text-lg ${
          power ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {power ? "Power ON" : "Power OFF"}
      </button>

      {/* Volume */}
      <div className="mb-6 w-full max-w-md">
        <p className="mb-2">Volume: {volume}</p>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Auto Mode */}
      <button
        onClick={() => setAuto(!auto)}
        className={`px-6 py-2 rounded-full mb-4 ${
          auto ? "bg-yellow-500 text-black" : "bg-gray-600"
        }`}
      >
        {auto ? "Auto Mode ON" : "Auto Mode OFF"}
      </button>

      {/* Brightness */}
      <div className="mb-6 w-full max-w-md">
        <p className="mb-2">Brightness: {brightness}</p>
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

      {/* Navigation */}
      <div className="flex gap-4">
        <button onClick={goPrev} className="px-4 py-2 bg-blue-500 rounded">
          Previous
        </button>

        <button onClick={goRandom} className="px-4 py-2 bg-purple-500 rounded">
          Random
        </button>

        <button onClick={goNext} className="px-4 py-2 bg-blue-500 rounded">
          Next
        </button>
      </div>

    </main>
  );
}