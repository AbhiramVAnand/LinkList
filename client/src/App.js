// import logo from './logo.svg';
// import './App.css';
// import Login from './pages/login/Login';
// import Register from './pages/register/Register';
// import Home from './pages/home/Home';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import { supabase } from './client';

// function App() {
  
//   return (
//   //  <Login />
//   // <Register />
//   <BrowserRouter>
//   <Routes>
//     <Route path="/">
      
//       <Route path="/" element={<Login />} />
//       <Route path="register" element={<Register />} />
      
//     </Route>
//   </Routes>
// </BrowserRouter>

//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
// import { SignUp, Login, Homepage } from './pages';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Link_component from './components/Link_component';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const App = () => {

 const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  
  // Inject content script (replace with your actual injection method)
  const script = document.createElement('script');
  script.src = 'content.js';
  document.body.appendChild(script);

  function sendDataToExtension(data) {
    chrome.runtime.sendMessage({ from: "webpage", data: data });
  }

// Example usage
  const messageData = { message: data };
  sendDataToExtension(messageData);


 
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/register'} element={ <Register />} />
        <Route path={'/'} element={ <Login setToken={setToken}/>} />
        {/* {token?<Route path={'/home'} element={ <Home  />} />:""} */}
        <Route path={'/home'} element={ <Home />} />

      </Routes>
     
      
      </BrowserRouter>
    // <Link_component />
  )
}

export default App
