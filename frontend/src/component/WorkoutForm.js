import { useWorkoutContext } from "../hooks/useWorkoutContext"
import {useState} from "react"

const WorkoutForm = () =>{
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState("")
  const [load, setLoad] = useState("")
  const [error, setError] = useState(null)
  const {dispatch} = useWorkoutContext()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const workout = {title,reps,load}

    const response = await fetch("/api/workouts",{
      method: "POST",
      body: JSON.stringify(workout),
      headers:{
        "Content-Type": "application/json"
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }

    if(response.ok){
      setTitle("")
      setLoad("")
      setReps("")
      setError(null)
      dispatch({type: "CREATE_WORKOUT", payload: json})
      console.log("new workout was added.",json);
    }
  }

  return(
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Workout</h3>

      <label>Workout title:</label>
      <input 
        type="text"
        onChange = { e => setTitle(e.target.value)}
        value = {title}
      />

      <label>Reps:</label>
      <input 
        type="number"
        onChange={ e => setReps(e.target.value)}
        value={reps}
      />

      <label>Load:</label>
      <input
        type="number"
        onChange={ e => setLoad(e.target.value)}
        value={load}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div> }

  </form>
  )
}

export default WorkoutForm