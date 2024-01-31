import useWorkoutContext from "./useWorkoutContext"
import useAuthContext from "./useAuthContext"

export const useLogout = () =>{
  const {dispatch} = useWorkoutContext()
  const {dispatch:userDispatch} = useAuthContext()
  
  const logout = () =>{
    dispatch({type: "SET_WORKOUTS", payload: null})
    userDispatch({type: "LOGOUT"})
    localStorage.removeItem("user") 
  }

  return {logout}
}

