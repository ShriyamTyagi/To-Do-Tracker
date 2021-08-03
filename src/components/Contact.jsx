import React from 'react'
import "./Contact.css"
import Footer from './Footer'
import Homeheader from "./Homeheader"
function Contact(){
    return (
        <div>
        <Homeheader />
            <div className="contact-user">
                <div id="user-1">
                    <img src="mk.jpg" alt="" className="box-img"></img>
                    <h1>Mayank Shrivastava</h1>
                    <h5>Developer</h5>
                    <p>A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications, or applications that are run over HTTP from a web server to a web browser.</p>
                    <ul>
                        <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                
                <div id="user-2">
                    <img src="" alt="" className="box-img"></img>
                    <h1>Shriyam Tyagi</h1>
                    <h5>Developer</h5>
                    <p>A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications, or applications that are run over HTTP from a web server to a web browser.</p>
                    <ul>
                        <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;