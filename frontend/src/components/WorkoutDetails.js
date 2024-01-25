import useWorkoutContext from "../hooks/useWorkoutContext"

const WorkoutDetails = ({workout}) =>{
  const {dispatch} = useWorkoutContext()

  const handleClick = async () =>{

    const response = await fetch("/api/workouts/" + workout._id,{
      method: "DELETE",
      headers:{
        "Content-Type":"application/json"
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
      <p>{workout.createAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails