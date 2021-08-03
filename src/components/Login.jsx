import React,{ useRef, useState} from 'react'
import "./Login.css"
import app from "../firebase"
import { useAuth } from "./context/AuthContext" 
import { NavLink, useHistory } from "react-router-dom";
function Login(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const emailLogin = useRef();
    const usernameRef = useRef();
    const passwordLogin = useRef();
    const passwordConfirmRef = useRef();
    const { signup, login } = useAuth();
    const [error, setError] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingLogin, setLoadingLogin] = useState(false);
    const history = useHistory();

    async function handleSignUp(e){
        e.preventDefault();
        console.log("API CALL");


        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            setError("Passwords do not match");
            return;
        }
        const db = app.firestore();
        db.collection("users").add({
            email: emailRef.current.value,
            username: usernameRef.current.value,
        })
        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/");
        }catch{
            setError("Failed to create an account")
        }
        setLoading(false)
    }
    async function handleLogin(e){
        e.preventDefault();

        try{
            setErrorLogin("")
            setLoadingLogin(true)
            await login(emailLogin.current.value, passwordLogin.current.value)
            history.push("/");
        }catch{
            setErrorLogin("Failed to login")
        }
        setLoadingLogin(false)
    }
    return(
        <React.Fragment>
        <div className = "main-div" id='log-reg'>
           <div className='login-box'>
               {errorLogin && alert(errorLogin)}
               <form onSubmit = {handleLogin}>
               <input type='email' ref={emailLogin} placeholder='mail' className='input-group-lineup' required />
               <input type='password' ref={passwordLogin} placeholder='password' className='input-group-lineup' required/>
               
               <div id='log-btn'>
                <button type='submit' disabled={loadingLogin} className='btn-log'>Login</button>
                <NavLink to="/forgotpassword" activeStyle={{fontWeight: "bold", color:"black"}}>Forgot Password</NavLink>
                </div>     
                </form>
              
           </div>
           <div className='register-box'>
               {error && alert(error)}
               <form onSubmit = {handleSignUp}>
               <input type='email' ref={emailRef} placeholder='mail' className='input-group-lineup' required />
               <input type='password' ref={passwordRef} placeholder='password' className='input-group-lineup' required/>
               <input type='password' ref={passwordConfirmRef} placeholder='confirm-password' className='input-group-lineup' required/>
               <input type='text' ref={usernameRef} placeholder='Username' className='input-group-lineup' required />
               <div id='log-btn'>
                <button type='submit' disabled={loading} className='btn-log'>Register</button>
                </div>
                </form>
              
           </div>
        </div>
        </React.Fragment>
    )
}

export default Login;
