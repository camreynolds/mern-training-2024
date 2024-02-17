import formatDistanceToNow from "date-fns/formatDistanceToNow"

const WorkoutDetails = ({workout}) =>{
  return(
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (in Kg):</strong> {workout.load}</p>
      <p><strong>Reps:</strong> {workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix: true})}</p>
      <span>delete</span>
    </div>
  )
}

export default WorkoutDetails