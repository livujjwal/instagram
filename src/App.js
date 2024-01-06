import Signup from "./Components/Signup";
import { Route,Routes } from "react-router-dom";
import "./App.css"
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
function App() {
  return (
    <div>
 
 <Routes>
  <Route path="/" element={<Signup />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/dashboard" element={<Dashboard />}></Route>
 </Routes>
      
    </div>
  );
}

export default App;
