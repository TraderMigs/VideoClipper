"use client";

import { useEffect, useState } from "react";

const hookWords = ["Hook", "Viral", "Stop", "Grab", "Scroll", "Snap"];
const engineWords = ["Clip", "Cut", "Caption", "Format", "Slice", "Stack"];
const resultWords = ["Reach", "Scale", "Multiply", "Output", "Volume", "Everywhere"];

export default function Page() {
  const [hookIndex, setHookIndex] = useState(0);
  const [engineIndex, setEngineIndex] = useState(0);
  const [resultIndex, setResultIndex] = useState(0);

  useEffect(() => {
    const a = setInterval(() => {
      setHookIndex((prev) => (prev + 1) % hookWords.length);
    }, 3000);

    const b = setInterval(() => {
      setEngineIndex((prev) => (prev + 1) % engineWords.length);
    }, 3400);

    const c = setInterval(() => {
      setResultIndex((prev) => (prev + 1) % resultWords.length);
    }, 3800);

    return () => {
      clearInterval(a);
      clearInterval(b);
      clearInterval(c);
    };
  }, []);

  return (
    <main
      style={{
        background: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflowX: "hidden",
      }}
    >
      <style jsx global>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; background: #000000; }

        /* WIDE GHOST LANES */

        @keyframes laneA {
          0%   { transform: translate3d(-40px, 0px, 0px); }
          25%  { transform: translate3d(80px, -6px, 0px); }
          50%  { transform: translate3d(160px, 4px, 0px); }
          75%  { transform: translate3d(80px, 10px, 0px); }
          100% { transform: translate3d(-40px, 0px, 0px); }
        }

        @keyframes laneB {
          0%   { transform: translate3d(140px, 0px, 0px); }
          25%  { transform: translate3d(40px, 12px, 0px); }
          50%  { transform: translate3d(-60px, -8px, 0px); }
          75%  { transform: translate3d(40px, -14px, 0px); }
          100% { transform: translate3d(140px, 0px, 0px); }
        }

        @keyframes laneC {
          0%   { transform: translate3d(-20px, 0px, 0px); }
          25%  { transform: translate3d(100px, 14px, 0px); }
          50%  { transform: translate3d(180px, -6px, 0px); }
          75%  { transform: translate3d(60px, -16px, 0px); }
          100% { transform: translate3d(-20px, 0px, 0px); }
        }

        @keyframes pulseGlow {
          0% { opacity: 0.25; filter: blur(34px); }
          50% { opacity: 0.45; filter: blur(60px); }
          100% { opacity: 0.25; filter: blur(34px); }
        }

        .hero-card {
          position: absolute;
          width: 230px;
          height: 145px;
          border-radius: 28px;
          backdrop-filter: blur(18px);
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.08),
            rgba(255,255,255,0.03)
          );
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 24px 60px rgba(0,0,0,0.7),
            0 0 40px rgba(139,92,246,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-card-word {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.04em;
        }

        /* SEPARATED LANES */

        .card-a {
          top: 10px;
          left: 10px;
          animation: laneA 9s ease-in-out infinite;
        }

        .card-b {
          top: 120px;
          left: 40px;
          animation: laneB 8s ease-in-out infinite;
        }

        .card-c {
          top: 230px;
          left: 20px;
          animation: laneC 10s ease-in-out infinite;
        }

        @media (max-width: 520px) {
          .hero-card {
            width: 180px;
            height: 115px;
          }

          .hero-card-word {
            font-size: 18px;
          }

          .card-a { top: 10px; }
          .card-b { top: 110px; }
          .card-c { top: 200px; }
        }
      `}</style>

      <section
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "28px 20px 88px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 110,
            left: "50%",
            transform: "translateX(-50%)",
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(91,33,182,0.6), transparent)",
            animation: "pulseGlow 7s ease-in-out infinite",
          }}
        />

        <div
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 20,
            opacity: 0.8,
          }}
        >
          Distribution Engine
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(46px, 12vw, 86px)",
            lineHeight: 0.94,
            fontWeight: 850,
          }}
        >
          One input.
          <br />
          Infinite reach.
        </h1>

        <p style={{ marginTop: 18, opacity: 0.7 }}>
          Turn raw video into a distribution machine.
        </p>

        <div style={{ height: 340, position: "relative", marginTop: 30 }}>
          <div className="hero-card card-a">
            <div style={{ color: "#8b5cf6" }}>
              {hookWords[hookIndex]}
            </div>
          </div>

          <div className="hero-card card-b">
            <div style={{ color: "#22d3ee" }}>
              {engineWords[engineIndex]}
            </div>
          </div>

          <div className="hero-card card-c">
            <div style={{ color: "#ffffff" }}>
              {resultWords[resultIndex]}
            </div>
          </div>
        </div>

        <button
          style={{
            width: "100%",
            padding: 18,
            borderRadius: 18,
            background: "#f5f5f5",
            color: "#000",
            fontWeight: 800,
            marginTop: 20,
          }}
        >
          Start Free
        </button>
      </section>
    </main>
  );
}
