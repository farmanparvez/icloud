import { Routes, Route } from "react-router-dom"
import Login from "./page/login/Login"
import UserForm from "./page/userForm/UserForm"
import Status from "./page/status/Status"
import './App.css'
import Navber from "./components/navber/Navber"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navber />} >
        <Route path="/" element={<Login />} />
        <Route path="/details" element={<UserForm />} />
        <Route path="/status" element={<Status />} />
      </Route>
    </Routes>
  )
}

export default App
