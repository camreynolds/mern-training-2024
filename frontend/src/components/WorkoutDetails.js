import useWorkoutContext from "../hooks/useWorkoutContext"
import useAuthContext from "../hooks/useAuthContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutDetails = ({workout}) =>{
  const {dispatch} = useWorkoutContext()
  const {user} = useAuthContext()

  const handleClick = async () =>{

    const response = await fetch("/api/workouts/" + workout._id,{
      method: "DELETE",
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${user.token}`
      }
    })

    const json = await response.json()

    if(response.ok){
      dispatch({type: "DELETE_WORKOUT", payload:json})
    }
  }

  return(
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (in Kg):</strong> {workout.load}</p>
      <p><strong>Reps:</strong> {workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails