import {useEffect} from "react"
import WorkoutDetails from "../component/WorkoutDetails"
import WorkoutForm from "../component/WorkoutForm"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import useAuthContext from "../hooks/useAuthContext"

const Home = () =>{
  const {workouts,dispatch} = useWorkoutContext()
  const {user} = useAuthContext()

  useEffect( () =>{
    const fetchworkouts = async () =>{
      const response = await fetch("/api/workouts",{
        headers:{
          "Authorization":`Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if(response.ok){
        dispatch({type: "SET_WORKOUTS", payload: json})
      }
    }

    if(user){
      fetchworkouts()
    }
    
  },[dispatch,user]) 

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