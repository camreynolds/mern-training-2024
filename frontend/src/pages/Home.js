// import {useState} from "react"
import {useEffect} from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import useWorkoutContext from "../hooks/useWorkoutContext"

const Home = () =>{
  // const [workouts, setWorkouts] = useState([])
  const {workouts,dispatch} = useWorkoutContext()

  useEffect( () =>{
    const workoutsFetch = async () =>{
      const response = await fetch("/api/workouts")
      const json = await response.json()
      
      if(response.ok){
        dispatch({type: "SET_WORKOUTS", payload: json})
        // setWorkouts(json)
      }
    }

    workoutsFetch()
  },[dispatch])

  return(
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map( workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home