import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import useAuth from "./hooks/useAuth"

function App() {
  const {user} = useAuth()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={user ? <Home/> : <Navigate to="/login" />}/>
            <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/" />}/>
            <Route path="/login" element={!user ? <Login/> : <Navigate to="/" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
