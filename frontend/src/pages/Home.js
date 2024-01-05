import {useEffect} from "react"
import WorkoutDetails from "../component/WorkoutDetails"
import WorkoutForm from "../component/WorkoutForm"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

const Home = () =>{
  const {workouts,dispatch} = useWorkoutContext()

  useEffect( () =>{
    const fetchworkouts = async () =>{
      const response = await fetch("/api/workouts")
      const json = await response.json()

      if(response.ok){
        dispatch({type: "SET_WORKOUTS", payload: json})
      }
    }
    fetchworkouts()
  },[dispatch]) 

  return(
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map( workout =>(
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home