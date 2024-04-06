import "./Login.css";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { supabase } from "../../client";

// export default function Login({setToken}) {
//   let navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: '',
//     password: ''
//   });

//   console.log(formData);

//   function handleChange(event) {
//     setFormData(prevFormData => ({
//       ...prevFormData,
//       [event.target.name]: event.target.value
//     }));
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email: formData.email,
//         password: formData.password,
//       });
//       if (error) throw error;
//       console.log(data);
//       setToken(data)
//       navigate('/home')
//       // Redirect or perform other actions upon successful login
//     } catch (error) {
//       alert(error.message);
//     }
//   }

//   return (
//     <div className="form_container">
//       <div className="form_wrapper">
//         <span className="logo_name">LinkList</span>
//         <span className="title">Login</span>
//         <form onSubmit={handleSubmit}>
//           <input required type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
//           <input type="password" placeholder="Enter the password" name="password" onChange={handleChange} />
//           <div className="button_container">
//             <button type="submit"><div className="button_text">Sign in</div></button>
//           </div>
//           {/* {err && <span>Something went wrong</span>} */}
//         </form>
//         <p>You don't have an account? <Link to="/register"><div className="link_text">Register</div></Link></p>
//       </div>
//     </div>
//   );
// }

    
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../client";

export default function Login({ setToken }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleChange(event) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      console.log(user);
      setToken(user);
      chrome.runtime.sendMessage({ message: user }, (response) => {
        console.log('Response from extension:', response);
      });
      navigate('/home');
    } catch (error) {
      alert(error.message || "An unexpected error occurred.");
    }
  }

  return (
    <div className="form_container">
      <div className="form_wrapper">
        <span className="logo_name">LinkList</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
          <input required type="password" placeholder="Enter the password" name="password" value={formData.password} onChange={handleChange} />
          <div className="button_container">
            <button type="submit" className="button_text">Sign in</button>
          </div>
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p>You don't have an account? <Link to="/register" className="link_text">Register</Link></p>
      </div>
    </div>
  );
}
