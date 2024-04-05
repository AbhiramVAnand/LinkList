import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  
  return (
  //  <Login />
  // <Register />
  <BrowserRouter>
  <Routes>
    <Route path="/">
      
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  </Routes>
</BrowserRouter>

  );
}

export default App;
