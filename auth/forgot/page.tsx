export default function Forgot() {
  return (
    <main style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <div className="card" style={{width:"320px"}}>
        <h2>Reset Password</h2>
        <input className="input" placeholder="Email"/>
        <button className="btn" style={{marginTop:"15px"}}>Send Reset Link</button>
      </div>
    </main>
  )
}
