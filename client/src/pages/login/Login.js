 import "./Login.css"
 import { useNavigate, Link } from "react-router-dom";
 
 export default function Login() {
    return (
        <div className="form_container">
          <div className="form_wrapper">
            <span className="logo_name">LinkList</span>
            <span className="title">Login</span>
            <form >
              <input type="email" placeholder="Enter your email" />
              <input type="password" placeholder="Enter the password" />
              <div className="button_container">  
                    <button><div className="button_text">Sign in</div></button>
              </div>
              {/* {err && <span>Something went wrong</span>} */}
            </form>
            <p>You don't have an account? <Link to="/register"><div className="link_text">Register</div></Link></p>
          </div>
        </div>
      )
    }
    
 