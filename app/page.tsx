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
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #000000;
        }

        @keyframes driftA {
          0% { transform: translate3d(0px, 0px, 0px); }
          25% { transform: translate3d(10px, -8px, 0px); }
          50% { transform: translate3d(18px, 4px, 0px); }
          75% { transform: translate3d(6px, 10px, 0px); }
          100% { transform: translate3d(0px, 0px, 0px); }
        }

        @keyframes driftB {
          0% { transform: translate3d(0px, 0px, 0px); }
          25% { transform: translate3d(-12px, 8px, 0px); }
          50% { transform: translate3d(-20px, -4px, 0px); }
          75% { transform: translate3d(-8px, -10px, 0px); }
          100% { transform: translate3d(0px, 0px, 0px); }
        }

        @keyframes driftC {
          0% { transform: translate3d(0px, 0px, 0px); }
          25% { transform: translate3d(8px, 10px, 0px); }
          50% { transform: translate3d(-10px, 0px, 0px); }
          75% { transform: translate3d(14px, -8px, 0px); }
          100% { transform: translate3d(0px, 0px, 0px); }
        }

        @keyframes pulseGlow {
          0% { opacity: 0.28; filter: blur(36px); }
          50% { opacity: 0.42; filter: blur(54px); }
          100% { opacity: 0.28; filter: blur(36px); }
        }

        .hero-card {
          position: absolute;
          width: 240px;
          height: 150px;
          border-radius: 28px;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.03)
          );
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            0 24px 60px rgba(0, 0, 0, 0.7),
            0 0 40px rgba(139, 92, 246, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .hero-card-word {
          font-size: 25px;
          font-weight: 800;
          letter-spacing: -0.04em;
          transition: opacity 220ms ease;
        }

        .card-a {
          top: 6px;
          left: 14px;
          animation: driftA 15s ease-in-out infinite;
        }

        .card-b {
          top: 72px;
          left: 118px;
          animation: driftB 17s ease-in-out infinite;
        }

        .card-c {
          top: 152px;
          left: 34px;
          animation: driftC 19s ease-in-out infinite;
        }

        @media (max-width: 520px) {
          .hero-card {
            width: 182px;
            height: 118px;
            border-radius: 24px;
          }

          .hero-card-word {
            font-size: 19px;
          }

          .card-a {
            top: 10px;
            left: 2px;
          }

          .card-b {
            top: 70px;
            left: 88px;
          }

          .card-c {
            top: 142px;
            left: 18px;
          }
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
            width: 320,
            height: 320,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(91,33,182,0.55) 0%, rgba(91,33,182,0.22) 34%, rgba(91,33,182,0.02) 72%, rgba(0,0,0,0) 100%)",
            animation: "pulseGlow 7s ease-in-out infinite",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 16px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.04), 0 0 22px rgba(91,33,182,0.08)",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.88)",
            marginBottom: 24,
          }}
        >
          Distribution Engine
        </div>

        <h1
          style={{
            position: "relative",
            zIndex: 1,
            margin: 0,
            fontSize: "clamp(46px, 12vw, 86px)",
            lineHeight: 0.94,
            letterSpacing: "-0.07em",
            fontWeight: 850,
            maxWidth: 520,
          }}
        >
          One input.
          <br />
          Infinite reach.
        </h1>

        <p
          style={{
            position: "relative",
            zIndex: 1,
            marginTop: 18,
            marginBottom: 0,
            maxWidth: 500,
            fontSize: "clamp(18px, 4.8vw, 25px)",
            lineHeight: 1.42,
            color: "rgba(255,255,255,0.74)",
            letterSpacing: "-0.02em",
          }}
        >
          Turn raw video into a distribution machine.
        </p>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: 340,
            marginTop: 36,
            marginBottom: 34,
          }}
        >
          <div className="hero-card card-a">
            <div className="hero-card-word" style={{ color: "#8b5cf6" }}>
              {hookWords[hookIndex]}
            </div>
          </div>

          <div className="hero-card card-b">
            <div className="hero-card-word" style={{ color: "#22d3ee" }}>
              {engineWords[engineIndex]}
            </div>
          </div>

          <div className="hero-card card-c">
            <div className="hero-card-word" style={{ color: "#f5f5f5" }}>
              {resultWords[resultIndex]}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "18px 20px",
              borderRadius: 18,
              background: "#f5f5f5",
              color: "#000000",
              border: "none",
              fontSize: 17,
              fontWeight: 800,
              boxShadow: "0 0 28px rgba(139,92,246,0.12)",
              cursor: "pointer",
            }}
          >
            Start Free
          </button>

          <button
            style={{
              width: "100%",
              padding: "18px 20px",
              borderRadius: 18,
              background: "rgba(255,255,255,0.02)",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 17,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Watch Demo
          </button>
        </div>
      </section>

      <section
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "0 20px 110px",
        }}
      >
        <div
          style={{
            borderRadius: 30,
            border: "1px solid rgba(255,255,255,0.1)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.018))",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.04), 0 22px 60px rgba(0,0,0,0.65)",
            padding: "34px 22px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.52)",
              fontWeight: 700,
              marginBottom: 16,
            }}
          >
            The point
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 10vw, 62px)",
              lineHeight: 0.96,
              letterSpacing: "-0.06em",
              fontWeight: 850,
            }}
          >
            Stop editing.
            <br />
            Start scaling.
          </h2>

          <p
            style={{
              maxWidth: 430,
              margin: "18px auto 0",
              fontSize: 18,
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Create more surface area, faster, from every recording you already
            make.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              marginTop: 26,
            }}
          >
            <button
              style={{
                width: "100%",
                padding: "18px 20px",
                borderRadius: 18,
                background: "#f5f5f5",
                color: "#000000",
                border: "none",
                fontSize: 17,
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Get Started
            </button>

            <button
              style={{
                width: "100%",
                padding: "18px 20px",
                borderRadius: 18,
                background: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.12)",
                fontSize: 17,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              See Product
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
