import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"
function App() {


  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element= {<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
