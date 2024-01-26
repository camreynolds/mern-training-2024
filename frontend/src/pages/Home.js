// import {useState} from "react"
import {useEffect} from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import useWorkoutContext from "../hooks/useWorkoutContext"
import useAuthContext from "../hooks/useAuthContext"

const Home = () =>{
  // const [workouts, setWorkouts] = useState([])
  const {workouts,dispatch} = useWorkoutContext()
  const {user} = useAuthContext()

  useEffect( () =>{
    const workoutsFetch = async () =>{
      const response = await fetch("/api/workouts",{
        method: "GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${user.token}`
        }
      })
      const json = await response.json()
      
      if(response.ok){
        dispatch({type: "SET_WORKOUTS", payload: json})
        // setWorkouts(json)
      }
    }

    workoutsFetch()
  },[dispatch,user])

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