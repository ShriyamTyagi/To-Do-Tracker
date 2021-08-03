import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import app from "../../firebase"
function Header(){
     const { logout, currentUser } = useAuth();
     const [error, setError] = useState("");
     const history = useHistory();
     const [username, setUsername] = useState();

     useEffect(() => {
        const db = app.firestore();

        db.collection("users").get().then((users) => {
            // eslint-disable-next-line array-callback-return
            users.docs.map((user) => {
                if(user.data().email === currentUser.email){
                    setUsername(user.data().username);
                    console.log(username);
                }
            })
        })
       
     })

     async function handleClick(){
        setError("");

        try{
            await logout();
            history.push("/login");
        }
        catch{
            setError("Failed to logout")
        }
     }

    return <header className="header-keeper">
    <div className="header-keeper-div">
        {error && alert(error)}
        <h1>Welcome to LineUp {username} </h1>
        <button onClick={handleClick} className="header-keeper-btn">Logout</button></div>
    </header>;
}

export default Header;