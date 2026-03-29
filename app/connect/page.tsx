"use client";

import { useState } from "react";

export default function ConnectPage() {
  const [status, setStatus] = useState<"idle" | "connecting" | "connected">("idle");

  const connectToDevice = () => {
    setStatus("connecting");

    // simulate connection delay
    setTimeout(() => {
      setStatus("connected");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-300 mb-4">
        Connect to LUME Device
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Connect your device to the <span className="text-white font-semibold">LUME_Device</span> WiFi network to continue.
      </p>

      {/* Instructions */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6 text-sm text-gray-300 max-w-md text-center">
        <p>1. Open WiFi settings on your phone</p>
        <p>2. Select <span className="text-cyan-300">LUME_Device</span></p>
        <p>3. Return to this app and connect</p>
      </div>

      {/* Button States */}
      {status === "idle" && (
        <button
          onClick={connectToDevice}
          className="px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
        >
          Connect
        </button>
      )}

      {status === "connecting" && (
        <p className="text-yellow-400 text-lg">
          Connecting to LUME_Device...
        </p>
      )}

      {status === "connected" && (
        <div className="text-center">
          <p className="text-green-400 text-xl mb-4">
            Connected successfully ✅
          </p>

          <button
            onClick={() => window.location.href = "/themes"}
            className="px-6 py-3 bg-cyan-500 rounded-lg"
          >
            Continue to Experiences
          </button>
        </div>
      )}

    </main>
  );
}