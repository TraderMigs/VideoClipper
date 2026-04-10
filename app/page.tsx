export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at 20% 20%, #0f172a, #020617)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, sans-serif",
      color: "white"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "1100px",
        padding: "40px",
        borderRadius: "24px",
        backdropFilter: "blur(20px)",
        background: "rgba(15, 23, 42, 0.6)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 0 80px rgba(0,0,0,0.6)"
      }}>
        
        <div style={{display:"flex", justifyContent:"space-between", gap:"40px", flexWrap:"wrap"}}>

          {/* LEFT */}
          <div style={{flex:1, minWidth:"280px"}}>
            <div style={{
              display:"inline-block",
              padding:"6px 12px",
              borderRadius:"999px",
              background:"rgba(255,255,255,0.08)",
              fontSize:"12px",
              marginBottom:"16px"
            }}>
              DARK • REAL PRODUCT • NO TOYS
            </div>

            <h1 style={{fontSize:"48px", marginBottom:"12px"}}>
              VideoClipper
            </h1>

            <p style={{opacity:0.7, marginBottom:"24px"}}>
              Upload one long video. Get real clips that actually perform.
              Fix captions. Download. Done.
            </p>

            <div style={{display:"flex", gap:"12px"}}>
              <button style={{
                padding:"12px 18px",
                borderRadius:"10px",
                border:"none",
                background:"linear-gradient(135deg,#6366f1,#06b6d4)",
                color:"white",
                fontWeight:"600",
                cursor:"pointer"
              }}>
                Start now
              </button>

              <button style={{
                padding:"12px 18px",
                borderRadius:"10px",
                border:"1px solid rgba(255,255,255,0.2)",
                background:"transparent",
                color:"white",
                cursor:"pointer"
              }}>
                Log in
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div style={{flex:1, minWidth:"280px"}}>
            <div style={{
              padding:"20px",
              borderRadius:"16px",
              background:"rgba(255,255,255,0.05)",
              border:"1px solid rgba(255,255,255,0.08)"
            }}>
              <h3 style={{marginBottom:"16px"}}>What this does</h3>

              <div style={{opacity:0.7, lineHeight:"1.6"}}>
                • Real auth system ready<br/>
                • Protected dashboard<br/>
                • Upload → process → export pipeline<br/>
                • Built for real creators, not toy demos
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  )
}
