import {useEffect, useState} from "react"
import WorkoutDetails from "../component/WorkoutDetails"
import WorkoutForm from "../component/WorkoutForm"

const Home = () =>{
  const [workouts, setWorkouts] = useState(null)

  useEffect( () =>{
    const fetchworkouts = async () =>{
      const response = await fetch("/api/workouts")
      const json = await response.json()

      if(response.ok){
        setWorkouts(json)
      }
    }
    fetchworkouts()
  },[]) 

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