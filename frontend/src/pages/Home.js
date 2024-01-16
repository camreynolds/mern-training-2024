import {useEffect} from "react"
import useWorkoutContext from "../hooks/useWorkoutContext"

import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () =>{
  const {workouts,dispatch} = useWorkoutContext()
  
  useEffect( () =>{
    const workoutsFecth = async () =>{
      const response = await fetch("/api/workouts")
      const json = await response.json()
      console.log(json);
      if(response.ok){
        dispatch({type: "GET_WORKOUTS", payload:json})
      }
    }

    workoutsFecth()
  },[dispatch])
  
  return(
    <div className="home">
      <div className="workouts">
        { workouts && workouts.map( workout => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home