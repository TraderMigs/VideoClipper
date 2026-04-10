export default function Page() {
  return (
    <main
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflowX: "hidden",
      }}
    >
      {/* HERO */}
      <section style={{ padding: "28px 18px 60px", maxWidth: 520, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 22,
          }}
        >
          Content engine
        </div>

        <h1
          style={{
            fontSize: 44,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            margin: 0,
            fontWeight: 800,
          }}
        >
          One video.
          <br />
          Infinite content.
        </h1>

        <p
          style={{
            marginTop: 18,
            fontSize: 18,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Turn raw footage into high-performing clips without wasting hours editing.
        </p>

        <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 12 }}>
          <button
            style={{
              padding: "16px",
              borderRadius: 14,
              background: "#fff",
              color: "#000",
              fontWeight: 700,
              border: "none",
            }}
          >
            Start Free
          </button>

          <button
            style={{
              padding: "16px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Watch Demo
          </button>
        </div>
      </section>

      {/* FLOATING CARDS */}
      <section style={{ padding: "10px 18px 70px", maxWidth: 520, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {["Hook clip", "Caption clip", "Platform cut"].map((text, i) => (
            <div
              key={i}
              style={{
                padding: "22px",
                borderRadius: 20,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
                transform: `translateY(${i * 6}px)`,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  opacity: 0.5,
                  marginBottom: 6,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Output {i + 1}
              </div>

              <div style={{ fontSize: 22, fontWeight: 700 }}>{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: "0 18px 70px", maxWidth: 520, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            "Editing eats your time",
            "Content dies after one post",
            "You’re not showing up enough",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                padding: "18px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section style={{ padding: "0 18px 80px", maxWidth: 520, margin: "0 auto" }}>
        <div
          style={{
            padding: 24,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>
            Record once.
            <br />
            Publish everywhere.
          </h2>

          <p style={{ marginTop: 14, color: "rgba(255,255,255,0.7)" }}>
            One input becomes multiple outputs ready for distribution.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section style={{ padding: "0 18px 80px", maxWidth: 520, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            ["Speed", "Go from raw to ready in minutes"],
            ["Scale", "Multiply every piece of content"],
            ["Consistency", "Show up daily without burnout"],
          ].map(([title, desc], i) => (
            <div
              key={i}
              style={{
                padding: "20px",
                borderRadius: 18,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "0 18px 100px", maxWidth: 520, margin: "0 auto" }}>
        <div
          style={{
            padding: 26,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            textAlign: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 30, lineHeight: 1.2 }}>
            Stop editing.
            <br />
            Start scaling.
          </h2>

          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
            <button
              style={{
                padding: "16px",
                borderRadius: 14,
                background: "#fff",
                color: "#000",
                fontWeight: 700,
                border: "none",
              }}
            >
              Start Now
            </button>

            <button
              style={{
                padding: "16px",
                borderRadius: 14,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
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
