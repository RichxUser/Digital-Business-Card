import React from "react"
import logo from '../images/fabio.jpg';
export default function Header(){
    return(
        <div className="header">
        <img src={logo} alt="" className="img"/>
        </div>
    )
}