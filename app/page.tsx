export default function Page() {
  return (
    <main style={{
      background: "#000000",
      color: "#ffffff",
      minHeight: "100vh",
      fontFamily: "Inter, sans-serif",
      padding: "60px 20px"
    }}>

      <section style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>

        <h1 style={{
          fontSize: "56px",
          fontWeight: 800,
          letterSpacing: "-1px",
          marginBottom: 20
        }}>
          Turn Content Into Distribution Power
        </h1>

        <p style={{
          fontSize: "20px",
          opacity: 0.7,
          maxWidth: 700,
          margin: "0 auto 40px"
        }}>
          One upload becomes a stream of clips designed to spread, get attention, and grow your presence without manual editing.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <button style={{
            padding: "16px 32px",
            background: "#ffffff",
            color: "#000000",
            border: "none",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 16,
            cursor: "pointer"
          }}>
            Start Now
          </button>

          <button style={{
            padding: "16px 32px",
            background: "transparent",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 10,
            fontSize: 16,
            cursor: "pointer"
          }}>
            View Demo
          </button>
        </div>

      </section>

      <section style={{
        marginTop: 100,
        textAlign: "center",
        opacity: 0.5,
        fontSize: 14
      }}>
        Built for creators serious about growth
      </section>

      <section style={{
        maxWidth: 1100,
        margin: "80px auto 0",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 24
      }}>

        {[ 
          { title: "Smart Clip Selection", desc: "Finds the moments people actually watch" },
          { title: "Clean Caption System", desc: "Readable, bold captions without manual work" },
          { title: "Multi Platform Output", desc: "Formatted instantly for vertical distribution" },
          { title: "Speed Over Everything", desc: "From upload to export in minutes" }
        ].map((f, i) => (
          <div key={i} style={{
            padding: 24,
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.08)"
          }}>
            <h3 style={{ fontSize: 18, marginBottom: 10 }}>{f.title}</h3>
            <p style={{ opacity: 0.6, fontSize: 14 }}>{f.desc}</p>
          </div>
        ))}

      </section>

      <section style={{
        maxWidth: 800,
        margin: "120px auto 0",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: 36, marginBottom: 20 }}>
          Editing is a bottleneck. Distribution is leverage.
        </h2>

        <p style={{ opacity: 0.6, marginBottom: 40 }}>
          The creators who grow are the ones who publish more, faster, and smarter.
        </p>

        <button style={{
          padding: "18px 36px",
          background: "#ffffff",
          color: "#000000",
          border: "none",
          borderRadius: 12,
          fontSize: 18,
          fontWeight: 700,
          cursor: "pointer"
        }}>
          Get Started
        </button>
      </section>

    </main>
  )
}
