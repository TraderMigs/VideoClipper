export default function Signup() {
  return (
    <main style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <div className="card" style={{width:"320px"}}>
        <h2>Sign Up</h2>
        <input className="input" placeholder="Email"/>
        <input className="input" placeholder="Password" type="password" style={{marginTop:"10px"}}/>
        <button className="btn" style={{marginTop:"15px"}}>Create Account</button>
      </div>
    </main>
  )
}
