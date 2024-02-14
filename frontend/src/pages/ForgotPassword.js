import {useState} from "react"
import {useNavigate} from "react-router-dom"
// import axios from "axios"

const ForgotPassword = () =>{
  const [email,setEmail] = useState("")
  const [error,setError] = useState(null)
  const [success,setSuccess] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch("/api/forgot-password",{
      method: "POST",
      body: JSON.stringify({email}),
      headers:{
        "Content-Type":"application/json"
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      setIsLoading(false)
    }

    if(response.ok){
      setError(null)
      setEmail("")
      console.log(json.data)
      setSuccess(json.mssg)
      setIsLoading(false)
      setTimeout( () =>{
        navigate("/login")
      },3000) 
    }
  }

  return(
    <form className="forgot-password" onSubmit={handleSubmit}>
      <h3>Forgot Password</h3>

      <label>email:</label>
      <input
        type="email"
        placeholder="example: you@email.com"
        autoComplete="on"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />

      <button className={isLoading ? "disabled" : ""} disabled={isLoading}>send</button>
      {error && <div className="error">{error}</div> }
      {success && <div className="success">{success}</div> }
    </form>
  )
}

export default ForgotPassword