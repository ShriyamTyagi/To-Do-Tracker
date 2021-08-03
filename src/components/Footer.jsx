import React from 'react'
import "./Footer.css"
function Footer(){
    const year = new Date();
    const current = year.getFullYear();

    return(
       <footer>
           <p>Copyright ⓒ LineUp {current} </p>
       </footer>
    )
}

export default Footer;