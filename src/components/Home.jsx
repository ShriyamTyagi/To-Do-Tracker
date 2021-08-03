import React from "react"
import HomeSection from "./HomeSection";
import Navbar from './Navbar' 
import Login from "./Login"


function Home(){
    return(
        <div>
            <Navbar />
            <HomeSection/>
            <Login />
        </div>
    )
}

export default Home;