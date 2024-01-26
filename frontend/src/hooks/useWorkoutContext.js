import { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"

const useWorkoutContext = () =>{
  const context = useContext(WorkoutContext)

  if(!context){
    throw Error("you must use a WorkoutContext inside a WorkoutContextProvider.")
  }

  return context
}

export default useWorkoutContext