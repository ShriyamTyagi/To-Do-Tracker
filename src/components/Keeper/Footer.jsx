import React from "react";

function Footer(){
    const curr_date=new Date();
    const year=curr_date.getFullYear();

    return <footer className = "footer-keeper"><p>Copyright @ LineUp {year}</p></footer>;
}

export default Footer;