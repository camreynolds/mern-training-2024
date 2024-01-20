import useAuth from "../hooks/useAuth"
import useWorkoutContext from "../hooks/useWorkoutContext"

export const useLogout = () =>{
  const {dispatch} = useWorkoutContext()
  const {dispatch: authDispatch} = useAuth()

  const logout = () =>{
    localStorage.removeItem("user")
    dispatch({type: "SET_WORKOUTS", payload: null})
    authDispatch({type: "LOGIN", payload: null})
  }

  return {logout}
}