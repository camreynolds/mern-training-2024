import {Link} from "react-router-dom"
import useAuth from "../hooks/useAuth"
import {useLogout} from "../hooks/useLogout"

const Navbar = () =>{
  const {user} = useAuth()
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
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar