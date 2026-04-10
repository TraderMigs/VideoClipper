export default function Page() {
  return (
    <main
      style={{
        background: "#020617",
        color: "white",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <section style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 20,
          }}
        >
          Turn One Video Into 10+ Viral Clips Automatically
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            marginBottom: 30,
          }}
        >
          Upload once. We detect the best moments, add captions, and format for TikTok, Reels, and Shorts.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <button
            style={{
              padding: "14px 28px",
              borderRadius: 8,
              background: "#6366f1",
              border: "none",
              color: "white",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Start Clipping
          </button>

          <button
            style={{
              padding: "14px 28px",
              borderRadius: 8,
              background: "transparent",
              border: "1px solid #334155",
              color: "white",
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            Watch Demo
          </button>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1100,
          margin: "80px auto 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 20,
        }}
      >
        {[
          {
            title: "AI Clip Detection",
            desc: "Finds the most engaging moments automatically",
          },
          {
            title: "Auto Captions",
            desc: "Clean, bold captions ready for social",
          },
          {
            title: "Platform Formatting",
            desc: "Optimized for TikTok, Reels, Shorts",
          },
          {
            title: "One Click Export",
            desc: "Download finished clips fast",
          },
        ].map((f, i) => (
          <div
            key={i}
            style={{
              padding: 20,
              borderRadius: 12,
              background: "#0f172a",
              border: "1px solid #1e293b",
            }}
          >
            <h3 style={{ fontSize: 18, marginBottom: 10 }}>{f.title}</h3>
            <p style={{ color: "#94a3b8", fontSize: 14 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section
        style={{
          maxWidth: 800,
          margin: "100px auto 0",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 32, marginBottom: 20 }}>Stop wasting hours editing.</h2>

        <p style={{ color: "#94a3b8", marginBottom: 30 }}>
          Creators are scaling faster with automation. You should be too.
        </p>

        <button
          style={{
            padding: "16px 32px",
            borderRadius: 10,
            background: "#6366f1",
            border: "none",
            color: "white",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>
    </main>
  );
}
