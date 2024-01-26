import {Link} from "react-router-dom"
import useAuthContext from "../hooks/useAuthContext"
import {useLogout} from "../hooks/useLogout"

const Navbar = () =>{
  const {user} = useAuthContext()
  const {logout} = useLogout()

  const handleClick = () =>{
    logout()
  }

  return(
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div>
              {user.email}
              <button onClick={handleClick}>Log out</button>
            </div> 
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div> 
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar