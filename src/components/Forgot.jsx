import React,{ useRef, useState} from 'react'
import Footer from "./Footer";
import "./Forgot.css";
import { useAuth } from "./context/AuthContext" 
import { NavLink } from "react-router-dom";

   
function Forgot(){
  const emailRef = useRef();
  const { resetpassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleReset(e){
      e.preventDefault();
      
      try{
        setMessage("")
        setError("");
        setLoading(true);
        resetpassword(emailRef.current.value);
        setMessage("Check your inbox for further instructions");
      }
      catch{
        setError("Failed to reset password");
        setLoading(false);
      }
  }
  return (
    <>
      <div className="forgot-box">
      {error && alert(error)}
      {message && alert(message)}
        <h2>Forgot Password</h2>
        <form onSubmit={handleReset}>
          <div>
            <input type="email" ref={emailRef} className="forgot-entry" placeholder="Enter Mail" required />
          </div>
          <div className="reset">
          <button disabled={loading} type="submit" className="forgot-btn">
            Reset
          </button>
          </div>
          <button className="forgot-btn"><NavLink to="/login">Login</NavLink></button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Forgot;