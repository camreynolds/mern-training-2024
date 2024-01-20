import {useEffect} from "react"
import useWorkoutContext from "../hooks/useWorkoutContext"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
import useAuth from "../hooks/useAuth"

const Home = () =>{
  const {workouts,dispatch} = useWorkoutContext()
  const {user} = useAuth()
    
  useEffect( () =>{
    const workoutsFecth = async () =>{
      const response = await fetch("/api/workouts",{
        headers:{
          "Authorization": `Bearer ${user.token}`
        }
      })
      const json = await response.json()
      if(response.ok){
        dispatch({type: "SET_WORKOUTS", payload:json})
      }
    }

    if(user){
      workoutsFecth()
    }
    
  },[dispatch,user])
  
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