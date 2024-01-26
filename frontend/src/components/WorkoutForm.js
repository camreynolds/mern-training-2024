import {useState} from "react"
import useWorkoutContext from "../hooks/useWorkoutContext"
import useAuthContext from "../hooks/useAuthContext"

const WorkoutForm = () =>{
  const [title,setTitle] = useState("")
  const [load,setLoad] = useState("")
  const [reps,setReps] = useState("")
  const [error, setError] = useState(null)
  const [isEmpty, setIsEmpty] = useState([])
  const {dispatch} = useWorkoutContext()
  const {user} = useAuthContext()
  
  
  const handleSubmit = async (e) =>{
    e.preventDefault()

    const response = await fetch("/api/workouts",{
      method: "POST",
      body: JSON.stringify({title,load,reps}),
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${user.token}`
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      setIsEmpty(json.isEmpty)
    }

    if(response.ok){
      setTitle("")
      setLoad("")
      setReps("")
      setError(null)
      setIsEmpty([])
      console.log("New workout added:",json)
      dispatch({type: "CREATE_WORKOUT", payload:json})
    }
  }

  return(
    <form className="create"  onSubmit={handleSubmit}> 
      <h3>Add a new Workout</h3>

      <label>Title:</label>
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        className={ isEmpty.includes("title") ? "error" : ""}
      />

      <label>Load (in Kg):</label>
      <input
        type="number"
        onChange={ e => setLoad(e.target.value)}
        value={load}
        className={ isEmpty.includes("load") ? "error" : ""}
      />

      <label>Reps:</label>
      <input 
        type="number"
        onChange={e => setReps(e.target.value)}
        value={reps}
        className={ isEmpty.includes("reps") ? "error" : ""}
      />

      <button>Add workout</button>
      {error && <div className="error">{error}</div> }
    </form>
  )
}

export default WorkoutForm