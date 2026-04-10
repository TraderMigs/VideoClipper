export default function Page() {
  return (
    <main
      style={{
        background: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        overflowX: "hidden",
      }}
    >
      <section
        style={{
          maxWidth: 1220,
          margin: "0 auto",
          padding: "28px 20px 120px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: 260,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0) 72%)",
            filter: "blur(28px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 14px",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 999,
            background: "rgba(255,255,255,0.03)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.72)",
            marginBottom: 34,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#ffffff",
              boxShadow: "0 0 18px rgba(255,255,255,0.8)",
            }}
          />
          Built for distribution, not editing
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(48px, 9vw, 110px)",
            lineHeight: 0.94,
            letterSpacing: "-0.06em",
            fontWeight: 800,
            maxWidth: 1100,
          }}
        >
          Turn one video
          <br />
          into a black-box
          <br />
          growth machine
        </h1>

        <p
          style={{
            margin: "28px 0 0",
            maxWidth: 760,
            fontSize: "clamp(20px, 3.6vw, 28px)",
            lineHeight: 1.35,
            color: "rgba(255,255,255,0.74)",
            letterSpacing: "-0.02em",
          }}
        >
          Upload once. Clip, caption, format, and multiply your reach without
          burning hours inside an editor.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            marginTop: 34,
          }}
        >
          <button
            style={{
              padding: "18px 28px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.18)",
              background: "#ffffff",
              color: "#000000",
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: "-0.02em",
              boxShadow: "0 10px 40px rgba(255,255,255,0.16)",
              cursor: "pointer",
            }}
          >
            Start Free
          </button>

          <button
            style={{
              padding: "18px 28px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "-0.02em",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
              cursor: "pointer",
            }}
          >
            Watch Product Demo
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 22,
            marginTop: 56,
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              padding: 18,
              border: "1px solid rgba(255,255,255,0.1)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.03) inset, 0 30px 80px rgba(0,0,0,0.55)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.35)",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.2)",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.12)",
                }}
              />
            </div>

            <div
              style={{
                borderRadius: 22,
                border: "1px solid rgba(255,255,255,0.08)",
                padding: 20,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.05fr 0.95fr",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    minHeight: 320,
                    borderRadius: 20,
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 30% 20%, rgba
