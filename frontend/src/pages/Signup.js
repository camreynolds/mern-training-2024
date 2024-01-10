import {useState} from "react"

const Signup = () =>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [error, setError] = useState(null)

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return(
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Email:</label>
      <input 
        type="email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input 
        type="password"
        onChange={ e => setPassword(e.target.value)}
        value={password}
      />

      <button>Sign up</button>
      {/* {error && <div className="error">{error}</div> }  */}
    </form>
  )
}

export default Signup