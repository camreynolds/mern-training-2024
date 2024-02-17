// import {useState,useEffect} from "react"
import {useEffect} from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import UseWorkoutContext from "../hooks/UseWorkoutContext"

const Home = () =>{
  // const [workouts,setWorkouts] = useState([])
  const {workouts,dispatch} = UseWorkoutContext()

  useEffect( () =>{
    const fetchWorkout = async () =>{
      const response = await fetch("/api/workouts")
      const json = await response.json()

      if(response.ok){
        // setWorkouts(json)
        dispatch({type: "SET_WORKOUTS", payload:json})
      }
    }

    fetchWorkout()
  },[dispatch])

  return(
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map( workout =>(
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home