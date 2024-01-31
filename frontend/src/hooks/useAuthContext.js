import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const useAuthContext = () =>{
  const context = useContext(AuthContext)

  if(!context){
    throw Error("AuthContext must be use inside an AuthContextProvider.")
  }

  return context
}

export default useAuthContext