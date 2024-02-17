import {useState} from "react"
import UseWorkoutContext from "../hooks/UseWorkoutContext"

const WorkoutForm = () =>{
  const [title,setTitle] = useState("")
  const [load,setLoad] = useState("")
  const [reps,setReps] = useState("")
  const [error,setError] = useState(null)
  const [emptyFields,setEmptyFields] = useState([])
  const {dispatch} = UseWorkoutContext()

  const handleSubmit = async (e) =>{
    e.preventDefault()

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
      setEmptyFields(json.emptyFields)
    }

    if(response.ok){
      setError(null)
      setTitle("")
      setLoad("")
      setReps("")
      setEmptyFields([])
      dispatch({type:"CREATE_WORKOUT", payload:json})
      console.log("New workout added: ", json);
    }
  }

  return(
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create Workout</h3>

      <label>Exercise title:</label>
      <input 
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Load (in Kg):</label>
      <input
        type="number"
        onChange={e => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={e => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
      />

      <button>add workout</button>
      {error && <div className="error">{error}</div> }
    </form>
  )
}

export default WorkoutForm