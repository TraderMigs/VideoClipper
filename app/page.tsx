export default function Page() {
  return (
    <main
      style={{
        background: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "28px 20px 88px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 16px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.02)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.72)",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#ffffff",
              boxShadow: "0 0 18px rgba(255,255,255,0.85)",
            }}
          />
          Built for growth, not editing
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(46px, 8vw, 96px)",
                lineHeight: 0.94,
                letterSpacing: "-0.06em",
                fontWeight: 800,
                maxWidth: 760,
              }}
            >
              Turn one video
              <br />
              into more reach
            </h1>

            <p
              style={{
                margin: "24px 0 0",
                maxWidth: 680,
                fontSize: "clamp(20px, 3vw, 28px)",
                lineHeight: 1.34,
                color: "rgba(255,255,255,0.72)",
                letterSpacing: "-0.02em",
              }}
            >
              Upload once. Clip, caption, and format your content faster so you
              can publish more without burning hours inside an editor.
            </p>

            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginTop: 30,
              }}
            >
              <button
                style={{
                  padding: "18px 30px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "#ffffff",
                  color: "#000000",
                  fontWeight: 800,
                  fontSize: 16,
                  letterSpacing: "-0.02em",
                  boxShadow: "0 10px 40px rgba(255,255,255,0.12)",
                  cursor: "pointer",
                }}
              >
                Start Free
              </button>

              <button
                style={{
                  padding: "18px 30px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.02)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "-0.02em",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
                  cursor: "pointer",
                }}
              >
                Watch Demo
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 14,
                marginTop: 34,
              }}
            >
              {[
                ["More output", "Turn one recording into multiple publishable assets."],
                ["Less friction", "Move faster without living in a timeline editor."],
                ["More surface area", "Show up more often across modern short-form channels."],
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 18,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.02)",
                    padding: 18,
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 760,
                      lineHeight: 1.05,
                      marginBottom: 10,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      lineHeight: 1.5,
                      color: "rgba(255,255,255,0.62)",
                    }}
                  >
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                borderRadius: 28,
                border: "1px solid rgba(255,255,255,0.1)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015))",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.02) inset, 0 28px 80px rgba(0,0,0,0.55)",
                padding: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
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
                  display: "grid",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    minHeight: 220,
                    borderRadius: 22,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                    padding: 18,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontSize: 12,
                      fontWeight: 700,
                    }}
                  >
                    Original upload
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      right: 18,
                      top: 18,
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "#ffffff",
                      color: "#000000",
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    42 min
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      left: 18,
                      right: 18,
                      bottom: 18,
                      padding: 16,
                      borderRadius: 18,
                      background: "rgba(0,0,0,0.56)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 760,
                        lineHeight: 1.3,
                      }}
                    >
                      One long-form upload becomes multiple short-form assets.
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        lineHeight: 1.5,
                        color: "rgba(255,255,255,0.62)",
                        marginTop: 8,
                      }}
                    >
                      Faster clipping, cleaner captions, and quicker publishing.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 12,
                  }}
                >
                  {[
                    ["Output 1", "Hook clip"],
                    ["Output 2", "Caption clip"],
                    ["Output 3", "Platform clip"],
                  ].map(([kicker, label], i) => (
                    <div
                      key={i}
                      style={{
                        minHeight: 120,
                        borderRadius: 18,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
                        padding: 16,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.56)",
                          fontWeight: 700,
                        }}
                      >
                        {kicker}
                      </div>
                      <div
                        style={{
                          fontSize: 22,
                          fontWeight: 780,
                          lineHeight: 1.02,
                          letterSpacing: "-0.04em",
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 16,
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
                padding: 22,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.54)",
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                What changes
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: 34,
                  lineHeight: 0.98,
                  letterSpacing: "-0.05em",
                  fontWeight: 800,
                }}
              >
                Less editing.
                <br />
                More output.
              </h3>

              <p
                style={{
                  margin: "14px 0 0",
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.66)",
                }}
              >
                This is not just a clipper. It is a faster path from raw content
                to more publishable assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 20px 110px",
        }}
      >
        <div
          style={{
            borderRadius: 30,
            border: "1px solid rgba(255,255,255,0.1)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.02) inset, 0 26px 80px rgba(0,0,0,0.55)",
            padding: "36px 24px",
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
              fontSize: "clamp(34px, 6vw, 72px)",
              lineHeight: 0.98,
              letterSpacing: "-0.06em",
              fontWeight: 820,
            }}
          >
            Editing is a bottleneck.
            <br />
            Distribution is leverage.
          </h2>

          <p
            style={{
              maxWidth: 760,
              margin: "22px auto 0",
              fontSize: "clamp(18px, 3vw, 24px)",
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            The creators who grow are the ones who publish more consistently,
            faster, and with less friction between recording and distribution.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 30,
            }}
          >
            <button
              style={{
                padding: "18px 32px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "#ffffff",
                color: "#000000",
                fontWeight: 800,
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Start Clipping Smarter
            </button>

            <button
              style={{
                padding: "18px 32px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.02)",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              See How It Works
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
