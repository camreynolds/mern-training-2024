import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const useAuth = () =>{
  const context = useContext(AuthContext)

  if(!context){
    throw Error("AuthContext must be use inside an AuthContextProvider")
  }

  return context
}

export default useAuth