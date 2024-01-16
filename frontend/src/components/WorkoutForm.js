import { useState } from "react"
import useWorkoutContext from "../hooks/useWorkoutContext"

const WorkoutForm = () =>{
  const [title,setTitle] = useState("")
  const [load,setLoad] = useState("")
  const [reps,setReps] = useState("")
  const [error,setError] = useState(null)
  const {dispatch} = useWorkoutContext()

  const handleSubmit = (e) =>{
    e.preventDefault()

    const createWorkout = async () =>{
      const response = await fetch("/api/workouts",{
        method: "POST",
        body: JSON.stringify({title,load,reps}),
        headers:{
          "Content-Type":"application/json"
        }
      })

      const json = await response.json()

      if(!response.ok){
        setError(json.error)
      }

      if(response.ok){
        setError(null)
        setTitle("")
        setLoad("")
        setReps("")
        console.log("Workout created: ",json);
        dispatch({type: "CREATE_WORKOUT", payload:json})
      }
    }

    createWorkout()
  }

  return(
   <form className="workout-form" onSubmit={handleSubmit}>
    <h3>Add a New Workout</h3>

    <label>Exersize title:</label>
    <input 
      type="text"
      onChange={ e => setTitle(e.target.value)}
      value={title}
    />

    <label>Load (in Kg):</label>
    <input 
      type="number"
      onChange={e => setLoad(e.target.value)}
      value={load}
    />

    <label>Reps:</label>
    <input 
      type="number"
      onChange={e => setReps(e.target.value)}
      value={reps}
    />

    <button>Add workout</button>
    {error && <div className="error">{error}</div>}
   </form>   
  )
}

export default WorkoutForm