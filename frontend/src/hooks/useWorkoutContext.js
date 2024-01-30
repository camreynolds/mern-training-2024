import { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"

const useWorkoutContext = () =>{
  const context = useContext(WorkoutContext)

  if(!context){
    throw Error("WorkoutContext must be use inside a WorkoutContextProvider")
  }

  return context
}

export default useWorkoutContext