import {useState} from "react"
import {useNavigate,useParams} from "react-router-dom"

const ResetPassword = () =>{
  const [password,setPassword] = useState("")
  const [error,setError] = useState(null)
  const navigate = useNavigate()
  const {_id,token} = useParams()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const response = await fetch(`/api/reset-password/${_id}/${token}`,{
      method: "POST",
      body: JSON.stringify({password}),
      headers:{
        "Content-Type":"application/json"
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      console.log("Error:",json)
    }

    if(response.ok){
      setError(null)
      navigate("/login")
      console.log("Reset Password Succesfully!")
    }
  }

  return(
    <form className="reset-password" onSubmit={handleSubmit}>
      <h3>Reset Password</h3>

      <label>password:</label>
      <input
        type="password"
        placeholder="write your new password."
        autoComplete="on"
        onChange={e => setPassword(e.target.value)}
        value={password}
      />

      <button>reset</button>
      {error && <div className="error">{error}</div> }
    </form>
  )
}

export default ResetPassword