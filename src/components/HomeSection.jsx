import React from 'react'
import "./HomeSection.css"
function HomeSection(){
    return (
        <main>
            <section style={{backgroundImage:"../src/image/HomeSecImg.png"}}>
                <h3>Welcome to LineUp</h3>
                <h1>ARE YOU A <span className="changecontent"></span></h1>
                <p>"Manage all your Task here"</p>
                <div className="btn">
                <button style={{backgroundColor:'#f5ba13'}}>
                    <a href="#log-reg">Log in</a>
                </button>
                <button style={{backgroundColor:'#f5ba13'}}><a href="#log-reg">Register</a></button>
                </div>
            </section>
        </main>
    )
}

export default HomeSection;