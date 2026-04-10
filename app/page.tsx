exporexport default function Page() {
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
                        "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1), rgba(255,255,255,0) 55%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 18,
                      left: 18,
                      right: 18,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        padding: "8px 12px",
                        borderRadius: 999,
                        background: "rgba(0,0,0,0.45)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontSize: 12,
                        fontWeight: 700,
                      }}
                    >
                      Original upload
                    </div>
                    <div
                      style={{
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
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      left: 18,
                      right: 18,
                      bottom: 18,
                      padding: 16,
                      borderRadius: 18,
                      background: "rgba(0,0,0,0.58)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 15,
                        lineHeight: 1.35,
                        fontWeight: 700,
                      }}
                    >
                      Long-form content goes in once.
                    </div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 13,
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      No timeline dragging. No repetitive cutting.
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: "repeat(3, 1fr)",
                    gap: 12,
                  }}
                >
                  {[
                    "Hook-heavy clip",
                    "Caption-ready clip",
                    "Platform-sized clip",
                  ].map((label, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: 18,
                        border: "1px solid rgba(255,255,255,0.08)",
                        background:
                          "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
                        padding: 16,
                        minHeight: 96,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.58)",
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontWeight: 700,
                        }}
                      >
                        Output {i + 1}
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 750,
                          lineHeight: 1.08,
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: 16,
            }}
          >
            <div
              style={{
                borderRadius: 24,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                boxShadow: "0 22px 60px rgba(0,0,0,0.45)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.58)",
                  fontWeight: 700,
                  marginBottom: 14,
                }}
              >
                What changes
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: 28,
                  lineHeight: 1.02,
                  letterSpacing: "-0.04em",
                }}
              >
                Less editing.
                <br />
                More output.
                <br />
                More surface area.
              </h3>

              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.68)",
                }}
              >
                This is not just a clipper. It is a distribution multiplier for
                creators trying to publish faster and show up everywhere.
              </p>
            </div>

            <div
              style={{
                borderRadius: 24,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: 14,
                }}
              >
                {[
                  ["Smart clip selection", "Pulls moments worth posting"],
                  ["Caption system", "Makes clips readable fast"],
                  ["Vertical formatting", "Preps output for modern platforms"],
                  ["Faster publishing", "Turns one asset into many"],
                ].map(([title, desc], i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        minWidth: 30,
                        height: 30,
                        borderRadius: 999,
                        background: "#ffffff",
                        color: "#000000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: 13,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 750,
                          fontSize: 16,
                          marginBottom: 4,
                        }}
                      >
                        {title}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "rgba(255,255,255,0.62)",
                        }}
                      >
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1220,
          margin: "0 auto",
          padding: "0 20px 120px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 18,
          }}
        >
          {[
            [
              "Attention compounds",
              "More clips means more chances to catch and hold attention.",
            ],
            [
              "Distribution scales reach",
              "A single recording becomes multiple shots at growth.",
            ],
            [
              "Speed protects momentum",
              "Momentum dies when creators get buried in editing work.",
            ],
          ].map(([title, body], i) => (
            <div
              key={i}
              style={{
                borderRadius: 24,
                padding: 24,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <div
                style={{
                  fontSize: 21,
                  fontWeight: 780,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  marginBottom: 12,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {body}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1220,
          margin: "0 auto",
          padding: "0 20px 140px",
        }}
      >
        <div
          style={{
            borderRadius: 32,
            padding: "38px 26px",
            border: "1px solid rgba(255,255,255,0.1)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015))",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.02) inset, 0 32px 100px rgba(0,0,0,0.58)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.54)",
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
              lineHeight: 0.97,
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
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            The creators who win are not always the ones who record more. They
            are the ones who turn every recording into more surface area, more
            reach, and more opportunities to grow.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
              marginTop: 32,
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
                boxShadow: "0 12px 34px rgba(255,255,255,0.14)",
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
                background: "rgba(255,255,255,0.03)",
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
