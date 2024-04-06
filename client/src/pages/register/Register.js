import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../client";

export default function Register(){
const[formData,setFormData] = useState({
name:'',email:'',password:''
})

console.log(formData)

function handleChange(event){
  setFormData((prevFormData)=>{
    return{
      ...prevFormData,
      [event.target.name]:event.target.value
    }
  })
}
async function handleSubmit(){
 try{
  const {data,error}=await supabase.auth.signUp(
    {
      email: formData.email,
      password:formData.password,
      // email_confirm:true,
      options:{
  data:{
    name:formData.name,
    age:27,
  }
  
      }
  
    }
   )
   alert('check your email for verification')
 }
 catch(error){
  alert(error)
 }
}


return (
    <div className="form_container">
      <div className="form_wrapper">
        <span className="logo_name">LinkList</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Enter your name" name="name" onChange={handleChange} />
          <input required type="email" placeholder="Enter your email" name="email" onChange={handleChange}/>
          <input required type="password" placeholder="Create a password" name="password" onChange={handleChange} />
          <div className="button_container">
            <button type="Submit">
              <div className="button_text">Sign up</div>
            </button>
          </div>
          {/* {loading && "Uploading and compressing the image please wait..."} */}
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        <p>
          You do have an account? <Link to="/">
            <div className="link_text">Login</div>
          </Link>
        </p>
      </div>
    </div>
) 
}    