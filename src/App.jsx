import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
function App() {


  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element= {<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
