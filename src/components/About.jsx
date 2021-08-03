import React from 'react'
import "./About.css";
import Homeheader from "./Homeheader"
import Footer from './Footer'
import "./About.css"
function About(){
    return(
    <div>
    <Homeheader />
        <div id='middle'>
        <div id='content'>
        <p>In order to maintain with the pace of the World, one must be prepared. You have to maintain yourself, with the World.<strong>“LineUp: your todo tracker”</strong>, lets you set your assigned task, and reminds you about it completion. The trend of writing task in a memo or in paper has increased a lot, but were they also remind you of it completion! Lineup, here provides the user this facility as well. </p>
        <p>It fetches up the user data and then reminds the user whether they have finished with their task or not. Hence making it easier for the user to get reminded for their task and helps them to complete those within the time. Also people are very with their professions whether being an employee, teacher, businessman or a student, LineUp provides different user interfaces for different professions, so that one can achieve their task.</p>
        </div>
        <div id="get"><h2>Get In Touch</h2>
    </div>
    <Footer />
    </div>
    </div>
    )
}
export default About;