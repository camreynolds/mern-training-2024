import {Link} from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Navbar = () =>{
  const {user} = useAuth()

  return(
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
      </div>
      <nav>
        {user && (
          <div>
            {user.mail}
            <button>Log out</button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar