import {useState} from "react"
import useAuthContext from "./useAuthContext"

export const useSignup = () =>{
  const [error,setError] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const {dispatch} = useAuthContext()

  const signup = async (email,password) =>{
    setIsLoading(true)
    setError(null)

    const response = await fetch("/api/users/signup",{
      method: "POST",
      body: JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })

    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      setIsLoading(false)
    }

    if(response.ok){
      setError(null)
      setIsLoading(false)
      dispatch({type: "LOGIN", payload:json})
      localStorage.setItem("user", JSON.stringify(json))
    }
  }
  return {signup,error,isLoading}
}