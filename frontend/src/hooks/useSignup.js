import { useState } from "react"
import useAuth from "./useAuth"

export const useSignup = () =>{
  const [error,setError] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const {dispatch} = useAuth()

  const signup = async (email,password) =>{
    setIsLoading(true)

    const response = await fetch("/api/users/signup",{
      method: "POST",
      body: JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
  
    const json = await response.json()

    if(!response.ok){
      setIsLoading(false)
      setError(json.error)
    }

    if(response.ok){
      setError(null)
      setIsLoading(false)
      dispatch({type: "LOGIN", payload: json})
      localStorage.setItem("user", JSON.stringify(json))
    }
  }

  return{signup,error,isLoading}
}

