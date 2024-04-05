import { useNavigate, Link } from "react-router-dom";

export default function Register(){

return (
    <div className="form_container">
      <div className="form_wrapper">
        <span className="logo_name">LinkList</span>
        <span className="title">Register</span>
        <form >
          <input required type="text" placeholder="Enter your name" />
          <input required type="email" placeholder="Enter your email" />
          <input required type="password" placeholder="Create a password" />
          <div className="button_container">
            <button type="Submit">
              <div className="button_text">Sign up</div>
            </button>
          </div>
          {/* {loading && "Uploading and compressing the image please wait..."} */}
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p>
          You do have an account? <Link to="/login">
            <div className="link_text">Login</div>
          </Link>
        </p>
      </div>
    </div>
) 
}    