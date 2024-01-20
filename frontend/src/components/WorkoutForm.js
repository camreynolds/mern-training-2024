import { useState } from "react"
import useWorkoutContext from "../hooks/useWorkoutContext"
import useAuth from "../hooks/useAuth"

const WorkoutForm = () =>{
  const [title,setTitle] = useState("")
  const [load,setLoad] = useState("")
  const [reps,setReps] = useState("")
  const [error,setError] = useState(null)
  const {dispatch} = useWorkoutContext()
  const {user} = useAuth()
  const [isEmpty, setIsEmpty] = useState([])
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    if(!user){
      setError("You must be log in.")
      return
    }

    const createWorkout = async () =>{
      const response = await fetch("/api/workouts",{
        method: "POST",
        body: JSON.stringify({title,load,reps}),
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${user.token}`
        }
      })

      const json = await response.json()

      if(!response.ok){
        setError(json.error)
        setIsEmpty(json.isEmpty)
      }

      if(response.ok){
        setError(null)
        setTitle("")
        setLoad("")
        setReps("")
        setIsEmpty([])
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
      className={ isEmpty.includes("title") ? "error" : "" }
    />

    <label>Load (in Kg):</label>
    <input 
      type="number"
      onChange={e => setLoad(e.target.value)}
      value={load}
      className={ isEmpty.includes("load") ? "error" : ""}
    />

    <label>Reps:</label>
    <input 
      type="number"
      onChange={e => setReps(e.target.value)}
      value={reps}
      className={ isEmpty.includes("reps") ? "error" : ""}   />

    <button>Add workout</button>
    {error && <div className="error">{error}</div>}
   </form>   
  )
}

export default WorkoutForm