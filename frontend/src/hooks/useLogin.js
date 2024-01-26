import { useState } from "react"
import useAuthContext from "../hooks/useAuthContext"

export const useLogin = () =>{
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError] = useState(null)
  const {dispatch} = useAuthContext()

  const login = async (email,password) =>{
    setIsLoading(true)
    setError(null)

    const response = await fetch("/api/users/login",{
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
      localStorage.setItem("user", JSON.stringify(json))
      dispatch({type: "LOGIN", payload: json})
    }
  }

  return {login,error,isLoading}
}