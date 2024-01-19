import useWorkoutContext from "../hooks/useWorkoutContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import useAuth from "../hooks/useAuth"

const WorkoutDetails = ({workout}) =>{
  const {dispatch} = useWorkoutContext()
  const {user} = useAuth()
  
  const handleClick = () =>{
    const workoutFetch = async () =>{
      const response = await fetch("/api/workouts/" +  workout._id,{
        method: "DELETE",
        headers:{
          "Authorization":`Bearer ${user.token}`
        }
      })

      const json = await response.json()

      if(response.ok){
        dispatch({type: "DELETE_WORKOUT", payload:json})
      }
    }
    
    workoutFetch()
  }

  return(
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (in Kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt),{addSubfix:true})}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails