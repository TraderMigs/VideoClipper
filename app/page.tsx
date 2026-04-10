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
      <section style={{ padding: "28px 20px 80px", maxWidth: 560, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.04)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 22,
          }}
        >
          Distribution Engine
        </div>

        <h1
          style={{
            fontSize: 46,
            lineHeight: 1.05,
            letterSpacing: "-0.05em",
            margin: 0,
            fontWeight: 800,
          }}
        >
          One input.
          <br />
          Infinite reach.
        </h1>

        <p
          style={{
            marginTop: 16,
            fontSize: 18,
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Turn raw video into a distribution machine.
        </p>

        {/* FLOATING VISUAL */}
        <div
          style={{
            position: "relative",
            height: 260,
            marginTop: 40,
          }}
        >
          {[
            { text: "Hook", top: 0, left: 10 },
            { text: "Caption", top: 60, left: 60 },
            { text: "Vertical", top: 120, left: 20 },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: card.top,
                left: card.left,
                width: 140,
                height: 90,
                borderRadius: 18,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.8), inset 0 0 20px rgba(255,255,255,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              {card.text}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 12 }}>
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
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
            }}
          >
            Watch Demo
          </button>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: "0 20px 80px", maxWidth: 560, margin: "0 auto" }}>
        {[
          "Editing slows you down",
          "Content gets used once",
          "You’re invisible most days",
        ].map((text, i) => (
          <div
            key={i}
            style={{
              marginBottom: 12,
              padding: 18,
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {text}
          </div>
        ))}
      </section>

      {/* TRANSFORMATION */}
      <section style={{ padding: "0 20px 100px", maxWidth: 560, margin: "0 auto" }}>
        <div
          style={{
            padding: 26,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.05)",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 28, lineHeight: 1.2 }}>
            Record once.
            <br />
            Distribute forever.
          </h2>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: "0 20px 120px", maxWidth: 560, margin: "0 auto" }}>
        <div
          style={{
            padding: 28,
            borderRadius: 26,
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.06)",
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
              Get Started
            </button>

            <button
              style={{
                padding: "16px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
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
